$(document).ready(function(){
  $('#quoteBtn').click(function(){
    var chuckAPI = "https://api.icndb.com/jokes/random";
    $.getJSON(chuckAPI,{
      "type":"success",
      "value":{"id":1,  "joke":12 }
    }).done(function(joke){
        $('#quote').html(joke.value.joke);
    });
    $('#tweet').click(function() {
      var quote = $('#quote').text();
      var tweet = "https://twitter.com/intent/tweet?text=" +encodeURIComponent(quote);
      window.open(tweet,'_blank');
      })
    });
  })

// Jokes are retrieved from http://www.icndb.com/api/
