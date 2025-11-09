import React from 'react'
import { Rating, RatingStar } from "flowbite-react";


const RatingStars = ({stars, showRating = true }) => {
    const fullStars = Math.floor(stars);
    const emptyStars = 5 - fullStars;
  return (
    <Rating>
        {fullStars > 0 && Array.from({length: fullStars}, (_, i) => (
            <RatingStar key = {`full${i}`}/>
        ))}

        {Array.from({length: emptyStars}, (_, i) => (
            <RatingStar filled = {false} key = {`empty${i}`}/>
        ))}

        {showRating && (
            <p className='ml-2  text-sm front-medium text-gray-500 dark:text-gray-400'>
                {stars.toFixed(2)} out of 5
            </p>
        )}
    </Rating>
  )
}

export default RatingStars