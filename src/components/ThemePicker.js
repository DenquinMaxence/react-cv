import { useEffect, useState } from 'react';
import { ThemeData } from '../data/Theme';
import { useMediaQuery } from 'react-responsive';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

const ThemePicker = () => {
	const [themePicker, setThemePicker] = useState(false);

	const [themeColor, setThemeColor] = useState(
		localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : '#3991a5'
	);

	const [themeStyle, setThemeStyle] = useState(
		localStorage.getItem('themeStyle') ? localStorage.getItem('themeStyle') : 'cobweb'
	);

	const [themeDark, setThemeDark] = useState(
		localStorage.getItem('themeDark') ? localStorage.getItem('themeDark') : false
	);

	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });

	const showThemePicker = () => {
		const themePickerBox = document.querySelector('.theme-picker');
		themePickerBox.classList.toggle('active');
		setThemePicker(!themePicker);
	};

	const handleThemeColor = (color) => {
		setThemeColor(color);
		document.documentElement.style.setProperty('--color-theme', color);
		localStorage.setItem('themeColor', color);
	};

	const handleThemeStyle = (style) => {
		setThemeStyle(style);
		localStorage.setItem('themeStyle', style);
	};

	const handleThemeDark = (state) => {
		setThemeDark(state);
		localStorage.setItem('themeDark', state);
	};

	useEffect(() => {
		handleThemeColor(themeColor);

		if (themeDark === 'true') {
			document.documentElement.classList.add('theme-dark');
			document.querySelector('.fa-symfony').style.color = '#ffffff';
		} else {
			document.documentElement.classList.remove('theme-dark');
			document.querySelector('.fa-symfony').style.color = '#000000';
		}
	}, [themeColor, themeDark]);

	return (
		<>
			{isDesktopOrLaptop && (
				<ParticlesBg
					type={themeStyle}
					bg={{
						position: 'absolute',
						height: window.outerHeight + window.innerHeight,
					}}
				/>
			)}
			<div className='theme-picker'>
				<Link to='#' className='theme-picker-opener'>
					<FaCog className='fa-spin' onClick={showThemePicker} />
				</Link>
				<strong className='title'>Theme Picker</strong>
				<strong className='subtitle'>Couleur du thème</strong>
				<ul className='list-inline list-color'>
					{ThemeData.color.length > 0 &&
						ThemeData.color.map((color, index) => {
							return (
								<li className={color.name} key={index}>
									<Link to='#' onClick={() => handleThemeColor(color.hexa)} />
								</li>
							);
						})}
				</ul>
				{isDesktopOrLaptop && (
					<>
						<strong className='subtitle'>Type de thème</strong>
						<div className='select-style'>
							<select
								defaultValue={themeStyle}
								onChange={(e) => handleThemeStyle(e.target.value)}>
								{ThemeData.style.length > 0 &&
									ThemeData.style.map((style, index) => {
										return <option key={index}>{style}</option>;
									})}
							</select>
						</div>
					</>
				)}
				<strong className='subtitle'>Mode contrasté</strong>
				<ul className='list-inline list-style list-bg-color'>
					<li className='dark'>
						<Link to='#' className='btn dark' onClick={() => handleThemeDark('true')}>
							dark
						</Link>
					</li>
					<li className='light'>
						<Link to='#' className='btn add' onClick={() => handleThemeDark('false')}>
							light
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ThemePicker;
