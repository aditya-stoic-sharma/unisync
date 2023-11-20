import { useState } from "react";
import NoteContext from "./noteContext";
const hostname = "http://localhost:5000"

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const response = await fetch(`${hostname}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

        });
        const json = await response.json()
        setNotes(json);
    }



    // Function to add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${hostname}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        const note = {
            "_id": "64cd66b674q1231q2e4187e5d86d8d",
            "user": "64c2e4ca340123877734cc3e172",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-08-04T20:59:34.149Z",
            "__v": 0
        };
        setNotes(notes.concat(note));

    }
    // Function to delete a note 

    const deleteNote = async (id) => {
        const newNote = notes.filter((element) => {
            return (element._id !== id)
        })
        setNotes(newNote);
        const response = await fetch(`${hostname}/api/notes/deleteNote/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({}),
        });
        const json = await response.json();
        console.log(json)

    }
    // Function to edit a note 
    const editNote = async (id, title, description, tag) => {

        // API call

        const response = await fetch(`${hostname}/api/notes/updateNotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });
        console.log(response);

        const data = await response.json();
        const updatedNote = data.note;  // Extract the actual note object from the returned data


        const updatedNotes = notes.map(note => {
            if (note._id === updatedNote._id) {
                return updatedNote;  // Replace the note when the id matches
            }
            return note;  // Otherwise return the original note
        });

        setNotes(updatedNotes);


    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

