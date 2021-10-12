import 'boxicons';
import { useEffect, useState } from 'react';
import { ColorContext } from './components/AppContext';
import Routes from './components/Routes';

function App() {
	const [color, setColor] = useState(null);

	useEffect(() => {
		const fetchColor = () => {
			let colorRes = localStorage.getItem('themeColorHexa')
				? localStorage.getItem('themeColorHexa')
				: '#3991a5';
			if (colorRes !== '') {
				setColor(colorRes);
				localStorage.setItem('themeColorHexa', colorRes);
			}
		};
		if (!color) fetchColor();
	}, [color]);

	return (
		<ColorContext.Provider value={color}>
			<Routes />
		</ColorContext.Provider>
	);
}

export default App;
