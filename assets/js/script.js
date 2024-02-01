
//document.ready function is supposed to make the browser wait until the DOM is ready before running the JS, but currently it makes nothing display
//$(document).ready()(function(){ 

function renderHours() { //this function will render the calendar timeslots/buttons to the page
  var hours = [
    '9',
   '10',
   '11',
   '12',
   '13',
   '14',
   '15',
   '16',
   '17',
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
    timeBlock.attr('id', hours[i]);
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

//code here populates the events from local storage to the screen
let textarea9 = document.getElementById('9');
textarea9.children[1].value = localStorage.getItem('9') || 'no events scheduled';
let textarea10 = document.getElementById('10');
textarea10.children[1].value = localStorage.getItem('10') || 'no events scheduled';
let textarea11 = document.getElementById('11');
textarea11.children[1].value = localStorage.getItem('11') || 'no events scheduled';
let textarea12 = document.getElementById('12');
textarea12.children[1].value = localStorage.getItem('12') || 'no events scheduled';
let textarea13 = document.getElementById('13');
textarea13.children[1].value = localStorage.getItem('13') || 'no events scheduled';
let textarea14 = document.getElementById('14');
textarea14.children[1].value = localStorage.getItem('14') || 'no events scheduled';
let textarea15 = document.getElementById('15');
textarea15.children[1].value = localStorage.getItem('15') || 'no events scheduled';
let textarea16 = document.getElementById('16');
textarea16.children[1].value = localStorage.getItem('16') || 'no events scheduled';
let textarea17 = document.getElementById('17');
textarea17.children[1].value = localStorage.getItem('17') || 'no events scheduled';

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
   
    //this function loops the length of local storage and does getItem to retrieve the key value pairs saved there for hour and event
    //need to make the function run when the page refreshes in order to call up the saved info?
    
      for (let i = 0; i < localStorage.length; i++){ //loops through all the values saved in local storage
        let timeKey = localStorage.key(i); //gets (i)th key from local storage
        console.log(timeKey);
        let textValue = JSON.parse(localStorage.getItem(timeKey)); //gets values corresponding to keys selected by timeKey
        textAreaEl.val(textValue); //appends value of event content to text area

      }
  }); 


//function colorChange selects each element with class 'timeBlock'
//ColorChange then compares the ID of timeBlock element to the currentTime variable to choose a color scheme
var currentTime = dayjs().format('HH') //gets 24 hr time dayjs

function colorChange(){
  $('.timeBlock').each(function(){
    if ($(this).attr('id') < currentTime) {
      $(this).addClass('past');
    }
    else if ($(this).attr('id') === currentTime) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');
    }
  });
}
  colorChange();

  //need to change id values in render function to be 24 hr time, but then need to fix label visible on screen
 

  //curentDay var and dayjs API called displays the date on the page and targets the ID of the header in html doc
  var currentDay = dayjs()
  $('#currentDay').text(currentDay.format('dddd, MMMM D'));
//}); commented out documetn ready closing brackets to deactivate while debugging
 




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