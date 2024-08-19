import './App.css';
import {useState} from 'react' 
import NewNotesPage from '../NewNotesPage/NewNotesPage'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'

import { Routes, Route } from "react-router-dom"
import { getUser } from '../../utilities/users-service';
import NotesListPage from '../NotesListPage/NotesListPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
  <main className="App">
    { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/notes/new" element={<NewNotesPage />} />
          <Route path="/notes" element={<NotesListPage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    
    }
  </main>
);
}
