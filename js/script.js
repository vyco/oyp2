$(document).ready(function(){
  $('.pic-small').css('transition','.56s ease position')
  selector();
  nav();
  fader();
  filter();
  imgAllocation();
	aboutMe();
});
function aboutMe(){
	$('.back-drop').css('display','none');
	$('.about').click(function(e){
		$('.back-drop').fadeIn("slow");

	});
	$('.closer').click(function(){
		$('.back-drop').fadeOut("slow");
	});
}

function selector(){
  $('.editorials').css('display','none');
  $('.landscapes').css('display','none');
  $('.mixed').css('display','none');
$('.flex-unit[data-id=1]').click(function(){
  $('.main-body').css('display','none');
  $('.editorials').css('display','block');

});

$('.flex-unit[data-id=2]').click(function(){
$('.main-body').css('display','none');
$('.landscapes').css('display','block');

});
$('.flex-unit[data-id=3]').click(function(){
$('.main-body').css('display','none');
$('.mixed').css('display','block');

});
}

function nav(){
  $('.fa-arrow-left').click(function(){
    $('.editorials').css('display','none');
    $('.landscapes').css('display','none');
    $('.mixed').css('display','none');
    $('.main-body').css('display','block');
  });
}

function fader(){
  $('.item').each(function(i){
    setTimeout(function(){
        $('.item').eq(i).addClass("animated");
        $('.item').eq(i).addClass("fadeIn");
    },i*400);
});
/*$('.pic-small').each(function(i){
  setTimeout(function(){
      $('.pic').eq(i).addClass("animated");
      $('.pic').eq(i).addClass("fadeIn");
  },i*2000);
});
*/
$('.flex-unit').css('opacity','0');
$('.flex-unit').each(function(i){
  setTimeout(function(){

      $('.flex-unit').eq(i).css('opacity','1');
  },2000);
});

}
function filter(){

  var accepted = $('.pic[data-state=accepted]');
  var unaccepted = $('.pic[data-state=unaccepted]');
  var all = $('.pic');
  all.css('display','flex');
$('.btn-accepted').click(function(){
  console.log("showing accepted photos....")
	unaccepted.addClass("animated");
	unaccepted.addClass("fadeOut");
	unaccepted.css('display','none');
});
$('.btn-all').click(function(){
  if($('.pic').hasClass("animated") && $('.pic').hasClass("fadeOut")){
		$('.pic').removeClass("fadeOut");
		$('.pic').addClass("fadeIn");
		all.css('display','flex');
	}
});
$('.btn-rejected').click(function(){
  accepted.addClass("animated");
  accepted.addClass("fadeOut");
  accepted.css('display','none');
});
}
function imgAllocation(){
$('.lrg-pic').css(
  {
    'background':'url(https://images.unsplash.com/photo-1481391564276-da6fcacaee31?dpr=0.75&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=)',
    'background-size':'cover',
    'background-position':'center center'
}
);
$('.pic-small').css('background','url(https://images.unsplash.com/photo-1496482475496-a91f31e0386c?dpr=0.75&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)');
}
