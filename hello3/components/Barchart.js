import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Barchart = ({ reviews }) => {
  const [labelList, setLabelList] = useState([]);
  const [dataList, setDataList] = useState([1, 5]);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const labelArr = [];
      reviews.forEach((x) => {
        x?.user?.name && labelArr.push(x?.user?.name);
      });
      labelArr && setLabelList(labelArr);

      const dataArr = [];
      reviews.forEach((x) => {
        x?.rating && dataArr.push(x?.rating);
      });
      dataArr && setDataList([...dataArr]);
    }
  }, [reviews]);

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const data = {
    labels: labelList,
    datasets: [
      {
        data: dataList,
      },
      {
        data: [1, 5],
      },
    ],
  };
  return (
    <View>
      <Text>Bezier Bar Chart</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width * 0.9}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Barchart;
