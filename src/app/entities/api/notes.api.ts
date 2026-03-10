import type { NotesInterface } from "../../shared/interfaces";
import { findNotes, createNote } from "../models";

export const getNotes = findNotes;

export const createNoteApi = (note: {
  title: string;
  body: string;
}): Promise<NotesInterface> => {
  return createNote(note);
};