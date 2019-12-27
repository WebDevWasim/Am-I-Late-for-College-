
//=========================== Variables =============================//

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
min = (min < 10 ? "0" : "") + min;
var time = Number(hour +"."+ min);
var day = date.getDay();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var reachAt = function() {
	if (time+1 >= 12 && time+1 < 13) {
		return 12+":" +min+" p.m.";
	}
	else if (time+1 >= 13) {
		return String((time-11).toFixed(2)+" p.m.").replace(".",":");
	}
	else {
		return String((time+1).toFixed(2)+" a.m.").replace(".",":");
	}
}

var check = function() {

//=========================== Holiday =============================//

	if (day == 0 /* Sunday */ || day == 6 /* Saturday */) {
		return ("Today is " +dayName[day]+ ". </br> Can't Remember? It's Holiday!!! </br> Don't need to Wake Up. Sleep Back :)"); 
	}

//=========================== Working Days =============================//

	else {

		if (time >= 1 && time < 6 ) {
			return ("Lot of Time left for College. </br> Set Alarm at 8:00 a.m. and Sleep.");
		}

		else if (time >= 6 && time < 8 ) {
			return ("Get Ready to Wake Up. </br> Alarm will bang in just " + (7.60 - time).toFixed(2).replace(".","hr ") +"min.");
		}

//=========================== College Preparation =============================//
		else if (time >= 8 && time <= 8.45 ) {
			return ("Wake Up!!! Wake Up!!! </br> Get Ready to Go for College. </br> Leave Home with in "+ (8.46 - time).toFixed(2).replace("0.","") +" min ") + "to reach College on Time.";
		}

		else if (time > 8.45 && time < 9.45 ) {
			return ("You are going Late!!! </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> That means you can't attend the First Class. ");
		}

//=========================== College Time =============================//

		else if (time >= 9.45 && time < 17.15 ) {

//=========================== Routine Monday =============================//
			
			if (day == 1) /* Monday */ {

				if (time >= 9.45 && time < 10.35 ) {
					return ("You are Already Late!!! </br> Now AG Sir taking ME 601 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> That means you can't attend BM Sir's ME 604A Class, which is at 10:35 a.m. </br> Possible class you can attend is SOFT SKILL at 12:15 p.m.");
				}

				else if (time >= 10.35 && time < 12.15 ) {
					if (time >= 10.35 && time <= 11.15) {
						return ("You are Already Late!!! </br> Now BM Sir taking ME 604A Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> Possible class you can attend is SOFT SKILL at 12:15 p.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now BM Sir taking ME 604A Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend SOFT SKILL class at 12:15 p.m. </br> Possible class you can attend is PK Sir's ME 694 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 12.15 && time < 13.55 ) {
					if (time >= 12.15 && time <= 13.45) {
						return ("You are Already Late!!! </br> Now A Unknown Sir taking SOFT SKILL Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is PK Sir's ME 694 Lab at 2:45 p.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now A Unknown Sir taking SOFT SKILL Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> That means you can't even attend last class, which is PK Sir's ME 694 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 13.55 && time < 14.45 ) {
					return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is PK Sir's ME 694 Lab at 2:45 p.m.");
				}

				else /*(time >= 14.45 && time < 17.15 )*/{
					return ("You are Already Late!!! </br> Now PK Sir taking ME 694 Lab, The Last Class. </br> Then why you want to come Now ??");
				}	

			}

//=========================== Routine Tuesday =============================//

			else if (day == 2) /* Tuesday */ {

				if (time >= 9.45 && time < 12.15 ) {
					if (time >= 9.45 && time <= 11.15) {
						return ("You are Already Late!!! </br> Now VK Sir taking ME 693 Lab. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is SB Sir's HU 611 Class at 12:15 p.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now VK Sir taking ME 693 Lab. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend SB Sir's HU 611 Class at 12:15 p.m. </br> Possible class you can attend is PK Sir's ME 694 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 12.15 && time < 13.05 ) {
					if (time >= 9.45 && time <= 12.55) {
						return ("You are Already Late!!! </br> Now SB Sir taking HU 611 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> Possible class you can attend is NC Sir's ME 602 at 1:55 p.m.");						
					}
					else {
						return ("You are Already Late!!! </br> Now SB Sir taking HU 611 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend NC Sir's ME 602 Class at 1:55 p.m. </br> Possible class you can attend is AG Sir's ME 692 Lab at 2:45 p.m.");						
					}	
				}

				else if (time >= 13.05 && time < 13.55 ) {
					if (time >= 13.05 && time <= 13.45) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend NC Sir's ME 602 Class at 1:55 p.m. </br> Possible class you can attend is AG Sir's ME 692 Lab at 2:45 p.m.");
					}
					else {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is PK Sir's ME 694 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 13.55 && time < 14.45 ) {
					return ("You are Already Late!!! </br> Now NC Sir taking ME 602 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is PK Sir's ME 694 Lab at 2:45 p.m.");
				}

				else /*(time >= 14.45 && time < 17.15 )*/{
					return ("You are Already Late!!! </br> Now AG Sir taking ME 692 Lab, The Last Class. </br> Then why you want to come Now ??");
				}	

			}

//=========================== Routine Wednesday =============================//

			else if (day == 3) /* Wednesday */ {

				if (time >= 9.45 && time < 10.35 ) {
					return ("You are Already Late!!! </br> Now AG Sir taking ME 601 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> That means you can't attend BM Sir's ME 604A Class, which is at 10:35 a.m. </br> Possible class you can attend is SB Sir's HU 611 at 1:55 p.m.");
				}

				else if (time >= 10.35 && time < 12.15 ) {
					return ("You are Already Late!!! </br> Now SP Sir taking ME 605C Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is SB Sir's HU 611 at 1:55 p.m.");
				}

				else if (time >= 12.15 && time < 13.55 ) {
					if (time >= 12.15 && time <= 12.55) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> Possible class you can attend is SB Sir's HU 611 Class at 1:55 p.m.");
					}
					else if (time > 12.55 && time <= 13.45) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend SB Sir's HU 611 class. </br> Possible class you can attend is SOFT SKILL Class at 2:45 p.m.");
					}
					else {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class SOFT SKILL at 2:45 p.m.");
					}
				}

				else if (time >= 13.55 && time < 14.45 ) {
					return ("You are Already Late!!! </br> Now SB Sir taking HU 611 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class SOFT SKILL at 2:45 p.m.");
				}

				else if (time >= 14.45 && time <= 16.25 ) {
					return ("You are Already Late!!! </br> Now A Unknown Sir taking SOFT SKILL Class, The Last Class. </br> Then why you want to come Now ??");
				}

				else {
					return ("Your College is Over.");
				}

			}

//=========================== Routine Thursday =============================//

			else if (day == 4) /* Thursday */ {

				if (time >= 9.45 && time < 10.35 ) {
					return ("You are Already Late!!! </br> Now AG Sir taking ME 601 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> That means you can't attend MD Sir's ME 603 Class, which is at 10:35 a.m. </br> Possible class you can attend is NC Sir's ME 602 at 12:15 p.m.");
				}

				else if (time >= 10.35 && time < 12.15 ) {
					if (time >= 10.35 && time <= 11.15) {
						return ("You are Already Late!!! </br> Now MD Sir taking ME 603 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is NC Sir's ME 602 Class at 12:15 p.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now MD Sir taking ME 603 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend NC Sir's ME 602 Class at 12:15 p.m. </br> Possible class you can attend is BM Sir's ME 604A Class at 1:55 p.m.");
					}
				}

				else if (time >= 12.15 && time < 13.05 ) {
					if (time >= 12.15 && time <= 12.55) {
						return ("You are Already Late!!! </br> Now NC Sir taking ME 602 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is BM Sir's ME 604A Class at 1:55 p.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now NC Sir taking ME 602 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend BM Sir's ME 604A Class at 1:55 p.m. </br> Possible class you can attend is NC Sir's ME 691 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 13.05 && time < 13.55 ) {
					if (time >= 13.05 && time <= 13.45) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend BM Sir's ME 604A Class at 1:55 p.m. </br> Possible class you can attend is NC Sir's ME 691 Lab at 2:45 p.m.");
					}
					else {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is NC Sir's ME 691 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 13.55 && time < 14.45 ) {
					return ("You are Already Late!!! </br> Now BM Sir taking ME 604A Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is NC Sir's ME 691 Lab at 2:45 p.m.");
				}

				else /*(time >= 14.45 && time < 17.15 )*/{
					return ("You are Already Late!!! </br> Now NC Sir taking ME 691 Lab, The Last Class. </br> Then why you want to come Now ??");					
				}

			}

//=========================== Routine Friday =============================//

			else /* Friday */ {

				if (time >= 9.45 && time < 11.25 ) {
					if (time >= 9.45 && time <= 10.25) {
						return ("You are Already Late!!! </br> Now VK Sir taking ME 603 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is SP Sir's ME 605C Class at 11:25 a.m.");
					}
					else {
						return ("You are Already Late!!! </br> Now VK Sir taking ME 603 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend SP Sir's ME 606C Class at 11:25 a.m. </br> Possible class you can attend is NC Sir's ME 602 Class at 1:55 p.m.");
					}
				}

				else if (time >= 11.25 && time < 12.15 ) {
					return ("You are Already Late!!! </br> Now SP Sir taking ME 605C Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +" </br> Possible class you can attend is NC Sir's ME 602 Class at 1:55 p.m.");
				}

				else if (time >= 12.15 && time < 13.55 ) {
					if (time >= 12.15 && time <= 12.55) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> Possible class you can attend is NC Sir's ME 602 Class at 1:55 p.m.");
					}
					else if (time > 12.55 && time <= 13.45) {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't attend NC Sir's ME 602 class. </br> Possible class you can attend is BM Sir's ME 695 Lab at 2:45 p.m.");
					}
					else {
						return ("Now It's Break Time. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is BM Sir's ME 695 Lab at 2:45 p.m.");
					}
				}

				else if (time >= 13.55 && time < 14.45 ) {
					return ("You are Already Late!!! </br> Now NC Sir taking ME 602 Class. </br> If You leave right now from Home, Then you will reach college at "+ reachAt() +"</br> That means you can't even attend last class, which is BM Sir's ME 695 Lab at 2:45 p.m.");
				}

				else /*(time >= 14.45 && time < 17.15 )*/{
					return ("You are Already Late!!! </br> Now BM Sir taking ME 695 Lab, The Last Class. </br> Then why you want to come Now ??");					
				}

			}
		}

//===================== College Over ==========================//

		else {
			return ("Your College is Over.");
		}
	
	}
};

//=========================== Final Function =============================//

$("#check").click(function() {
	$("#message").html(check);
});