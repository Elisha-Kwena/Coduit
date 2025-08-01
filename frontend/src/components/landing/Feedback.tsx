import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import FeedbackCard from "./FeedbackCard";
import {feedback} from "../../data/Feedback";

const Feedback: React.FC = () => {
    return(
        <>
            <div className="w-full flex flex-col gap-3">
                <h1 className="text-chrome font-fira-code text-2xl: lg:text-2xl text-center">Trusted by Developers Worldwide</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-0 px-4 mt-10">
                    {feedback.map((item) => (
                        <FeedbackCard
                            key={item.id}
                            name={item.name}
                            feedback={item.feedback}
                            role={item.role}
                            date={item.date}
                            rating={item.rating}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Feedback;