<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />;
$("button").on("click", function() {
  var search = $(this).attr("Sbutton");
});
var term = [];
var numRec = [];
var start = [];
var end = [];
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url +=
  "?" +
  $.param({
    "api-key": "ca28b99a06844dccb99001cec798bdbc",
    q: term,
    begin_date: start,
    end_date: end,
    page: numRec
  });
$.ajax({
  url: url,
  method: "GET"
})
  .done(function(result) {
    console.log(result);
  })
  .fail(function(err) {
    throw err;
  });
$("button").on("click", function() {
  var result = $(this).attr("CLresult");
  term = [];
  numRec = [];
  start = [];
  vend = [];
});
