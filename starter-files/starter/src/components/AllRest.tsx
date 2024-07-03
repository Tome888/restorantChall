import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { ApiContext, Data } from "../context/ApiContext";
import {Review} from '../context/ApiContext'

export function AllRest() {
    const context = useContext(Data);
  
    if (!context) {
      return <p>Loading...</p>;
    }
  
    const { apiData } = context;

    const calculateMedianRating = (reviewsList: Review[]) => {
        let arr:number[] = []
        reviewsList.map(rev => {
            if(rev.stars)
            arr.push(rev.stars)
        })
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const theMedian = sum / reviewsList.length
        console.log(theMedian)
        
        return theMedian
      };
   
  
    return (
      <section className="allRestaurantsSection">
        <h2>All Restaurants</h2>
        <div className="cardContainer">
          {apiData ? (
            apiData.map((rest) => (
              <Card 
                id={rest.id}
                key={rest.id}
                image={rest.image} 
                businessname={rest.businessname} 
                restauranttype={rest.restauranttype} 
                amountReviews={rest.reviews}
                totalRating={calculateMedianRating(rest.reviewsList)} 
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    );
  }