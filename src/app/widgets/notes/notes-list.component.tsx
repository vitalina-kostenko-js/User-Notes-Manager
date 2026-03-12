"use client";

import { NotesInterface } from "@/app/shared/interfaces";
import { useNotes } from "../../shared/hooks";
import { NoteCard } from "./elements/note-card.component";

export const NotesList = ({onDelete,}: {
    onDelete?: (id: number) => void
}) => {
    const { data, isLoading, error } = useNotes();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    const notes: NotesInterface[] = Array.isArray(data) ? data : [];

    return (
        <ul className="p-4 space-y-4">
            {notes.map((note: NotesInterface) => (
                <NoteCard key={note.id} note={note} onDelete={onDelete ? () => onDelete(note.id) : undefined}/>
            ))}
        </ul>
    );
};