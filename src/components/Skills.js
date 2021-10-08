const Skills = () => {
	return (
		<>
			<hr />
			<div className='skills'>
				<h4 className='skill-title'>Compétences</h4>
				<div className='card'>
					<div className='card-body'>
						<div className='card-img'>
							<box-icon name='html5' type='logo' size='lg' color='#dd4b25' />
							HTML5
						</div>
						<div className='progressbar-block progressbar-moved'>
							<div className='progressbar-set' style={{ width: '35%' }}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
