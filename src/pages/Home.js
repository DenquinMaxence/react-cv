import { useState } from 'react';
import ParticlesBg from 'particles-bg';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [theme, setTheme] = useState('cobweb');

	const themeList = [
		'color',
		'ball',
		'lines',
		'thick',
		'circle',
		'cobweb',
		'polygon',
		'square',
		'tadpole',
		'fountain',
		'random',
		'list',
	];
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

	return (
		<div className='main'>
			{isDesktopOrLaptop && <ParticlesBg type={theme} bg={true} />}
			<Sidebar />
			<div className='theme-selector'>
				<select name='' id='' >
					{themeList.map((themea) => {
						return (<option onClick={() => setTheme(themea)}>{themea}</option>)
					})}
				</select>
			</div>
			<div className='left-part'>
				<div className='profil-pic'>
					<img src='./img/profil.png' alt='profil-pic' />
				</div>
				<div className='content'>
					<div className='informations'>
						<hr />
						<h1>Informations</h1>
						<p>
							<span className='label'>Nom & Prénom</span>
							<br />
							<span>Denquin Maxence</span>
						</p>
						<p>
							<span className='label'>Date de naissance</span>
							<br />
							<span>09 Septembre 2000, 21 ans</span>
						</p>
						<p>
							<span className='label'>Secteur</span>
							<br />
							<span>Boulogne-sur-Mer</span>
						</p>
						<p>
							<span className='label'>Situation</span>
							<br />
							<span>Célibataire</span>
						</p>
						<p>
							<span className='label'>Langues</span>
							<br />
							<span>Français - Langue maternelle</span>
							<br />
							<span>Anglais - Écrit et conversation</span>
						</p>
						<p>
							<span className='label'>Mobilités</span>
							<br />
							<span>Inscrit pour passer le code la route</span>
							<br />
							<span>Transport en commun, voiture</span>
						</p>
					</div>
					<div className='hobbies'>
						<hr />
						<h1>Centres d'intérêt</h1>
						<ul>
							<li>Jeux en réseau</li>
							<li>Développement informatique</li>
						</ul>
					</div>
					<div className='social'>
						<hr />
						<h1>Réseaux sociaux</h1>
						<ul>
							<li>
								Facebook :{' '}
								<a href='https://www.facebook.com/maxence.denquin.7/'>
									maxence.denquin7
								</a>
							</li>
							<li>
								LinkedIn :{' '}
								<a href='https://www.linkedin.com/in/maxence-denquin-2a12431b3/'>
									Maxence Denquin
								</a>
							</li>
							<li>
								Discord : <a href='https://discord.com/'>Kris Kaitch#7375</a>
							</li>
						</ul>
					</div>
					<div className='contact'>
						<hr />
						<h1>Contact</h1>
						<p>
							<span className='label'>Téléphone</span>
							<br />
							<span>06 77 59 83 10</span>
						</p>
						<p>
							<span className='label'>Email</span>
							<br />
							<span>denquin.maxence.pro@gmail.com</span>
						</p>
					</div>
				</div>
			</div>
			<div className='right-part'>
				<div className='header'>
					<h1>Développeur web junior</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
