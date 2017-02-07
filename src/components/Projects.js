import React from 'react';
import Card from './Card';
import Project from './Project';

const Projects = (props) => {
	//todo: extract into config
	let breakPoind = 1500; 

	function getProjectElements (data, colors) {
		let result = [],
			largeRes = props.windowWidth > breakPoind;

		for (let i = 0; i < data.length; i++) {
			if (largeRes && i % 2 == 0 && data[i+1]) {
				result.push(
					<div className="cards-container" key={'prj' + i}>
						<Card title={data[i].name} color={'blue'}>
							<Project data={data[i]} />
						</Card>
						<Card title={data[i+1].name} color={'blue'}>
							<Project data={data[i+1]} />
						</Card>
					</div>
				);

				i++;
			} else {
				result.push(
					<Card title={data[i].name} color={'blue'} key={'prj' + i}>
						<Project data={data[i]} />
					</Card>
				);
			}
		}

		return result;
	}

	return (
		<div className="porjects">
			{getProjectElements(props.data.projects)}
		</div>
	);
};

export default Projects;