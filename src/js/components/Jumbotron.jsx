import React from "react";

const Jumbotron = () => {
  return (
    <div className="py-4">
      <div className="p-5 bg-white rounded-4 shadow-sm border text-center mx-auto hero-max">
        <h1 className="display-5 fw-bold mb-3">Example of Cards</h1>

        <p className="lead text-secondary mb-4">
          In JavaScript, the term <span className="fw-semibold">"card"</span>{" "}
          doesn’t refer to a built-in concept. It’s a UI component — a visual
          content box used to display grouped information like products, users,
          or posts.
        </p>

        <hr className="my-4" />

        <p className="text-muted mb-4">
          It’s a design pattern, not a JavaScript feature. Cards are built with{" "}
          HTML + CSS, and JavaScript adds interactivity (clicks, animations, data
          updates).
        </p>

        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <button type="button" className="btn btn-primary btn-lg px-4">
            Learn more
          </button>

          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            View examples
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
