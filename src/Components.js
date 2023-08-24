import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Components1 from '../src/components/Components1'
import After from'./components/After'
import Before from './components/Before';
import Pausetime from './components/Pausetime';

const Components = () => {
  const [datas1, setDatas1] = useState([]);
  const [datas2, setDatas2] = useState([]);
  const [datas3, setDatas3] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9090/high/Before')
      .then((response) => response.json())
      .then(data => {
        const mappedData1 = data.map(item =>{
            const timestamp = new Date(item.timestamp).getTime();
            const occu =item.occupancy;
             return [timestamp,occu]
             
        });
        //  console.log(data)
        console.log("brfore",mappedData1)
        setDatas1(mappedData1);
      });
      fetch('http://localhost:9090/high/After')
      .then((response) => response.json())
      .then(data => {
        const mappedData2 = data.map(item =>{
            const timestamp = new Date(item.timestamp).getTime();
            const occu1 =item.occupancy;
             return [timestamp,occu1]
             
        });
        console.log("after",mappedData2)
        setDatas2(mappedData2);
      });
      fetch('http://localhost:9090/high/Aggregation')
      .then((response) => response.json())
      .then(data => {
        const mappedData3 = data.map(item =>{
            const timestamp = new Date(item.timestamp).getTime();
            const occu2 =item.pauseTime;
             return [timestamp,occu2]
             
        });
        console.log("pausetime",mappedData3)
        setDatas3(mappedData3);
      });
  }, []);

  const options = {    
    chart: {
      type: 'line',
      zoomType: 'x',
      backgroundColor: '#FFFBFA',
      borderRadius: 8,
      
      plotBorderColor: 'red',
    },
    // title: {
    //   text: 'My stock chart',
    // },
    // xAxis: {
    //   type: 'datetime', // Specify datetime type for the x-axis
    // },
    // yAxis: {
    //   title: {
    //     text: 'Occupancy',
    //   },
    // },
    // tooltip: {
    //   valueDecimals:6, // Adjust the number of decimals as needed
    //   split: true,
    // },
    // series: [
    //   {
    //     name: 'Occupancy',
    //     color: 'green',
    //     data: datas,
    //   },
    // ],





   
      title: {
        text: 'USD to EUR exchange rate',
        style: {
          color: '#333333', // Title text color
          fontSize: '24px', // Title font size
        },
      },
      tooltip: {
        style: {
          width: '200px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Tooltip background color
        },
        valueDecimals: 4,
        shared: true,
        
      },
      rangeSelector: {
        buttons: [
            {
                type: 'hour',
                count: 1,
                text: '1h'
            },
            {
                type: 'day',
                count: 1,
                text: '1d'
            },
            {
                type: 'month',
                count: 1,
                text: '1m'
            },
            {
                type: 'year',
                count: 1,
                text: '1y'
            },
            {
                type: 'all',
                text: 'All'
            }
        ],
        inputEnabled: false,
        selected: 4
    },
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            color: '#666666', // X-axis label color
          },
        },
      },
      yAxis: {
        title: {
          text: 'Exchange rate',
          style: {
            color: '', // Y-axis title color
          },
        },
        labels: {
          style: {
            color: '#666666', // Y-axis label color
          },
        },
        // title: {
        //   text: 'Exchange rate',
        // },
      },

     
      series: [
        {
          name: 'USD to EUR1',
          type:'area',
          data: datas1,
          id: 'dataseries1',
          color:'blue',
         
         
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(30,190,255,0.5)"],
              [1, "rgba(30,190,255,0)"],
            ],
          },
        },
        {
          name: 'USD to EUR2',
          data: datas2,
          type:'area',
          id: 'dataseries2',
          color:'red',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(255,0, 0, 0.4)"],
              [1, "rgba(255,0, 0, 0)"],
            ],
          },
        },
        {
          name: 'PauseTime',
          data: datas3,
          type:'area',
          id: 'dataseries3',
          color:'green',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(0,255,0, 0.4)"],
              [1, "rgba(0,255, 0, 0)"],
            ],
          },
        },
      
      ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={options}
      />
      <Components1></Components1>
      <Before></Before>
      <After></After>
      <Pausetime></Pausetime>
    </div>
  );
};

export default Components;
