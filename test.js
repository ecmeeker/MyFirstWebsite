times = 0;
totalTime = 0;
startTime = 0;
trials = 10;
x = 0;
windowHeight = window.innerHeight;
windowWidth = window.innerWidth;
window.onload = containerHeight();
	
function startTest() {
	startTime = new Date().getTime();

	createBox();
}

function endTest() {
	endTime = new Date().getTime();
	times += (endTime - startTime);
	
	parent.document.getElementById("empty").innerHTML = "";
	x++;
	testing();
}

function getReactionTime() {	
	totalTime = times / (trials*1000);
	
        parent.document.getElementById("time").visibility = "visible";
	parent.document.getElementById("time").innerHTML = "<p>Your average reaction time is " + totalTime + " seconds!</p>";
	parent.document.getElementById("time").style.backgroundColor = '#aaaaff';
	
	alert("Your average reaction time is " + totalTime + " seconds!");
}

function createBox() {
	var w = Math.floor((Math.random() * 175) + 25);
	var h = 0;
	var rad = 0;
	var boxleft = 0;
	var boxtop = 0;
	
	var boxcolor = '#';
	for (var i = 0; i < 6; i++) {
		var j = ['a','b','c','d','e','f'];
		var k = Math.floor(Math.random() * 15);
		if (k < 10) {
			boxcolor += k;
		} else{
			boxcolor += j[k-10];		
		}
	}

	if ((w % 3) == 0) {
		h = w;	
		rad = 1;
	} else if ((w % 3 == 1)) {
		h = Math.floor((Math.random() * 175) + 25);
	} else {
		h = w;
	}
	
	boxleft = Math.floor(Math.random() * (windowWidth - w));
	boxtop = Math.floor(Math.random() * (windowHeight - h));
	
	parent.document.getElementById("body").innerHTML = "<div id='testcontainer'><div id='empty' onclick='endTest()'></div></div>";
	parent.document.getElementById("testcontainer").style.backgroundColor = '#ffffff';	
	parent.document.getElementById("testcontainer").style.border = "solid black 1px";
	parent.document.getElementById("testcontainer").style.borderRadius = "5px";
	parent.document.getElementById("testcontainer").style.height = windowHeight + "px";
	
	parent.document.getElementById("empty").style.width = w + "px";
	parent.document.getElementById("empty").style.height = h + "px";
	parent.document.getElementById("empty").style.backgroundColor = boxcolor;
	parent.document.getElementById("empty").style.position = "absolute";
	parent.document.getElementById("empty").style.left = boxleft + "px";
	parent.document.getElementById("empty").style.top = boxtop + "px";
	parent.document.getElementById("empty").style.display = "block";
	parent.document.getElementById("empty").style.border = "solid black";
	if (rad == 1) {
		parent.document.getElementById("empty").style.borderRadius = (w/2) + "px"; 	
	}	else{
		parent.document.getElementById("empty").style.borderRadius = 0 + "px";	
	}
}
function testing() {
	if (x < trials){
		//setTimeout(startTest(), (Math.random() * 5000)+1000);
		startTest();
	}else{
		parent.document.getElementById("body").innerHTML = "<header role='header'><h1 id='testtitle'>Reaction Test</h1>";
		parent.document.getElementById("body").innerHTML += "<p id='blurb'><strong>Created by Emily Cassandra Meeker using JavaScript</strong></p>";
		parent.document.getElementById("body").innerHTML += "<p id='rules'>Test your reflexes - See how long it takes you to click the shapes...</p><header>";
		parent.document.getElementById("body").innerHTML += "<div id='test'><button id='startTest' onclick='testing()'>Click to Start!</button>";
		parent.document.getElementById("body").innerHTML += "</div><div id='testcontainer'><div id='empty' onclick='endTest()'></div>";
		parent.document.getElementById("body").innerHTML += "</div><div id='time'></div><div id='homelink'><a href='index.html' >Back Home</a></div>";
		parent.document.getElementById("body").innerHTML += "<footer role='footer'><p>Copyright &copy 2015 Emily Cassandra Meeker</p></footer>";
		
		parent.document.getElementById("testcontainer").style.backgroundColor = '';		
		
		parent.document.getElementById("startTest").innerHTML = "Try again!";
		
		parent.document.getElementById("empty").style.width = 0 + "px";
		parent.document.getElementById("empty").style.height = 0 + "px";
		parent.document.getElementById("empty").style.color = '#000000';
		parent.document.getElementById("empty").style.position.left = 0 + "px";
		parent.document.getElementById("empty").style.position.top = 0 + "px";
		parent.document.getElementById("empty").style.display = "none";
		parent.document.getElementById("empty").style.border = "none";
		parent.document.getElementById("testcontainer").style.border = "";
		parent.document.getElementById("testcontainer").style.borderRadius = "";
		
		getReactionTime();
		containerHeight();
		
		times = 0;
		totalTime = 0;
		startTime = 0;
		trials = 10;
		x = 0;
	}
}	
function containerHeight() {
	parent.document.getElementById("testcontainer").style.height = (windowHeight*.10) + "px";
}