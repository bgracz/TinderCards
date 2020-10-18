var JsonData = '[{"title":"Item one"}, {"title":"Item two"}, {"title":"Item three"}]';

var obj = JSON.parse( JsonData );

var tmp = '';
$.each( obj, function( key, value ) {
  tmp += '<div class="postCard">';
  tmp += '    <div class="cardContent" style="display: block;">';
  tmp +=          value.title;
  tmp += '    </div>';
  tmp += '  </div>';
});

$('#mainDiv').append(tmp);

$('.postCard').eq(0).attr("style", "display: block;").end();
