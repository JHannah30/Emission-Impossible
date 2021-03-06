import React from "react";
import EnviroImgArt1 from "../../images/ecofootprint.png";
import EnviroImgArt2 from "../../images/plastic-calc-site.jpeg";
import EnviroImgArt3 from "../../images/offsetting-expo.png";
import TravelImgArt1 from "../../images/environment-plane-travel.png";
import TravelImgArt2 from "../../images/greener-transport.png";
import TravelImgArt3 from "../../images/uk-car-emissions.webp";
import TipsImgArt1 from "../../images/nula.png";
import TipsImgArt2 from "../../images/eco-travel-tips.jpeg";
import TipsImgArt3 from "../../images/guardian.png";

import "./BlogArticles.css";

export default function BlogArticles(props) {
  return (
    <div>
      <div class="blog-header-container">
        <h1 class="blog-header">Environment</h1>
        <p class="blog-sub-header-txt">
          Short reads and quizzes to help you break down the wider environmental
          issues.
        </p>
      </div>
      <section className="blog-section">
        <div class="article-card">
          <img
            src={EnviroImgArt1}
            class="card-img-top"
            alt="illustrated landscape with trees"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.footprintcalculator.org/home/en"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                Want to understand more about your daily carbon consumption?
                Calculate your ecological footprint.
              </p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={EnviroImgArt2}
            class="card-img-top"
            alt="sliced grapefruit, cacti and plastic bottles"
          ></img>
          <div class="art-card-body">
            <a
              href="https://bowercollective.com/pages/waste-calculator#intro"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                Get to grips with your plastic consumption.
              </p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={EnviroImgArt3}
            class="card-img-top"
            alt=" colourful collage of pics of waste, factories with emissions"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                In a fog about how to tackle your emissions? Carbon offsets
                explained.
              </p>
            </a>
          </div>
        </div>
      </section>
      <div class="blog-header-container">
        <h1 class="blog-header">Travel</h1>
        <p class="blog-sub-header-txt">
          Whether you're jetting off into the sunset or round the corner for
          tea, find out how you can make it sustainably.{" "}
        </p>
      </div>
      <section className="blog-section">
        <div class="article-card">
          <img
            src={TravelImgArt1}
            class="card-img-top"
            alt="white plane landing on grey runway in"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.worldnomads.com/responsible-travel/make-a-difference/planet/your-guide-to-greener-air-travel"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">Your guide to greener air travel.</p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={TravelImgArt2}
            class="card-img-top"
            alt="cycle path in a woodland, 1 person on a bicycle and 2 on a side-by-side tandem"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.conserve-energy-future.com/modes-and-benefits-of-green-transportation.php"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                Exploring greener transport closer to home.
              </p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={TravelImgArt3}
            class="card-img-top"
            alt="electric car chargring port and back light"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.environmental-protection.org.uk/policy-areas/air-quality/air-pollution-and-transport/car-pollution/"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                What is the UK doing to tackle emissions?
              </p>
            </a>
          </div>
        </div>
      </section>

      <div class="blog-header-container">
        <h1 class="blog-header">Tips & Advice</h1>
        <p class="blog-sub-header-txt">
          A quick flick through some of the smaller changes that collectively
          make a big impact.
        </p>
      </div>
      <section className="blog-section">
        <div class="article-card">
          <img src={TipsImgArt1} class="card-img-top" alt="Nula logo"></img>
          <div class="art-card-body">
            <a
              href="https://www.nulacarbon.com/about"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">Start carbon offsetting the Nula way.</p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={TipsImgArt2}
            class="card-img-top"
            alt="2 people at a colourful fruit and market stall"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.worldnomads.com/responsible-travel/make-a-difference/planet/top-10-tips-for-environmentally-friendly-travel"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">Tips for the eco-conscious traveller.</p>
            </a>
          </div>
        </div>
        <div class="article-card">
          <img
            src={TipsImgArt3}
            class="card-img-top"
            alt="Tree made from recyled materials on yellow background"
          ></img>
          <div class="art-card-body">
            <a
              href="https://www.theguardian.com/environment/2020/feb/29/50-ways-to-green-up-your-life-save-the-planet"
              target="_blank"
              rel="noreferrer"
            >
              <p class="art-card-text">
                50 ways to green up your life and save the planet.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
