$(document).ready(function(){

  init();
  
  function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      $("#continue-btn").attr("class", "d-none")
    }
  }
  }

});

