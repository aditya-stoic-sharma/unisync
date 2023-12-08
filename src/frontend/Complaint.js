import React from 'react'
import ComplaintTile from '../components/ComplaintTile'
import { useState, useContext } from 'react';
import Modal from '../components/addPopUp';
export default function Complaint() {
    const [arr, setArr] = useState([
        {
            tag: "Suggestion",
            title: "Eco-Friendly Initiatives",
            description: "Suggesting the implementation of eco-friendly practices on campus, such as recycling programs and energy-saving measures."
        },
        {
            tag: "Complaint",
            title: "Parking Space Shortage",
            description: "Expressing frustration over the limited availability of parking spaces for students, causing delays and inconvenience."
        },
        {
            tag: "Complaint",
            title: "Noise in Library",
            description: "issues with noise levels in the library, affecting the study environment and concentration of students."
        },
        {
            tag: "Suggestion",
            title: "Mental Health Support",
            description: "Recommending the establishment of additional mental support services for students facing academic and personal stress."
        },
        {
            tag: "Complaint",
            title: "Inadequate Cafeteria",
            description: "Complaining about the lack of diverse and healthy food options, impacting the overall well-being of students."
        },
        {
            tag: "Suggestion",
            title: "Career Guidance Programs",
            description: "Proposing the implementation of programs to provide students with better career guidance and preparation for post-graduation."
        },
        {
            tag: "Suggestion",
            title: "Enhanced Campus Security",
            description: "Recommending improvements in campus security measures to ensure the safety and well-being of students."
        },
        {
            tag: "Complaint",
            title: "Equipment Malfunction",
            description: "Reporting issues with malfunctioning projectors, or other equipment in classrooms hindering the learning experience."
        }
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
