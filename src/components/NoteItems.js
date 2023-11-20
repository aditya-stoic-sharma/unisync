import React from 'react';

const NoteItem = ({ title, description }) => {
    return (
        <div className="col mx-auto w-75 ">
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">
                    <h5 className="mb-0">{title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;
