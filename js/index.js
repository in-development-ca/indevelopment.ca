$(document).ready(function(){
  $('#lead-cta').click(function() {
    event.preventDefault();
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us15.list-manage.com","uuid":"b9497a04725304deedc18c317","lid":"517f78e4a0"}) });
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  });
});
