
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