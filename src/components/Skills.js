import React from 'react';
import SkillChart from './SkillChart';
import Card from './Card';

const Skills = (props) => {
	let red = '231, 76, 60', 
		green = '167, 197, 32', 
		blue = '52, 152, 219';

	function getDefaultDataset () {
		return {
            label: "",
            backgroundColor: [
                
            ],
            borderColor: [
                
            ],
            borderWidth: 1,
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

	function getOthers(data) {
		let result = [];

		data.map(function(item, index){
			if (!item.strength) {
				result.push(index == props.data.skills.other.length - 1 ? <span key={'osk' + index}>{item.name}</span> : <span key={'osk' + index}>{item.name+ ', '}</span>);
			}
		});

		return result;
	}

	return (
		<div>
			<Card title={'Front-end Skills'}  color={'blue'}>
			  <SkillChart data={frontendSkills} type={'bar'} />
			</Card>
			<Card title={'Back-end Skills'} color={'blue'}>
			  <SkillChart data={backendSkills} type={'polar'} />
			</Card>

			<Card title={'Other Skills'} color={'blue'}>
			  <SkillChart data={otherSkills} type={'bar'} />
			</Card>

			<Card title={'and more...'} color={'blue'}>
			  <p className="more-items">
				{getOthers(props.data.skills.other)}
			  </p>
			</Card>
		</div>
	);
};

export default Skills;