import React from 'react'
import ComplaintTile from '../components/ComplaintTile'
import { useState, useContext } from 'react';
import Modal from '../components/addPopUp';
export default function Complaint() {
    const [arr, setArr] = useState([{ tag: "suggestion", title: "acadamics", description: "extension of last date of submission of assignment" },
    { tag: "suggestion", title: "acadamics", description: "extension of last date of submission of assignment" }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const addNewComplaint = (tag, title, description) => {
        const newComplaint = { tag, title, description };
        setArr(prevArr => [...prevArr, newComplaint]);
        console.log("complaint added");
        handleCloseModal();
    };

    return (
        <>
            <div className="outer_container flex">

                <div className="container d-flex flex-wrap justify-content-left">
                    {arr.map((complaint, index) => (
                        <ComplaintTile key={index} message={complaint.description} tag1={complaint.tag} title={complaint.title} />
                    ))}
                </div>
                <button type="button" className="btn btn-info btn-lg btn-block position-fixed bottom-0 end-0 m-4 " onClick={handleOpenModal} >Add complaint or Suggestion</button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} addNewComplaint={addNewComplaint} />
            </div>

        </>
    )
}
