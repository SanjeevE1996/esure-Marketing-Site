// HOME.HTML
var home = {
  content: [
    {
      sectionText:
"esure has become one of the UK’s leading direct insurers through years of hard work and listening to our customers. Providing quality 5 Star Defaqto rated car and home insurance at a low cost to you. Our UK based call centres are full of friendly staff who provide great customer service, whatever your query may be. If you think you could save money with us on your car, home, and multicar insurance, get a quote today."
    },
    {
      sectionText:
      "esure has become one of the UK’s leading direct insurers through years of hard work and listening to our customers. Providing quality 5 Star Defaqto rated car and home insurance at a low cost to you. Our UK based call centres are full of friendly staff who provide great customer service, whatever your query may be. If you think you could save money with us on your car, home, and multicar insurance, get a quote today."
    }
    ]
};

$(document).ready(function() {
  //for HomePage
  var leftHomeContentTemplate = $("#lefthomeContent-template").html();
  var compileLeftContent = Handlebars.compile(leftHomeContentTemplate);
  $(".leftHomeContent-Container").html(
    compileLeftContent(home.content[0])
  );
  
  
});

$(document).ready(function() {
  //for HomePage
  var rightHomeContentTemplate = $("#righthomeContent-template").html();
  var compileRightContent = Handlebars.compile(rightHomeContentTemplate);
  $(".rightHomeContent-Container").html(
    compileRightContent(home.content[1])
  );
  
  
});