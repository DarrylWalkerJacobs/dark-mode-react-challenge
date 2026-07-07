import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import '../styles/app.css';

function App() {
  const title = 'The Amazing Dark Mode Tailwind React Challenge';

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          class: 'bg-white text-slate-900'
        }}
        title={title}
      />
      <div className="app mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                React styling challenge
              </p>
              <h1 className="m-0 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                A small form, a reusable modal, and a dark-mode toggle waiting
                for the rest of the challenge logic.
              </p>
            </div>

            <div>
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="app__dark-mode-btn icon"
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          </div>

          <div className="mb-8 grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="m-0 leading-7">
                Lollipop powder powder. Cotton candy caramels chupa chups halvah
                muffin caramels apple pie topping cake. Topping chocolate bar
                pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
                sugar plum. Chocolate bar lollipop candy canes. Biscuit
                croissant apple pie pudding caramels wafer tart tootsie roll
                macaroon. Croissant tiramisu chocolate bar carrot cake lemon
                drops halvah.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="m-0 leading-7">
                Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
                tart. Muffin chupa chups pie. Brownie apple pie topping lemon
                drops marzipan toffee. Pudding macaroon icing ice cream bonbon
                cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
                pastry chocolate bar tart. Lemon drops dessert gummies icing.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Example form
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <input type="text" placeholder="Name" aria-label="Name" />
              </div>
              <div>
                <select defaultValue="" aria-label="Default select example">
                  <option value="" disabled>
                    Open this select menu
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <button type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
