# Dark Mode Coding Challenge 🌙 &nbsp; ![medium](https://img.shields.io/badge/-Medium-yellow) ![time](https://img.shields.io/badge/%E2%8F%B0-15m-blue)

Gratefully borrowed and substantially modified from [react-coding-challenges](https://github.com/alexgurr/react-coding-challenges/tree/master/dark-mode) by [alexgurr](https://github.com/alexgurr).

&nbsp;
# Goals / Outcomes ✨
- Using state
- Leveraging existing utilities and components

&nbsp;
# Pre-requisites ✅
- Do not add additional dependencies

&nbsp;
# Tooling 🛠️
- Node 24 (`.nvmrc` is pinned to `v24`)
- Tailwind CSS

&nbsp;
# Requirements 📖
- Add dark-mode switching functionality to the *existing* dark-mode button
  - Utilise the *existing* dark-mode styles by adding `bg-slate-950` and `text-slate-100` classes to the root `html` element
- When in Dark mode:
  - The button icon should be `faSun`
  - The button icon colour should be `(#FFA500)`. You can use the `color` prop on the `FontAwesomeIcon` component.
- Add responsive Tailwind layout classes to the two paragraphs so they sit side by side on wider screens
- Add Tailwind utility classes to the button and form fields to style them appropriately
- Add functionality to store the contents of the form fields and display them in a modal
  - Use the existing modal component
  - Modal should show/hide based on state

&nbsp;
# Think about 💡
- How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
- How we can apply a class to the `html` DOM element


&nbsp;
# What's Already Been Done 🏁
- Basic app UI (mobile responsive)
- Dark mode and light mode styles/themes
- Node 24-ready tooling and Tailwind setup
