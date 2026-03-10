'use client';

export const addItem = async (note: { title: string; body: string }) => {
    const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });

    return response.json();
};