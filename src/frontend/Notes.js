import React, { useContext, useState } from 'react';
import NoteItem from '../components/NoteItems';
import noteContext from '../Context/notes/noteContext';
const Notes = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    // const { notes, addNote } = context;
    const [notesData, setNotesData] = useState([
        { id: 1, title: 'Note 1', description: 'This is the description for Note 1, this is note 1 this is note 1.' },
        { id: 2, title: 'Note 2', description: 'This is the description for Note 2.' },
        // Add more notes as needed
    ]);

    const [notes, setNotes] = useState({ id: null, title: "", description: "", tag: "general" });

    function handleChange(e) {
        const { name, value } = e.target;
        setNotes({ ...notes, [name]: value });
    }

    function handleAddNote(e) {
        e.preventDefault();
        const newNote = {
            id: notesData.length + 1, // Assuming unique ids
            title: notes.title,
            description: notes.description,
        };
        addNote(notes.title, notes.description, notes.tag);
        setNotesData([...notesData, newNote]);
        setNotes({ id: null, title: "", description: "" });


    }

    return (
        <div>
            <div className="container1 mt-3 mx-6">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card text-white bg-primary">
                            <div className="card-header" >
                                <h2 className="text-center">Take a Note</h2>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <button type="button" className="btn  mb-3" style={{ backgroundColor: '#87CEEB', color: '#000000' }} onClick={handleAddNote}>Add a Note</button>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="noteTitle"
                                        placeholder="Enter note title..."
                                        value={notes.title}
                                        name='title'
                                        onChange={handleChange}
                                    />
                                </div>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Write your note here..."
                                    name='description'
                                    value={notes.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-5 mb-4" />
            <div className="container2">
                <h2 className="text-center mb-4 text-primary">Your Notes</h2>

                <div className="tiles">
                    {notesData.map((note) => (
                        <NoteItem key={note.id} id={note.id} title={note.title} description={note.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
