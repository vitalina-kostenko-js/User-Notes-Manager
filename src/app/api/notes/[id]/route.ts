import { NextResponse } from "next/server";
import { deleteNote } from "../../../entities/models";

export async function DELETE(
    _request: Request,
    context: { params: Promise<{ id: string }> }
  ) {
    const { id } = await context.params;
    await deleteNote(Number(id));
    return NextResponse.json({ success: true });
  }