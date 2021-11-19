import LogoWampServer from '../media/logo_wampserver.webp';
import LogoHeidiSQL from '../media/logo_heidisql.webp';
import {
	FaHtml5,
	FaCss3Alt,
	FaPhp,
	FaJs,
	FaSass,
	FaSymfony,
	FaNodeJs,
	FaReact,
	FaGitAlt,
	FaNpm,
	FaVuejs,
} from 'react-icons/fa';
import { SiRedux, SiVisualstudiocode, SiMongodb, SiMysql } from 'react-icons/si';

export const SkillsData = [
	{
		name: 'Langages',
		data: [
			{
				title: 'Html 5',
				icon: <FaHtml5 size='48' color='#dd4b25' />,
				width: '100%',
			},
			{
				title: 'Css 3',
				icon: <FaCss3Alt size='48' color='#254bdd' />,
				width: '100%',
			},
			{
				title: 'Php',
				icon: <FaPhp size='48' color='#7377ad' />,
				width: '80%',
			},
			{
				title: 'Javascript',
				icon: <FaJs size='48' color='#efd81d' />,
				width: '80%',
			},
			{
				title: 'Sass',
				icon: <FaSass size='48' color='#c76293' />,
				width: '70%',
			},
			{
				title: 'NodeJs',
				icon: <FaNodeJs size='48' color='#509941' />,
				width: '70%',
			},
		],
	},
	{
		name: 'Frameworks / Bibliothèques',
		data: [
			{
				title: 'Symfony 4',
				icon: <FaSymfony className="fa-symfony" size='48' color='#000000' />,
				width: '70%',
			},
			{
				title: 'ReactJs',
				icon: <FaReact size='48' color='#5ed3f3' />,
				width: '50%',
			},
			{
				title: 'Redux',
				icon: <SiRedux size='48' color='#7248b6' />,
				width: '50%',
			},
			{
				title: 'Vue.Js',
				icon: <FaVuejs size='48' color='#33475b' />,
				width: '10%',
			},
			{
				title: 'Mongoose',
				icon: <SiMongodb size='48' color='#12964d' />,
				width: '50%',
			},
			{
				title: 'MySQL2 (NodeJs)',
				icon: <SiMysql size='48' color='#005e86' />,
				width: '90%',
			},
		],
	},
	{
		name: 'Outils',
		data: [
			{
				title: 'Git',
				icon: <FaGitAlt size='48' color='#e94e31' />,
				width: '75%',
			},
			{
				title: 'Visual Studio Code',
				icon: <SiVisualstudiocode size='48' color='#46a9f0' />,
				width: '90%',
			},
			{
				title: 'WampServer',
				icon: (
					<img src={LogoWampServer} alt='logo-wampserver' width='48px;' height='48px;' />
				),
				width: '90%',
			},
			{
				title: 'HeidiSQL (MySQL)',
				icon: <img src={LogoHeidiSQL} alt='logo-heidisql' width='48px;' height='48px;' />,
				width: '100%',
			},
			{
				title: 'MongoDB Compass',
				icon: <SiMongodb size='48' color='#12964d' />,
				width: '75%',
			},
			{
				title: 'NPM',
				icon: <FaNpm size='48' color='#CD3738' />,
				width: '75%',
			},
		],
	},
];
