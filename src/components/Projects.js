import React from 'react';
import Card from './Card';
import Project from './Project';

const Projects = (props) => {
	function getProjectElements (data, colors) {
		let result = [];

		for (let i = 0; i < data.length; i++) {
			result.push(
				<Card title={data[i].name} color={'blue'} key={'prj' + i}>
					<Project data={data[i]} />
				</Card>
			);
		}

		return result;
	}

	return (
		<div>
			{getProjectElements(props.data.projects)}
		</div>
	);
};

export default Projects;