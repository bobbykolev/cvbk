import React from 'react';
import {
    Bar,
    Polar
} from 'react-chartjs-2';

const SkillChart = (props) => {
    let barOpts = {
            animation: {
                duration: 2000
            },
            scales: {
                xAxes: [{
                    barThickness: 10,
                    gridLines: {
                        display: false,
                        color: "rgba(255,255,255,0.0)",
                        zeroLineColor: "rgba(255,255,255,0.0)"
                    },
                    ticks: {
                        fontColor: "#3498DB"
                    }
                }],
                yAxes: [{
                    barThickness: 10,
                    ticks: {
                        min: 0,
                        max: 5,
                        display: false
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
                onClick: (e) => e.stopPropagation()
            }
        },
        polarOpts = {
            animation: {
                duration: 2000
            },
            scales: {
                xAxes: [{
                    display: false,
                    ticks: {
                        min: 0,
                        max: 5
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        min: 0,
                        max: 5
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
            elements: {
                arc: {
                    borderColor: "#FFFFFF"
                }
            },
            legend: {
                onClick: (e) => e.stopPropagation()
            }
        };

    return ( <
        div > {
            props.type != 'polar' ? < Bar data = {
                props.data
            }
            options = {
                barOpts
            }
            /> : <Polar data={props.data} options={polarOpts} / >
        } <
        /div>
    );
};

export default SkillChart;