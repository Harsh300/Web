// enable cross-origin resource sharing
// spotify client id: 094a90883cba42faac7a9694612f6b4f
// spotify client secret: 9142b16ac9414109bce395046763280a
$.support.cors = true;


var arr = [];
var number = -1;
var i = 1;

$(document).ready(function() {
	// handler for searching by keyword
	$('#searchButton').click(function() {

		var keyword = $('#Search').val();

		//youtube search section
		var maxResults = 5;
    var youtubeSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=' +
		escape(keyword) + '&key=AIzaSyBKl-NXWdXHsj6dCYrNRqgU5k5h_bH6Ua8';

		// clear any previous search results
		$('#youTube').html('');
		//$('#videos').html('');
    
		// Get the data from the web service and process
    $.getJSON(youtubeSearchURL, function(data) {
        $.each(data.items, function(i,item) {
            arr.push(item.id);
            console.log(arr);
            $('#youTube').append(renderSearchResultItem(item));
            //$('#videos').append(renderVideoPlayback(item.id));

        });
    });
		//spotify search section
		var spotifySearchURL = 'https://api.spotify.com/v1/search/';
		var accessToken = 'BQCwXat8Rg5rq_rWRSedqquuZzb4kQt7ogYtPEjeHKSQ60JSp8GobMtn6kUYtP8lEAueqHOMlDEObZ47fhE659q2Mb7WrlJaPQOPmKm8UD9OpV7rDRSuDRRDssOoznwzbWf56sk7XmWpNsV4EUYaAIOCPE';

		console.log("Spotify");
		fetch(spotifySearchURL,{
			headers:{'Authorization': 'Bearer'+ accessToken}
		}).then((response)=>response.json()).then(data=>console.log(data));
		
		//Twitter
		
	window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}
(document, "script", "twitter-wjs"));

	});


function renderSearchResultItem(item) {
    if (item.id.kind == 'youtube#video') {
      number = number + i;
      //console.log("Making button");
      //console.log('#linkButton'.value);
      // OnClick LinkButton
      $('#0').unbind().click(function() {
        $('#YouTubeResult').html('');
    console.log("GOT HERE");
    console.log(item.id);
    var useThis = this.value;
    var itemIdOfNumber = arr[useThis];
    
    $('#YoutubeResult').append(renderVideoPlayback(itemIdOfNumber));
    });
    $('#1').unbind().click(function() {
      $('#YouTubeResult').html('');
    console.log("GOT HERE");
    console.log(item.id);
    var useThis = this.value;
    var itemIdOfNumber = arr[useThis];
    
    $('#YoutubeResult').append(renderVideoPlayback(itemIdOfNumber));
    });
    $('#2').unbind().click(function() {
      $('#YouTubeResult').html('');
    console.log("GOT HERE");
    console.log(item.id);
    var useThis = this.value;
    var itemIdOfNumber = arr[useThis];
    
    $('#YoutubeResult').append(renderVideoPlayback(itemIdOfNumber));
    });
    $('#3').unbind().click(function() {
      $('#YouTubeResult').html('');
    console.log("GOT HERE");
    console.log(item.id);
    var useThis = this.value;
    var itemIdOfNumber = arr[useThis];
    
    $('#YoutubeResult').append(renderVideoPlayback(itemIdOfNumber));
    });
    $('#4').unbind().click(function() {
      $('#YouTubeResult').html('');
    console.log("GOT HERE");
    console.log(item.id);
    var useThis = this.value;
    var itemIdOfNumber = arr[useThis];
    
    $('#YoutubeResult').append(renderVideoPlayback(itemIdOfNumber));
    });
    //append to array!
    //get the position of that element!
    //use that position value as the value of the button it is creating!
    //onlick will get the value of the button and go through the array to get to that postion and play that video
      $('subYoutube').append('<li><a "http://www.youtube.com/v/' + item.id.videoId +
       '">' + item.snippet.title + '</a><button id="' + number + '"; value=' + number + '>Watch this Video</button></li>');
      return '<li><a "http://www.youtube.com/v/' + item.id.videoId +
      '">' + item.snippet.title + '</a><button id="' + number + '"; value=' + number + '>Watch this Video</button></li>';

    }
    else
    {
        return '';
    }
}


//console.log($('#linkButton').val());
});



//onclick button create div to hold the video

  //run the renderVideoPlayback(item.id)
    //item.ID from list

function renderVideoPlayback(id) {
    if (id.kind == 'youtube#video') {
       var text = '<div>' +
                  '    <embed width="420" height="345" ' +
                  '       src="http://www.youtube.com/v/' + id.videoId + '"' +
                  '       type="application/x-shockwave-flash">' +
                  '    </embed>' +
                  '</div>'
        return text;
    } else {
        return '';
    }
}
