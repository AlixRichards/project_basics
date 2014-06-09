Zepto(function($){
	var app = {};
	
	//DATA
	
	app.data = {
		'journeys': [
			{
				'name' : 'journey_1',
				'slides' : [
					{
						'img':'my_cool_url',
						'text':'Slide Title, Yo'
					},
					{
						'img':'aonther_cool_url',
						'text':'Journey one Slide Title two'
					}
				]
			},
			{
				'name' : 'journey_2',
				'slides' : [
					{
						'img':'my_second_url',
						'text':'Slide Two Title, Yo'
					}
				]
			}
		]
	};
	
	//APPLICATION VARIABLES
	
	app.current_journey = null;
	app.current_slide = null;
	
	//CACHE DOM ELEMENTS

	app.$appSlideText = $('.app-slide-text');
	app.$appSlideImg = $('.app-slide-img');
	
	app.$prevButton = $('.app-slide-prev');
	app.$nextButton = $('.app-slide-next');
		
	app.$journeyButtons = $('.app-journey-controls').find('a');
	
	//APPLICATION FUNCTIONS
	
	app.set_journey = function(index){
		console.log(['trying to change to new journey', index]);
		/*
		figure out which journey we are trying to start
		figure out which journey is presently live
		check - are these the same? if so maybe return false cos there's nothing new to do
		grab new (target) journey data from app data object
		render slides markup with the target journey's data
		set current_slide to 0 (each journey starts at the beginning)
		set current_journey to whatever this target journey's index is		
		*/
	};
	
	app.shift_slide = function(increment){
		console.log(['trying to shift current slide by', increment]);
		/*
			we expect increment to equal either 1 or -1
			var next_slide = add increment to current_slide
			if next_slide is less than zero
				we're trying to go before the first slide - what should we do here? Maybe nothing, maybe go round the back
			if next_slide is a bigger number than (length of slides array for current journey on app data object)
				what to do? just do nothing, or go round the back the other way?
			
			next_slide_data = app.data.journeys[app.current_journey].slides[next_slide];
			app.render_slide(next_slide_data);
			app.current_slide = next_slide;
			
		*/
	};
	
	app.render_slide = function(slide_data){
		/*
		do whatever magic we need to with the DOM, or CSS, or whatever, to update the current slide on the page for the user
		possibly hide some other stuff?
		*/
		this.$appSlideText.text( slide_data.text );
		this.$appSlideImg.text( slide_data.img );
	};
	
	//EVENT BINDING
	
	app.$prevButton.on('click', function(){
		console.log('prev button clicked');
		app.shift_slide(-1);
		return false;
	});
	
	app.$nextButton.on('click', function(){
		console.log('next button clicked');
		app.shift_slide(1);
		return false;
	});
	
	app.$journeyButtons.on('click', function(){
		var target_index = $(this).attr('href').substr(1) - 1;
		app.set_journey(target_index);
		return false;
	});

	//BOOTSTRAPPING
	console.log(app);
	//console.log(app.data.journeys[1].slides[0].text);
	//app.set_journey(0);
	//app.render_slide( {'text': 'Charlie is cool', 'img': 'thisisaurl'} );
	app.set_journey(0); // defaults to setup of first journey
	
	
});
