import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyHome = () => {
  let [product, updateProduct] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:1234/product")
      .then(response => response.json())
      .then(productArray => {
        updateProduct(productArray.reverse())
      })
  }

  useEffect(() => {
    getProduct();
  }, [1])

  const saveCart = (productinfo) => {
    productinfo["qty"] = 1;
    let postoption = {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(productinfo)
    }
    let url = "http://localhost:1234/cart";
    fetch(url, postoption)
      .then(response => response.json())
      .then(serverRes => {
        toast(productinfo.name + " Added to your cart!");
      })
  }

  const wishlist = (productinfo) => {
    let postoption = {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(productinfo)
    }
    let url = " http://localhost:1234/wishlist";
    fetch(url, postoption)
      .then(response => response.json())
      .then(serverRes => {
        toast(productinfo.name + " Added to Wishlist!");
      })
  }
  return (
    <>
      <section className="container mt-4" id="mybanner">
      </section>
      <ToastContainer />
      <div className="container mt-3">
        <div className="row">
          {
            product.map((pinfo, index) => {
              return (
                <div key={index} className="col-lg-3 mb-4">
                  <div className="text-center rounded shadow-lg">
                    <h4 className="text-primary text-center">{pinfo.name}</h4>
                    <img src={pinfo.photo} height="140" width="140" />
                    <p className="text-center">
                      <del className="m-2 text-danger">
                        Rs.{parseInt(pinfo.price) + parseInt(pinfo.price * 10 / 100)}</del>
                      <ins className="m-2 text-primary">Rs.{pinfo.price}</ins>
                    </p>
                    <p>{pinfo.details}</p>
                    <div className="text-center mt-3">
                      <button className="btn btn-primary btn-sm m-2" onClick={saveCart.bind(this, pinfo)}>Add to Cart</button>
                      <button className="btn btn-warning btn-sm m-2" onClick={wishlist.bind(this, pinfo)}>Add to Wishlist</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default MyHome;