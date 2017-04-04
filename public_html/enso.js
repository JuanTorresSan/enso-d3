
console.log("hola");

d3.select("#raton").style("border", "5px darkgray dashed");

d3.select("body").append("div")
.style("border", "1px black solid")
.html("hola mundo");


d3.json("https://www.ncdc.noaa.gov/teleconnections/enso/indicators/soi/data.json",function(data) {
    console.log(data);
    });


//Funciones basicas
parseInt("77");
parseFloat("3.14");



d3.select("svg")
.selectAll("rect")
.data([90, 340, 122, 80, 100, 10])
.enter()
.append("rect")
.attr("width", 20)
.attr("height", function(d) {return d;})
.style("fill", "blue")
.style("stroke", "red")
.style("stroke-width", "1px")
.style("opacity", .25)
.attr("x", function(d,i) {return i * 20});