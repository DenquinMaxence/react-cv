import { useState } from 'react';
import { ThemeData } from '../data/Theme';
import { useMediaQuery } from 'react-responsive';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';

const ThemePicker = () => {
	const [themePicker, setThemePicker] = useState(false);
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'cobweb'
	);
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });

	const showThemePicker = () => {
		const themePickerBox = document.querySelector('.theme-picker');
		themePickerBox.classList.toggle('active');
		setThemePicker(!themePicker);
	};

	const handleTheme = (themeSelected) => {
		setTheme(themeSelected);
		localStorage.setItem('theme', themeSelected);
	};

	return (
		<>
			{isDesktopOrLaptop && <ParticlesBg type={theme} bg={true} />}
			<div className='theme-picker'>
				<Link to='#' className='theme-picker-opener'>
					<box-icon
						name='cog'
						type='solid'
						animation='spin'
						flip='horizontal'
						color='#1DA0F0'
						onClick={showThemePicker}
					/>
				</Link>
				<strong className='title'>Theme Picker</strong>
				{isDesktopOrLaptop && (
					<>
						<strong className='subtitle'>Type de thème</strong>
						<select defaultValue={theme}>
							{ThemeData.map((themeSelector, index) => {
								return (
									<option onClick={() => handleTheme(themeSelector)} key={index}>
										{themeSelector}
									</option>
								);
							})}
						</select>
					</>
				)}
				<strong className='subtitle'>Mode contrasté</strong>
				<ul className='list-inline list-style list-bg-color'>
					<li className='dark'>
						<Link to='#' className='btn dark'>
							dark
						</Link>
					</li>
					<li className='light'>
						<Link to='#' className='btn add'>
							light
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ThemePicker;
