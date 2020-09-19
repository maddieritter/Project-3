var myDemo = document.getElementById("demoparent");

var myDemoChild = document.getElementById("demochild");

var myDemoTag = document.getElementsByTagName("li");

var bodyList = document.getElementById("bodyparent")

var bodyListItems = document.getElementById("bodychild");

var linksInMenu = myDemo.getElementsByTagName("li");

var bodyText = document.getElementById("body");

var siteTitle = document.getElementById("sitetitle")

siteTitle.style.textDecorationStyle = "wavy";

siteTitle.style.textDecorationColor = "cyan";

var newItem = document.createElement ("li");

var newText = document.createTextNode ("Dallas Location Coming Soon");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

myDemoChild.style.backgroundColor = "white";

var covidUpdate = document.getElementById("update");

covidUpdate.style.fontWeight = "bold";