// Code goes here

$(document).ready(function() {

  $('#yourTurnModal').modal('show');

  $('#initiativeRollModal').modal('show');

  $('#yourTurnModal').on('shown.bs.modal', function (event) {
    navigator.vibrate(1000);
    console.log("vibrate");
  });

});
