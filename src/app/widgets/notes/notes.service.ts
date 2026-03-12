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

export const deleteItem = async (id: number) => {
    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Delete failed: ${response.status} ${message}`);
    }
    
    return response.json();
  };