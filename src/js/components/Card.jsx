import React from "react";

const Card = ({ title, text, image }) => {
  return (
    <div className="card h-100 shadow-sm card-hover border-0 overflow-hidden">
      <div className="ratio ratio-4x3">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title fw-semibold mb-2">{title}</h5>

        <p className="card-text text-secondary small flex-grow-1 clamp-3">
          {text}
        </p>

        <button
          type="button"
          className="btn btn-primary btn-sm mt-3 align-self-center px-4"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Card;
