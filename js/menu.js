let header = document.getElementById('header-menu');
let logo = document.getElementById('logo');
let nav = document.getElementById('nav');

let altura = header.offsetHeight/2;

let footer = document.getElementsByTagName('footer');
let pie = footer[0].offsetHeight + footer[1].offsetHeight;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura && window.pageYOffset < 1600){
		logo.classList.remove('img-logo');
    	logo.classList.add('img-logo-fixed');
		nav.classList.remove('nav');
		nav.classList.add('nav-fixed');
		header.classList.add('fixed');
    }else{
		logo.classList.remove('img-logo-fixed');
		logo.classList.add('img-logo');
		nav.classList.remove('nav-fixed');
		nav.classList.add('nav');
		header.classList.remove('fixed');
	}
});

//alert(window.pageYOffset);
