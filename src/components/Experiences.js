import { ExperiencesData } from '../data/Experiences';

const Experiences = ({ color }) => {
	const ExpData = ExperiencesData(color);
	return (
		<>
			<hr />
			<div className='experiences' id='experiences'>
				<h4 className='experience-title'>Expériences Professionnelles</h4>
				<div className='cards-block'>
					{ExpData.length > 0 &&
						ExpData.map((experience, index) => {
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
			</div>
		</>
	);
};

export default Experiences;
