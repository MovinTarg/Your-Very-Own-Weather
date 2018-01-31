$(document).ready(function() {
    $('form').submit(function() {
        var city = "";
        city = $("input[name='city']").val();
        // console.log(city);
        $("input").val("");
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6254ba32fa3fa7091f628b637de72f57";
        $.get(url, function(res) {
            // console.log(res);
            var html_str = "";
            html_str += "<h1>"+res.name+"</h1>";
            html_str += "<h2>Temperature: "+Math.floor((((res.main.temp - 273)*(9/5)) + 32))+"</h2>";
            $(".weather").html(html_str);
        }, 'json');
        return false;
    });
});