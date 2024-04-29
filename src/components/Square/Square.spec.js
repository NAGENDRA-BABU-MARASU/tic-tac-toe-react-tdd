import { render, screen } from '@testing-library/react';
import Square from './Square';
import userEvent from '@testing-library/user-event';

describe('<Square />', () => {
  let clickHandler;

  it('displays the correct value recieved from props', async () => {
    const expectedValue = "X";

    const { container } = render(<Square value="X" />);

    const mySquare = container.getElementsByClassName('square')[0];

    expect(mySquare.textContent).toEqual(expectedValue);
  });

  async function clicksTheSquare() {
    clickHandler = jest.fn().mockName('handleClick');
    const { container } = render(<Square onSquareClick={clickHandler} />);

    const mySquare = container.getElementsByClassName('square')[0];
    userEvent.click(mySquare);
  }

  it('calls the click handler', async () => {

    await clicksTheSquare();

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

})