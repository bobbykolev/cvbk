import React from 'react';
import SkillChart from './SkillChart';
import Card from './Card';

const Skills = (props) => {
	let red = '231, 76, 60', 
		green = '167, 197, 32', 
		blue = '52, 152, 219',
		breakPoind = 1250;

	function getDefaultDataset () {
		return {
            label: "",
            backgroundColor: [
                
            ],
            borderColor: [
                
            ],
            borderWidth: 2,
            data: [],
        };
	}

	function getDefaultObject () {
		return {
			labels: [],
	    	datasets: [
		    ]	
		};
	}

	function formatSkillData (data, types, colors) {
		let result = getDefaultObject();

		for (let i = 0; i < data.length; i++) {
			result.datasets.push(getDefaultDataset());

			for (let j = 0; j < data[i].length; j++) {
				if (data[i][j].strength) {
					result.labels.push(data[i][j].name);
					result.datasets[i].data.push(data[i][j].strength);
					result.datasets[i].backgroundColor.push('rgba(' + colors[i] + ', 0.'+ 2 * Math.floor(data[i][j].strength) + ')');
					result.datasets[i].borderColor.push('rgba(255,255,255, 1)');
				}
			}

			//result.datasets[i].label = types[i];
		}

		return result;
	}

	let frontendSkills = formatSkillData([props.data.skills.frontend], ['Front-end'], [blue]);
	let backendSkills = formatSkillData([props.data.skills.backend], ['Back-end'], [blue]);
	let otherSkills = formatSkillData([props.data.skills.other], ['Other'], [blue]);

	// let allSkills = formatSkillData(
	// 	[props.data.skills.frontend, props.data.skills.backend, props.data.skills.other], 
	// 	['Front-end', 'Back-end', 'Other'],
	// 	[red, green, blue]);

	function getOthers(data) {
		let result = [];

		data.map(function(item, index){
			if (!item.strength) {
				result.push(index == props.data.skills.other.length - 1 ? <span key={'osk' + index}>{item.name}</span> : <span key={'osk' + index}>{item.name+ ', '}</span>);
			}
		});

		return result;
	}

	/*if (props.windowWidth > breakPoind) {
		return (
			<div>
				<div className="cards-container">
					<Card title={'Front-end Skills'} color={'orange'}>
					  <SkillChart data={frontendSkills} type={'bar'} />
					</Card>
					<Card title={'Back-end Skills'} color={'orange'}>
					  <SkillChart data={backendSkills} type={'polar'} />
					</Card>
				</div>

				<div className="cards-container">
					<Card title={'Other Skills'} color={'orange'}>
					  <SkillChart data={otherSkills} type={'bar'} />
					</Card>

					<Card title={'More'} color={'orange'}>
					  <p className="more-items">
						{getOthers(props.data.skills.other)}
					  </p>
					</Card>
				</div>
			</div>
		);
	}*/

	return (
		<div>
			<Card title={'Front-end Skills'}  color={'orange'}>
			  <SkillChart data={frontendSkills} type={'bar'} />
			</Card>
			<Card title={'Back-end Skills'} color={'orange'}>
			  <SkillChart data={backendSkills} type={'polar'} />
			</Card>

			<Card title={'Other Skills'} color={'orange'}>
			  <SkillChart data={otherSkills} type={'bar'} />
			</Card>

			<Card title={'More'} color={'orange'}>
			  <p className="more-items">
				{getOthers(props.data.skills.other)}
			  </p>
			</Card>
		</div>
	);
};

export default Skills;