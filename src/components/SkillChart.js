import React from 'react';
import {
    HorizontalBar,
    Doughnut,
    defaults
} from 'react-chartjs-2';

const SkillChart = (props) => {
    //defaults.global.legend.display = false;

    let barOpts = {
            maintainAspectRatio: false,
            animation: {
                duration: 2000
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        min: 0,
                        max: 5,
                        fontColor: "#3498DB"
                    },
                    gridLines: {
                        display: false,
                        color: "rgba(255,255,255,0.0)",
                        zeroLineColor: "rgba(255,255,255,0.0)"
                    }
                }],
                yAxes: [{
                    barThickness: 8,
                    ticks: {
                        autoSkip: false,
                        fontColor: "#3498DB",
                        fontSize: 14
                    },
                    gridLines: {
                        display: false,
                        color: "rgba(255,255,255,0.0)",
                        zeroLineColor: "rgba(255,255,255,0.0)"
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    },
                    label: function(tooltipItem, data) {
                        let amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

                        return amount;
                    },
                    //footer: function(tooltipItem, data) {return '';}
                }
            },
            legend: {
                onClick: (e) => e.stopPropagation(),
                display: false
            }
        },
        polarOpts = {
            maintainAspectRatio: false,
            animation: {
                duration: 2000
            },
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,
                }]
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    },
                    label: function(tooltipItem, data) {
                        let amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

                        return amount;
                    },
                    //footer: function(tooltipItem, data) {return '';}
                }
            },
            elements: {
                arc: {
                    borderColor: "#FFFFFF"
                },

            },
            legend: {
                onClick: (e) => e.stopPropagation(),
                display: true
            }
        };

    return ( 
        <div className={props.data.labels && props.data.labels.length > 10 ? 'higher-bar' : 'bar'}> 
        {props.type != 'polar' ? <HorizontalBar data ={props.data} options={barOpts} /> : <Doughnut data={props.data} options={polarOpts} />} 
        </div>
    );
};

export default SkillChart;