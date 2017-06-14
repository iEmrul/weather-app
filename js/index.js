var zipcode = 0;
var items =[];
$.getJSON("http://ip-api.com/json", function(data) {
  $("#city").text(data.city + " , " +data.countryCode);

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip="+ data.zip+",us&APPID=607b0a45773dd00e994b7b59bba2ea8b", function(weather) {
    var temperature = Math.floor((weather.main.temp) * (9/5) - 459.67);
    $("#temp").html(temperature + "&deg;F" );
    var condition = weather.weather[0].description;
    $("#description").text(condition);
    var weatherCondition = weather.weather[0].icon;
    $("#icon").attr("src","http://openweathermap.org/img/w/" + weatherCondition+".png");
    $("#icon").attr("width","100px");
    $("#icon").attr("height","100px");
  
  }); 
});

 $("#btn1").click(function(){
   var x = $("#temp").text();
   var number;
   if(x.charAt(x.length-1) === "F"){
     number = parseInt(x.split('°')[0]);
     var celcius = Math.floor((number - 32) * (5/9));
     $("#temp").html(celcius + "&deg;C");
    // var fahrenheit = Math.floor((- 32) × (5/9));
   }
   else if(x.charAt(x.length-1) === "C") {
     number = parseInt(x.split('°')[0]);
     var fahrenheit = Math.floor((number * (9/5))+32);
     $("#temp").html(fahrenheit + "&deg;F");
   }
    });