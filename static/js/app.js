

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
  <div>HELLO</div> 
  
  `);

}
