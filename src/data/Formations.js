import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const FormationsData = (color) => {
	return [
		{
			title: "Concepteur développeur d'applications",
			subtitle: 'simplon.co',
			date: 'Septembre 2021 - Juillet 2022',
			date_icon: <FaCalendarAlt className='fa-calendar-alt' />,
			location: '62200 Boulogne-sur-Mer',
			location_icon: <FaMapMarkerAlt className='fa-map-marker-alt' />,
		},
		{
			title: 'Développeur Web & Web mobile',
			subtitle: 'simplon.co',
			date: 'Mai 2020 - Décembre 2020',
			date_icon: <FaCalendarAlt className='fa-calendar-alt' />,
			location: '62200 Boulogne-sur-Mer',
			location_icon: <FaMapMarkerAlt className='fa-map-marker-alt' />,
		},
	];
};
