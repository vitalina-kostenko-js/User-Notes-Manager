import { NotesInterface } from "@/app/shared/interfaces";

export async function getNotes(): Promise<NotesInterface[]> {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
    const response = await fetch(url);
    const data: NotesInterface[] = await response.json();
    return data;
}

export async function createNote(note: {
    title: string;
    body: string;
}): Promise<NotesInterface> {
    // In real app, here would be DB call.
    // For now, just echo back with a generated id and empty userId.
    return {
        userId: "",
        id: Date.now(),
        title: note.title,
        body: note.body,
    };
}