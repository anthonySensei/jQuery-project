$('.carousel').carousel({
  interval: 3000
})

var $btnTop=$('.btn-top')


$(window).on('scroll', function(){
  if($(window).scrollTop() >= 20){
    $btnTop.fadeIn();
  }else{
    $btnTop.fadeOut();
  }
});

$btnTop.on('click', function(){
  $('html,body').animate({scrollTop:0}, 900)
});

var $time = document.querySelector('#time');

function getTime(){
  let date = new Date();
  $time.textContent = date;
  setTimeout('getTime()', 1000)
}

var acc = document.getElementsByClassName('accordion');

for(let i=0; i<acc.length;i++){
  acc[i].onclick = function(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  }
}

function snackbar(){
	var snackbar = document.getElementById('snackbar');
	snackbar.className = 'show';
	setTimeout(function(){
		snackbar.className = snackbar.className.replace('show', '');
	}, 3000);
}
