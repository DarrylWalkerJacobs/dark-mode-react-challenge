import clsx from 'clsx';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';

import Modal from './Modal/Modal';
import '../styles/app.css';

const optionLabels = {
  '1': 'One',
  '2': 'Two',
  '3': 'Three'
};

function App() {
  const title = 'The Amazing Dark Mode Tailwind React Challenge';
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [selection, setSelection] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({
    name: '',
    selection: ''
  });

  const htmlClassName = clsx(
    isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
  );
  const fieldClassName = clsx(
    'w-full rounded-md border px-4 py-2.5 shadow-sm transition focus:outline-none focus:ring-4',
    isDarkMode
      ? 'border-slate-600 bg-slate-900 text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-sky-950'
      : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-100'
  );
  const submitButtonClassName = clsx(
    'inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-4',
    isDarkMode
      ? 'border-sky-400 bg-sky-500 text-slate-950 hover:bg-sky-400 focus:ring-sky-950'
      : 'border-sky-700 bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-200'
  );

  const toggleDarkMode = () => {
    setIsDarkMode((currentValue) => !currentValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues({
      name: name.trim(),
      selection
    });
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          class: htmlClassName
        }}
        title={title}
      />
      <div className="app mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="app__shell rounded-3xl p-6 backdrop-blur sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                React styling challenge
              </p>
              <h1 className="m-0 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="app__muted mt-3 max-w-2xl text-base leading-7">
                A small form, a reusable modal, and a dark-mode toggle waiting
                for the rest of the challenge logic.
              </p>
            </div>

            <div>
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="app__dark-mode-btn icon"
                onClick={toggleDarkMode}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faSun : faMoon}
                  color={isDarkMode ? '#FFA500' : undefined}
                />
              </button>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="app__panel app__panel--soft rounded-2xl p-5">
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
            <div className="app__panel app__panel--soft rounded-2xl p-5">
              <p className="m-0 leading-7">
                Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
                tart. Muffin chupa chups pie. Brownie apple pie topping lemon
                drops marzipan toffee. Pudding macaroon icing ice cream bonbon
                cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
                pastry chocolate bar tart. Lemon drops dessert gummies icing.
              </p>
            </div>
          </div>

          <form className="app__panel rounded-2xl p-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Example form</h2>
              <p className="app__muted mt-1 text-sm">
                The completed version stores the field values and shows them in
                the existing modal.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={fieldClassName}
                />
              </div>
              <div>
                <select
                  value={selection}
                  aria-label="Default select example"
                  onChange={(event) => setSelection(event.target.value)}
                  className={fieldClassName}
                >
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
              <button type="submit" className={submitButtonClassName}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <dl className="space-y-3">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Name
            </dt>
            <dd className="app__muted mt-1 text-base">
              {submittedValues.name || 'No name provided'}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Selection
            </dt>
            <dd className="app__muted mt-1 text-base">
              {optionLabels[submittedValues.selection] ?? 'Nothing selected'}
            </dd>
          </div>
        </dl>
      </Modal>
    </Fragment>
  );
}

export default App;
