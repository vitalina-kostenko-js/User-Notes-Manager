import { NotesInterface } from "@/app/shared/interfaces";
import { NextResponse } from "next/server";

export async function GET() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
    const response = await fetch(url);
    const data: NotesInterface[] = await response.json();
    return NextResponse.json(data);
}
