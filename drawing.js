
// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");
var w = window.innerWidth / 1.2;
var h = window.innerHeight / 1.7;
const margin = { top: 40, bottom: 60, left: 50, right: 50 }
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;
var svg = figure.append("svg")
    .attr("width", w)
    .attr("height", h);
var timespent = [
    {
        "task": "Work",
        "time": "28.5"
    },
    {
        "task": "Social",
        "time": "19.5"
    },
    {
        "task": "Home",
        "time": "16"
    },
    {
        "task": "Commuting",
        "time": "5.25"
    },
    {
        "task": "Self",
        "time": "4.5"
    },
    {
        "task": "Shopping",
        "time": "2"
    },
]
var classes = [
    {
        "task": "Data Viz",
        "time": "9.75"
    },
    {
        "task": "History",
        "time": "6"
    },
    {
        "task": "Philosophy",
        "time": "5.5"
    },
    {
        "task": "CS345",
        "time": "5.25"
    },
    {
        "task": "Personal",
        "time": "3"
    },
    
]
var calendarData = [
    {
        "date": "8/1/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/1/21",
        "dayOrNight": "night",
        "mood": "Groggy"
    },
    {
        "date": "8/2/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/2/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/3/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/3/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/4/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/4/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/5/21",
        "dayOrNight": "day",
        "mood": "Anxious"
    },
    {
        "date": "8/5/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/6/21",
        "dayOrNight": "day",
        "mood": "Anxious"
    },
    {
        "date": "8/6/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/7/21",
        "dayOrNight": "day",
        "mood": "Anxious"
    },
    {
        "date": "8/7/21",
        "dayOrNight": "night",
        "mood": "Calm"
    },
    {
        "date": "8/8/21",
        "dayOrNight": "day",
        "mood": "Calm"
    },
    {
        "date": "8/8/21",
        "dayOrNight": "night",
        "mood": "Calm"
    },
    {
        "date": "8/9/21",
        "dayOrNight": "day",
        "mood": "Calm"
    },
    {
        "date": "8/9/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/10/21",
        "dayOrNight": "day",
        "mood": "Calm"
    },
    {
        "date": "8/10/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/11/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/11/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
    {
        "date": "8/12/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/12/21",
        "dayOrNight": "night",
        "mood": "Calm"
    },
    {
        "date": "8/13/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/13/21",
        "dayOrNight": "night",
        "mood": "Calm"
    },
    {
        "date": "8/14/21",
        "dayOrNight": "day",
        "mood": "Groggy"
    },
    {
        "date": "8/14/21",
        "dayOrNight": "night",
        "mood": "Anxious"
    },
]
var daysOfWeek = [
    {"day" : "Monday"},
    {"day" : "Tuesday"},
    {"day" : "Wednesday"},
    {"day" : "Thursday"},
    {"day" : "Friday"},
    {"day" : "Saturday"},
    {"day" : "Sunday"},
]
var dayAndNight = ["Day","Night","Day","Night"];
var sippingData = [
    {
        "date": "11/1/21",
        "water": "125"
    },
    {
        "date": "11/2/21",
        "water": "100"
    },
    {
        "date": "11/3/21",
        "water": "100"
    },
    {
        "date": "11/4/21",
        "water": "75"
    },
    {
        "date": "11/5/21",
        "water": "100"
    },
    {
        "date": "11/6/21",
        "water": "0"
    },
    {
        "date": "11/7/21",
        "water": "0"
    },
    {
        "date": "11/8/21",
        "water": "75"
    },
    {
        "date": "11/9/21",
        "water": "175"
    },
    {
        "date": "11/10/21",
        "water": "100"
    },
    {
        "date": "11/11/21",
        "water": "125"
    },
    {
        "date": "11/12/21",
        "water": "100"
    },
    {
        "date": "11/13/21",
        "water": "150"
    },
    {
        "date": "11/14/21",
        "water": "125"
    },
    {
        "date": "11/15/21",
        "water": "0"
    },
]
var parseTime = d3.timeParse("%m/%d/%y");
for (d in sippingData){
    sippingData[d].date = parseTime(sippingData[d].date);
}
for (day in calendarData) {
    let newDate = (calendarData[day].date).split("/");
    calendarData[day].date = newDate
}
// console.log(calendarData)
// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 1.7;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px"); // TODO: update figure svg on resize

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    console.log(response.index);
    // response = { element, direction, index }

    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update graphic based on step
    figure.select('svg').selectAll('*').remove();
    // figure.select("p").text(response.index + 1);
    svg.append("rect")
        .attr("x", 0).attr("y", 0).attr("width", 5).attr("height", (response.index + 1) * h/4).attr("fill", "black");
    switch (response.index) {
        case 0:
            drawCalendar(calendarData);
            break;
        case 1:
            drawBars(timespent, 50, 30);
            break;
        case 2:
            drawBars(classes,50,10);
            break;
        case 3:
            drawWaterBars(sippingData,50);
            break;
        default:
            break;

    }
}

function setupStickyfill() {
    d3.selectAll(".sticky").each(function () {
        Stickyfill.add(this);
    });
}

function init() {
    setupStickyfill();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            debug: false
        })
        .onStepEnter(handleStepEnter)

    // setup resize event
    window.addEventListener("resize", handleResize);
}

// kick things off
init();
//bar.js
function drawBars(dataset, barPadding, customMax) {
    let max = customMax;
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
    let catScale = d3.scaleOrdinal(d3.schemeCategory10)
    let xScale = d3.scaleBand()
        .padding(.1)
        .domain(dataset.map(d => d.task))   // Data space
        .range([0, innerWidth]); // Pixel space
    let yScale = d3.scaleLinear()
        .domain([0, max])   // Data space
        .range([innerHeight, 0]); // Pixel space


    var xAxis = d3.axisBottom(xScale);

    var yAxis = d3.axisLeft(yScale);
    g.append('g').call(yAxis);
    g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`) // move axis to bottom
        .append('text')
        .text("XPD")
        .attr('class', 'label')

        .attr("dy", 10)


    let rects = g.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect");

    rects.attr("x", function (d) {
        return xScale(d.task) + 0; //not sure why i need + 30 here (i think it has to do with barwidth func )
    })
        .attr("y", function (d) {
            // console.log(d.time)
            // console.log(yScale(d.time))
            return yScale(d.time)
        })
        .attr("height", function (d) {
            return innerHeight - yScale(d.time);
        })
        .attr("width", xScale.bandwidth()) // this is problematic
        .attr("fill", function (d) {
            return catScale(d.task);
        })
    // draw scale
    svg.append("g")
        .attr("class", "colorLegend")
        .attr("transform", `translate(${innerWidth/2},${margin.top})`);
    let colorLegend = d3.legendColor()
        .shapeWidth(xScale.bandwidth()/2)
        .orient('horizontal')
        .cells(5)
        .scale(catScale);
    svg.select(".colorLegend")
        .call(colorLegend);

    //draw lables
    var labely = g.append("text")
        .attr("transform", `translate(-30,${h / 2})rotate(-90)`)
        .text("Time spent (hours)")
    var labelx = g.append("text")
        .attr("transform", `translate(${innerWidth / 2 - (margin.left + margin.right)},${innerHeight + 40})`)
        .text("Time spent (hours)")
}

function drawCalendar(dataset){

    let catScale = d3.scaleOrdinal(d3.schemeCategory10)
    let myColorMap = {
        Calm : "#3498db",
        Excited : "#2ecc71",
        Groggy : "#d35400",
        Anxious : "#8e44ad",
    };
    var myColor = d3.scaleOrdinal().domain(["Calm","Excited","Groggy","Anxious"])
  .range(["#3498db","#2ecc71","#d35400","#8e44ad"])
    let xScale = d3.scaleLinear()
        .domain([0,7])   // Data space
        .range([0, innerWidth]); // Pixel space
    let xScaleBand = d3.scaleBand()
        .domain([0,1,2,3,4,5,6])   // Data space
        .range([0, innerWidth]); // Pixel space
    let yScale = d3.scaleLinear()
        .domain([4, 0])   // Data space
        .range([innerHeight, 0]); // Pixel space
    let yScaleBand = d3.scaleBand()
        .domain([3,2,1,0])   // Data space
        .range([innerHeight, 0]); // Pixel space
    
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
    //g.append('g').call(yAxis);


    let rects = g.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect");
    
    rects.attr("x", function(d){
            // console.log((d.date[1]-1 )%7 +" " + (d.date[1]));
            return xScale((d.date[1]-1 )%7);
        })
        .attr("y", function(d){
            let weekNum = Math.floor(d.date[1]/8) // todo: /7
            weekNum = weekNum *2;
            if (weekNum >0){
                weekNum+=.1;
            }
            console.log(weekNum)
            if (d.dayOrNight == "day"){
                return yScale(weekNum)
            }
            else {
                return yScale(weekNum+1)
            }
        })
        .attr("height",yScaleBand.bandwidth())
        .attr("width", xScaleBand.bandwidth())
        .attr("fill", function(d){
            return myColor(d.mood);
        })
        .attr("debug",function(d){
            return d.date; //todo: remove
        });
        
    let labels = g.selectAll("xLabel")
        .data(daysOfWeek)
        .enter()
        .append("text");
    labels
        .attr("x", function(d,i){
            console.log(d.day + " : " + i);
            return xScale(i)+ xScaleBand.bandwidth()/2;
        })
        .attr("y",-5)
        .text(function(d){return d.day;})
        .style("text-anchor","middle");
    let xLabels = g.selectAll("yLabel")
        .data(dayAndNight)
        .enter()
        .append("text");
    xLabels
        .attr("x", -5)
        .attr("y", function(d,i){
            if (i >= 2){i+=.1}
            console.log(yScale(i))
            return yScale(i+.5);
        })
        .style("text-anchor","end")
        .text(function(d){return d})
    let yLabels = g.selectAll("yLabel")
    svg.append("g")
        .attr("class", "colorLegend")
        .attr("transform", `translate(${innerWidth/2-(innerWidth/12)},${innerHeight+60})`);

    let colorLegend = d3.legendColor()
        .shapeWidth(innerWidth/12)
        .orient('horizontal')
        .scale(myColor);
    svg.select(".colorLegend")
        .call(colorLegend);
    
}
function drawWaterBars(dataset, barPadding) {
    let max = 200;
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
    let catScale = d3.scaleOrdinal(d3.schemeCategory10)
    let xScale = d3.scaleBand()
        .domain(dataset.map(d => d.date))   // Data space
        .range([10, innerWidth]); // Pixel space
    
    let paddedExtent = [
        d3.min(dataset.map(d => d.date)), 
        d3.max(dataset.map(d => d.date))
    ];
    let xScaleTime = d3.scaleTime()
        .domain(paddedExtent)   // Data space
        .range([10, innerWidth]); // Pixel space 
    let yScale = d3.scaleLinear()
        .domain([0, max])   // Data space
        .range([innerHeight, 0]); // Pixel space


    var xAxis = d3.axisBottom(xScaleTime);

    var yAxis = d3.axisLeft(yScale);
    g.append('g').call(yAxis)
    .attr('transform', `translate(10,0)`); //temp margin
    g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`); // move axis to bottom


    let rects = g.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect");

    rects.attr("x", function (d) {
        return xScaleTime(d.date) + 0; //not sure why i need + 30 here (i think it has to do with barwidth func )
    })
        .attr("y", function (d) {
            // console.log(d.time)
            // console.log(yScale(d.time))
            return yScale(d.water)
        })
        .attr("height", function (d) {
            return innerHeight - yScale(d.water);
        })
        .attr("width", xScale.bandwidth()) // this is problematic
        .attr("fill", "steelblue");
    // draw scale
    svg.append("g")
        .attr("class", "colorLegend")
        .attr("transform", `translate(${innerWidth/2},${margin.top})`);
    let colorLegend = d3.legendColor()
        .shapeWidth(80)
        .orient('horizontal')
        .cells(5)
        .scale(catScale);
    svg.select(".colorLegend")
        .call(colorLegend);

    //draw lables
    var labely = g.append("text")
        .attr("transform", `translate(-30,${h / 2})rotate(-90)`)
        .text("Water Consumed (oz)")
    var labelx = g.append("text")
        .attr("transform", `translate(${innerWidth / 2 - (margin.left + margin.right)},${innerHeight + 40})`)
        .text("Date")
}
