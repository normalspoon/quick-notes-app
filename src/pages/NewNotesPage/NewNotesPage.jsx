import './NewNotesPage.css';
import { useState } from 'react';
import { createNote } from '../../utilities/notes-api';
import { useNavigate } from 'react-router-dom';

export default function NewNotesPage() {
    const [note, setNote] = useState('');
    const navigate = useNavigate()

    
    const handleEvent = async (evt)=> {
        evt.preventDefault();
        try {
            console.log("saved note", note)
        const data = await createNote({text: note})     
        console.log('Note saved:', data);
        navigate('/notes')
    } catch (error) {
        console.error('Error saving note:', error);
    
    }
};

    
    return (
        <div>
            <h1>Write a new note</h1>
            <textarea 
                type="text" 
                placeholder="Write your notes here"
                value={note}
                onChange={(e)=> setNote(e.target.value)} />
    
            <button onClick = {handleEvent}>Save</button>
            
        </div>
    )
}
