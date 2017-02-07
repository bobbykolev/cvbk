import React from 'react';
import Card from './Card';

const Project = (props) => {
	function getDefaultObject () {
		return {
			"name": "",
			"description": "",
			"resources": {
				"links": {
					"code": null,
					"demo": ""
				},
				"images": [
				]
			},
			"technologies": [
			],
			"role": "",
			"workId": null
		};
	}

	function renderProject (data, colors) {
		let result = [];

		for (let i = 0; i < data.length; i++) {
			result.push(
				<div key={'pr' + i}>
					{data[i].name}
				</div>
			);
		}

		return result;
	}

	return (
		<div>
			{renderProject(props.data)}
		</div>
	);
};

export default Project;