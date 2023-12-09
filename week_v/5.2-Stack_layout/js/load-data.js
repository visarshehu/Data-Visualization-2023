// Load data
d3.csv("../data/data.csv", d3.autoType).then(data => {
  defineScales(data);
  drawDonutCharts(data);
  drawStackedBars(data);
  drawStreamGraph(data);
  addLegend();
});