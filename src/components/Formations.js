import { FormationsData } from '../data/Formations';

const Formations = () => {
	return (
		<>
			<hr />
			<div className='formations' id="formations">
				<h4 className='formation-title'>Formations</h4>
				<div className='cards-block'>
					{FormationsData.length > 0 &&
						FormationsData.map((formation, index) => {
							return (
								<div className='card' key={index}>
									<div className='card-body'>
										<h3 className='card-title'>{formation.title}</h3>
										<h4 className='card-subtitle'>{formation.subtitle}</h4>
										<div className='card-infos'>
											<ul>
												<li>
													{formation.date_icon}
													{formation.date}
												</li>
												<li>
													{formation.location_icon}
													{formation.location}
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

export default Formations;
