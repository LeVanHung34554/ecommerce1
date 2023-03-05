import React from 'react'
import { Link } from 'react-router-dom'
const Forgotpassword = () => {
  return (
   <>
     <div className="login-wrapper  py-5 home-wrapper-2">
      <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Your Password</h3>
                        <p className="text-center my-2 mb-3">
                          We will send you  an email to reset  your password
                        </p>
                            <form action="" className="d-flex flex-column gap-15" >
                                <div className="">
                                    <input type="email" name='email' placeholder='email' className='form-control'/>
                                </div>
                                <div>
                                    <div className='mt-3 d-flex jusitfy-content-center flex-column gap-15 align-items-center'>
                                        <button className='botton border-0 ' type='submit'>
                                        Submit
                                        </button>
                                    <Link to='/login'>Cancel</Link>
                                         
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
   </> 

  )
}

export default Forgotpassword
