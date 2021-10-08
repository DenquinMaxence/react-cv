import { SkillsData } from '../data/Skills';

const Skills = () => {
	return (
		<>
			<hr />
			<div className='skills'>
				<h4 className='skill-title'>Compétences</h4>
				<div className='card'>
					<h4 className='skill-subtitle'>Langages et frameworks</h4>
					{SkillsData.languages_frameworks.length > 0 &&
						SkillsData.languages_frameworks.map((lang_fram, index) => {
							return (
								<div className='card-body' key={index}>
									<div className='card-img'>{lang_fram.icon}</div>
									<div className='progressbar'>
										<h5 className='card-title'>{lang_fram.title}</h5>
										<div className='progressbar-block progressbar-moved'>
											<div className='progressbar-set'></div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
				<div className='card'>
					<h4 className='skill-subtitle'>Outils</h4>
					{SkillsData.tools.length > 0 &&
						SkillsData.tools.map((tool, index) => {
							return (
								<div className='card-body' key={index}>
									<div className='card-img'>{tool.icon}</div>
									<div className='progressbar'>
										<h5 className='card-title'>{tool.title}</h5>
										<div className='progressbar-block progressbar-moved'>
											<div className='progressbar-set'></div>
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

export default Skills;
