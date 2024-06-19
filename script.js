var img = document.querySelector("#loader img");
var arr = ["./res/one.svg", "./res/two.svg", "./res/three.svg", "./res/four.svg", "./res/five.svg", "./res/six.svg", "./res/seven.svg", "./res/eight.svg", "./res/nine.svg", "./res/ten.svg", "./res/eleven.svg", "./res/twelve.svg", "./res/thirteen.svg"];
var index = 0;

function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

};

locoScroll();

function loaderAnime() {
    setInterval(function () {
        img.setAttribute("src", arr[index]);
        index++;
    }, 220);

    var tl = gsap.timeline();

    tl.to("#loader", {
        top: "-200%",
        duration: 2,
        delay: 2,
        ease: Expo.easeInOut,
    });

    tl.to("#loader", {
        delay: 2.2,
        display: "none"
    });
};

loaderAnime();


function page1Anime() {
    var clutter = "";

    document.querySelector("#page1 h1").textContent.split("").forEach(function (dets) {
        clutter += `<h1 class="pg1h1">${dets}</h1>`
        document.querySelector("#page1 h1").innerHTML = clutter;
    });

    var tl1 = gsap.timeline();

    tl1.from("#page1 h1 h1", {
        y: 900,
        stagger: .2,
        duration: .8,
        delay: 2.38
    }, "heading");

    tl1.from(".page1-h2-text h2", {
        y: 900,
        duration: .8,
        stagger: 0.2,
        delay: 2.49
    }, "heading");

    tl1.to("#page2 video", {
        width: "100%",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 75%",
            end: "top 0%",
            markers: false,
            scrub: true
        }
    });
};

page1Anime();

function page3Anime() {
    var tl2 = gsap.timeline();

    tl2.from("#page3-content h1, #page3-bottom-text h1", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 1.3,
        scrollTrigger: {
            trigger: "#page3-content",
            scroller: "#main",
            start: "top 50%",
            end: "top 0%",
            markers: false,
            scrub: 4
        }
    });

    tl2.from("#page3-bottom-text h3", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrub: 4,
        scrollTrigger: {
            trigger: "#page3-bottom-text",
            scroller: "#main",
            start: "top 82%",
            end: "top 72%",
            markers: false,
            scrub: 4
        }
    });
};

page3Anime();

function page4Anime() {
    var tl3 = gsap.timeline()

    tl3.from("#page4-top-media-container #vid-container1", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container",
            scroller: "#main",
            start: "top 65%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-vid");

    tl3.from("#page4-top-media-container #vid-container1-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container",
            scroller: "#main",
            start: "top 70%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-vid");

    tl3.from("#page4-top-media-container #img-container1", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container1",
            scroller: "#main",
            start: "top 75%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img1");

    tl3.from("#page4-top-media-container #img-container1-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container1",
            scroller: "#main",
            start: "top 80%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img1");

    tl3.from("#page4-top-media-container #img-container2", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container2",
            scroller: "#main",
            start: "top 69%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img2");

    tl3.from("#page4-top-media-container #img-container2-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container2",
            scroller: "#main",
            start: "top 74%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img2");

    tl3.from("#page4-top-media-container #img-container3", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container3",
            scroller: "#main",
            start: "top 75%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img3");

    tl3.from("#page4-top-media-container #img-container3-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container3",
            scroller: "#main",
            start: "top 80%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img3");

    tl3.to("#page4-bottom-video-container", {
        width: "91.29%",
        delay: 0.4,
        duration: 1.6,
        scrollTrigger: {
            trigger: "#page4-bottom-media-container #page4-bottom-video-container",
            scroller: "#main",
            start: "top 80%",
            end: "top 2%",
            markers: false,
            scrub: 3
        }
    });
};

page4Anime();

function page5Anime() {
    gsap.to("#page5 #page5-text-scroll", {
        transform: "translateX(-62%)",
        duration: 3,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 0%",
            end: "top -100%",
            markers: false,
            pin: true,
            scrub: 2
        }
    });
};

page5Anime();

function page8Anime() {
    gsap.from(".page8-text-box h1", {
        y: 100,
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            start: "top 60%",
            end: "top -0%",
            markers: false,
            scrub: 2
        }
    });
};

page8Anime();
