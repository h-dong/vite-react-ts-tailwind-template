import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from './components/ui/button';
import { Typography } from './components/ui/typography';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<Typography variant="h1">
				Hao's vite-react-ts-tailwind-template
			</Typography>
			<div className="card">
				<Button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<Typography variant="p">
					Edit <Typography variant="code">src/App.tsx</Typography> and save to
					test HMR
				</Typography>
			</div>
			<Typography variant="p" className="read-the-docs">
				Click on the Vite and React logos to learn more
			</Typography>
		</>
	);
}

export default App;
