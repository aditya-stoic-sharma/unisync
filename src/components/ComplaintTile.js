import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function ComplaintTile({ message, tag1, title }) {
    let [num, setNum] = useState(25);
    function handleClick() {
        setNum(num++);
    }

    return (
        <div>
            <div className={`card text-white bg-${tag1 == "Complaint" ? 'danger' : 'success'} mb-3 mx-2`} style={{ maxWidth: '18rem' }}>
                <div className="card-header">
                    <div className='d-flex justify-content-between'>
                        <span>{tag1}</span>
                        <div>
                            <button className="btn btn-success ml-2" onClick={handleClick} style={{ border: 'none', background: 'transparent' }}>
                                <FontAwesomeIcon icon={faThumbsUp} className="upvote-icon" />
                            </button>
                            <span className='number'>{num}</span>
                        </div>

                    </div>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div>
    );
}

