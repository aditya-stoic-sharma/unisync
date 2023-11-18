import React from 'react';

export default function ComplaintTile({ message, tag1, title }) {
    return (
        <div>
            <div className={`card text-white bg-${tag1 == "Complaint" ? 'danger' : 'success'} mb-3 mx-2`} style={{ maxWidth: '18rem' }}>
                <div className="card-header">{tag1}</div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div >
    );
}

