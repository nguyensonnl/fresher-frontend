import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import productApi from "../../../../api/productApi";
import { getAllBrand } from "../../../../redux/brandSlice";
import { getAllCateogry } from "../../../../redux/categorySlice";
import Layout from "../Layout";
import "./Product.scss";

let initialState = {
  name: "",
  countInStock: 0,
  price: 0,
  brand: "",
  category: "",
  description: "",
  richDescription: "",
  image: "",
  images: [],
  isFeatured: false,
};
const ProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialState);
  const [previewUrls, setPreviewUrls] = useState([]);

  const allCategory = useSelector((state) => state.category.categories);
  const allBrand = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrand());
    dispatch(getAllCateogry());
  }, []);

  //const [file, setFile] = useState();
  // const handleChangeFile = (e) => {
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  //const [files, setFiles] = useState([]);

  // const handleChangeFileList = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   setFiles(selectedFiles);
  //   const urls = selectedFiles.map((file) => URL.createObjectURL(file));
  //   setPreviewUrls(urls);
  // };

  const renderImagePreviews = () => {
    return previewUrls.map((url) => (
      <img
        key={url}
        src={url}
        alt="Uploaded file preview"
        className="file-image"
      />
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("countInStock", inputs.countInStock);
    formData.append("brand", inputs.brand);
    formData.append("category", inputs.category);
    formData.append("description", inputs.description);
    formData.append("richDescription", inputs.richDescription);
    formData.append("isFeatured", inputs.isFeatured);

    if (inputs.image) {
      formData.append("image", inputs.image);
    }

    if (inputs.images && inputs.images.length > 0) {
      for (let i = 0; i < inputs.images.length; i++) {
        formData.append("images", inputs.images[i]);
      }
    }

    try {
      // let res = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/api/v1/products`,
      //   formData
      // );

      // let res = await axios.post(
      //   `http://localhost:5050/api/v1/products`,
      //   formData
      // );

      // let res = await axios.post(
      //   `https://ecommerce-api-smoky.vercel.app/api/v1/products`,
      //   formData
      // );

      let res = await axios.post(
        `https://ecommerce-api-smoky.vercel.app/api/v1/products`,
        formData
      );

      navigate("/admin/product");

      if (res.status === 200) {
        console.log("Create product successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    let { name, value, checked } = e.target;

    if (e.target.checked && e.target.type === "checkbox") {
      setInputs({ ...inputs, [name]: checked });
    } else if (e.target.type === "file" && e.target.name === "image") {
      const file = e.target.files[0];
      //const file = URL.createObjectURL(e.target.files[0]);
      setInputs({ ...inputs, [name]: file });
    } else if (e.target.type === "file" && e.target.name === "images") {
      const selectedFiles = Array.from(e.target.files);
      setInputs({ ...inputs, [name]: selectedFiles });
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleClickBack = () => {
    navigate("/admin/product");
  };

  const handleCancel = () => {
    setInputs(initialState);
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="product-add"
        encType="multipart/form-data"
      >
        <div className="wrapper">
          <div className="form__title">Thông tin sản phẩm</div>
          <div className="form__body">
            <div className="form__control">
              <label>Tên sản phẩm:</label>
              <input
                value={inputs.name}
                type="text"
                name="name"
                placeholder="Tên sản phẩm..."
                className="form__input-text form__group"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div className="form__control">
              <label>Giá:</label>
              <input
                value={inputs.price}
                name="price"
                type="number"
                className="form__group"
                placeholder="Giá sản phẩm..."
                onChange={(e) => handleChangeInput(e)}
              ></input>
            </div>
            <div className="form__control">
              <label>Số lượng:</label>
              <input
                value={inputs.countInStock}
                name="countInStock"
                type="number"
                className="form__group"
                placeholder="Số lượng"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div className="form__control">
              <label>Danh mục sản phẩm:</label>
              <select
                className="form__group"
                name="category"
                // value={inputs.category}
                onChange={(e) => handleChangeInput(e)}
              >
                {allCategory &&
                  allCategory.length > 0 &&
                  allCategory.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form__control">
              <label>Thương hiệu</label>
              <select
                className="form__group"
                name="brand"
                //</div>value={inputs.brand}
                onChange={(e) => handleChangeInput(e)}
              >
                {allBrand &&
                  allBrand.length > 0 &&
                  allBrand.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form__control">
              <label>Nổi bật:</label>
              <input
                onChange={(e) => handleChangeInput(e)}
                //checked={inputs.isFeatured}
                value={inputs.isFeatured}
                type="checkbox"
                className="form__checkbox"
                name="isFeatured"
              />
            </div>

            <div className="form__control">
              <label>Mô tả sản phẩm:</label>
              <textarea
                onChange={(e) => handleChangeInput(e)}
                name="description"
                value={inputs.description}
              ></textarea>
            </div>
            <div className="form__control">
              <label>Chi tiết sản phẩm:</label>
              <textarea
                onChange={(e) => handleChangeInput(e)}
                value={inputs.richDescription}
                name="richDescription"
              ></textarea>
            </div>
            <div className="form__control">
              <label>Ảnh đại diện:</label>
              <input
                name="image"
                type="file"
                onChange={(e) => handleChangeInput(e)}
              />
              {inputs.image && (
                <img
                  src={URL.createObjectURL(inputs.image)}
                  alt="avatar"
                  className="file-image"
                />
              )}
            </div>
            <div className="form__control">
              <label>Ảnh phụ:</label>
              <input
                name="images"
                type="file"
                multiple
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            {renderImagePreviews()}

            {/* <div className="form_control">
              <label style={{ marginRight: "120px" }}>Hình ảnh:</label>
              <input type="file" />
            </div> */}
          </div>
          <div className="form__footer">
            <button className="btn-edit">Submit</button>
            <div className="btn-cancel" onClick={() => handleCancel()}>
              Cancel
            </div>
            <div className="btn-back" onClick={() => handleClickBack()}>
              &larr; Về trang trước
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductAdd;
