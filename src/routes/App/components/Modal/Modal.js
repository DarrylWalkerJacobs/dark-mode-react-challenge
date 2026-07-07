import clsx from 'clsx';

const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 p-4',
        isOpen
          ? 'flex items-center justify-center bg-slate-950/60'
          : 'hidden'
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalLabel"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-xl font-semibold" id="modalLabel">
            Form submission
          </h2>
        </div>
        <div className="px-6 py-4">{children}</div>
        <div className="flex justify-end border-t border-slate-200 px-6 py-4">
          <button
            type="button"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
