import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./main.css";
import "../../../styleindex.css";

const Europa = function () {
  return (
    <>
      <div className="header-content2">
        <h2> European culture</h2>
      </div>
      <div className="Link-Home">
      <Link to="/catalog">Catalog</Link>
      </div>
      <div className="travel-box">
        <div>
          <img
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Eiffel Tower, France"
          />
          <div>
            <h3>France</h3>
            <p>
              The Eiffel Tower, completed in 1889, stands as a symbol of
              Parisian romance and culture, drawing millions of visitors
              annually to admire its iconic silhouette. This architectural
              marvel serves as a testament to 19th-century engineering prowess
              and innovation, dominating the Paris skyline with its graceful
              lattice structure. From its observation decks, visitors are
              treated to breathtaking views of the city, especially enchanting
              at night when the tower is illuminated, casting a magical aura
              over the City of Light.
            </p>
            <p>
              <a href="/TakeOffer">Take Offer</a>
            </p>
          </div>
        </div>

        <article>
          <p>Europe is so beautiful.?</p>
        </article>

        <div>
          <img
            src="https://images.unsplash.com/photo-1583779325527-b28be47b4fae?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="La Sagrada Família, Spain"
          />
          <div>
            <h3>Spain</h3>
            <p>
              Barcelona's La Sagrada Família, designed by Antoni Gaudí, is a
              visionary masterpiece that blends Gothic and organic elements in a
              unique architectural style. Construction began in 1882 and
              continues to this day, funded solely by private donations. The
              cathedral's facade is adorned with intricate sculptures depicting
              biblical scenes, while its interior is bathed in ethereal light
              filtering through stained glass windows. La Sagrada Família aims
              to create a spiritual sanctuary in harmony with nature, inviting
              contemplation and awe from all who visit its sacred space.
            </p>
            <p>
            <a href="/TakeOffer">Take Offer</a>
            </p>
          </div>
        </div>

        <article>
          <p>Yes or No .!!!</p>
        </article>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="The Colosseum, Italy"
          />
          <div>
            <h3>Italy</h3>
            <p>
              The Colosseum, originally known as the Flavian Amphitheater, is a
              testament to the grandeur and brutality of ancient Rome. Built
              over a decade, it once hosted gladiatorial combats, wild animal
              hunts, and dramatic reenactments, captivating audiences with its
              spectacles. Despite the ravages of time and history, the Colosseum
              remains an enduring symbol of Roman civilization, drawing millions
              of visitors who come to marvel at its architectural splendor and
              immerse themselves in the rich history of the empire.
            </p>
            <p>
            <a href="/TakeOffer">Take Offer</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europa;
