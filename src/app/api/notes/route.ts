import { NextResponse } from "next/server";
import { getNotes, createNoteApi } from "@/app/entities/api";

export async function GET() {
  const notes = await getNotes();
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const { title, body } = await request.json();
  const newNote = await createNoteApi({ title, body });
  return NextResponse.json(newNote);
}
