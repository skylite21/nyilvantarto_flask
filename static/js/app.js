

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



  $('#munkanapItems').append(`
        <div class="new_munkanap row">
          <button class="remove btn btn-danger" onclick="removeMunkanap(this.id)">-</button>
          <div class="col-xs-6 col-sm-2">
            <input type="text" placeholder="dátum" class="datum_mezo form-control" >
          </div>
          <div class="col-xs-6 col-sm-2">
            <input type="number" min="0.5" max="12" step="0.5" class="munkaora form-control" placeholder="munkaóra">
          </div>
          <div class="col-xs-12 col-sm-6">
            <textarea rows="3" class="form-control" placeholder="megjegyzés"></textarea>
          </div>
        </div>
  `);

}
