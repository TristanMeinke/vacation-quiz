var denmarkCounter = 0;
var hawaiiCounter = 0;
var indiaCounter = 0;
var canadaCounter = 0;
// Japan is the 'e' case.

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//jQuery follows.
$(document).ready(function() {

  function displayResults(hawaiiCounter, indiaCounter, denmarkCounter, canadaCounter) {

    $("#results").show();

    if (denmarkCounter > hawaiiCounter && denmarkCounter > indiaCounter && denmarkCounter > canadaCounter) {
      $("#results-denmark").show();

      event.preventDefault();
    }
    else if (hawaiiCounter > denmarkCounter && hawaiiCounter > indiaCounter && hawaiiCounter > canadaCounter) {
      $("#results-hawaii").show();
      event.preventDefault();
    }
    else if (indiaCounter > denmarkCounter && indiaCounter > hawaiiCounter && indiaCounter > canadaCounter) {
      $("#results-india").show();
      event.preventDefault();
    }
    else if (canadaCounter > denmarkCounter && canadaCounter > hawaiiCounter && canadaCounter > indiaCounter) {
      $("#results-canada").show();
      event.preventDefault();
    }
    else {
      $("#results-japan").show();
      event.preventDefault();
    }
  }

  // The following block of code increments the counters for each destination
  // when their corresponding objects are clicked upon.

  $(".denmark").click(function() {
    denmarkCounter++;
  });
  $(".hawaii").click(function() {
    hawaiiCounter++;
  });
  $(".india").click(function() {
    indiaCounter++;
  });
  $(".canada").click(function() {
    canadaCounter++;
  });

   $("#vacation-quiz form").submit(function(event) {
      // The following line calls the fuction to calculate and display results,
      // and passes it the variables it needs.
      displayResults(hawaiiCounter, indiaCounter, denmarkCounter, canadaCounter);
  });


});
