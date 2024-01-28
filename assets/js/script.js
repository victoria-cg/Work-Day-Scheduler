// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var saveButton = document.querySelector(".btn.saveBtn.col-2.col-md-1"); //creates variable targeting the save buttons
  var hourNineText = document.querySelector(".col-8.col-md-10.description"); //selects the hour-9 id div 

  saveButton.addEventListener("click", function(event) {
    event.preventDefault(); //this listens for a click on the save button
//need code in here to use ID of time block and save input to local storage
    var input = {
      hourNine: hourNineText.value //saves value of hour-9 div as an object
    }

    localStorage.setItem("input", JSON.stringify(input));
    console.log(input); //saves input of 'input' variable as a string in local storage
  }); 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //curentDay var and dayjs API called displays the date on the page and targets the ID of the header in html doc
  var currentDay = dayjs()
  $('#currentDay').text(currentDay.format('dddd, MMMM D'));

});