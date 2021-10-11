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
	const [themeColorHexa, setThemeColorHexa] = useState(
		localStorage.getItem('themeColorHexa') ? localStorage.getItem('themeColorHexa') : '#3991a5'
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
		localStorage.setItem('themeColor', color);
	};

	const handleThemeColorHexa = (colorHexa) => {
		setThemeColorHexa(colorHexa);
		localStorage.setItem('themeColorHexa', colorHexa);
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
		const mainBlock = document.querySelector('.main');
		if (mainBlock) {
			const oldThemeColor = mainBlock.classList[1] ? mainBlock.classList[1] : '';

			if (oldThemeColor === '') {
				mainBlock.classList.add(themeColor);
			} else {
				mainBlock.classList.remove(oldThemeColor);
				mainBlock.classList.add(themeColor);
			}
			handleThemeColorHexa(
				getComputedStyle(mainBlock).getPropertyValue('--background-theme')
			);

			themeDark === 'true'
				? mainBlock.classList.add('theme-dark')
				: mainBlock.classList.remove('theme-dark');
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
					<box-icon
						name='cog'
						type='solid'
						animation='spin'
						flip='horizontal'
						color={themeColorHexa}
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