import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, render } from '@testing-library/react';
import NavBar from '../Pages/NavBar.js';

describe('test if NavBar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('NavBar', () => {
  test('Responding on Rockets click', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Rockets'));
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByTestId('1'));
  });

  test('Responding on Missions click', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Missions'));
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByTestId('2'));
  });

  test('Responding on My Profile click', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('My Profile'));
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByTestId('3'));
  });
});
