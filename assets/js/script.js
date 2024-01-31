// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () { //this function will render the calendar timeslots/buttons to the page
  
function renderHours() {
  var hours = [
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
  ];

  for (var i = 0; i < hours.length; i++) {
    //create time-block row div
    var timeBlock = $('<div>');
    //create div for hour text
    var hourDisplay = $('<div>');
    //create variable for text area
    var textAreaEl = $('<textarea>');
    //create variable to make button 
    var buttonEl = $('<button>');
    //create variable for <i> element
    var iEl = $('<i>');

    //assign style to time block with classes from example. Xpert AI used for syntax correction in this section
    timeBlock.addClass('row time-block');
    //create id for time block div
    timeBlock.attr('id', 'hour-' + hours[i]);
    //attach div for hour label
    timeBlock.append(hourDisplay);
    //assign style to div child of timeBlock aka hourDisplay
    hourDisplay.addClass('col-2 col-md-1 hour text-center py-3');
    //add hour text to div
    hourDisplay.text(hours[i]);
    //add text area as child of timeBlock
    timeBlock.append(textAreaEl);
    //add class to textareaEl
    textAreaEl.addClass('col-8 col-md-10 description').attr('rows', '3');
    //add button as child of timeBlock div
    timeBlock.append(buttonEl);
    //add class to button, add aria label to button as attribute key:value pair
    buttonEl.addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    //append <i> element to the button to add the 'save' icon.
    buttonEl.append(iEl);
    //add class to the <i> element so it can get styled by font awesome library, which adds the save icon, add attribute key:value pair for 'aria hidden'
    iEl.addClass('fas fa-save').attr('aria-hidden', 'true');
    
    //append timeBlock to the document body
    $('body').append(timeBlock);
  };
}
renderHours(); //calls the renderHours function to execute the code
  
  //here is the event listener jquery-help from ask BCS, XpertAI for syntax correction and spelling errors in function
  $( ".saveBtn" ).on( "click", function() {
    var textValue = $(this).siblings('.description').val(); //gets value of sibling of button with .description class, AKA textArea's value
    var time = $(this).parent().attr('id'); //gets the value of the button's parent's ID, which is the hour time ID: Xpert AI helped debug that it was parent not sibling container's attribute
    var textAreaEl = $('<textarea>');
    //console.log(textValue);
   // console.log(time);
    //need to add local storage here?
    localStorage.setItem(time, JSON.stringify(textValue)); //saves input of 'textValue' variable as a string in local storage, with time ID as the key
    console.log(localStorage); //logs localStorage so I can see it in console
    //set item goes in button, but get item only needs to be done once
    //print event to text box first then save to storage as last step?
    //you can loop the event saving across all hours so it only has to do it once for the whole calendar
   
    //this function loops the length of local storage and does getItem to retrieve the key value pairs saved there for hour and event
    //need to make the function run when the page refreshes in order to call up the saved info?
    function renderSaved(){
      for (let i = 0; i < localStorage.length; i++){ //loops through all the values saved in local storage
        let eventTime = localStorage.key(i); //gets (i)th key from local storage
        let eventContent = localStorage.getItem(eventTime); //gets values corresponding to keys selected by eventTime
        console.log(eventTime, eventContent);
        textAreaEl.val(eventContent); //appends value of event content to text area
      }
    }
    renderSaved(); //call renderSaved
  }); 

  //get text info from local storage and set it to value of corresponding text areas
  //need to add if/else logic to compare the values of the hour IDs to the current 24 hr time from day.js
  //use a for loop to get all of the IDs when comparing their times for color coding?
//using toggle for each line in the if/else sequence will create a binary question to answer for each to check if true before moving on for color formatting

  //curentDay var and dayjs API called displays the date on the page and targets the ID of the header in html doc
  var currentDay = dayjs()
  $('#currentDay').text(currentDay.format('dddd, MMMM D'));

});
 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page. DONE