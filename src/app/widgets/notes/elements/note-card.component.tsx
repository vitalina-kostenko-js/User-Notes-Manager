import type { NotesInterface } from "@/app/shared/interfaces"

interface NoteCardProps {
  note: NotesInterface;
  onDelete?: () => void;
  onEdit?: () => void;
}
export const NoteCard = ({ note, onDelete, onEdit }: NoteCardProps) => (
  <div className="p-3 border rounded shadow-sm bg-white">
    <h3 className="font-bold mb-1">{note.title}</h3>
    <p className="text-sm text-gray-600">{note.body}</p>
    <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
    <button onClick={onEdit} className="bg-blue-500 text-white p-2 rounded-md">Edit</button>
  </div>
);