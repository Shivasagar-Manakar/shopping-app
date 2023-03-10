import { useState } from "react"


const MyLogin = () => {

  let [myemail, pickEmail] = useState("");
  let [mypass, pickPassword] = useState("");
  let [msg, updateMsg] = useState("");

  const go = () => {
    if (myemail == "" || mypass == "") {
      updateMsg("Please Enter Login Details")
    } else {
      updateMsg("Please Wait...")
      let url = "http://localhost:1234/account?email=" + myemail + "&password=" + mypass;
      fetch(url)
        .then(response => response.json())
        .then(userInfo => {
          if (userInfo.length > 0) {
            updateMsg("Please Wait Re-directing...")
            localStorage.setItem("fullname", userInfo[0].name)
            localStorage.setItem("id", userInfo[0].id)
            window.location.href = "http://localhost:3000/#/dashboard";
            // window.location.href = "http://localhost:5500/index.html/#/dashboard";
            window.location.reload();
          } else {
            updateMsg("Invalid Email or Password");
          }
        })
    }

  }
  return (
    <div className="container mt-4">

      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p className="text-center text-danger">{msg}</p>
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-primary text-white">Vendor Login</div>
            <div className="card-body">
              <div className="mb-3">
                <label>E-mail Id</label>
                <input type="email" className="form-control" onChange={obj => pickEmail(obj.target.value)} />
              </div>
              <div className="bg-4">
                <label>Password</label>
                <input type="password" className="form-control" onChange={obj => pickPassword(obj.target.value)} />
              </div>
            </div>
            <div className="card-footer text-center">
              <button onClick={go} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}

export default MyLogin;