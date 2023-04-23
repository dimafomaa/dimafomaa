$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');		
	});

	$('.menu__link').click(function(event){
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});


	// ==============================================

	$(document).ready(function(){
		$('.video__inner').slick({
			arrows:false,
			dots:true,
			slidesToShow:2,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	});

	
	$(document).ready(function(){
		$('.slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:3,
			slidesToScroll:3,
			rows:2 ,
			infinite: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll:2,
					}
				},{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll:1,
					}
				}
				
			]
		});
	});

});

// ==================================
const videoInit = (selector) => {
	const videos = document.querySelectorAll(selector)

	if(videos.length > 0) {
		videos.forEach(video => {
			videoGenerate(video)
		})
	}
}

const videoGenerate = (video) => {
	const btn = video.querySelector('.video__item-btn')
	const videoID = btn.dataset.videoId
	const container = video.querySelector('.video__item')

	btn.addEventListener('click', () => {
		const iframe = iframeGenerate(videoID)

		container.innerHTML = '';
		container.appendChild(iframe)
	})
}

const iframeGenerate = (videoID) => {
	const iframe = document.createElement('iframe')

	const src = `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1`

	iframe.setAttribute('src', src)
	iframe.setAttribute('frameborder', '0')
	iframe.setAttribute('allow', 'autoplay')
	iframe.setAttribute('allowfullscreen', '')
	iframe.classList.add('video__item-content')

	return iframe
}

videoInit('.video__column')


// ==============================================

const tabsBtn   = document.querySelectorAll(".works__tab-btn");
const tabsItems = document.querySelectorAll(".works__body");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.works__tab-btn').click();
