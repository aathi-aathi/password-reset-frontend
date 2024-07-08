import React, { useState } from 'react';
import { forgotPassword } from './apis';
import { useNavigate } from 'react-router-dom';

const GmailVerification = () => {
  const [email, setEmail] = useState('');
  const [valid,setValid] = useState('')
  const [invalid,setInvalid] = useState('')
  const[loading,setLoading]=useState(false)
  const handleChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const handleSubmit = async(e)=>{
   e.preventDefault();
     setLoading(true)
  const data = await forgotPassword({email})

  if(data.code==1){
    setLoading(false)
    setInvalid('')
   setValid(' Email sent succussfully!')
  }
  else if(data.code==0){
    setLoading(false)
    setInvalid("You aren't the user!")
  }

  }
  if(loading){
    return <div className="spinner-border text-primary" role="status" style={{position:'fixed',top:"50%",left:"50%"}}>
    <span className="sr-only">Loading...</span>
  </div>
}
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
         
            <div className="card-header">Gmail ID Verification</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className={`form-control  mb-2`}
                    id="email"
                    value={email}
                    required
                    onChange={handleChange}
                    placeholder="Enter Gmail address"
                  />
                  {invalid && (
                    <div className="alert alert-danger">
                      {invalid}
                    </div>
                  )}
                  {valid && (
                    <div className="alert alert-success">
                     {valid}
                    </div>
                  )}
                  <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmailVerification;
