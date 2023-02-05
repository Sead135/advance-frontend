import { FC, useState } from "react";
import classes from './Counter.module.scss'

export const Counter: FC = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div className={classes.button}>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>increment</button>
			<button onClick={() => setCount(count - 1)}>decrement</button>
		</div>
	);
};