var JsonData = '[{"title":"Swipe right to add. Move left to remove."}, {"title":"Item one"}, {"title":"Item two"}, {"title":"Item three"}, {"title":"Item four"}, {"title":"Item five"}]';

var obj = JSON.parse(JsonData);

var tmp = '';
$.each( obj, function(key, value) {
  tmp += '<div class="postCard">';
  tmp += '    <div class="cardContent" style="display: block;">';
  tmp +=          value.title;
  tmp += '    </div>';
  tmp += '  </div>';
});

$('#mainDiv').append(tmp);

$('.postCard').eq(0).attr("style", "display: block;").end();
