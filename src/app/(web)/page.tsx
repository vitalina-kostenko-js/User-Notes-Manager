import {NotesList, NotesPage} from "@/app/widgets/notes";

export default function Home() {
    return (
        <div>
            <main>
                <NotesList/>
                <NotesPage/>
            </main>
        </div>
    );
}   
