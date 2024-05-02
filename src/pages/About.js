import React from "react";
import aboutImage from "../assets/about-image.avif";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p className="p-text-about">
          Welcome to Cooking Creation! Our culinary sanctuary is a treasure
          trove of flavors, inviting you to explore the vibrant world of cooking
          with passion and creativity. At Cooking Creation, we're dedicated to
          cultivating a community of food lovers who share a common love for
          delicious dishes and the joy of bringing people together around the
          table. With a diverse collection of recipes sourced from across
          cultures and cuisines, our mission is to inspire and empower home
          cooks of all levels to unleash their culinary potential. From
          traditional comfort foods to contemporary creations, we offer a wealth
          of inspiration to suit every palate and occasion.
        </p>
        <p className="p-text-about">
          Join us on a delicious journey as we celebrate the art of cooking, the
          pleasure of sharing meals with loved ones, and the sheer delight of
          savoring every bite. Welcome to cooking creation, where every recipe
          tells a story and every meal is a celebration of flavor and
          fellowship.
        </p>
      </div>
    </div>
  );
}

export default About;
