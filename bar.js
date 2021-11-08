d3.csv("timespent.csv", function(d) {
  return {
    task: d["task"],
    time: d["timespent"]
  }
}).then(function(wdata) {

  console.log(wdata);
  let max = 180;
  var w = 800;
  var h = 500;
  const margin = { top : 0, bottom : 20, left : 50, right : 20}
  const innerWidth = w - margin.left - margin.right;
  const innerHeight = h - margin.top - margin.bottom;


  let svg = d3.select("svg")
          .attr("width", w)
          .attr("height", h);
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

  let catScale = d3.scaleOrdinal(d3.schemeCategory10) 

  function drawBars(dataset, barPadding){
    let xScale = d3.scaleBand()
        .domain(dataset.map(d => d.task))   // Data space
        .range([0, innerWidth]); // Pixel space
    let yScale = d3.scaleLinear()
        .domain([0, max])   // Data space
        .range([innerHeight, 0]); // Pixel space


    var xAxis = d3.axisBottom(xScale);

    var yAxis = d3.axisLeft(yScale);
    g.append('g').call(d3.axisLeft(yScale));
    g.append('g').call(d3.axisBottom(xScale))
      .attr('transform', `translate(0,${innerHeight})`); // move axis to bottom


    let rects = g.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect");

    rects.attr("x", function(d) {
      return xScale(d.task)+30; //not sure why i need + 30 here (i think it has to do with barwidth func )
      })
      .attr("y", function(d){
        console.log(d.time)
        console.log(yScale(d.time))
        return yScale(d.time)
      })
      .attr("height",function(d){
        return innerHeight - yScale(d.time);
      })
      .attr("width", innerWidth / dataset.length - barPadding) // this is problematic
      .attr("fill",function(d){
        return catScale(d.task);
      })
}

function drawScale(){
  svg.append("g")
  .attr("class", "colorLegend")
  .attr("transform", `translate(100,00)`);
  let colorLegend = d3.legendColor()
    .shapeWidth(60)
    .orient('horizontal')
    .cells(5)
    .scale(catScale);
  svg.select(".colorLegend")
    .call(colorLegend);
  
  
}

  drawBars(wdata, 60);
  drawScale();
  var labelx = svg.append("text")
                  .attr("transform", "translate(20,300)rotate(-90)" )
                  .text("Time spent in minutes")

    
});
