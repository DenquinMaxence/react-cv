import { ExperiencesData } from '../data/Experiences';

const Experiences = () => {
	return (
		<>
			<hr />
			<div className='experiences'>
				<h4 className='experience-title'>Expériences Professionnelles</h4>
				{ExperiencesData.length > 0 &&
					ExperiencesData.map((experience, index) => {
						return (
							<div className='card' key={index}>
								<div className='card-body'>
									<h3 className='card-title'>{experience.title}</h3>
									<h4 className='card-subtitle'>{experience.subtitle}</h4>
									<div className='card-infos'>
										<ul>
											<li>
												{experience.date_icon}
												{experience.date}
											</li>
											<li>
												{experience.location_icon}
												{experience.location}
											</li>
										</ul>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Experiences;
