export default function Square({ dataTestId, value, onSquareClick }) {
	return (
		<button data-testid={dataTestId} className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}
