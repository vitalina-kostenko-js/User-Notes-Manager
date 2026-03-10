import {NotesList, NotesPage} from "@/app/widgets/notes";

export default function Home() {
    return (
        <div>
            <main className="p-2 space-y-4">
                <NotesPage/>
                <NotesList/>
            </main>
        </div>
    );
}   
