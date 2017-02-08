import React from 'react';
import Card from './Card';
import Project from './Project';

const Projects = (props) => {
	//todo: extract into config
	let breakPoind = 1500,
		largeRes = props.windowWidth > breakPoind; 

	function getProjectElements (data, from, to) {
		let result = [],
			i = from;

		for (i; i < to; i++) {
			result.push(
				<Card title={data[i].name} color={'green'} key={'prj' + i}>
					<Project data={data[i]} />
				</Card>
			);
		}

		return result;
	}

	function getLeftColumn (data) {
		return getProjectElements(data, 0, largeRes ? Math.floor(data.length/2) : data.length);
	}

	function getRightColumn (data) {
		return getProjectElements(data, largeRes ? data.length - Math.ceil(data.length/2) : data.length, data.length);
	}

	return (
		<div className="porjects">
			<div className={largeRes ? 'cards-container' : ''}>
				<div>
					{getLeftColumn(props.data.projects)}
				</div>
				<div>
					{getRightColumn(props.data.projects)}
				</div>
			</div>
		</div>
	);
};

export default Projects;