"use client";

import { useGetNotes } from "@/app/shared/hooks";
import { NotesInterface } from "@/app/shared/interfaces";

export const NotesList = () => {
    const { data, isLoading, error } = useGetNotes();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    const notes: NotesInterface[] = Array.isArray(data) ? data : [];

    return (
        <ul>
            {notes.map((note: NotesInterface) => (
                <li key={note.id}>{note.title}</li>
            ))}
        </ul>
    );
};