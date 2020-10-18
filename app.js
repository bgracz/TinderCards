var doc = new jsPDF();
var sins = [];
var notSins = [];
var totalList = ($("#mainDiv div").length / 2);
var progressBar = 0;
var firstMove = '';

$("#listAppHidden").hide();
$('label').hide();
$('input').hide();
$('#pdfButton').hide();
$('#printButton').hide();

$(document).ready(function() {

  $(".postCard").on("swiperight", function() {
    $(this).addClass('rotate-left').delay(500).fadeOut(1);
    $('.postCard').find('.status').remove();

    var cardRight = $(this).text();
    var nowyObiekt = sins.push(cardRight);
    console.log(sins);

    changeProgress();

    if (progressBar == 1){
      firstMove = 'right';
      sins.shift();
    } else {
      firstMove = 'left';
    };
    console.log(firstMove);

    if ($(this).is(':last-child')) {
      $('.postCard:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
      list();
      hiddenList();
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });

  $(".postCard").on("swipeleft", function() {
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.postCard').find('.status').remove();

    var cardLeft = $(this).text();
    var nowyObiektUkryty = notSins.push(cardLeft);
    console.log(notSins);

    changeProgress();

    if (progressBar == 1){
      firstMove = 'left';
      notSins.shift();
    } else {
      firstMove = 'right';
    };
    console.log(firstMove);

    if ($(this).is(':last-child')) {
      $('.postCard:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
      list();
      hiddenList();
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });

});

function changeProgress() {
  progressBar = progressBar + 1;
  var percent = Math.round((progressBar / totalList) * 100);
  $("h3").text(percent + " %");
  console.log(percent);
};

function list() {
  $('#container').hide();

  var list = document.createElement('ul');
  sins.forEach(function(sins) {
    var li = document.createElement('li');
    li.textContent = sins;
    list.appendChild(li);
  });

  var listApp = document.querySelector('#listApp');
  listApp.appendChild(list);

  $("label").show(300);
  $("input").show(500);
  $("h3").hide();
  $('#pdfButton').show(700);
  $('#printButton').show(900);

};

$('#ch').click(function() {
  if ($(this).is(':checked')) {
    $("#listAppHidden").show(200);
  } else {
    $("#listAppHidden").hide(200);
  }
});

function hiddenList() {

  var hiddenList = document.createElement('ul');
  notSins.forEach(function(notSins) {
    var li2 = document.createElement('li');
    li2.textContent = notSins;
    hiddenList.appendChild(li2);
  });

  var listAppHidden = document.querySelector('#listAppHidden');
  listAppHidden.appendChild(hiddenList);
};

var today = new Date();
function saveDiv(divId, title) {
 doc.fromHTML(document.getElementById('listApp').innerHTML, 20, 10);
 doc.save('rachunek_sumienia_' + today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() +'.pdf');
};

$("#button").click(function() {
  location.reload();
});
