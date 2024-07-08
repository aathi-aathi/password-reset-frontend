import React, { useState } from 'react';
import { checkOtp } from './apis';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OtpInput = () => {
  const [otp, setOtp] = useState();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleChange = (value) => {
        setOtp(value);
};

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(otp);
    getOtp()
  };
 const getOtp = async()=>{
  try {
    const email = searchParams.get("email");
     const data = await checkOtp({email,otp})
     if(data.code==1){
       navigate(`/reset-password?email=${data.email}`)
     }
     else{
        setError('Incorrect OTP')
     }
  } catch (error) {
    console.log(error)
  }
   
 }
  return (
    <form onSubmit={handleSubmit} className="otp-input-form" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' ,height:'100vh'}}>
      <div className="form-group">
        <input
            type='number'
            className="form-control otp-input mb-3"
            value= {otp}
            onChange={(e) => handleChange(e.target.value)}
          />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary">Submit OTP</button>
    </form>
  );
};

export default OtpInput;
