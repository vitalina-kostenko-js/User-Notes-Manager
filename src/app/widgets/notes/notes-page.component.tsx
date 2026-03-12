"use client";

import { useState } from "react";
import { addItem, AddNotes, deleteItem } from "@/app/widgets/notes";
import { NoteCard } from "./elements";
import { NotesInterface } from "@/app/shared/interfaces";
import { updateNote } from "../../entities/models";

type Note = NotesInterface;

export const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleAddNote = async ({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) => {
    setIsAdding(true);
    try {
      const created = await addItem({ title, body });
      console.log(created);
      const newNote: Note = {
        userId: "",
        id: created.id,
        title: created.title,
        body: created.body,
      };
      setNotes((prev) => [...prev, newNote]);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await deleteItem(id);
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEditNote = async (title: string, body: string) => {
    if (!currentNote) {
      console.error("No note selected for editing");
      return;
    }

    try {
      await updateNote({
        id: currentNote.id,
        userId: currentNote.userId ?? "",
        title,
        body,
      });
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  const startEditNote = (note: Note) => {
    setCurrentNote(note);
    setEditTitle(note.title);
    setEditBody(note.body);
    setEditingId(note.id);
  };

  const handleSaveEdit = async (id: number) => {
    try {
      const updated = await updateNote({
        id,
        userId: currentNote?.userId ?? "",
        title: editTitle,
        body: editBody,
      });

      setNotes((prev) => prev.map((note) => (note.id === id ? updated : note)));
      setEditingId(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  }

  return (
    <div className="p-4 space-y-4">
      <AddNotes addItem={handleAddNote} />

      <div className="flex flex-wrap gap-3">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isEditing={editingId === note.id}
            editTitle={editTitle}
            editBody={editBody}
            onChangeTitle={setEditTitle}
            onChangeBody={setEditBody}
            onSave={() => handleSaveEdit(note.id)}
            onCancel={() => setEditingId(null)}
            onDelete={() => handleDeleteNote(note.id)}
            onEdit={() => startEditNote(note)}
          />
        ))}
      </div>

      {/* <NotesList notes={notes} onDelete={handleDeleteNote} /> */}
      {notes.length === 0 && !isAdding && (
        <p className="text-gray-400">No notes yet. Add one above!</p>
      )}
    </div>
  );
};
