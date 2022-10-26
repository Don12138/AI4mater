import * as echarts from 'echarts';
import { dataTool } from 'echarts';
import * as web from "../../../utils/web";
const baseConfig ={ baseURL: "http://58.199.168.36:5000/", timeout: 60000 };
const a = new web.Request(baseConfig)

const data = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      title: {
          text: '半小时内系统状态图'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data: ['CPU', 'MEM']
      },
      toolbox: {
          feature: {
              saveAsImage: {
                  show: true,
                  title: 'Save As Image'
              },
              dataView: {
                  show: true,
                  title: 'Data View'
              },
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'value',
              boundaryGap: false,
              min:0,
              max:30
          }
      ],
      yAxis: [
          {
              type: 'value',
              min:0,
              max:100
          }
      ],
      series: [
          {
              name: 'CPU',
              type: 'line',
              smooth: true,
              showSymbol: false,
              emphasis: {
                  focus: 'series'
              },
              blur,
              data:[
                4,
                1,
                2,
                1,
                1,
                2,
                2,
                2,
                1,
                4,
                1,
                1,
                1,
                4,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                4,
                1,
                1,
                4,
                1,
                4,
                4,
                7,
                0,
                2,
                4,
                2,
                2,
                2,
                1,
                1,
                1,
                4,
                5,
                5,
                2,
                2,
                4,
                0,
                4,
                1,
                1,
                5,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                7,
                1,
                5,
                1,
                10,
                1,
                1,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                7,
                5,
                7,
                11,
                11,
                2,
                5,
                1,
                2,
                2,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                0,
                2,
                2,
                5,
                10,
                10,
                1,
                4,
                1,
                8,
                2,
                2,
                15,
                1,
                1,
                1,
                1,
                1,
                2,
                7,
                4,
                13,
                5,
                7,
                8,
                5,
                7,
                8,
                1,
                12,
                7,
                4,
                7,
                1,
                2,
                2,
                1,
                2,
                1,
                1,
                1,
                2,
                1
            ]
          
          }
      ]
  };
var result = a.get("get_pre_30_min").then(res => {
    data.series[0].data=data.series[0].data.concat(res.data.result)
    console.log(data.series[0].data)
})

console.log(data.series[0].data)
export default data