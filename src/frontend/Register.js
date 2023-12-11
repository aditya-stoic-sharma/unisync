import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
    let navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleRegisterClick = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/login");
        }
        else {
            alert("Invalid credentials")
        }
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={credentials.name} name="name" onChange={onChange} />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" value={credentials.email} name="email" onChange={onChange} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4c">Mobile</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" value={credentials.password} name="password" onChange={onChange} />
                                                        <label className="form-label" htmlFor="form3Example4cd">Password</label>
                                                    </div>
                                                </div>

                                                {/* Choose Courses */}
                                                <div className="mb-3">
                                                    <label htmlFor="courses" className="form-label">Choose Courses</label>
                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="courses" className="form-label">Choose Club</label>
                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>
                                                    <select className="form-select my-2" id="courses" name="courses">
                                                        <option value="course1">Course 1</option>
                                                        <option value="course2">Course 2</option>
                                                        <option value="course3">Course 3</option>
                                                        <option value="course4">Course 4</option>
                                                        <option value="course5">Course 5</option>
                                                        <option value="course6">Course 6</option>
                                                    </select>

                                                </div>

                                                {/* Terms of service checkbox and Register button remain unchanged */}
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" htmlFor="form2Example3c">
                                                        I agree to all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleRegisterClick}>Register</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample no rendered"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
