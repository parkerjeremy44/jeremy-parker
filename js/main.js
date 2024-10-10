$(window).load(function() {
	"use strict";
	$('#page-loader').addClass('hidden');
});
$(document).ready(function() {
	"use strict";
	// User's birth year (set this to the actual birth year)
	// const birthYear = 1981; 

	// // Get the current year
	// const currentYear = new Date().getFullYear();

	// // Calculate the age
	// const age = currentYear - birthYear;

	// // Update the age in the HTML
	// document.getElementById('age').textContent = `${age} Years`;

	$('.popup').click(function() {
		var popupId = $(this).data('popup');
		var mainpop = $(this).attr('class');
		const modalContent1 = `
						<h2>Fluence Energy</h2>
						<p>Fluence is a global market leader in energy storage products and services, and cloud-based software for renewables and storage assets.
						</p>
						<img src="./images/fluence2.png" alt="fluence image 2">
						<p>My main job role was to modernize and improve the user experience of the Fluence Energy SaaS cloud application. After showing strong UX research and product knowledge, I was awarded the secondary role of Product Owner. From this point, I hired a front-end React.js engineer and a junior UX designer. I was also allowed to grab an intern and delegated them the work of documentation in Confluence along side their duties as co-designer and co-developer.
						</p>
						<p>
							I began with a visit to an onsite location of the Fluence main product, the cube or battery rack system.
						</p>
						<img src="./images/cube2.jpg" alt="fluence image 1"/>
						<p>
							I spoke with Commissioning Engineers, Mechanical Engineers, Electrical Engineers, and documented their every day work experience and job duties. This gave me deep insights into how they saw the cube system, which in turn allowed me to design for them directly so that the application would be intuitive to their nature and knowledge.
						</p>
						<h4>
							Design for Customer Experience while keeping a technical Commissioning Engineer base of operations in the cloud application.
						</h4>
						<p>
							From there I spent the next few weeks collecting our thoughts from the site visit and creating a wireframe with all of the components necessary for the engineers to run the system effectively. There are pieces of this system I can't fully show you do to NDA but with permission, I can show you quite a bit more.
						</p>
						<img src="./images/component_wireframe.png" alt="component wireframe image"/>
						<p>
							I took the wireframe and started designing the components with a 2-headed approach: build out the front-end react.js components so that I would have examples and complete the design work.
						</p>
						<h5>
							Below is an example of my tooltip component:
						</h5>
						<img src="./images/tooltip_js.png" alt="tool tip image">
						<h5>And this is an example of the viewblock or component box from the wireframe:
						</h5>
						<img src="./images/viewblock1.png" alt="view block image">
						<p>If you would like to speak more about my development background, I can start by saying I have been coding since I was 11 years old in 1992. I am an expert in HTML, CSS, Javascript and all the newer iterations such as React, Vue, and Angular. I'm also well trained and versed in Google Analytics, User and Component testing as well as putting everything together for a complete and fulfilling job performed. I'd give myself a passing grade for the programming languages such as Python, C++, and Ruby.
						</p>
						<h5>The designs started coming together and we got to our MVP as shown here:
						</h5>
						<img src="./images/component%20view.png" alt="component view 2 image" />
						<h5>Along the way, I learned a new trick called fold back, and created the very first icon representation of this in the world! This icon is now used in electrical engineering publications and articles around the world!
						</h5>
						<img src="./images/fold%20back.png" alt="component view 2 image" />
						<h5>And to cap this section off, here are some of my design ideas in wireframes for future iterations:
						</h5>
						<img src="./images/drill%20down%202.png" alt="component view 2 image" /> 
						<img src="./images/drill%20down%203.png" alt="component view 2 image" /> 
						<img src="./images/graphs.png" alt="component view 2 image" />
						<h5>Table View</h5>
						<img src="./images/cores table.png" alt="">
						<p>In this section, I will take you on a journey from concept to MVP through to final delivery for project code named Table View. Ok, actually, it was just called Table View. A little light comedy to break up the monotony of resume after resume, right?</p>
						<img src="./images/audit.png" alt="">
						<p>We spoke with Commissioning Engineers, Mechanical Engineers, Electrical Engineers, and documented their work experience and every day job duties. This gave us deep insights into how they saw the cube system, which in turn allowed us to design for them directly so that the application would be intuitive to their knowledge and nature.</p>
						<h4>Create a new table view design with loads of new functionality intent on being powerful, fast, and smartly presented.</h4>
						<p>Using the Audit screen as shown above as our start point, this is one of the early iterations. I was testing out different ways of showing breadcrumbs and how to display a way to change views in the workable area. Some early design decisions such as removing the separating line between the first few columns were to divide the columns of data from each element or piece of the Cube.</p>
						<img src="./images/table_early1.png" alt="">
						<p>You can also see some ideas where the user could drill down into the Core as a whole while also using the Table View. This would allow overhead control and visible data when moving through different parts of the system.</p>
						<p>Below are a few examples of some iterative ideas:</p>
						<img src="./images/table_early2.png" alt="">
						<img src="./images/table_early3.png" alt="">
						<img src="./images/table_early4.png" alt="">
						<p>I'd be happy to share the prototype for this, all I need is an email to send an invite code. For now, take a look at the Table of Contents and Instructions page I created where everything was linked and the user could access this from anywhere in the prototype. The goal being the user will never be lost or confused in the viewing action.</p>
						<img src="./images/prototype1.png" alt="">
						<p>The entire Figma file!</p>
						<img src="./images/table_early5.png" alt="">
						<p>Finally, there's a boatload of data I collected in various different pieces of software to fully round out this project. I can show you this in an interview. For now, I'm leaving it out because I feel like it would make this portfolio a bit bloated and I want to respect your time.</p>
						<img src="./images/software2.png" alt="">
		`
		var modalContent2 = `
        <h2>Marriott</h2>
				<p>My time at Marriott encapsulated many firsts. First time at an international brand and company. First
					time leading multiple teams. First time in a fast-paced environment with daily reviews before the agile
					approach really latched into the workplace as we know it today. It was also my first time working in the
					EST timezone from the PST one as I had just moved to California. I worked with different vendors on
					different projects and introduced UX concepts and best practices to the teams. We had such good turnaround
					and analytics that I went from a website manager type role to a Product Designer for the voice and tone of
					Marriott brand websites and mobile apps.
				</p>
				<p>In this section, I am briefly going to show you how I took simple guidelines and created a unique world
					around them. When we meet to chat, I will gladly go into more depth of detail.
				</p>
				<h5>
					Using a couple of keywords, design and build a website utilizing the voice and tone of the brand.
				</h5>
				<p>
					"Sophisticated style at EDITION Hotels, a unique concept in the lifestyle hotel space"
				</p>
				<img src="./images/m3.png" alt="marriott-image3"/>
				<p>
					The idea to showcase a rotating diamond with a stylized font is to attract those wishing to stay in a
					glamourous environment. The flowers inside show a soft sensibility and artistic thinking. The font is
					unique enough to expound those feelings.
				</p>
				<hr>
				<h5>
					Vacation Club is the primary timeshare brand of Marriott Vacations Worldwide Corporation. The brand comprises around 70 Marriott Vacation Club properties throughout the World.
				</h5>
				<p>
					The setting behind this brand was family-oriented long-term stays or timeshares. The showcase was to be a lightly colored beach environment with playful fonts. This site also needed focus on the many destinations worldwide.
				</p>
				<img src="./images/m2.png" alt="marriott-image2"/>
				<hr>
				<h5>
					This brand was designed to display the healthy, active traveler who wants to maintain a balanced lifestyle while on the road.
				</h5>
				<p>
					This was a brand that delved fully into the environmentally-friendly with energy and water efficient features. The design decisions to present a retro-futuristic look was to appeal to the forward-thinking crowd who enjoy fitness and positivity.
				</p>
				<img src="./images/m1.png" alt="marriott-image1">
    `;
		var modalContent3 = `
			<h2>Informer Systems</h2>
			<p>This company was for the most part a startup. It was using purchased software from an older company that was shutting down business, so essentially, they bought into the space. The product they bought was designed and built in the early 2000s. Almost all of the CSS was hardcoded into the HTML files and a lot of early Coldfusion was used.</p>
			<p>On this page, I'm going to focus on the code work I did here. The designs will be showcased separately.</p>
			<h5>Take an old application and update it using javascript. Turn the application into a fast and reliable SaaS product that is intuitive to the most difficult technology users.
			</h5>
			<p>I brought Vue.js to the team. It's a bit more concise and can render designs a bit better than Angular and is a bit less technical than React. So on with Vue.js we went...
			</p>
			<p>Here is an example of the Authorization protocol:
			</p>
			<img src="./images/informer2.png" alt="informer image 1">
			<p>Here is an example of the Vue.js router setup. This is like a table of contents that sorts each destination to the proper js component:
			</p>
			<img src="./images/informer3.png" alt="informer image 2">
			<h6>I was building an app for use by folks in the public sector, such as police, fire, EMS, and administrators. So the app had to be built with a clean and modest approach.
			</h6>
			<p>Here is an example of the main index page or home page of the training and scheduling section of the app:
			</p>
			<img src="./images/informer4.png" alt="informer image 3">
			<p>Here is an example of backend databases meeting frontend framework.
			</p>
			<img src="./images/informer5.png" alt="informer image 4">
			<h5>Now, I'll switch over to the design work
			</h5>
			<p>Below is an example of the new, conceptual designs for the SaaS application
			</p>
			<img src="./images/informer0.png" alt="">
			<img src="./images/informer7.png" alt="">
			<p>And here is the difference between the old software and the new updates:
			</p>
			<img src="./images/informer6.png" alt="">
			<img src="./images/informer1.png" alt="">
		`
		const modalContent4 = `
			
		`
		const modalContent5 = `
				<h2>Lotion Bottle for national grocery brand
				</h2>
				<p>I've been responsible for leading teams from start to finish on many website and app projects, but I'd never gotten an opportunity quite like this one before. On this page, I will show you what I can. I know it jumps around a bit, but hopefully, this impresses all the same!
				</p>
				<p>The concept was simple:</p>
				<h5>Design a lotion bottle that could be placed on anybody's bathroom sink and have it convey the decor's funky and fun personality.
				</h5>
				<p>Early beginnings of the design using some never before seen concepts and theoretical user experience ideas.
				</p>
				<img src="./images/product1.jpg" alt="">
				<img src="./images/product2.jpg" alt="">
				<p>Use a suction cup to allow the User to stick it to the wall??
					Sometimes, wild and crazy ideas turn out to be the ones that bring sales into the green.
				</p>
				<img src="./images/product3.jpg" alt="">
				<p>This is the current product line which would make for an easy order to the printers.
				</p>
				<img src="./images/product4.png" alt="">
				<h5>The current product world involving sunflowers are either printed (or painted) on to bottles themselves or they are sold in cooking oil bottles.
				</h5>
				<p>This gave me the idea of designing a sunflower to be 3D and use that model as the lotion bottle. The biggest hurdle was presenting something outside of the already approved bottle shapes and sizes.
				</p>
				<img src="./images/sunflower5.png" alt="">
				<img src="./images/sunflower6.png" alt="">
				<h5>The final approved design included some meetings with product management to explain the design and why it would be successful.
				</h5>
				<p>I can share some of that with during our meeting. It took some time speaking with the buyers and product managers to convince them of this conceptual design and to bring it to the store floor.
				</p>
				<p>
				The first product was built and leaped over pre-production testing! A few minor changes included changing from a lotion bottle to a hand wash bottle and raising the print of the design to be even more 3D. The product ended up being bought by Trader Joe's and hit the store floor in April of this year, 2023.
				</p>
				<img src="./images/lotion1.png" alt="">
		`
		const modalContent6 = `
					<h2>Websites</h2>
					<h5>Some examples of my freelance website work:
					</h5>
					<img src="./images/luminous.png" alt="">
					<p>Luminous Hotel Management</p>
					<p> site was built in Wordpress. I also helped them with all of their IT and Cloud setup.</p>
					<hr>
					<img src="./images/edn.png" alt="">
					<p>Earth Day Network</p>
					<p>Time served in a non-profit! Just kidding, loved my time here and really connected with our interns and donaters.</p>
					<hr>
					<img src="./images/asa.png" alt="">
					<p>American Staffing Association</p>
					<p>This site was also built in Wordpress so that web management could be easily done once my role was complete. I was also a part of the Marketing, Analytics, and IT teams.</p><hr>
					<img src="./images/loki.png" alt="">
					<p>Loki Hostels</p>
					<p>This site was built to be responsive for any device. Early days of this feature!</p><hr>
					<img src="./images/marriott4.png" alt="">
					<p>Marriott brand site 4 of 5</p><hr>
					<p>This site was built to be responsive for any device. Early days of this feature!</p><hr>
					<img src="./images/marriott5.png" alt="">
					<p>Marriott brand site 5 of 5</p><hr>
					<p>This site was built to be responsive for any device. Early days of this feature!</p><hr>
					<img src="./images/djsynz.png" alt="">
					<p>Music website</p><hr>
					<h5>A few logos:</h5>
					<img src="./images/logos.png" alt="">
		`

		var modalContent;
    if (popupId == 1) {
        modalContent = modalContent1;
    } else if (popupId == 2) {
        modalContent = modalContent2;
    } else if (popupId == 3) {
        modalContent = modalContent3;
    } else if (popupId == 4) {
				modalContent = modalContent6;
		} else if (popupId == 5) {
				modalContent = modalContent5;
		} else if (popupId == 6) {
				modalContent = modalContent6;
		}

		$('.detail-meta').html(modalContent);
		$('#modal-container').removeAttr('class').addClass(mainpop);
		$('body').addClass('modal-active');
	});
	$('#close-modal').click(function() {
		$('#modal-container').addClass('out');
		$('body').removeClass('modal-active');
	});
	$('.service-box').hover(function() {
		$(this).children('i').toggleClass('heartbeat');
	});
	var isSlide = false;
	var slideElem = $('.slide');
	var arrowElem = $('.p-footer .arrow-d');
	var pageElem = $('.page');
	var portfolioMenuElem = $('li[data-menuanchor="portfolio"]');
	if ($.isFunction($.fn.typed)) {
		$(".jeremy-parker-meta > h3 span").typed({
			strings: ["Team Leader", "Code Engineer", "UI/UX designer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 3e3,
			typeSpeed: 30
		});
	}
	if ($.isFunction($.fn.perfectScrollbar)) {
		$('.our-work, .detail-meta').perfectScrollbar();
	}
	if ($.isFunction($.fn.YTPlayer)) {
		jQuery("#bg-youtube").YTPlayer();
	}
	$('#mainpage').fullpage({
		menu: '#qmenu',
		anchors: ['home', 'about-us', 'services', 'portfolio', 'portfolio-2','portfolio-3', 'contact'],
		verticalCentered: true,
		resize: false,
		responsive: 900,
		scrollOverflow: true,
		css3: false,
		navigation: true,
		onLeave: function(index, nextIndex, direction) {
			arrowElem.addClass('gone');
			pageElem.addClass('transition');
			$('.active').removeClass('transition');
			slideElem.removeClass('transition');
			isSlide = false;
		},
		afterLoad: function(anchorLink, index) {
			if(index == 4 || index == 5 || index == 6) {
				portfolioMenuElem.addClass('active');
			} else {
				portfolioMenuElem.removeClass('active');
			}
			arrowElem.removeClass('gone');
			pageElem.removeClass('transition');
			if (isSlide) {
				slideElem.removeClass('transition');
			}
		},
		afterRender: function() {}
	});
	$('#contactform').on('submit', function() {
		var action = $(this).attr('action');
		var msg = $('#message');
		$(msg).hide();
		var data = 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&phone=' + $('#phone').val() + '&comments=' + $('#comments').val() + '&verify=' + $('#verify').val() + '&captcha=' + $(".g-recaptcha-response").val();
		$.ajax({
			type: 'POST',
			url: action,
			data: data,
			beforeSend: function() {
				$('#submit').attr('disabled', true);
				$('img.loader').fadeIn('slow');
			},
			success: function(data) {
				$('#submit').attr('disabled', false);
				$('img.loader').fadeOut('slow');
				$(msg).empty();
				$(msg).html(data);
				$('#message').slideDown('slow');
				if (data.indexOf('success') > 0) {
					$('#contactform').slideUp('slow');
				}
			}
		});
		return false;
	});
});