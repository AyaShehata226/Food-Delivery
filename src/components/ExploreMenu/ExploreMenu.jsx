import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category , setCategory}) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes carfted wiht the finest ingredients and culinary expertise. our mission is to satisfy your carvings and elevate your dining experience , one delicious meal at a time</p>
        <div className="explore-menu-list">
          {menu_list.map((item , index)=>{
            return(
              <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="image"/>
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr/>
        
      </div>
    </>
  );
};

export default ExploreMenu;
