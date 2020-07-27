import React, { useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';

export const EchartDefault = (props: {
  content?: { title?: string; data?: { value: number; name: string }[]; dataLabel?: string; minValue?: number; maxValue?: number };
  options?: any;
}) => {
  const content = props.content ?? { title: 'default', data: [], dataLabel: '', minValue: 0, maxValue: 0 };
  const title = content.title ?? 'default';
  const data = content.data ?? [];
  const dataLabel = content.dataLabel ?? '';
  const minValue = content.minValue ?? Math.min(...data.map((v: { name: string; value: number }) => v.value));
  const maxValue = content.maxValue ?? Math.max(...data.map((v: { name: string; value: number }) => v.value));

  const chart = useMemo(() => {
    return (
      <ReactEcharts
        option={{
          backgroundColor: '#2c343c',

          title: {
            text: title,
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },

          visualMap: {
            show: false,
            min: minValue,
            max: maxValue,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: dataLabel,
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: data.sort(function (a, b) {
                return a.value - b.value;
              }),
              roseType: 'radius',
              label: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              labelLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx: any) {
                return Math.random() * 200;
              }
            }
          ]
        }}
      />
    );
  }, [title, data, dataLabel, minValue, maxValue]);
  return <React.Fragment>{chart}</React.Fragment>;
};

export const EchartSkills = (props: {
  content?: { title?: string; legends?: string[]; indicators?: { text: string; max: number }[]; data?: { value: number[]; legendName: string }[] };
}) => {
  const content = props.content ?? { title: '', legends: [], indicators: [], data: [] };
  const title = content.title ?? '';
  const legends = content.legends ?? [];
  const indicators = content.indicators ?? [];
  const data = content.data ?? [];

  const chart = useMemo(() => {
    return (
      <ReactEcharts
        option={{
          title: {
            text: title
          },
          tooltip: {
            trigger: 'item'
            // formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            data: legends
          },
          radar: [
            {
              indicator: indicators,
              center: ['50%', '50%'],
              radius: 80
            }
          ],
          series: [
            {
              type: 'radar',
              radarIndex: 0,
              areaStyle: {},
              data: data.map((v: { value: number[]; legendName: string }) => {
                return { value: v.value, name: v.legendName };
              })
            }
          ]
        }}
      />
    );
  }, [data, title, indicators, legends]);
  return <React.Fragment>{chart}</React.Fragment>;
};

interface Link {
  name: string;
  weight: number;
}
interface Graph {
  name: string;
  value: number;
  children: Link[];
}
interface GraphData {
  name: string;
  value: number;
  x: number;
  y: number;
}
interface GraphLink {
  source: string;
  target: string;
  lineStyle?: { width?: number; curveness?: number };
}
const getGrapthData = (graph: Graph[]) => {
  let tempData: GraphData[] = [];
  let tempLink: GraphLink[] = [];

  let tempPosLink: any[] = [];
  let tempPosNodes: any[] = [];
  graph.forEach((v: Graph) => {
    if (!tempPosNodes.includes(v.name)) {
      tempPosLink.push(v.name);
      tempData.push({ name: v.name, value: v.value, x: 0, y: 0 });
    }
    v.children.forEach((link: Link) => {
      if (!tempPosLink.includes(`${v.name}>${link.name}`)) {
        tempPosLink.push(`${v.name}>${link.name}`);

        tempLink.push({
          source: v.name,
          target: link.name,
          lineStyle: { curveness: tempPosLink.includes(`${link.name}>${v.name}`) ? 0.1 : 0, width: link.weight }
        });
      }
    });
  });
  return { data: tempData, links: tempLink };
};

export const EchartGraph = (props: {}) => {
  const graph: Graph[] = [
    {
      name: 'ax',
      value: 5,
      children: [
        { name: 'az', weight: 1 },
        { name: 'av', weight: 2 },
        { name: 'ac', weight: 2 }
      ]
    },
    {
      name: 'az',
      value: 5,
      children: [
        { name: 'av', weight: 1 },
        { name: 'ac', weight: 1 },
        { name: 'ax', weight: 4 }
      ]
    },
    { name: 'ac', value: 5, children: [] },
    { name: 'av', value: 5, children: [] }
  ];

  let { data, links } = getGrapthData(graph);

  const chart = useMemo(() => {
    return (
      <ReactEcharts
        option={{
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {},
          animationDurationUpdate: 500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 20,
              roam: true,
              label: {
                show: true
              },
              edgeSymbol: [ 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 20
              },
              force: {
                repulsion: 1000
              },
              data: [
                {
                  name: 'ax',
                  value: 2,
                  draggable: true
                },
                {
                  name: 'az'
                },
                {
                  name: 'ac'
                },
                {
                  name: 'av'
                }
              ],
              // links: [],
              links: [
                {
                  source: 0,
                  target: 1,
                  symbolSize: [5, 20],
                  label: {
                    show: true
                  },
                  lineStyle: {
                    width: 5,
                    curveness: 0.1
                  }
                },
                {
                  source: 'az',
                  target: 'ax',
                  lineStyle: {
                    curveness: 0.1
                  }
                },
                {
                  source: 'ax',
                  target: 'ac'
                },
                {
                  source: 'az',
                  target: 'ac',
                  lineStyle: {
                    curveness: -0.1
                  }
                },
                {
                  source: 'az',
                  target: 'av'
                },
                {
                  source: 'ax',
                  target: 'av'
                }
              ],
              lineStyle: {
                opacity: 0.9,
                width: 1,
                curveness: 0
              }
            }
          ]
        }}
      />
    );
  }, []);
  return <React.Fragment>{chart}</React.Fragment>;
};
