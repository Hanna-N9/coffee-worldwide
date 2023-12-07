import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro">
        <div className="openingintro">
          <h1 className="headerSpace">Welcome to Bean There, Drank That!</h1>
          <p>
            🌟 Hey there, coffee adventurer! 🌟 Ready to turn your coffee
            journey into a full-blown saga? Well, you're in for a treat at Bean
            There, Drank That! ☕️✨
          </p>
        </div>
        <div className="content-container">
          <div className="passport">
            <h3> ☕️ Your Coffee Passport </h3>
            <p>
              Imagine having a passport but exclusively for coffee! 🌍✈️ With
              Bean There, Drank That, you can now embark on a caffeinated world
              tour and keep track of every delightful brew you've ever sipped.
              Say goodbye to forgetting that amazing cup of joe you had in that
              cozy corner shop!
            </p>
          </div>
          <div className="searchperfection">
            <h3> 🧭 The Search for Perfection</h3>
            <p>
              Craving that one special cup you had on a rainy day? Fear not! Our
              search feature is here to rescue your taste buds. Simply type in a
              keyword, and voilà! Your favorite coffee is just a click away.
              ☕️🔍
            </p>
          </div>
          <div className="brewvolution">
            <h3> 🎉 Join the Brewvolution!</h3>
            <p>
              At Bean There, Drank That, we're not just brewing coffee
              enthusiast; we're brewing connections, memories, and a whole latte
              love! So, grab your virtual passport, dive into the world of
              coffee wonders, and let the sipping saga begin! 🎉☕️
            </p>
          </div>
        </div>
        <div className="closingintro">
          <h3>
            To endless coffee quests, The Bean There, Drank That Team 🚀✨
          </h3>
          <button id="homeBtn" onClick={() => navigate("/coffee")}>
            View Coffee
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
