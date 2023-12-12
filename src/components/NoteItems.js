import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import noteContext from '../Context/notes/noteContext';

const NoteItem = ({ id, title, description }) => {
    const Context = useContext(noteContext)
    const { deleteNote } = Context;

    return (
        <div className="col mx-auto w-75 ">
            <div className="card text-white bg-primary mb-3">
                <div className="card-header d-flex justify-content-between">
                    <h5 className="mb-0">{title}</h5>
                    <div className='delete-button' onClick={() => {
                        deleteNote(id);
                        // props.showAlert("successfully deleted the note", "success");
                    }}><FontAwesomeIcon icon={faTrashAlt} className="upvote-icon" /></div>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;
