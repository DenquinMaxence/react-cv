import { Link } from 'react-router-dom';
import Profil from '../media/profil.png';

const Home = () => {
	return (
		<div className='main'>
			<div className='left-part'>
				<div className='profil-header'></div>
				<div className='home-background'></div>
				<div className='profil-pic'>
					<img src={Profil} alt='profil-pic' />
				</div>
				<div className='profil-content'>
					<h2 className='profil-name'>Maxence Denquin</h2>
					<span className='profil-description'>Développeur web full-stack</span>
					<div className='profil-about'>
						<div>
							<box-icon name='calendar' flip='horizontal' color='#3991a5' />
							<span>09/09/2000</span>
						</div>
						<div>
							<box-icon name='phone' type='solid' flip='horizontal' color='#3991a5' />
							<span>
								<a href='tel:+06.77.59.83.10'>06.77.59.83.10</a>
							</span>
						</div>
						<div>
							<box-icon name='home' type='solid' flip='horizontal' color='#3991a5' />
							<span>Outreau, 62230</span>
						</div>
						<div>
							<box-icon name='envelope' color='#3991a5' />
							<span>
								<a href='mailto:denquin.maxence.pro@gmail.com'>Me contactez</a>
							</span>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='card'>
						<Link to='#about' className='subcard'>
							<box-icon name='package' size='lg' color='white'></box-icon>
							<span>À propos</span>
						</Link>
						<Link to='#experiences' className='subcard'>
							<box-icon name='briefcase' size='lg' color='white'></box-icon>
							<span>Expériences</span>
						</Link>
						<Link to='#formation' className='subcard'>
							<box-icon name='code-block' size='lg' color='white'></box-icon>
							<span>Formations</span>
						</Link>
						<Link to='#skills' className='subcard'>
							<box-icon name='folder-plus' size='lg' color='white'></box-icon>
							<span>Compétences</span>
						</Link>
					</div>
				</div>
			</div>
			<div className='right-part'>
				<div className='header'>
					<h3 className='job-title'>Développeur web full-stack</h3>
					<div id='about' className='about'>
						<h3 className='about-title'>À propos</h3>
						<p className='about-text'>
							Passionné par le développement informatique des des années, mon ambition
							serait que ma passion devienne mon métier. Évoluer au fil des
							technologies en concrétisant les acquis tout en s'ouvrant sur les
							nouveaux outils et pour moi la chose la plus passionnante et
							intéressante à faire dans ce domaine.
						</p>
					</div>
					<hr />
					<div className='experiences'>
						<h4 className='experience-title'>Expériences Professionnelles</h4>
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">Développeur full-stack</h3>
								<h4 className="card-subtitle">Simplon.co</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
