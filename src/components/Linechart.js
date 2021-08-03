import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const CustomLineChart = ({ reviews }) => {
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

  const line = {
    labels: labelList,
    datasets: [
      {
        data: [1, 5],
        color: (opacity = 1) => `transparent`,
        strokeWidth: 1, // optional
      },
      {
        data: dataList,
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={line}
        withDots={false}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        withShadow={false}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CustomLineChart;
