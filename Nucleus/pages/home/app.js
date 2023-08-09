// GSAP
// var t1 = gsap.timeline();

// t1
// 	.from(".nav",{
// 		y:-20,
// 		duration: 2
// 	})
// 	.from(".quote",{
// 		y:-20,
// 		x:-10,
// 		duration: 2,
// 		opacity: 0,
// 		delay: -1
// 	})



const tl = gsap.timeline();

tl
	.from(".nav-a", {
		onStart: function(){
			$('.nav-a').textillate({
				in: {effect: 'bounceInDown'}
			})
		}
	})
	.from(".nav-a-b", {
		onStart: function(){
			$('.nav-a-b').textillate({
				in: {effect: 'bounceInDown'}
			})
		}
	})
	.from(".quote", {
		onStart: function(){
			$('.quote').textillate({
				in: { effect: 'bounceInUp'}
			})
		}
	})


gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-text-p", {
	duration: 3,
	ScrollTrigger: function(){
			$('.quote').textillate({
				in: { effect: 'fadeInUp'}
			})
	}
	markers: true,
	start: "top 6%",
	end: "top 1%"
});

