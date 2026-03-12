import type { NotesInterface } from "@/app/shared/interfaces";

interface NoteCardProps {
  note: NotesInterface;
  isEditing: boolean;
  editTitle: string;
  editBody: string;
  onChangeTitle: (value: string) => void;
  onChangeBody: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export const NoteCard = ({
  note,
  isEditing,
  editTitle,
  editBody,
  onChangeTitle,
  onChangeBody,
  onSave,
  onCancel,
  onDelete,
  onEdit,
}: NoteCardProps) => (
  <div className="w-64 h-full p-3 border rounded shadow-sm bg-white">
    {isEditing ? (
      <>
        <input
          value={editTitle}
          onChange={(e) => onChangeTitle(e.target.value)}
        />
        <textarea
          value={editBody}
          onChange={(e) => onChangeBody(e.target.value)}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </>
    ) : (
      <>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-1">{note.title}</h3>
          <p className="text-sm text-gray-600">{note.body}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </>
    )}
  </div>
);
