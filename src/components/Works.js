import React from 'react';
import Card from './Card';

const Projects = (props) => {
	function getElements (data) {
		let result = [];

		for (let i = data.length - 1; i >= 0 ; i--) {
			result.push(
				<li key={'w' + i}>
					<h4>
						{data[i].name}
					</h4>
					<div className="years">
						{data[i].years}
					</div>
					<div>
						{data[i].position}
					</div>
				</li>
			);	
		}

		return result;
	}

	return (
		<div className="work">
			<Card title={'Work Experience'} color={'blue2'}>
				<ul>
					{getElements(props.data.work)}
				</ul>
			</Card>
		</div>
	);
};

export default Projects;