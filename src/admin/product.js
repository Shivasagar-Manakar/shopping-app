import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyProduct = () => {
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

  const delItem = (pid, name) => {
    let url = "http://localhost:1234/product/" + pid;
    let postoption = {
      method: 'DELETE'
    }
    fetch(url, postoption)
      .then(response => response.json())
      .then(serverRes => {
        toast(name + " Deleted Successfully!")
        getProduct();
      })
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-center text-secondary">Product List</h1>
      <table className="table table-bordered table-striped shadow-lg">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((pro, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pro.name}</td>
                  <td>{pro.price}</td>
                  <td>
                    <img src={pro.photo} height="50" width="60" />
                  </td>
                  <td>{pro.details}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={delItem.bind(this, pro.id, pro.name)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default MyProduct;