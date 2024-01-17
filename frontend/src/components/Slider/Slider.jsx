import React from "react";
import "./Slider.scss"

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleRide" class="carousel  firstSectionCarusel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="cvisually-hidden"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
