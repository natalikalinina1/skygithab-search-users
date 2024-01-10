import React from 'react';
import { test, expect, jest,describe } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search/Search';


test('calls setLogin function with the input value when form is submitted', () => {
  const setLogin = jest.fn();
  render(<Search setLogin={setLogin} />);

  const formElement = screen.getByTestId('form');
  const inputElement = screen.getByTestId('input');

  fireEvent.change(inputElement, { target: { value: 'test' } });
  fireEvent.submit(formElement);

  expect(setLogin).toHaveBeenCalledWith('test');
});

describe('Search', () => {
  test('should call setLogin when form is submitted', () => {
    const setLoginMock = jest.fn();
    const { getByTestId } = render(<Search setLogin={setLoginMock} />);
    const form = getByTestId('form');
    fireEvent.submit(form);
    expect(setLoginMock).toHaveBeenCalled();
  });

  test('should update name state when input value changes', () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});


