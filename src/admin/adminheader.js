import { Link } from "react-router-dom"

const AdminHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg ">
      <div className="container justify-content-end">
        {/* <div className="text-start">E-commerce</div> */}
        <ul className="navbar ">
          <li className="m-1 p-2 d-inline"><Link className="text-decoration-none" to="/">Dashboard</Link></li>
          <li className="m-1 p-2 d-inline"><Link className=" text-decoration-none" to="/newproduct">New Product</Link></li>
          <li className="m-1 p-2 d-inline"><Link className=" text-decoration-none" to="/product">Product List</Link></li>
          <li className="m-1 p-2 d-inline"><Link className=" text-decoration-none" to="/order">Order List</Link></li>
          <li className="d-inline">
            <button className="btn btn-secondary btn-sm ml-5" onClick={logout}>Welcome - {localStorage.getItem("fullname")} - Logout</button>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default AdminHeader;

const logout = () => {
  localStorage.clear();
  window.location.href = "http://localhost:3000/#/login";
  // window.location.href = "http://localhost:5500/index.html/#/login";
  window.location.reload();
}