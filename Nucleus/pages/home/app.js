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


// gsap.from(".about-text-p", {
// 	delay: 1,
// 	y: 100,
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".about-text-p",
// 		markers: true,
// 		start: "top 80%",
// 		end: "center 10%",
// 		scrub: 3


// 	}
// })

gsap.to(".v1", {
	opacity: 0,
	scrollTrigger: {
		trigger: "#Main",
		// markers: true,
		start: "top 100%",
		end: "top 0%",
		scrub: 2
	},
	css: { height: 0 }
})
gsap.to(".v2", {
	opacity: 0,
	scrollTrigger: {
		trigger: "#Main",
		// markers: true,
		start: "top 100%",
		end: "top 0%",
		scrub: 2
	},
	css: { height: 0 }
})
gsap.to(".h1", {
	// x: 1000,
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: "#Main",
		markers: true,
		start: "top 90%",
		end: "top 0%",
		scrub: 3
	}
})



