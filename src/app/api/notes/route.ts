import { NextResponse } from "next/server";
import { getNotes, createNote } from "@/app/entities/api/notes.api";

export async function GET() {
    const notes = await getNotes();
    return NextResponse.json(notes);
}

export async function POST(request: Request) {
    const { title, body } = await request.json();
    const newNote = await createNote({ title, body });
    return NextResponse.json(newNote);
}
