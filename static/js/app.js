

/*jshint esnext: true */
/*jshint devel: true */
/*jslint node: true */
/*jslint browser: true */
/*jslint jquery: true */


function switchMenu(clickedId) {
  console.log(clickedId+" megnyomva...");
  // jquery selector: minden html elemet kiválaszt amin rajta van content class
  $(".content").css('display', 'none');
  $("#"+clickedId+".content").css('display', 'unset');

  $(".menu-item").removeClass("btn-primary");

  $("#"+clickedId+".menu-item").removeClass("btn-secondary");
  $("#"+clickedId+".menu-item").addClass("btn-primary");
}
function getToday() {
	let now = new Date();
  // let testDate = new Date("January 23, 2014 11:13:00");

  // levágjuk az utolsó két elemet a strinből, és elé írunk egy 0 karaktert
	let day = ("0" + now.getDate()).slice(-2);
  // january starts with 0 ¯\(°_o)/¯ Ezért hozzá kell adnunk egyet
	let month = ("0" + (now.getMonth() + 1)).slice(-2);
	let today = now.getFullYear()+"."+(month)+"."+(day) ;
	return today;
}


function addMunkanap() {
  let lastid = parseInt($('.new_munkanap:last').attr('id'));
  if(isNaN(lastid)) {
    lastid=0; 
  }
  mainap = getToday();

  $('#munkanapItems').append(`
        <div id="`+(lastid+1)+`" class="new_munkanap row">
          <button id="`+(lastid+1)+`" class="remove btn btn-danger" onclick="removeMunkanap(this.id)">-</button>
          <div class="col-xs-6 col-sm-2">
            <input id="`+(lastid+1)+`" type="text" placeholder="dátum" class="datepicker datum_mezo form-control" value="`+mainap+`" >
          </div>
          <div class="col-xs-6 col-sm-2">
            <input id="`+(lastid+1)+`" type="number" min="0.5" max="12" step="0.5" class="munkaora form-control" placeholder="munkaóra">
          </div>
          <div class="col-xs-12 col-sm-6">
            <textarea id="`+(lastid+1)+`" rows="3" class="form-control" placeholder="megjegyzés"></textarea>
          </div>
        </div>
  `);
  // bootstrap-datepicker modul:
  // http://bootstrap-datepicker.readthedocs.io/en/latest/index.html
  $('.datepicker').datepicker({
      language: 'hu',
      autoclose: 'true',
      todayBtn: 'true',
      todayHighlight: 'true'
  });


} // addMunkanap

let new_munkanaps = [];
// [{id:1, datePiced:"2017.04.03",workedHour:5,comment:"mycomment",okToSend:true},{},{}...]

function collectMunkanaps() {
  //TODO összegyűjteni a munkanapokat egy objecteket tartalmazó tömbbe
  console.log("munkanapok összegyűjtése....");
}


function removeMunkanap(munkanapToRemove) {
  $("#"+munkanapToRemove+".new_munkanap").remove();
}


function sendForm() {
  console.log("sending form...");
  collectMunkanaps();
  //TODO elkuldeni az adatokat a szervernek
}


$(document).on('blur', '.munkaora' , function() {
  // amit ide irunk kod, az akkor fut le ha a munkaora mezöt elhagyja a user

  // http://jsfiddle.net/4ksywa6d/1/

  munkaoraMezo = parseFloat($(this).val());
  if ( Number.isFinite(munkaoraMezo) ) {
    if ( munkaoraMezo > 8 ) {
      $(this).val('8');
    } else if( munkaoraMezo < 0) {
      $(this).val('0');
    } 
  } else {
    $(this).val('0');
  }
});

$(document).ready(function () {
  // ez akkor fut le miután betöltődik a weboldal böngészőbe
  addMunkanap();
});

// firefox fix!! https://bugzilla.mozilla.org/show_bug.cgi?id=1012818
$(function(){
  $("input[type='number']").on("click", function(){
    $(this).focus();
  });
});
