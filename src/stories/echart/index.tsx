import React, { useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';

export const EchartDefault = (props: {
  content?: {
    title?: string;
    data?: { value: number; name: string }[];
    dataLabel?: string;
    minValue?: number;
    maxValue?: number;
  };
  options?: any;
}) => {
  const content = props.content ?? {
    title: 'default',
    data: [],
    dataLabel: '',
    minValue: 0,
    maxValue: 0
  };
  const title = content.title ?? 'default';
  const data = content.data ?? [];
  const dataLabel = content.dataLabel ?? '';
  const minValue =
    content.minValue ?? Math.min(...data.map((v: { name: string; value: number }) => v.value));
  const maxValue =
    content.maxValue ?? Math.max(...data.map((v: { name: string; value: number }) => v.value));

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
  content?: {
    title?: string;
    legends?: string[];
    indicators?: { text: string; max: number }[];
    data?: { value: number[]; legendName: string }[];
  };
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
export interface Graph {
  name: string;
  value: number;
  children: Link[];
}
interface GraphData {
  name: string;
  value: number;
  draggable?: boolean;
}
interface GraphLink {
  source: string;
  target: string;
  value: number;
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
      tempData.push({ name: v.name, value: v.value, draggable: true });
    }
    v.children.forEach((link: Link) => {
      if (!tempPosLink.includes(`${v.name}>${link.name}`)) {
        tempPosLink.push(`${v.name}>${link.name}`);

        tempLink.push({
          source: v.name,
          target: link.name,
          lineStyle: {
            curveness: tempPosLink.includes(`${link.name}>${v.name}`) ? 0.5 : 0,
            width: link.weight
          },
          value: link.weight
        });
      }
    });
  });
  return { data: tempData, links: tempLink };
};

export const EchartGraph = (props: { content?: { title?: string; data?: Graph[] } }) => {
  const content = props.content ?? { title: '', data: [] };
  const title = content.title ?? '';
  const graphData = content.data ?? [];

  let { data, links } = getGrapthData(graphData);

  const chart = useMemo(() => {
    return (
      <ReactEcharts
        option={{
          title: {
            text: title
          },
          tooltip: {},
          animationDurationUpdate: 500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 40,
              roam: true,
              label: {
                show: true
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 20
              },
              force: {
                repulsion: 1000,
                // gravity: 0.1,
                edgeLength: 100
              },
              data: data,
              // links: [],
              links: links,
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
  }, [data, links, title]);
  return <React.Fragment>{chart}</React.Fragment>;
};

export const EchartNetwork = (props: { content?: { title?: string; data?: Graph[] } }) => {
  const content = props.content ?? { title: '', data: [] };
  const title = content.title ?? '';
  const graphData = content.data ?? [];
  const filtedData = graphData.filter((data) =>
    /node[0-9]*|output[0-9]*|input[0-9]*/gm.test(data.name)
  );
  let { data, links } = getGrapthData(filtedData);
  const input = data
    .filter((record) => /input[0-9]/gm.test(record.name))
    .map((record, index) => {
      return { ...record, x: 400, y: index * 20 };
    });
  const nodes = data
    .filter((record) => /node[0-9]/gm.test(record.name))
    .map((record, index) => {
      return { ...record, x: 420, y: index * 20 };
    });
  const output = data
    .filter((record) => /output[0-9]/gm.test(record.name))
    .map((record, index) => {
      return { ...record, x: 440, y: index * 20 };
    });
  data = [...input, ...nodes, ...output];
  const chart = useMemo(() => {
    return (
      <ReactEcharts
        option={{
          title: {
            text: title
          },
          tooltip: {},
          animationDurationUpdate: 500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 40,
              roam: true,
              label: {
                show: true
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 20
              },
              force: {
                repulsion: 1000,
                edgeLength: 100
              },
              data: data,
              links: links,
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
  }, [title, data, links]);
  return <React.Fragment>{chart}</React.Fragment>;
};
