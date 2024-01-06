// Variable Declaration
var todayDate = $('#currentDay');
var textArea = document.querySelectorAll('.description'); // this line is going to be used to change the color of the box for the current hour of the day in the for loop!
var time = dayjs().hour()
var saveBtn9 = $('#saveBtn9');
var saveBtn10 = $('#saveBtn10');
var saveBtn11 = $('#saveBtn11');
var saveBtn12 = $('#saveBtn12');
var saveBtn13 = $('#saveBtn13');
var saveBtn14 = $('#saveBtn14');
var saveBtn15 = $('#saveBtn15');
var saveBtn16 = $('#saveBtn16');
var saveBtn17 = $('#saveBtn17');

// current date and time function
function date(){
 setInterval(function(){
  var currentTime = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a')
 todayDate.text(currentTime);

}, 1000)
}
date()

//  these functions save the item content to the local storage upon the buttton being clicked
function saveBtn09(){
  saveBtn9.on('click', function(){
    var input = $('#input9').val()
    localStorage.setItem('hour-9', input)
    
  })

}
saveBtn09()

function saveBtn010(){
  saveBtn10.on('click', function(){
    var input = $('#input10').val()
    localStorage.setItem('hour-10', input)
  })
}
saveBtn010()

function saveBtn011(){
  saveBtn11.on('click', function(){
    var input = $('#input11').val()
    localStorage.setItem('hour-11', input)
  })
}
saveBtn011()

function saveBtn012(){
  saveBtn12.on('click', function(){
    var input = $('#input12').val()
    localStorage.setItem('hour-12', input)
  })
}
saveBtn012()

function saveBtn013(){
  saveBtn13.on('click', function(){
    var input = $('#input13').val()
    localStorage.setItem('hour-13', input)
  })
}
saveBtn013()

function saveBtn014(){
  saveBtn14.on('click', function(){
    var input = $('#input14').val()
    localStorage.setItem('hour-14', input)
  })
}
saveBtn014()

function saveBtn015(){
  saveBtn15.on('click', function(){
    var input = $('#input15').val()
    localStorage.setItem('hour-15', input)
  })
}
saveBtn015()

function saveBtn016(){
  saveBtn16.on('click', function(){
    var input = $('#input16').val()
    localStorage.setItem('hour-16', input)
  })
}
saveBtn016()

function saveBtn017(){
  saveBtn17.on('click', function(){
    var input = $('#input17').val()
    localStorage.setItem('hour-17', input)
  })
}
saveBtn017()

// this for loop goes through a;; of the text areas with the class of description and converts the number corresponding with the data-time attribute so that I can check the time against the respected section.
for (var i = 0; i < textArea.length; i++) {
  var currentTextArea = textArea[i];
  var textAreaData = parseInt(currentTextArea.getAttribute('data-time'));
  if(time < textAreaData){
    currentTextArea.classList.add('future')
  } else if(time > textAreaData){
    currentTextArea.classList.add('past')
  } else{
    currentTextArea.classList.add('present')
  }
  
}
  
  


