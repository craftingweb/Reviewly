import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);

  if (index === people.length) {
    return setIndex(0);
  }

  if (index === -1) {
    return setIndex(people.length - 1);
  }

  const nextPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState + 1;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState - 1;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    return setIndex(randomNumber);
  };

  const { job, name, image, text } = people[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info  ">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn hipster" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
