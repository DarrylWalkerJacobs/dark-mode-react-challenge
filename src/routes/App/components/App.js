import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

import '../styles/_app.scss';

function App() {
  const title = 'The Amazing Dark Mode Bootstrap React Challenge';

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          class: 'bg-light text-dark'
        }}
        title={title}
      />
      <div className="app container py-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-2">
            <h1 className="title m-0">{title}</h1>

            {/* --The button that should toggle dark mode-- */}
            <button className="app__dark-mode-btn icon">
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>

        <div className="row">
          <div>
            <p>
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
            </p>
          </div>
          <div>
            <p>
              Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
              tart. Muffin chupa chups pie. Brownie apple pie topping lemon
              drops marzipan toffee. Pudding macaroon icing ice cream bonbon
              cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
              pastry chocolate bar tart. Lemon drops dessert gummies icing.
            </p>
          </div>
        </div>

        <div className="row g-3 mb-2">
          <div className="col-auto">
            <input type="text" placeholder="Name" aria-label="Name" />
          </div>
          <div className="col-auto">
            <select aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
