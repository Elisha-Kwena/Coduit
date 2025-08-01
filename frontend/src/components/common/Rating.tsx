import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

interface RatingProps{
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating * 5)/10;
    const halfStars = Math.ceil((rating * 5) % 10 / 5);
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: fullStars }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
            ))}
            {Array.from({ length: halfStars }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStarHalfStroke} className="text-yellow-500" />
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-gray-400" />
            ))}
        </div>
    );
};

export default Rating;