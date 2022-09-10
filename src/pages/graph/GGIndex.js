// import React, { Component } from 'react';
// // import G2 from "@antv/g2"
// import createG2 from 'g2-react';
// import  G2 from 'g2';
// import {Card,Col,Row,Divider} from 'antd';
// import '@/css/graph/graph.less';
//
// let Stat = G2.Stat;
// const Line = createG2(chart => {
//     chart.legend(false);
//     chart.axis('item', {
//         title:null,
//         formatter(text, item, index) {
//             return(null)
//         },
//     });
//     chart.axis('count', {
//         title:null,
//         formatter(text, item, index) {
//             return(null)
//         },
//     });    // chart.legend({
//     //     position: 'bottom'
//     // });
//     // chart.axis('item', {
//     //     title: null,
//     // });
//     // chart.axis('count', {
//     //     titleOffset: 75,
//     //     // formatter: function (val) {
//     //     //     return val + '条';
//     //     // },
//     //     position: 'left'
//     // });
//     // chart.intervalStack().position('days*短信数量').color('时间', ['#00FF00', '#FF0000']).size(5);
//     chart
//         .intervalStack()
//         .position(Stat.summary.proportion('item*count'))
//         .color('item', ['#0000FF', '#0044FF', '#0088FF', '#00BBFF', '#00FFFF']);
//     chart.render();
// });
// const Pie = createG2(chart => {
//     // chart.legend({
//     //     position: ''
//     // });
//     chart.legend(false);
//     chart.coord('theta');//饼图
//     chart.intervalStack().position(Stat.summary.proportion('count')).color('item', ['#0000FF', '#0044FF', '#0088FF', '#00BBFF', '#00FFFF']);
//     chart.render();
// });
//
// const Point = createG2(chart=>{
//     chart.axis('year', {
//         title:null,
//         formatter(text, item, index) {
//             return(null)
//         },
//     });
//     chart.axis('value', {
//         title:null,
//         formatter(text, item, index) {
//             return(null)
//         },
//     });
//     // chart.axis('value', false);
//     chart.legend(false);
//     chart.line().position('year*value');
//     chart.point().position('year*value').size(4).shape('circle').style({
//         stroke: '#fff',
//         lineWidth: 1
//     });
//     chart.render();
// });
//
// const Donut = createG2(chart=>{
//     // chart.legend({
//     //     position: 'bottom'
//     // });
//     // chart.line().position('year*value');
//     // chart.point().position('year*value').size(4).shape('circle').style({
//     //     stroke: '#fff',
//     //     lineWidth: 1
//     // });
//     chart.legend(false);
//     chart.source();
//     chart.coord('theta', {
//         innerRadius: 0.6
//     });
//     chart.intervalStack().position('percent').color('item').label('percent', {
//         formatter: function formatter(val, item) {
//             return item.item + ': ' + val;
//         }
//     }).tooltip('item*percent', function(item, percent) {
//         percent = percent * 100 + '%';
//         return {
//             name: item,
//             value: percent
//         };
//     }).style({
//         lineWidth: 1,
//         stroke: '#fff'
//     });
//     chart.render();
// });
//
// class GGIndex extends Component {
//
//     componentDidMount(){
//         const e = document.createEvent("Event");
//         e.initEvent('resize', true, true);
//         window.dispatchEvent(e);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             params: [],
//             data: [{
//                 item: '事例一',
//                 count: 40,
//                 percent: 0.4,
//                 value:20,
//             }, {
//                 item: '事例二',
//                 count: 21,
//                 percent: 0.21,
//                 value:20,
//             }, {
//                 item: '事例三',
//                 count: 17,
//                 percent: 0.17,
//                 value:20,
//             }, {
//                 item: '事例四',
//                 count: 13,
//                 percent: 0.13,
//                 value:20,
//             }, {
//                 item: '事例五',
//                 count: 9,
//                 percent: 0.09,
//                 value:20,
//             }],
//             data1 : [{
//                 year: '1991',
//                 value: 3
//             }, {
//                 year: '1992',
//                 value: 4
//             }, {
//                 year: '1993',
//                 value: 3.5
//             }, {
//                 year: '1994',
//                 value: 5
//             }, {
//                 year: '1995',
//                 value: 4.9
//             }, {
//                 year: '1996',
//                 value: 6
//             }, {
//                 year: '1997',
//                 value: 7
//             }, {
//                 year: '1998',
//                 value: 9
//             }, {
//                 year: '1999',
//                 value: 13
//             }],
//             data2: [{
//                 item: '事例一',
//                 count: 40,
//                 percent: 0.4
//             }, {
//                 item: '事例二',
//                 count: 21,
//                 percent: 0.21
//             }, {
//                 item: '事例三',
//                 count: 17,
//                 percent: 0.17
//             }, {
//                 item: '事例四',
//                 count: 13,
//                 percent: 0.13
//             }, {
//                 item: '事例五',
//                 count: 9,
//                 percent: 0.09
//             }],
//             width: 1300,   // 固定宽度    当自适应宽度开启，此功能失效
//             forceFit: true, //forceFit自动试用宽度，默认false
//             height: 200,
//             plotCfg: {
//                 margin: [30, 40, 90, 80],
//                 background: {
//                     stroke: '#ccc', // 边颜色
//                     lineWidth: 1, // 边框粗细
//                 } // 绘图区域背景设置
//             }
//         };
//     }
//     // fetch(params = {}) {
//     //     auth.fetch('/message/getChart30DayMsg', params, (res) => {
//     //         this.setState({ loading: false });
//     //
//     //         if (res.result == "0") {
//     //             // console.log(res.data);
//     //             var Frame = G2.Frame;
//     //             var frame = new Frame(res.data.list);
//     //             frame = Frame.combinColumns(frame, ["成功", "失败"], '短信数量', '时间', 'days');
//     //             this.setState({
//     //                 data: frame
//     //             });
//     //
//     //         } else {
//     //             message.error(res.msg, 3);
//     //         }
//     //     });
//     // }
//
//
//
//     render() {
//         const mode1={//自适应大小1号
//             xs:{span:24,offset:0},
//             sm:{span:20,offset:2},
//             md:{span:12,offset:0},
//             lg:{span:8,offset:0},
//             xl:{span:6,offset:0},
//         }
//         const mode2={//自适应大小1号
//             xs:{span:24,offset:0},
//             sm:{span:24,offset:0},
//             md:{span:24,offset:0},
//             lg:{span:16,offset:0},
//             xl:{span:18,offset:0},
//         }
//         return (
//             <div>
//                 <Row gutter={16}>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>柱形图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Point
//                                 data={this.state.data1}
//                                 container={'mountNode'}
//                                 // height={window.innerHeight}
//                                 height={this.state.height}
//                                 width={this.state.width}
//                                 forceFit={true}  //设置为自适应宽度
//                             />
//                             <Divider>折线图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Pie
//                                 padding={[-10,-20,-10,-20]}
//                                 data={this.state.data}
//                                 width={this.state.width}
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}
//                                 // plotCfg={this.state.plotCfg}
//                                 ref="myChart"
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode2} >
//                         <div className={'card'}>
//                             <Point
//                                 data={this.state.data1}
//                                 container={'mountNode'}
//                                 // height={window.innerHeight}
//                                 height={this.state.height}
//                                 width={this.state.width}
//                                 forceFit={true}  //设置为自适应宽度
//                             />
//                             <Divider>折线图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Pie
//                                 data={this.state.data}
//                                 width={this.state.width}
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}
//                                 // plotCfg={this.state.plotCfg}
//                                 ref="myChart"
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row >
//                     <Col {...mode1}>
//                         <Card>
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card>
//                             <Pie
//                                 padding={[-10,-20,-10,-20]}
//                                 data={this.state.data}
//                                 width={this.state.width}
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}
//                                 // plotCfg={this.state.plotCfg}
//                                 ref="myChart"
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card>
//                             <Point
//                                 data={this.state.data1}
//                                 container={'mountNode'}
//                                 // height={window.innerHeight}
//                                 height={this.state.height}
//                                 width={this.state.width}
//                                 forceFit={true}  //设置为自适应宽度
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card >
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card>
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card >
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card>
//                             <Line
//                                 data={this.state.data} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                         <Card>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                         </Card>
//                     </Col>
//                     <Col {...mode1}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                     </Col>
//                     <Col {...mode1} >
//                         <div className={'card'}>
//                             <Donut
//                                 data={this.state.data2} //设置数据
//                                 width={this.state.width}  //设置forceFit=true 时 失效
//                                 // forceFit={this.state.forceFit}  //设置为自适应宽度
//                                 forceFit={true}  //设置为自适应宽度
//                                 height={this.state.height}  //设置高度
//                                 // plotCfg={this.state.plotCfg}  //设置配置
//                             />
//                             <Divider>饼图</Divider>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//         );
//     }
// }
//
// export default GGIndex;
