import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card';
import List from './List'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header=' ' cards={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})