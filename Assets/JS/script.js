const currentTime = moment().format('MMMM Do, YYYY');

const day1 = moment().add(1, "days").format("MMMM Do, YYYY");
const day2 = moment().add(2, "days").format("MMMM Do, YYYY");
const day3 = moment().add(3, "days").format("MMMM Do, YYYY");
const day4 = moment().add(4, "days").format("MMMM Do, YYYY");
const day5 = moment().add(5, "days").format("MMMM Do, YYYY");

$('#date1').text(day1);
$('#date2').text(day2);
$('#date3').text(day3);
$('#date4').text(day4);
$('#date5').text(day5);