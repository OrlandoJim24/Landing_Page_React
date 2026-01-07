import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const CARDS = [
  {
    title: "Card #1",
    text: "The wind whispered secrets through the tall grass as the sun dipped below the horizon.",
    image:
      "https://images.pexels.com/photos/5926363/pexels-photo-5926363.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    title: "Card #2",
    text: "She found the old key beneath a loose floorboard, its rusted teeth hinting at forgotten stories.",
    image:
      "https://images.pexels.com/photos/5639324/pexels-photo-5639324.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    title: "Card #3",
    text: "A single raindrop landed on his hand—then the storm began.",
    image:
      "https://images.pexels.com/photos/3634882/pexels-photo-3634882.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    title: "Card #4",
    text: "The lights flickered once, then everything went quiet.",
    image:
      "https://images.pexels.com/photos/19867368/pexels-photo-19867368/free-photo-of-scrabble-letters-spelling-free-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
];

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />

      {/* Wrapper para que no quede todo “pegado” */}
      <main className="flex-grow-1">
        <section className="py-5">
          <div className="container">
            <Jumbotron />
          </div>
        </section>

        {/* Cards section */}
        <section className="py-5">
  <div className="container">

    {/* SECTION TITLE */}
    <h2 className="text-center fw-bold mb-3">
      Featured Cards
    </h2>

    <p className="text-center text-muted mb-5">
      A simple example of reusable UI components built with React.
    </p>

    {/* CARDS GRID */}
    <div className="row g-4">
      {CARDS.map((item, idx) => (
        <div className="col-12 col-md-6 col-lg-3" key={idx}>
          <Card {...item} />
        </div>
      ))}
    </div>

  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
