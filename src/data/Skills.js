import LogoSymfony from '../media/logo_symfony.png';
import LogoWampServer from '../media/logo_wampserver.png';
import LogoHeidiSQL from '../media/logo_heidisql.png';
import LogoNPM from '../media/logo_npm.png';

export const SkillsData = [
	{
		name: 'Langages',
		data: [
			{
				title: 'Html 5',
				icon: <box-icon name='html5' type='logo' size='lg' color='#dd4b25' />,
				width: '100%',
			},
			{
				title: 'Css 3',
				icon: <box-icon name='css3' type='logo' size='lg' color='#254bdd' />,
				width: '100%',
			},
			{
				title: 'Php Procedural',
				icon: <box-icon name='php' type='logo' size='lg' color='#7377ad' />,
				width: '100%',
			},
			{
				title: 'Php Object',
				icon: <box-icon name='php' type='logo' size='lg' color='#7377ad' />,
				width: '100%',
			},
			{
				title: 'Javascript',
				icon: <box-icon name='javascript' type='logo' size='lg' color='#efd81d' />,
				width: '100%',
			},
		],
	},
	{
		name: 'Frameworks',
		data: [
			{
				title: 'Sass',
				icon: <box-icon name='sass' type='logo' size='lg' color='#c76293' />,
				width: '100%',
			},
			{
				title: 'Symfony 4',
				icon: <img src={LogoSymfony} alt='logo-symfony' width='48px;' height='48px;' />,
				width: '100%',
			},
			{
				title: 'NodeJs',
				icon: <box-icon name='nodejs' type='logo' size='lg' color='#509941' />,
				width: '100%',
			},
			{
				title: 'ReactJs',
				icon: <box-icon name='react' type='logo' size='lg' color='#5ed3f3' />,
				width: '100%',
			},
			{
				title: 'Redux',
				icon: <box-icon name='redux' type='logo' size='lg' color='#7248b6' />,
				width: '100%',
			},
		],
	},
	{
		name: 'Outils',
		data: [
			{
				title: 'Git',
				icon: <box-icon name='git' type='logo' size='lg' color='#e94e31' />,
				width: '100%',
			},
			{
				title: 'Visual Studio Code',
				icon: <box-icon name='visual-studio' type='logo' size='lg' color='#46a9f0' />,
				width: '100%',
			},
			{
				title: 'WampServer',
				icon: (
					<img src={LogoWampServer} alt='logo-wampserver' width='48px;' height='48px;' />
				),
				width: '100%',
			},
			{
				title: 'HeidiSQL',
				icon: <img src={LogoHeidiSQL} alt='logo-heidisql' width='48px;' height='48px;' />,
				width: '100%',
			},
			{
				title: 'NPM',
				icon: <img src={LogoNPM} alt='logo-npm' width='48px;' height='48px;' />,
				width: '100%',
			},
		],
	},
];
