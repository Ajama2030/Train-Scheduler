// here the train code starts

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDn0LkJfAadT7X_32eBprQ9ctoJ1CFr2h0",
    authDomain: "train-schedule-6fa18.firebaseapp.com",
    databaseURL: "https://train-schedule-6fa18.firebaseio.com",
    projectId: "train-schedule-6fa18",
    storageBucket: "train-schedule-6fa18.appspot.com",
    messagingSenderId: "704087118038"
  };
  firebase.initializeApp(config);


	var database = firebase.database();

	



	
//========================================================\\
		$("#add-train").on("click", function(event){

		event.preventDefault();
		
		var name = $("#name-input").val().trim();
		var destination = $("#Destination-input").val().trim();
		var firstTrain = $("#arrival-input").val().trim();
		var frequancy= $("#time-input").val().trim();


		console.log(name);
		console.log(destination);
		console.log(firstTrain);
		console.log(frequancy);

		database.ref().push({
			name:name,
			destination:destination,
			firstTrain:firstTrain,
			frequancy:frequancy,



			});
		console.log("work");

});


	console.log('no');

database.ref().on('child_added', function(childSnapshot) {

	var trainName = childSnapshot.val().name;
	var line = childSnapshot.val().line;
	var destination = childSnapshot.val().destination;
	var firstTrain = childSnapshot.val().firstTrain;
	var frequency = childSnapshot.val().frequency;
	console.log("man oh man");


	$('#current-train').append("<tr><td>" + trainName + "</td><td>"  + destination + "</td><td>"
		+ firstTrain + "</td><td>" + frequency + "</td></tr>");


  });

console.log('is it working');
	

   
