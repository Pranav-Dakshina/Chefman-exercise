import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Provider} from "react-redux";

import {store} from "./store";
import App from './App';

test('renders page', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  expect(getByText(/Order/i)).toBeInTheDocument();
});

test('renders order list', () => {
  const { getAllByTestId } = render(<Provider store={store}><App /></Provider>);
  expect(getAllByTestId('order-item').length).toBeGreaterThan(0);
});

test('remove item from list', () => {
  const { getAllByTestId } = render(<Provider store={store}><App /></Provider>);
  const ingredients = getAllByTestId('order-item');

  fireEvent.click(getAllByTestId('close')[0]);
  expect(ingredients.length - getAllByTestId('order-item').length).toBe(1);
})
