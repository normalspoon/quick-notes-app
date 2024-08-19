import { checkToken } from "../../utilities/users-service";
import Note from '../../components/Note/Note';
import { useState, useEffect } from 'react';
import { getNotes } from '../../utilities/notes-api';

export default function NotesListPage() {
    const [notes, setNotes] = useState([]);


    async function fetchNotes() {
        try {
            const data = await getNotes();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1>Notes List</h1>
            <table>
            <thead>
                <tr>
                    <th>Created At</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {notes.length > 0 ? notes.map(note => (
                    <tr key={note._id}>
                        <td>{new Date(note.createdAt).toLocaleString()}</td>
                        <td>{note.text}</td>
                    </tr>
                )) : <p>No Notes Yet!</p>}
            </tbody>
        </table>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}