"use client";

import { useState } from "react";
import { addItem, AddNotes } from "@/app/widgets/notes";

type Note = {
    id: number;
    title: string;
    body: string;
};

export const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddNote = async ({ title, body }: { title: string; body: string }) => {
        setIsAdding(true);
        try {
            const created = await addItem({ title, body });
            const newNote: Note = {
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

            <div className="grid gap-2">
                {notes.map((note) => (
                    <div key={note.id} className="p-3 border rounded shadow-sm">
                        <h3 className="font-bold">{note.title}</h3>
                        <p className="text-sm text-gray-600">{note.body}</p>
                    </div>
                ))}
            </div>

            {notes.length === 0 && !isAdding && (
                <p className="text-gray-400">No notes yet. Add one above!</p>
            )}
        </div>
    );
}