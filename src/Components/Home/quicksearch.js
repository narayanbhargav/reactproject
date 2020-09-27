import React from 'react';
import './quicksearch.css'

const QuickSearch = () => {
    return(
        <div class="quickSearchContainer">
        <p class="quickSearchHeading">
            Quick Searches
        </p>
        <p class="quickSearchSubHeading">
            Discover Restaurants by meal type
        </p>
        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/breakfast.png" className="blockimage"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    BreakFast
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive breakfast option
                </div>
            </div>
        </div>
      
        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/lunch.png" class="blockimage" />
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    Lunch
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive Lunch option
                </div>
            </div>
        </div>
       
        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/sacks.png" class="blockimage"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    Snacks
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive Snacks option
                </div>
            </div>
        </div>

        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/dinner.png" class="blockimage"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    Dinner
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive Dinner option
                </div>
            </div>
        </div>
   
        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/drinks.png" class="blockimage"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    Drinks
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive drinks option
                </div>
            </div>
        </div>

        <div class="tilecontainer">
            <div class="tileComponent1">
                <img src="./images/nightlife.png" class="blockimage"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    Nightlife
                </div>
                <div class="componentSubHeading">
                    Start  your day with exclusive Nightlife option
                </div>
            </div>
        </div>

    </div>
    )
}

export default QuickSearch