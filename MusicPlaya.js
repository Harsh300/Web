// enable cross-origin resource sharing
// spotify client id: 094a90883cba42faac7a9694612f6b4f
// spotify client secret: 9142b16ac9414109bce395046763280a
$.support.cors = true;

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

	});
});

function renderSearchResultItem(item) {
    if (item.id.kind == 'youtube#video') {
       return '<li><a "http://www.youtube.com/v/' + item.videoId +
              '">' + item.snippet.title + '</a></li>';
    } else {
        return '';
    }
}

/*function renderVideoPlayback(id) {
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
    }*/
//}
