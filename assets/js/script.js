//Selectors
var currentTime = moment().format('HH'); 
var allTheNotes = JSON.parse(localStorage.getItem("allTheNotes")) || [];

//Functions

setColors();
enterEvent();
setDate();
fillEvents();

//Setting the colors
function setColors() {
  $('input').each(function () {
    var dataTime = $(this).data("time");
    if (dataTime < currentTime) {
      $(this).addClass('past');
    } else
    if (dataTime == currentTime){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
}

//Setting the date in the header
function setDate(){
  var date = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").appendChild(date);
}

// Saving any entered events to local storage.
function enterEvent() {
  $('.saveBtn').on('click',function(){
    allTheNotes = [];   
    for( var i = 0; i<9; i++){
      var textInput = $($("input")[i]).val();
      var notes= textInput;
      console.log('click');
      allTheNotes.push(notes);
    }
    localStorage.setItem('allTheNotes', JSON.stringify(allTheNotes));
  }); 
  fillEvents()
}

//Fills the events either from local storage so that the event persists
function fillEvents() {
  var currentIndex = 0
  $('input').each( function () {
    $(this).val(allTheNotes[currentIndex]);
    currentIndex++;
  })
};

