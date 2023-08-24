import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const Components1 = () => {
  const [datas1, setDatas1] = useState([]);
  const [datas2, setDatas2] = useState([]);
 

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
      title: {
        text: 'USD to EUR exchange rate Two in One',
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
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0.4 },
            stops: [
              [0, "rgba(30,190,255,0.5)"],
              [1, "rgba(30,190,255,0)"],
            ],
          },
        },
        {
          name: 'USD to EUR2',
          type:'area',
          data: datas2,
          id: 'dataseries2',
          
              color: 'red',
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "rgba(255,0, 0, 0.4)"],
                  [1, "rgba(255,0, 0, 0)"],
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
    </div>
  );
};

export default Components1;
