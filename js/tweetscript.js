var configProfile = {
  "profile": {"screenName": 'willpape98'},
  "id": '1630776914',
  "domId": 'tweets1',
  "maxTweets": 10,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);


var configTagged = {
  "id": '963082493418237953',
  "domId": 'tweets2',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": false,
  "customCallback": handleTweets
};
twitterFetcher.fetch(configTagged);

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('tweets2');
    var html = '<div class="container"><div class="row row-eq-height mb-5">';
    while(n < x) {
      html += '<div class="col-4">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}
