// Code goes here

$(document).ready(function() {

  if ("vibrate" in navigator) {
    navigator.vibrate(1000);
  }

  $('#yourTurnModal').modal('show');

});
