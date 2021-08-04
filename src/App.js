import React from "react";
import Review from "./Review";
const App = () => {
  return (
    <main>
      <section className="container">
        <h2 className="title ">our reviews</h2>
        <div className="underline"></div>
        <Review />
      </section>
    </main>
  );
};

export default App;
