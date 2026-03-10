"use client";

import { NotesInterface } from "@/app/shared/interfaces";
import { useNotes } from "../../shared/hooks";

export const NotesList = () => {
    const { data, isLoading, error } = useNotes();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    const notes: NotesInterface[] = Array.isArray(data) ? data : [];

    return (
        <ul className="space-y-3">
            {notes.map((note: NotesInterface) => (
                <li
                    key={note.id}
                    className="border rounded shadow-sm p-3 bg-white"
                >
                    <h3 className="font-bold mb-1">{note.title}</h3>
                    <p className="text-sm text-gray-600">{note.body}</p>
                </li>
            ))}
        </ul>
    );
};