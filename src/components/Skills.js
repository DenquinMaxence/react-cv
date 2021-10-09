import { SkillsData } from '../data/Skills';

const Skills = () => {
	return (
		<>
			<hr />
			<div className='skills' id="skills">
				<h4 className='skill-title'>Compétences</h4>
				<div className='cards-block'>
					{SkillsData.length > 0 &&
						SkillsData.map((category, index) => {
							return (
								<div className='card' key={index}>
									<h4 className='skill-subtitle'>{category.name}</h4>
									{category.data.map((item, index) => {
										return (
											<div className='card-body' key={index}>
												<div className='card-img'>{item.icon}</div>
												<div className='progressbar'>
													<h5 className='card-title'>{item.title}</h5>
													<div className='progressbar-block progressbar-moved'>
														<div className='progressbar-set'></div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default Skills;
