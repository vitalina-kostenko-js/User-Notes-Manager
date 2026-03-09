"use client";

import {useQuery} from "@tanstack/react-query"
import { NotesInterface } from "../interfaces/notes.interface"

interface useGetNotesProps {
    data: NotesInterface | null,
    isLoading: boolean,
    error: Error | null,
}

export const useGetNotes = (): useGetNotesProps => {

    const getNotes = async () => {
        const response = await fetch('/api/notes')
        return response.json()
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ['notes'],
        queryFn: () => getNotes(),
    })

    return {data, isLoading, error}
}