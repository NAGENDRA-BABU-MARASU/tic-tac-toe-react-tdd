import { render, screen } from '@testing-library/react';
import Square from './Square';
import userEvent from '@testing-library/user-event';

describe('<Square />', () => {
  let clickHandler;

  it('displays the correct value recieved from props', async () => {
    const expectedValue = "X";

    render(<Square dataTestId={`square0`} value="X" />);

    expect(screen.getByTestId('square0').textContent).toEqual(expectedValue);
  });

  async function clicksTheSquare() {
    clickHandler = jest.fn().mockName('handleClick');
    render(<Square dataTestId={`square0`} onSquareClick={clickHandler} />);

    userEvent.click(screen.getByTestId('square0'));
  }

  it('calls the click handler', async () => {
    const expectedCalledTimes = 1;

    await clicksTheSquare();

    expect(clickHandler).toHaveBeenCalledTimes(expectedCalledTimes);
  });

})