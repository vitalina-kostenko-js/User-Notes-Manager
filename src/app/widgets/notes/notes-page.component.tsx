"use client";

import { useState } from "react";
import { addItem, AddNotes } from "@/app/widgets/notes";
import { NoteCard } from "./elements";
import { NotesInterface } from "@/app/shared/interfaces";

type Note = NotesInterface

export const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddNote = async ({ title, body }: { title: string; body: string }) => {
        setIsAdding(true);
        try {
            const created = await addItem({ title, body });
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
      }

    return (
        <div className="p-4 space-y-4">
            <AddNotes addItem={handleAddNote} />

            <div className="grid gap-3">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>

            {notes.length === 0 && !isAdding && (
                <p className="text-gray-400">No notes yet. Add one above!</p>
            )}
        </div>
    );
}