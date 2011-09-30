/*
 * 	Easy Slider 1.5 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
/*
 *	markup example for $("#slider").easySlider();
 *	
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */
(function(a){a.fn.easySlider=function(b){var c={prevId:"prevBtn",prevText:"",nextId:"nextBtn",nextText:"",controlsShow:!0,controlsBefore:"",controlsAfter:"",controlsFade:!0,firstId:"firstBtn",firstText:"First",firstShow:!1,lastId:"lastBtn",lastText:"Last",lastShow:!1,vertical:!1,speed:800,auto:!1,pause:2e3,continuous:!1},b=a.extend(c,b);this.each(function(){function j(d,i){var l=h;switch(d){case"next":h=l>=g?b.continuous?0:g:h+1;break;case"prev":h=h<=0?b.continuous?g:0:h-1;break;case"first":h=0;break;case"last":h=g;break;default:}var m=Math.abs(l-h),n=m*b.speed;b.vertical?(p=h*f*-1,a("ul",c).animate({marginTop:p},n)):(p=h*e*-1,a("ul",c).animate({marginLeft:p},n)),!b.continuous&&b.controlsFade&&(h==g?(a("a","#"+b.nextId).hide(),a("a","#"+b.lastId).hide()):(a("a","#"+b.nextId).show(),a("a","#"+b.lastId).show()),h==0?(a("a","#"+b.prevId).hide(),a("a","#"+b.firstId).hide()):(a("a","#"+b.prevId).show(),a("a","#"+b.firstId).show())),i&&clearTimeout(k),b.auto&&d=="next"&&!i&&(k=setTimeout(function(){j("next",!1)},m*b.speed+b.pause))}var c=a(this),d=a("li",c).length,e=a("li",c).width(),f=a("li",c).height();c.width(e),c.height(f),c.css("overflow","hidden");var g=d-1,h=0;a("ul",c).css("width",d*e),b.vertical||a("li",c).css("float","left");if(b.controlsShow){var i=b.controlsBefore;b.firstShow&&(i+='<span id="'+b.firstId+'"><a href="javascript:void(0);">'+b.firstText+"</a></span>"),i+=' <span id="'+b.prevId+'"><a href="javascript:void(0);">'+b.prevText+"</a></span>",i+=' <span id="'+b.nextId+'"><a href="javascript:void(0);">'+b.nextText+"</a></span>",b.lastShow&&(i+=' <span id="'+b.lastId+'"><a href="javascript:void(0);">'+b.lastText+"</a></span>"),i+=b.controlsAfter,a(c).after(i)}a("a","#"+b.nextId).click(function(){j("next",!0)}),a("a","#"+b.prevId).click(function(){j("prev",!0)}),a("a","#"+b.firstId).click(function(){j("first",!0)}),a("a","#"+b.lastId).click(function(){j("last",!0)});var k;b.auto&&(k=setTimeout(function(){j("next",!1)},b.pause)),!b.continuous&&b.controlsFade&&(a("a","#"+b.prevId).hide(),a("a","#"+b.firstId).hide())})}})(jQuery)