import {useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetpassword } from "./apis.js";
const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [error, setError] = useState('');
  const [success,setSucces]= useState('')
  const [complete,setComplete]= useState(false)
  const[loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReenterPasswordChange = (e) => {
    setReenterPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== reenterPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
   const email = searchParams.get('email')
   setLoading(true)
    const data = await resetpassword({email,password})  
    if(data.code==1){
      setLoading(false)
       setSucces('reset successfully!')
       setComplete(true)
    }
  };
}
if(loading){
  return <div className="spinner-border text-primary" role="status" style={{position:'fixed',top:"50%",left:"50%"}}>
  <span className="sr-only">Loading...</span>
</div>
}
if(complete){
  return <div style={{display:'flex',alignItems:'center',justifyContent:'center' ,height:'100vh'}}>
  <img src="https://cdn-icons-png.flaticon.com/128/992/992481.png" style={{height:'40px',marginRight:'2px'}}/>
  <h1>Password reset successfully </h1>
  </div>
}

  return (
    <>
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">Reset Password</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="reenterPassword">Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="reenterPassword"
                    value={reenterPassword}
                    onChange={handleReenterPasswordChange}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <button type="submit" className="btn btn-primary">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ResetPassword;