
/*function currenttime()
{
 let time = new Date();

	
 hh = document.getElementById("hh").innerHTML = time.getHours(); 
 
 mi = document.getElementById("mi").innerHTML = time.getMinutes();
 
 ss = document.getElementById("ss").innerHTML = time.getSeconds();
	
   if(hh==0){
	   hh =12;
   }
	else(hh>12){
     
	 hh = document.getElementById("hh").innerHTML = hh-12; 
}   

	
	setInterval(currenttime,1000);
}


currenttime();

function currentdate()
{
	let date = new Date();
	 
	dd = document.getElementById("dd").innerHTML = date.getDate();
	 
	mm = document.getElementById("mm").innerHTML = date.getMonth()+1;
	
	yy = document.getElementById("yy").innerHTML = date.getFullyear();
		
}

currentdate();

function currentday()
{
 let date = new Date();
 sun = document.getElementById("sun").innerHTML = date.getDay();
 mon = document.getElementById("mon").innerHTML = date.getDay();
 tue = document.getElementById("tue").innerHTML = date.getDay();
 wed = document.getElementById("wed").innerHTML = date.getDay();
 thr = document.getElementById("thr").innerHTML = date.getDay();
 fri = document.getElementById("fri").innerHTML = date.getDay();
 sat = document.getElementById("sat").innerHTML = date.getDay();
 

}

currentday()

function seven(){
	
	if(sun==0){
		return: sunday;
	}

}*/

let ddElement = document.getElementById('dd'),
 mmElement = document.getElementById('mm'),
 yyElement = document.getElementById('yy'),
 hourElement = document.getElementById('hour'),
 minuteElement = document.getElementById('minute'),
 secondElement = document.getElementById('second'),
 amElement = document.getElementById('am'),
 pmElement = document.getElementById('pm'),
 sunElement = document.getElementById('sun'),
 monElement = document.getElementById('mon'),
 tueElement = document.getElementById('tue'),
 wedElement = document.getElementById('wed'),
 thrElement = document.getElementById('thr'),
 friElement = document.getElementById('fri'),
 satElement = document.getElementById('sat');
 



function parsehour(hournumber){
	 if(hournumber<=9)
	 {
		return "0"+hournumber;
	}
	
   if(hournumber>12)
   {
	 return hournumber-12;
    }
	
}

function parsenumber(number){
	
	if(number<=9){
		return "0"+number;
	}
	else{
		return number;
		
	}
}

function updatedate()
{
	  
var date = new Date();

dd = date.getDate(),
mm = date.getMonth(),
yy = date.getFullYear();

ddElement.innerText = dd;
mmElement.innerText = mm+1;
yyElement.innerText = yy;
}


function updatetime(){
	var time = new Date();
hour = time.getHours(),
minute = time.getMinutes(),
second = time.getSeconds();

hourElement.innerText = parsenumber(hour);
minuteElement.innerText = parsenumber(minute);
secondElement.innerText = parsenumber(second);


	
}

updatedate();
updatetime();

setInterval(updatetime,1000);

var noon = new Date();

  afternoon = noon.getHours();
  
 if(afternoon<=12) {
	 
	 amElement = document.getElementById('am').classList.add("week")
 }
 else{
	 
	 pmElement = document.getElementById('pm').classList.add("week")
	 
 }

	var day = new Date();
	
	days = day.getDay();
	console.log(days)
	
	
	if(days==0){
		
		document.getElementById('sun').classList.add("week")
	}

    else if(days==1){
		document.getElementById('mon').classList.add("week")
	}

    else if(days==2){
		
		document.getElementById('tue').classList.add("week")
	}
	else if(days==3){
		
		document.getElementById('wed').classList.add("week");
		
	}
	else if(days==4){
		
		document.getElementById('thu').classList.add("week")
	}
	else if(days==5){
		
		document.getElementById('fri').classList.add("week")
	}
	else if(days==6){
		
		document.getElementById('sat').classList.add("week")
	}
	
