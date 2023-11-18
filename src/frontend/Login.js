import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate = useNavigate();
    function handleRegister() {
        navigate("/register");
    }

    function handleLogin() {
        navigate("/home");
    }
    return (
        <>

            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">

                            <div className="px-5 ms-xl-4">
                                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                                <span className="h1 fw-bold mb-0">Shri mata vishno devi University</span>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 justify-content-center">

                                <form style={{ width: '23rem' }}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example28">Password</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-success btn-lg btn-block" onClick={handleLogin} type="button">Login</button>
                                    </div>


                                    <p onClick={handleRegister}>Don't have an account? <span className='text-primary'>Register here</span></p>
                                </form>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="/resources/smvduLogo.png"
                                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'contain', objectPosition: 'center', width: '90%' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
// https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png
