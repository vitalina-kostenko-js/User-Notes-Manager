import {NotesInterface} from "@/app/shared/interfaces";
import {NextResponse} from "next/server";

export async function GET(req: Request, res: Response) {
    let notes: NotesInterface[] = []

    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
    const response = await fetch(url)
    const data = await res.json()
    notes = data.notes || []

    return NextResponse.json(notes)
}