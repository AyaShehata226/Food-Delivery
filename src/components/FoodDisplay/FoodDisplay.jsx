import React, { useContext } from 'react';
import "./FoddDisplay.css" ;
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    return (
        <>
        <div className='food-display' id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index)=>{
                    return <FoodItem id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                })
                }
            </div>
        </div>
        </>
    );
}

export default FoodDisplay;
