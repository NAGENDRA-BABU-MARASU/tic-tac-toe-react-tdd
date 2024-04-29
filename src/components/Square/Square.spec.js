import { render, screen } from '@testing-library/react';
import Square from './Square';
import userEvent from '@testing-library/user-event';

describe('<Square />', () => {
  let clickHandler;

  it('displays the correct value recieved from props', async () => {
    const expectedValue = "X";

    render(<Square value="X" />);

    expect(screen.getByTestId("square").textContent).toEqual(expectedValue);
  });

  async function clicksTheSquare() {
    clickHandler = jest.fn().mockName('handleClick');
    render(<Square onSquareClick={clickHandler} />);
    userEvent.click(screen.getByTestId("square"));
  }

  it('calls the click handler', async () => {

    await clicksTheSquare();

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

})