import { useState } from "react";
import reviews from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = reviews[index];

  const chekIndex = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newPerson = index + 1;
      return chekIndex(newPerson);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newPerson = index - 1;
      return chekIndex(newPerson);
    });
  };
  const rundomPerosn = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length - 1);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(chekIndex(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={rundomPerosn}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
