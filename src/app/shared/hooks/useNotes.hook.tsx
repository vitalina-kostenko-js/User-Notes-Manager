"use client";

import { useQuery } from "@tanstack/react-query";
import {NotesInterface} from "@/app/shared/interfaces";

interface useGetNotesProps {
  data: NotesInterface[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useNotes = (): useGetNotesProps => {
  const getNotes = async () => {
    const response = await fetch("/api/notes");
    return response.json() as Promise<NotesInterface[]>;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getNotes(),
  });

  return { data, isLoading, error };
};
