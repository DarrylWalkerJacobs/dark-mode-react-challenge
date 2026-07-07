import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
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
              A small form, a reusable modal, and a dark-mode toggle waiting for
              the rest of the challenge logic.
            </p>
          </div>

          <div>
            {/* --The button that should toggle dark mode-- */}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="app__dark-mode-btn icon"
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="m-0 leading-7">
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
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
              <p className="mt-1 text-sm text-slate-600">
                The controls are intentionally presentational so the challenge
                can focus on wiring up the existing behavior.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>
              <div className="relative">
                <select
                  defaultValue=""
                  aria-label="Default select example"
                  className="w-full appearance-none rounded-md border border-slate-300 bg-white px-4 py-2.5 pr-10 text-slate-700 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                >
              <option value="" disabled>
                Open this select menu
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-sky-700 bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
