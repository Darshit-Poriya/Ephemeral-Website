// ? Locomotive Js no use karva mate

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), // ? Main Parent Component of the Website
    smooth: true
});

// ? Using GSAP to animate 

// ? Dont forget to add display: inline-block into anchor tag in css to apply animation
gsap.from(".nlink", {
    stagger: .2,
    y: 15,
    duration: 1,
    ease: Power2,
    opacity: 0
})

gsap.from(".anim2", {
    duration: 1.2,
    ease: Expo,
    y: 50,
    opacity: 0
})


Shery.textAnimate("#headings h1", {
    style: 1,
    delay: .1,
    duration: 1.3,
});

Shery.imageEffect("#imgntext img", {
    style: 3,
    config: { "uFrequencyX": { "value": 12.4, "range": [0, 100] }, "uFrequencyY": { "value": 23.14, "range": [0, 100] }, "uFrequencyZ": { "value": 36.36, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 34.32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7499999724047586 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.4, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect(".imgeff img", {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.19, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7692500501111845 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.3, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect("#bimg", {
    style: 5,
    gooey: true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.92, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.251120311004913 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 0.63, "range": [0.1, 5] }, "durationIn": { "value": 0.46, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.13, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.17, "range": [0, 2] }, "discard_threshold": { "value": 0.74, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.26, "range": [0, 2] }, "noise_scale": { "value": 10.74, "range": [0, 100] } },
})

gsap.from("#imgntext img", {
    opacity: 0,
    y: 10,
    duration: 1,
    ease: Power2,
})

document.querySelector("#ftext button").addEventListener("mouseover", function () {
    gsap.to("#future video", {
        duration: 1,
        opacity: 1,
        ease: Power4,
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave", function () {
    gsap.to("#future video", {
        duration: 1,
        opacity: 0,
        ease: Power4,
    })
})