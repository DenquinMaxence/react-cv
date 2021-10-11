import { useEffect, useState } from 'react';
import { ThemeData } from '../data/Theme';
import { useMediaQuery } from 'react-responsive';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';

const ThemePicker = () => {
	const [themePicker, setThemePicker] = useState(false);
	const [themeColor, setThemeColor] = useState(
		localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'theme-blue'
	);
	const [themeStyle, setThemeStyle] = useState(
		localStorage.getItem('themeStyle') ? localStorage.getItem('themeStyle') : 'cobweb'
	);
	const [themeMode, setThemeMode] = useState('theme-light');
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });

	const showThemePicker = () => {
		const themePickerBox = document.querySelector('.theme-picker');
		themePickerBox.classList.toggle('active');
		setThemePicker(!themePicker);
	};

	const handleThemeColor = (color) => {
		setThemeColor(color);
		localStorage.setItem('themeColor', color);
	};

	const handleThemeStyle = (style) => {
		setThemeStyle(style);
		localStorage.setItem('themeStyle', style);
	};

	const handleThemeMode = (theme) => {
		setThemeMode(theme);
		localStorage.setItem('themeMode', theme);
	};

	useEffect(() => {
		const mainBlock = document.querySelector('.main');
		if (mainBlock) {
			const oldThemeColor = mainBlock.classList[1] ? mainBlock.classList[1] : '';

			if (oldThemeColor === '') {
				mainBlock.classList.add(themeColor);
			} else {
				mainBlock.classList.remove(oldThemeColor);
				mainBlock.classList.add(themeColor);
			}
		}

		// const bodyBlock = document.getElementsByTagName('body')[0];
		// console.log(bodyBlock.classList.add(themeMode));
	}, [themeColor, themeMode]);

	return (
		<>
			{isDesktopOrLaptop && <ParticlesBg type={themeStyle} bg={true} />}
			<div className='theme-picker'>
				<Link to='#' className='theme-picker-opener'>
					<box-icon
						name='cog'
						type='solid'
						animation='spin'
						flip='horizontal'
						color="#3991a5"
						onClick={showThemePicker}
					/>
				</Link>
				<strong className='title'>Theme Picker</strong>
				<strong className='subtitle'>Couleur du thème</strong>
				<ul className='list-inline list-color'>
					{ThemeData.color.length > 0 &&
						ThemeData.color.map((color, index) => {
							return (
								<li className={color} key={index}>
									<Link to='#' onClick={() => handleThemeColor(color)} />
								</li>
							);
						})}
				</ul>
				{isDesktopOrLaptop && (
					<>
						<strong className='subtitle'>Type de thème</strong>
						<div className='select-style'>
							<select defaultValue={themeStyle}>
								{ThemeData.style.length > 0 &&
									ThemeData.style.map((style, index) => {
										return (
											<option
												onClick={() => handleThemeStyle(style)}
												key={index}>
												{style}
											</option>
										);
									})}
							</select>
						</div>
					</>
				)}
				<strong className='subtitle'>Mode contrasté</strong>
				<ul className='list-inline list-style list-bg-color'>
					<li className='dark'>
						<Link to='#' className='btn dark' onClick={() => handleThemeMode('theme-dark')}>
							dark
						</Link>
					</li>
					<li className='light'>
						<Link to='#' className='btn add' onClick={() => handleThemeMode('theme-light')}>
							light
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ThemePicker;
