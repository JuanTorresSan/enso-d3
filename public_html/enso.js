
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




var data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8]; 
    function render(data) { // <- B
        // Enter
        d3.select("body").selectAll("div.h-bar") 
            .data(data) 
            .enter() 
                .append("div") 
                    .attr("class", "h-bar")
                .append("span"); 
        // Update
        d3.select("body").selectAll("div.h-bar")
            .data(data) 
                .style("width", function (d) { 
                    return (d * 3) + "px";
                })
                .select("span") 
                    .text(function (d) {
                        return d;
                    });
                
     
        d3.select("body").selectAll("div.h-bar")
            .data(data)
            .exit() 
                .remove();        
    }
    setInterval(function () { 
        data.shift();
        data.push(Math.round(Math.random() * 100));
        render(data);
    }, 1500);
    render(data);