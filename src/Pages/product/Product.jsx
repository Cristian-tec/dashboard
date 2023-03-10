import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { useState, useEffect } from "react";
import { Publish } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product(props) {
  const { productId } = useParams();

  //console.log(productId);

  const [data, setData] = useState();

  const getProductDetail = async () => {
    const response = await axios.get(
      `https://test-deploy-production-3b4b.up.railway.app/products/${productId}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  if (data) {
    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
         {/*  <Link to="/newProduct">
            <button className="productAddButton">Create</button>
          </Link> */}
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
              className="productChart"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={data[0].image} alt="" className="productInfoImg" />
              <span className="productName">{data[0].name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="prductInfoKey">id:</span>
                <span className="productInfoValue">{data[0].id}</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">Price:</span>
                <span className="productInfoValue">{data[0].price}</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">in stock:</span>
                <span className="productInfoValue">Yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>{data[0].name}</label>
              <input type="text" placeholder={data[0].name} />
              <label>In Stock</label>
              <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="Active" id="Active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={data[0].image} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
             {/*  <button className="productButton">Update</button> */}
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newProduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
              className="productChart"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672494806/Dashboard/MME73_AV1_q0zb6i.jpg"
                alt=""
                className="productInfoImg"
              />
              <span className="productName">Loading....</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="prductInfoKey">id:</span>
                <span className="productInfoValue">Loading...</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">sales:</span>
                <span className="productInfoValue">$Loading...</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="prductInfoKey">in stock:</span>
                <span className="productInfoValue">No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder="AppleAirpod" />
              <label>In Stock</label>
              <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="Active" id="Active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672494806/Dashboard/MME73_AV1_q0zb6i.jpg"
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
