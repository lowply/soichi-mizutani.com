/* Variables
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var debug = true;
var page = '';
var category = '';
var work = '';
var defaultOpacity = 0.2;
var slideDuration = 300;
var fadeDuration = 100;
var photoAreaWidth = 600;
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
	var innerWidth = 600;
		
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
	target.animate({'left' : -(photoNumber-1)*innerWidth + 'px'}, slideDuration, 'easeInOutQuart');	
	
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
		//$(this).css('background-image','url(/assets/img/works/' + category + '/' + id + '/title.png)');
		// $(this).css('background-image','url(/assets/img/main.svg)');
	});
	
	// clickEachPhotoThumbs
	$('section#content section').each(function(){
		var id = $(this).attr('class');
		var firstAnchor = $('a:first', this);
		changePhotos(firstAnchor);
	});
	
	// showFirstSection
	if(work){
		var anchorName = $('section#content > nav ul li a[href=#' + work + ']');
	}else{
		var sectionName = $('section#content section:first').attr('class');
		var anchorName = $('section#content > nav ul li a[href=#' + sectionName + ']');
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
	
	// Disable anchors to closed content
	var disabledObjects = $('a[href*=graphic],a[href*=fixture],a[href*=furniture]', 'article nav#global dl dd');
	// disabledObjects.css('opacity','0.2'); ==> moved to css
	disabledObjects.click(function(){
		return false;
	});
	
	
	// For LEGACY browsers notion
	$('div#note').html('お使いのブラウザでは表示が崩れる可能性があります。<br>下記のいずれかのブラウザの最新版をダウンロードしてご利用ください。<br><a href="http://www.google.co.jp/chrome/">Google Chrome</a>, <a href="http://mozilla.jp/firefox/">Mozilla Firefox</a>, <a href="http://www.apple.com/jp/safari/">Apple Safari</a>, <a href="http://www.microsoft.com/japan/windows/products/winfamily/ie/function/default.mspx">Internet Explorer</a>')

	/* For Works
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	if(page == 'works'){
		init_works();
		
		// main nav hover
		$("nav dl dd a").each(function(i){
			category = $(this).attr("href").replace("/works/","").replace("/","")
			var categories = "article#" + category + " section#content > nav ul li a"
			$(categories).each(function(j){
				$(this).hover(
					function(){
						var px = i * -190
						var py = j * -60 - 1370
						$('article section#content h2 div').css('background-position', px + 'px ' + py + 'px');
					},
					function(){
						$('article section#content h2 div').css('background-position','0 -400px');
					}
				)
			})
		})


		// for (var i = 0; i < $(ga).length; i++) {
		// 	py = i * -60 - 1370
		// 	$(ga, 1).hover(
		// 		function(){
		// 			$('article section#content h2 div').css('background-position','0 ' + py + 'px');
		// 		},
		// 		function(){
		// 			$('article section#content h2 div').css('background-position','-400px 0');
		// 		}
		// 	);
		// }
		// $(ga).hover(
		// 	function(){
		// 		console.log($(this).attr("href"))
		// 		$('article section#content h2 div').css('background-position','0 -1370px');
		// 	},
		// 	function(){
		// 		$('article section#content h2 div').css('background-position','-400px 0');
		// 	}
		// );
		
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
			var firstAnchor = $('nav ul li a[href=#1]',section);
			
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
		
		// for IE8 last-child problem
		$('article section#content section nav ul li:last-child').css('margin','0');
		
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
				$(this).css('opacity','1');
				$('body#index article section div').html($(this).html());
			},
			function(){
				$(this).css('opacity','0.6');
				$('body#index article section div').html('&nbsp;');
			})
		});
		
		// for IE8 nth-child problem
		if(ua.indexOf('msie 8') != -1){
			$('body#index article section ul li:nth-child(4n)').css('margin-right','0')
			$('body#index article nav#global dl:last-child').css('margin','0')
		}
	}

	/* For Company
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	if(page == 'company'){
		//load_maps();
	}
	
	
	if(page == 'bio'){
		$('article section#content div#lang a').click(function(){
			$('article section#content div#' + lang).hide();
			$('article section#content div#lang a[href=#' + lang + ']').css('font-weight','normal');
			
			lang = $(this).attr('href').replace('#','');
			
			$('article section#content div#' + lang).show();
			$('article section#content div#lang a[href=#' + lang + ']').css('font-weight','bold');
			
			return false;
		})
	}

});
