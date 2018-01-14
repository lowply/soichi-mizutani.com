var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	},
	methods: {
		msg: function() {
			url = 'http://soichi-mizutani.localhost:8900/data.json'
			fetch(url, {
				"method": "GET",
			})
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data)
			})
			.catch((err) => {
				console.error(err)
			})
		}
	}
})

import $ from 'jquery';
import anime from 'animejs';

/* Variables
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var debug = true;
var page = '';
var category = '';
var work = '';
var defaultOpacity = 0.3;
var slideDuration = 300;
var fadeDuration = 100;
var photoAreaWidth = 700;
var currentPhotos = {};
var currentSection = '';
var lang = 'j';
var ua = '';

/* Functions
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



function getCategory(){
	category = $('body article').attr('id');
	if(document.URL.lastIndexOf('#') != -1){
		work = document.URL.substring(document.URL.lastIndexOf('#')).replace('#','');
	}
	if(document.URL.indexOf('works') != -1){
		page = 'works';
	}else{
		page = $('body').attr('id');
	}
	ua = navigator.userAgent.toLowerCase();
}

function changePhotos(clicked){	
	// how much photo moves to left/right
	var innerWidth = 700;
		
	// get the section which includes clicked anchor element
	var section = clicked.parent().parent().parent().parent();
	
	// get the name of the work for which clicked thumbs
	var id = section.attr('class');
	
	// get the number of clicked photo
	var href = clicked.attr('href');
	
	// element to move
	var target = $('div ul', section);
	
	// the number of targetted photo
	var photoNumber = parseInt(href.replace('#',''));
	
	// if array stores current photo number is not empty
	if(currentPhotos[id]){
		// darken the current thumb
		currentPhotos[id].css('opacity',defaultOpacity);
	}
	
	// brighten the clicked thumb
	clicked.css('opacity','1');
	
	// move the target photo container
	var delta = -(photoNumber-1)*innerWidth
	var myAnimation = anime({
		targets: [target[0]],
		translateX: delta,
		duration: 300,
		easing: 'easeInOutQuart',
		elasticity: 0,
	});
	
	// clicked thumb anchor obj is set to the current thumb
	currentPhotos[id] = clicked;
};

function changeSections(clicked){
	// how much photo moves to left/right
	var innerWidth = photoAreaWidth;
	
	function c2t(c){
		// return target obj from clicked obj
		var sn = c.attr('href').replace('#','');
		return $('section#content section.' + sn);
	}
	
	// element to move
	if(currentSection){
		c2t(currentSection).fadeOut(fadeDuration, function(){
			c2t(clicked).fadeIn(fadeDuration);
		});
	}else{
		c2t(clicked).fadeIn(fadeDuration);
	}
	
	// clicked thumb anchor obj is set to the current thumb
	currentSection = clicked;
};

function init_works(){
	// subNavBackground
	$('section#content section nav ul li a').each(function(){
		var bg = $(this).attr('href').replace('#','');
		var sn = $(this).parent().parent().parent().parent().attr('class');
		$(this).css('background-image','url(/assets/img/works/' + category + '/' + sn + '/' + bg + '.jpg)');
	});
	
	// mainNavBackground
	$('section#content > nav ul li a').each(function(){
		var sn = $(this).attr('href').replace('#','');
		var imgpath = '/assets/img/works/' + category + '/' + sn + '/1.jpg'
		$(this).css('background-image','url(' + imgpath + ')');
	});

	// setPhotoAreaWidth
	$('section#content section div ul').each(function(){
		var w = photoAreaWidth;
		var l = $(this).children().length;
		$(this).css('width',w*l);
	});
	
	// setSectionHeaderBg
	$('section#content section h3').each(function(){
		var id = $(this).parent().attr('class');
	});
	
	// clickEachPhotoThumbs
	$('section#content section').each(function(){
		var id = $(this).attr('class');
		var firstAnchor = $('a:first', this);
		changePhotos(firstAnchor);
	});
	
	// showFirstSection
	if(work){
		var anchorName = $('section#content > nav ul li a[href="#' + work + '"]');
	}else{
		var sectionName = $('section#content section:first').attr('class');
		var anchorName = $('section#content > nav ul li a[href="#' + sectionName + '"]');
	}
	changeSections(anchorName);
	
};

/* Actions
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// on Load
$(function(){
	if(!debug){
		$('div#debug').hide();
	}

	getCategory();
	
	/* For Works
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	if(page == 'works'){
		init_works();
		
		// main nav hover
		$('article section#content > nav ul li').each(function(i){
			$(this).hover(function(){
				var ename = $("h3 div.e", $('article section#content section')[i]).html()
				$("article section#content h2 span").html(" / " + ename)
			},function(){
				$("article section#content h2 span").html("")
			})
		})

		// sub nav hover
		$('article section#content section nav ul li a').hover(
			function(){
				$(this).css('opacity','1');
			},
			function(){
				var section = $(this).parents('section section').attr('class');
				if($(this).attr('href') != currentPhotos[section].attr('href')){
					$(this).css('opacity','0.2');
				}
			}
		);
	
		// Photo clicked
		$('article section#content section div ul li a').click(function(){
			var section = $(this).parents('section section');
			var pn = currentPhotos[section.attr('class')];
			var tg = pn.parent().next().children('a');
			var firstAnchor = $('nav ul li a[href="#1"]',section);
			
			this.blur();
			if(tg.html()){
				changePhotos(tg);
			}else{
				changePhotos(firstAnchor);
			}
			return false;
		});
	
		// Section Thumbs Clicked
		$('article section#content > nav ul li a').click(function(){
			this.blur();
			changeSections($(this));
	
		});
		
		// Work Thumbs Clicked
		$('article section#content section nav ul li a').click(function(){
			this.blur();
			changePhotos($(this));
			return false;
		});
		
	};
	
	/* For Index
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	if(page == 'index'){
		$('body#index article section ul li a').each(function(){
			var href = $(this).attr('href');
			var category = href.substring(href.indexOf('/works/'),href.indexOf('/#')).replace('/works/','');
			var id = href.substring(href.indexOf('#')+1);
			$(this).css('background-image','url(/assets/img/works/' + category + '/' + id + '/1.jpg)');
			
			$(this).hover(
			function(){
				$('body#index article section div').html($(this).html());
			},
			function(){
				$('body#index article section div').html('&nbsp;');
			})
		});
	}

	/* For Company
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	if(page == 'company'){
		//load_maps();
	}
	
	
	if(page == 'bio'){
		$('article section#content div#lang a').click(function(){
			var lang = $(this).attr('href').replace('#','');
			$('article section#content div#lang a').css('font-weight','normal');
			if (lang == "j"){
				$('article section#content div#j').show();
				$('article section#content div#e').hide();
			}else{
				$('article section#content div#e').show();
				$('article section#content div#j').hide();
			}
			$(this).css('font-weight','bold');
			
			return false;
		})
	}

});
