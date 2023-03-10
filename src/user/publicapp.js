import { HashRouter, Routes, Route } from "react-router-dom";
import PublicHeader from "./publicheader";
import MyLogin from "./login";
import MyWish from "./wishlist";
import MyHome from "./home";
import MyCart from "./cart";

const PublicApp = () => {
  return (
    <HashRouter>
      <PublicHeader />
      <Routes>
        <Route exact path="/" element={<MyHome />}></Route>
        <Route exact path="/cart" element={<MyCart />}></Route>
        <Route exact path="/login" element={<MyLogin />}></Route>
        <Route exact path="/wishlist" element={<MyWish />}></Route>
      </Routes>
    </HashRouter>
  )
}
export default PublicApp;