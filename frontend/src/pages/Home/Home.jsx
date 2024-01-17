import React from "react";
import "./Home.scss";
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../layout/Header/Header";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="homeBody">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Slider />
      <Welcome />
      <Testimonials />
    </div>
  );
};

export default Home;
