// Modal.js
import React from 'react';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, addNewComplaint }) => {

    const [formData, setFormData] = useState({
        tag: 'Suggestion',
        title: '',
        description: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleTypeChange = (newTag) => {
        setFormData((prevData) => ({
            ...prevData,
            tag: newTag,
        }));
    };

    const handleFormSubmit = () => {
        let { tag, title, description } = formData;
        console.log(tag + title + description);
        setFormData({
            tag: 'Suggestion',
            title: '',
            description: '',
        });

        addNewComplaint(tag, title, description);
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/* Your modal content */}
                    <div className="modal-header  d-flex justify-content-center align-items-center">
                        <h5 className="modal-title">New Complaint or Suggestion</h5>
                    </div>
                    <div className="modal-body">
                        <form>

                            <div className="Radio-btns d-flex justify-content-center mb-3">
                                <input type="radio" class="btn-check" name="tag" id="success-outlined" autocomplete="off" checked onChange={() => handleTypeChange('Suggestion')} />
                                <label class="btn btn-outline-success mx-3" for="success-outlined">Suggestion</label>

                                <input type="radio" class="btn-check" name="tag" id="danger-outlined" autocomplete="off" onChange={() => handleTypeChange('Complaint')} />
                                <label class="btn btn-outline-danger" for="danger-outlined"
                                >Complaint</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input type="text" className="form-control" id="title"
                                    name='title' value={formData.title} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description:</label>
                                <textarea className="form-control" id="description" rows="4" name="description" value={formData.description}
                                    onChange={handleChange}></textarea>
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Modal;

