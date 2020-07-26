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
