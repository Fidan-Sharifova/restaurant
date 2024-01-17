import React, { useContext } from "react";
import dataContext from "../../context/context";

const Wishlist = () => {
  const { wishlist,handleDeleteFromWishlist } = useContext(dataContext);
  return (
    <div>
      <ul>
        {wishlist.map((item, index) => {
          return <li key={index}>{item.name} <button className="btn btn-danger" onClick={()=>{
            handleDeleteFromWishlist(item)
          }}>Deleete</button> </li>;
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
