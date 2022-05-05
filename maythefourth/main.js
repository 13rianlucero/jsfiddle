gsap.registerPlugin(MotionPathPlugin);
gsap.config({ trialWarn: false });
console.clear();
let targets = gsap.utils.toArray(["#xwing, #fly"]);
gsap.to("#spacebattle", {
  
  rotation: 360,
  
  duration: 14,
  
  svgOrigin: "450 200",
  
  ease: "none",
  
  repeat: -1
});

targets.forEach((target, i) => {
  gsap.to(target, {
    
    duration: 4,
    
    repeat: -1,
    
    ease: "none",
    
    motionPath: {
      
      path: "#flightpath",
      
      align: "#flightpath",
      
      autoRotate: true,
      
      start: i * 0.1,
      
      end: 1 + i * 0.1,
      
      alignOrigin: [0.5, 0.5]
    }
  });
});

gsap
  .timeline({
    defaults: {
        
      duration: 0.07,
      
      yoyo: true,
      
      svgOrigin: "12 -4.5",
      
      repeat: -1
    }
  })

  .to("#fly-wing-front", {
    
    rotation: "+=70"
  })
  
  .to("#fly-wing-back", {
    
    rotation: "+=60"
  });

