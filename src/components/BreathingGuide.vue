<template>
  <div class='BreathingGuide'>
    <div class='scene'>
      <div class='circle-container'>
        <svg class="progress"
             width="120"
             height="120"
             viewBox="0 0 120 120">
          <circle cx="60"
                  cy="60"
                  r="54"
                  fill="none" />
        </svg>
        <svg class="progress progress__breathe-in-container"
             width="120"
             height="120"
             viewBox="0 0 120 120">
          <circle class="progress__breathe-in"
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none" />
        </svg>
        <svg class="progress progress__breathe-out-container"
             width="120"
             height="120"
             viewBox="0 0 120 120">
          <circle class="progress__breathe-out"
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none" />
        </svg>
        <div class='dial-container dial-static dial-static--start'>
          <svg class='dial'
               viewBox="0 0 100 100">
            <path d="M0,50 a1,1 0 0,0 100,0" />
          </svg>
        </div>
        <div class='dial-container dial-static dial-static--hold'>
          <svg class='dial'
               viewBox="0 0 100 100">
            <path d="M0,50 a1,1 0 0,0 100,0" />
          </svg>
        </div>
        <div class='dial-container dial-static dial-static--end'>
          <svg class='dial'
               viewBox="0 0 100 100">
            <path d="M0,50 a1,1 0 0,0 100,0" />
          </svg>
        </div>
        <div class='dial-container dial-progress'>
          <svg class='dial'
               viewBox="0 0 100 100">
            <path d="M0,50 a1,1 0 0,0 100,0" />
          </svg>
        </div>
        <svg id="circle-svg"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             width="100"
             height="100"
             viewBox="0 0 100 100">
          <defs>
            <linearGradient id="lgrad"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%">
              <stop offset="0%"
                    style="stop-color:rgb(56,123,218);stop-opacity:1" />
              <stop offset="100%"
                    style="stop-color:rgb(121,68,231);stop-opacity:1" />
            </linearGradient>
            <linearGradient id="lgrad2"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%">
              <stop offset="0%"
                    style="stop-color:rgb(121,68,231);stop-opacity:1" />
              <stop offset="100%"
                    style="stop-color:rgb(56,123,218);stop-opacity:1" />
            </linearGradient>
          </defs>
          <title>Morph</title>
          <circle id="circle2"
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#lgrad)" />
          <circle id="circle3"
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#lgrad2)" />
        </svg>
        <div class='circle-text'>
          <div class='text'>
            breathe in
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Power0 } from "gsap/TweenMax";

export default {
  name: "BreathingGuide",
  mounted() {
    var tl = new TimelineMax({ repeat: -1 });
    // var tl = new TimelineMax();
    var breatheInDuration = 4;
    var breatheHoldDuration = 2;
    var breatheOutDuration = 4;
    var totalDuration =
      breatheInDuration + breatheHoldDuration + breatheOutDuration;
    var breatheHoldStartAngle = (breatheInDuration / totalDuration) * 360;
    var breatheHoldEndAngle =
      ((breatheInDuration + breatheHoldDuration) / totalDuration) * 360;

    // tl.add("expansion",0)
    // tl.to("#circle-svg", 4, {
    //   scale: 2
    // }, "expansion");
    // tl.to("#circle-svg", 4, {
    //   scale: 1
    // }, "expansion+=6");

    tl.add("gradient", 0);
    tl.to("#circle3", 5, { fillOpacity: 1 }, "gradient");
    tl.to("#circle3", 5, { fillOpacity: 0 }, "gradient+=5");

    tl.add("text", 0);
    // tl.to(".circle-text", 4, { scale: 2}, "text");
    // tl.to(".circle-text", 4, {
    //   scale: 1
    // }, "text+=6");
    tl.addCallback(function() {
      document.querySelectorAll(".text")[0].innerHTML = "breathe in";
    }, "text");
    tl.addCallback(function() {
      document.querySelectorAll(".text")[0].innerHTML = "hold";
    }, "text+=4");
    tl.addCallback(function() {
      document.querySelectorAll(".text")[0].innerHTML = "breathe out";
    }, "text+=6");

    // Dial
    // TweenMax.to('.dial-container', 2, {rotation:360});

    tl.add("dialRotation", 0);
    tl.to(
      ".dial-progress",
      totalDuration,
      {
        ease: Power0.easeNone,
        rotation: 360
      },
      "dialRotation"
    );

    var scaleMin = 1.5;
    var scaleMax = 2;
    tl.add("globalExpansion", 0);
    tl.to(
      ".circle-container",
      0,
      {
        scale: scaleMin
      },
      "globalExpansion"
    );
    tl.to(
      ".circle-container",
      4,
      {
        scale: scaleMax
      },
      "globalExpansion"
    );
    tl.to(
      ".circle-container",
      4,
      {
        scale: scaleMin
      },
      "globalExpansion+=6"
    );

    // tl.add("dialExpansion",0)
    // tl.to(".dial-progress", 4, {
    //   scale: 2
    // }, "dialExpansion");
    // tl.to(".dial-progress", 4, {
    //   scale: 1
    // }, "dialExpansion+=6");

    tl.add("dialStaticExpansion", 0);
    tl.to(
      ".dial-static--hold",
      0,
      {
        rotation: breatheHoldStartAngle
      },
      "dialStaticExpansion"
    );
    tl.to(
      ".dial-static--end",
      0,
      {
        rotation: breatheHoldEndAngle
      },
      "dialStaticExpansion"
    );
    // tl.to(".dial-static", 4, {
    //   scale: 2
    // }, "dialStaticExpansion");
    // tl.to(".dial-static", 4, {
    //   scale: 1
    // }, "dialStaticExpansion+=6");

    // tl.add("dialTrackExpansion",0)
    // tl.to(".progress", 4, {
    //   scale: 2
    // }, "dialTrackExpansion");
    // tl.to(".progress", 4, {
    //   scale: 1
    // }, "dialTrackExpansion+=6");
  }
};
</script>

<style lang='scss' scoped>
.BreathingGuide {
  $circle-size: 100px;
  $breathe-in-track-color: #387ad7;
  $breathe-hold-track-color: #69757f;
  $breathe-out-track-color: #7944e7;

  $a-track-size: 3px;
  $a-track-gap: 10px;
  $full-circumference: 339.292;
  $breathe-in-time: 4;
  $breathe-out-time: 4;
  $breathe-hold-time: 2;
  $total-duration: $breathe-in-time + $breathe-out-time + $breathe-hold-time;
  $breathe-in-factor: $breathe-in-time / $total-duration;
  $breathe-out-factor: $breathe-out-time / $total-duration;

  .progress {
    position: absolute;
    stroke: #69757f;
    // stroke: #3777D4;

    top: -($a-track-size + $a-track-gap);
    left: -($a-track-size + $a-track-gap);
    width: 100px + 2 * ($a-track-size + $a-track-gap);
    height: 100px + 2 * ($a-track-size + $a-track-gap);
    // transform: rotate(-90deg);
    stroke-width: $a-track-size;
  }

  .progress__breathe-in-container {
    transform: rotate(-90deg);
  }
  .progress__breathe-in {
    stroke: #3777d4;
    stroke-dasharray: 339.292;
    stroke-dashoffset: (1-$breathe-in-factor) * $full-circumference;
    stroke-width: $a-track-size;
  }

  .progress__breathe-out-container {
    transform: rotate(-#{$breathe-out-factor * 360 + 90}deg);
  }
  .progress__breathe-out {
    stroke: $breathe-out-track-color;
    stroke-dasharray: 339.292;
    stroke-dashoffset: (1-$breathe-out-factor) * $full-circumference;
    stroke-width: $a-track-size;
  }

  .scene {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    // height: 100%;
  }

  .circle-container {
    position: relative;
    box-sizing: border-box;
  }

  $dial-container-size: 100px;
  $dial-radius: 3px;
  $dial-gap: 5px;
  $dial-track-size: 3px;

  .dial-container {
    position: absolute;
    height: $dial-container-size;
    width: $dial-container-size;
    // border: 1px solid blue;
    box-sizing: border-box;
    left: 0px;
    top: 0px;
  }
  .dial-track {
    width: $dial-container-size + $dial-track-size * 2 + $dial-gap * 2;
    height: $dial-container-size + $dial-track-size * 2 + $dial-gap * 2;
    left: -$dial-track-size - $dial-gap;
    top: -$dial-track-size - $dial-gap;
    border: $dial-track-size solid red;
    border-radius: 100%;
    box-sizing: border-box;
    position: absolute;
  }
  .dial {
    position: absolute;
    top: -$dial-radius * 2 - $dial-gap + $dial-radius;
    left: $dial-container-size/2 - $dial-radius;
    width: $dial-radius * 2;
    height: $dial-radius * 2;
    fill: #3777d4;
  }

  .dial-static {
    .dial {
      fill: #ffffff;
    }
  }

  .circle-text {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $circle-size;
    height: $circle-size;
    border-radius: 100%;

    .text {
      z-index: 1;
      color: #f2f2f2;
      font-weight: 200;
      font-size: 0.9em;
    }
  }

  #circle3 {
    fill-opacity: 0;
  }
}
</style>
