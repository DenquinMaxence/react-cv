import Experiences from '../components/Experiences';
import Formations from '../components/Formations';
import Skills from '../components/Skills';
import Profil from '../media/profil.webp';
import { BiPackage, BiCodeBlock } from 'react-icons/bi';
import {
	FaCalendarAlt,
	FaPhone,
	FaHome,
	FaEnvelope,
	FaBriefcase,
	FaFolderPlus,
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

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
							<FaCalendarAlt className='icon fa-calendar-alt' size='20' />
							<span className='text'>09/09/2000</span>
						</div>
						<div>
							<FaPhone className='icon fa-phone' size='20' />
							<span className='text'>
								<a href='tel:+06.77.59.83.10'>06.77.59.83.10</a>
							</span>
						</div>
						<div>
							<FaHome className='icon fa-home' size='20' />
							<span className='text'>Outreau, 62230</span>
						</div>
						<div>
							<FaEnvelope className='icon fa-envelope' size='20' />
							<span className='text'>
								<a href='mailto:denquin.maxence.pro@gmail.com'>Me contactez</a>
							</span>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='card'>
						<HashLink to='#about' className='subcard'>
							<BiPackage size='48' />
							<span>À propos</span>
						</HashLink>
						<HashLink to='#experiences' className='subcard'>
							<FaBriefcase size='48' />
							<span>Expériences</span>
						</HashLink>
						<HashLink to='#formations' className='subcard'>
							<BiCodeBlock size='48' />
							<span>Formations</span>
						</HashLink>
						<HashLink to='#skills' className='subcard'>
							<FaFolderPlus size='48' />
							<span>Compétences</span>
						</HashLink>
					</div>
				</div>
			</div>
			<div className='right-part'>
				<div className='header'>
					<h3 className='job-title'>Développeur web full-stack</h3>
					<div id='about' className='about'>
						<h3 className='about-title'>À propos</h3>
						<p className='about-text'>
							Passionné par le développement informatique depuis des années, mon
							ambition serait que ma passion devienne mon métier. Évoluer au fil des
							technologies en concrétisant les acquis tout en s'ouvrant sur les
							nouveaux outils et pour moi la chose la plus passionnante et
							intéressante à faire dans ce domaine.
						</p>
					</div>
					<Experiences />
					<Formations />
					<Skills />
				</div>
			</div>
		</div>
	);
};

export default Home;
