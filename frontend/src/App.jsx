import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./layout/Footer/Footer";
import { Provider } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import dataContext from "./context/context";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/Wishlist/Wishlist";
// import Header from "./layout/Header/Header";
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([]);

  //Delete
  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:8000/pulse/${item._id}`).then(() => {
      const deletingData = data.filter((prod) => prod._id != item._id);
      setData(deletingData);
    });
  };
  //Searching
  const handleSearching = (e) => {
    const searching = e.target.value.trim().toLowerCase();
    if (searching == "") {
      setData([...original]);
    } else {
      const searchedData = data.filter((item) =>
        item.name.trim().toLowerCase().includes(searching)
      );
      setData([...searchedData]);
    }
  };

  //Sorting
  const handleSort = (e) => {
    const sorting = e.target.value;
    if (sorting == "df") {
      setData([...original]);
    } else if (sorting == "az") {
      const sortAZ = data.sort((a, b) => a.name.localeCompare(b.name));
      setData([...sortAZ]);
    } else if (sorting == "za") {
      const sortZA = data.sort((a, b) => b.name.localeCompare(a.name));
      setData([...sortZA]);
    } else if (sorting == "09") {
      const sort09 = data.sort((a, b) => a.price - b.price);
      setData([...sort09]);
    } else if (sorting == "90") {
      const sort90 = data.sort((a, b) => b.price - a.price);
      setData([...sort90]);
    }
  };

  // Wishlist
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  console.log(wishlist)
  const handleAddWihslist = (item) => {
    const target = wishlist.find((prod) => prod._id == item._id);
    if (target) {
      alert("Item Wishlistdedr");
    } else {
      setWishlist([...wishlist, item]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
      alert('ok')
    }
  };

  const handleDeleteFromWishlist=(item)=>{
    const target = wishlist.find((prod) => prod._id == item._id);
    const indexOf=wishlist.indexOf(target)
    wishlist.splice(indexOf,1)
    setWishlist([...wishlist])
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]));

    alert('ok')

  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/pulse")
      .then((res) => {
        setData(res.data);
        setOriginal(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  const value = {
    data,
    setData,
    handleDelete,
    handleSearching,handleDeleteFromWishlist,handleAddWihslist,
    handleSort,wishlist
  };
  return (
    <div className="App">
      <dataContext.Provider value={value}>
        {/* <Header /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/:id" element={<Detail />} />,
            <Route path="/wishlist" element={<Wishlist />} />,
          </Routes>
        </BrowserRouter>
        <Footer />
      </dataContext.Provider>
    </div>
  );
}

export default App;
