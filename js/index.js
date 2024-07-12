//* functions
function displayCount() {
  var endDate = new Date("2024-12-31T23:59:59").getTime();
  var dateTimeNow = new Date().getTime();
  var remainingTime = endDate - dateTimeNow;
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  $(".days").html(days + " d ");
  $(".hours").html(hours);
  $(".minutes").html(minutes);
  $(".seconds").html(seconds);
}

setInterval(displayCount, 1000);

//* events
$(".open-nav").click(() => {
  $(".side-menu").addClass("w-235");
});
$(".closebtn").click(() => {
  $(".side-menu").removeClass("w-235");
});
