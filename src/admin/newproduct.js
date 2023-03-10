import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const NewProduct = () => {
  let [pname, pickName] = useState("");
  let [pprice, pickPrice] = useState("");
  let [pphoto, pickPhoto] = useState("");
  let [pdetails, pickDetails] = useState("");

  const save = () => {
    let newProduct = {
      name: pname, price: pprice, photo: pphoto, details: pdetails
    };
    let postoption = {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newProduct)
    }
    let url = "http://localhost:1234/product";
    fetch(url, postoption)
      .then(response => response.json())
      .then(serverRes => {
        toast(pname + " Saved Successfully!");
        pickName(""); pickPhoto(""); pickPrice(""); pickDetails("")
      })


  }


  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Enter Product Details</div>

            <div className="card-body">
              <div className="mb-4">
                <label>Product Name</label>
                <input type="text" className="form-control" value={pname} onChange={obj => pickName(obj.target.value)} />
              </div>

              <div className="mb-4">
                <label>Product Price</label>
                <input type="text" className="form-control" value={pprice} onChange={obj => pickPrice(obj.target.value)} />
              </div>

              <div className="mb-4">
                <label>Product Photo</label>
                <input type="text" className="form-control" value={pphoto} onChange={obj => pickPhoto(obj.target.value)} />
              </div>

              <div className="mb-4">
                <label>Product Details</label>
                <textarea type="text" className="form-control" value={pdetails} onChange={obj => pickDetails(obj.target.value)}></textarea>
              </div>
            </div>

            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={save}>Save Product</button></div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  )
}

export default NewProduct;