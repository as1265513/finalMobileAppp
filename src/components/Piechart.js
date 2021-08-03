import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const Piechart = ({ reviews }) => {
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const oneStart = reviews?.filter((x) => x.rating === 1);
  const twoStart = reviews?.filter((x) => x.rating === 2);
  const threeStart = reviews?.filter((x) => x.rating === 3);
  const fourStart = reviews?.filter((x) => x.rating === 4);
  const fiveStart = reviews?.filter((x) => x.rating === 5);

  const pieData = [
    {
      name: '5.0',
      population: fiveStart ? fiveStart.length : 0,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '4.0',
      population: fourStart ? fourStart.length : 0,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '3.0',
      population: threeStart ? threeStart.length : 0,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '2.0',
      population: twoStart ? twoStart.length : 0,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '1.0',
      population: oneStart ? oneStart.length : 0,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <View>
      <Text>Bezier Pie Chart</Text>

      <PieChart
        data={pieData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="20"
        absolute
      />
    </View>
  );
};

export default Piechart;
