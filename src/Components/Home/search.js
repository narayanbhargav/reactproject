import React from 'react';
import './search.css';

const Search =()=>{
    return(
        <div className="imageContainer">
            <div id="logo">
            e!
            </div>
            <div className="heading">
                Find the best restaurant,cafes,bars
            </div>
            <div className="locationselector">
                <select className="locationDropDown">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chandigarh</option>
                </select>   
                <input type="text" placeholder="search for restaurant" className="restinput"/>
            </div>
        </div>
    )
}
export default Search;
