

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
function addMunkanap() {
  let lastid = parseInt($('.new_munkanap:last').attr('id'));
  console.log("lastid: "+lastid);
  if(isNaN(lastid)) {
    lastid=0; 
  }

  $('#munkanapItems').append(`
        <div id="`+(lastid+1)+`" class="new_munkanap row">
          <button id="`+(lastid+1)+`" class="remove btn btn-danger" onclick="removeMunkanap(this.id)">-</button>
          <div class="col-xs-6 col-sm-2">
            <input id="`+(lastid+1)+`" type="text" placeholder="dátum" class="datum_mezo form-control" >
          </div>
          <div class="col-xs-6 col-sm-2">
            <input id="`+(lastid+1)+`" type="number" min="0.5" max="12" step="0.5" class="munkaora form-control" placeholder="munkaóra">
          </div>
          <div class="col-xs-12 col-sm-6">
            <textarea id="`+(lastid+1)+`" rows="3" class="form-control" placeholder="megjegyzés"></textarea>
          </div>
        </div>
  `);
} // addMunkanap

function removeMunkanap(munkanapToRemove) {
  $("#"+munkanapToRemove+".new_munkanap").remove();
  console.log("ezt kell torolni: " +munkanapToRemove);
}

$(document).on('blur', '.munkaora' , function() {
  // amit ide irunk kod, az akkor fut le ha a munkaora mezöt elhagyja a user

  // http://jsfiddle.net/4ksywa6d/1/

  munkaoraMezo = parseFloat($(this).val());
  console.log("A munkaora mezo erteke: "+munkaoraMezo);
  console.log("A munkaora mezo tipusa: "+typeof(munkaoraMezo));
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


$(function(){
  $("input[type='number']").on("click", function(){
    $(this).focus();
  });
});
