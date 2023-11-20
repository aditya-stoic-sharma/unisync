import React from 'react'

export default function TimeTile(props) {
    let { time, classTitle, classVenue, classDescription, teacher } = props;
    return (
        <div className='mx-2'>
            <div className="card text-white bg-info mb-3" style={{ minWidth: '16rem', minHeight: '14rem', maxWidth: '16rem' }}>
                <div className="card-header text-center text-dark">{time}</div>
                <div className="card-body">
                    <h5 className="card-title text-center text-dark">{classTitle}</h5>
                    <p className="card-text ">
                        <div>{classVenue}</div>
                        <div>Incharge: {teacher}</div>
                        <div>{classDescription}</div>
                    </p>
                </div>
            </div>
        </div>
    )
}
