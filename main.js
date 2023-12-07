let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, { /*hace que nuestro texto parezca máquina de escribir*/ 
  loop: true,
  delay: 75,
 cursor: "<span style='color: #74819d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #74819d;">Diseñadora en vías de desarrollo. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
