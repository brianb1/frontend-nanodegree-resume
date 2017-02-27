//  $("#main").append("Brian");

// var awesomeThoughts = " I am Brian and I am AWESOME!";

// console.log(awesomeThoughts);


// var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN")

// console.log(funThoughts);

//  $("#main").append(funThoughts);


var name = "Brian";
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
  "name": "Brian",
  "role": "Developer",
  "contacts" : {
    "mobile" : "516-515-1266",
    "email" : "brian@email.com",
    "github" : "brianb1",
    "twitter" : "@brian",
    "location":"Oakland"
  },
  "welcome message" :"Thank You for stopping by!",
  "skills": "HTML/CSS/Javascript",
  "bioPic" : "images/me.jpg "
};

$("#main").append(bio.name);
