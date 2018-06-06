import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Questions from './js/questions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
    window.Questions = Questions;
});