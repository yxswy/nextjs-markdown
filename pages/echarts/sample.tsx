import React, { createRef } from 'react'
import type { RefObject } from 'react'
import type { InferGetStaticPropsType } from 'next'
import * as echarts from 'echarts'

interface Props { }
interface State { }

class SampleEchart extends React.Component<Props, State> {

  private echartDom: RefObject<HTMLDivElement>
  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.echartDom = createRef<HTMLDivElement>()
  }

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return userAgent
  }

  componentDidMount() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.echartDom.current as HTMLElement);
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }

  render() {
    return (
      <div ref={this.echartDom} className="sample-echart"></div>
    )
  }
}

export default SampleEchart