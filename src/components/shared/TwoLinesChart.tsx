import { VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from "victory";

const TwoLinesChart = ({ airport, data }) => {
  const legends = [
    { name: data[0].name, symbol: { fill: data[0].color } },
    { name: data[1].name, symbol: { fill: data[1].color } }
  ];

  return (
    <>
      <VictoryChart theme={VictoryTheme.material} scale={{ x: "time" }}>
        <VictoryLegend
          title={airport.desc}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ title: { fontSize: 20 } }}
          data={legends}
        />
        {data.map((source, i) => {
          return (
            <VictoryLine
              key={i}
              style={{
                data: { stroke: source.color },
                parent: { border: "1px solid #ccc" }
              }}
              data={source.data}
            />
          );
        })}
      </VictoryChart>
    </>
  );
};

export default TwoLinesChart;
