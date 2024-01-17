import React, { useContext, useState } from "react";
import "./Add.scss";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import dataContext from "../../context/context";

const Add = () => {
  const {
    data,
    setData,
    handleDelete,
    handleSearching,
    handleSort,
    handleAddWihslist,
  } = useContext(dataContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(70, "Must be 70 characters or less")
        .required("Name Is Required"),
      desc: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Description is Required"),
      price: Yup.number().required("Price Is Required"),
      desc: Yup.string().required("Description is Required"),
    }),
    onSubmit: async (values) => {
      await axios.post("http://localhost:8000/pulse", values).then((res) => {
        setData([...data, res.data]);
      });
      formik.resetForm();
    },
  });
  return (
    <div className="AddBody">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name"> Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="desc">Description</label>
              <input
                id="desc"
                name="desc"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desc}
              />
              {formik.touched.desc && formik.errors.desc ? (
                <div>{formik.errors.desc}</div>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="addPageTable">
        <input type="text" onChange={handleSearching} />
        <select name="" id="" onChange={handleSort}>
          <option value="df">Default</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="09">0-9</option>
          <option value="90">9-0</option>
        </select>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.desc}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleAddWihslist(item);
                      }}
                    >
                      Wishlist
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Add;
