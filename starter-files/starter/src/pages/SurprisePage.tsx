import { useContext, useRef, useState } from "react";
import { RandomRestaurant } from "../context/ContextRandom";
import { Data } from "../context/ApiContext";
import { Review } from "../context/ApiContext";

export function SurprisePage(){
    const RandomContext = useContext(RandomRestaurant);
    const context = useContext(Data);
    const theForm = useRef<any>()
    const [review, setReview]= useState<Review>({
      id: new Date().getTime(),
      author: undefined,
      rating: undefined,
      comment: undefined,
      stars: undefined,
    })
    
    if (!context) {
      return <p>Loading...</p>;
    }
    if (!RandomContext) {
      return <p>Loading...</p>;
    }
    const { apiData } = context;
    const { randomNumb } = RandomContext;
    
    const setReviewFunc = async (idRestaurant: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

      event.preventDefault();

      if (!review.author || !review.comment || review.stars === 0) {
        return;
      }
      
      const url = `http://localhost:5001/restaurants/${idRestaurant}`;
      const restaurantToUpdate = apiData!.find(restaurant => restaurant.id === idRestaurant);
      restaurantToUpdate?.reviewsList.push(review)
      if(restaurantToUpdate){restaurantToUpdate.reviews += 1}
      console.log(restaurantToUpdate)
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(restaurantToUpdate)
        });
    
        if (!response.ok) {
          throw new Error('Failed to update restaurant');
        }
    
        const updatedData = await response.json();
        console.log('Restaurant updated:', updatedData);
      } catch (error) {
        console.error('Error updating restaurant:', error);
      }
      setReview({
        id: new Date().getTime(),
        author: undefined,
        rating: undefined,
        comment: undefined,
        stars: undefined,
      })
      theForm.current.reset()
      };
      const handleChange = (event:any, valueKey:any) => {
        setReview(prev => ({
          ...prev,
          [valueKey]: event.target.value
        }));
        console.log(review);
      };
      const handleChangeSlider = (event:any, valueKey:any) => {
        setReview(prev => ({
          ...prev,
          [valueKey]: +event.target.value
        }));
        console.log(review);
      };

    return(
        <section>
            <h2>{apiData && apiData[randomNumb].businessname}</h2>
            {
                <div>
                <img src={apiData? apiData[randomNumb].image: ''} alt="" />
                <p>{apiData && apiData[randomNumb].phone}</p>
                <p>{apiData && apiData[randomNumb].email}</p>
                <p>{apiData && apiData[randomNumb].address}</p>
                </div>
            }
            <h2>REVIEW FORM</h2>
            <form ref={theForm} action="submit">
                <label>Name</label>
                <input type="text" onChange={(event)=>handleChange(event, 'author')}/>
                <label>Comment</label>
                <input onChange={(event)=>handleChange(event, 'comment')} type="text" />
                <label >Stars:</label>
                <input onChange={(event)=>handleChangeSlider(event, 'stars')} type="range" id="star-slider" name="star-slider" min="0" max="5" step="1" defaultValue={0}></input>
                <button onClick={(event) => {if (apiData && apiData[randomNumb].id) {setReviewFunc(apiData[randomNumb].id, event);}}}>
                    Leave a review</button>
            </form>
        </section>
    )
}