import type { NotesInterface } from "../../shared/interfaces";
import { supabase } from "../api/supabase.api";

export const findNotes = async (): Promise<NotesInterface[]> => {
  const { error, data } = await supabase.from("notes").select("*");

  if (error) {
    throw error;
  }

  return (data as NotesInterface[]) ?? [];
};

export const deleteNote = async (id: number): Promise<void> => {
  const { error } = await supabase.from("notes").delete().eq("id", Number(id));

  if (error) {
    throw error;
  }
};

export const updateNote = async ({
  id,
  title,
  body,
}: NotesInterface): Promise<NotesInterface> => {
  const { data, error } = await supabase
    .from("notes")
    .update({ title, body })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as NotesInterface;
};

export const createNote = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}): Promise<NotesInterface> => {
  const { data, error } = await supabase
    .from("notes")
    .insert({ title, body })
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as NotesInterface;
};