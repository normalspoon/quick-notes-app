import { useState } from 'react';

 
export default function Note() {
    const [note, setNote] = useState('');
    return (
        <div>
        {note}
        </div>
    )
}