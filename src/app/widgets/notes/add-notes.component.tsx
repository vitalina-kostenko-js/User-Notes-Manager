"use client";
import { useForm } from "react-hook-form";
interface Inputs {
  title: string;
  body: string;
}

interface AddNotesProps {
  addItem: (note: { title: string; body: string }) => Promise<void>;
}
export const AddNotes = ({ addItem }: AddNotesProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await addItem({ title: data.title, body: data.body });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-56 flex flex-col gap-2">
      <input
        {...register("title", { required: true })}
        className="border-2 border-gray-300 rounded-md p-2"
        placeholder="Title"
      />
      <input
        {...register("body", { required: true })}
        className="border-2 border-gray-300 rounded-md p-2"
        placeholder="Description"
      />
      {errors.title && <span className="text-red-500">Title is required</span>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Add Note
      </button>
    </form>
  );
};
