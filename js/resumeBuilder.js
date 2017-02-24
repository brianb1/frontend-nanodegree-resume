//  $("#main").append("Brian");

// var awesomeThoughts = " I am Brian and I am AWESOME!";

// console.log(awesomeThoughts);


// var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN")

// console.log(funThoughts);

//  $("#main").append(funThoughts);


var name = "Brian Boncy";
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
    "email" : "bboncy@gmail.com",
    "github" : "brianb1",
    "twitter" : "@mrbrian_b",
    "location":"San Francisco"
  },
  "welcome message" :"Thank You for stopping by!",
  "skills": "HTML/CSS/Javascript",
  "bioPic" : "images/me.jpg "
};

$("#main").append(bio.name);
