import { Link } from "react-router-dom"

const PublicHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div className="container justify-content-end">
          <div>E-commerce</div>
        <ul className="navbar">
          <li className="m-1 p-2 d-inline"><Link className="text-decoration-none" to="/">Shopping</Link></li>
          <li className="m-1 p-2 d-inline"><Link className="text-decoration-none" to="/cart">My Cart</Link></li>
          <li className="m-1 p-2 d-inline"><Link className="text-decoration-none" to="/login">Login</Link></li>
          <li className="m-1 p-2 d-inline"><Link className="text-decoration-none" to="/wishlist">My Whislist</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default PublicHeader;