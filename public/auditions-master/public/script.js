//set-up
let controls;
var camera, scene, renderer;
var geometry, material, mesh, wireframe;

var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 420, window.innerWidth / window.innerHeight, 1, 510 );
camera.position.z = 550;

//renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x040429);
document.body.appendChild(renderer.domElement);

//init
init();

function init() {
  //wireframe
  geometry = new THREE.IcosahedronGeometry(200, 2);
  material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    wireframe: true,
    wireframeLinewidth: 1,
    transparent: true,
    opacity: 1
  });
  wireframe = new THREE.Mesh(geometry, material);
  scene.add(wireframe);

  //inner circle
  geometry = new THREE.SphereGeometry(150, 40, 90);
  material = new THREE.MeshLambertMaterial({
    color: 0xeeeeee,
    transparent: true,
    opacity: 0.155
  });

  var inner = new THREE.Mesh(geometry, material);
  scene.add(inner);

  //lights
  var light1 = new THREE.DirectionalLight(0x4c00ff, 0.75);
  scene.add(light1);
  light1.position.set(1.5, 2, 2);

  var light2 = new THREE.DirectionalLight(0x5cc5f2, 0.8);
  scene.add(light2);
  light2.position.set(-1.5, -2, 2);

  var light3 = new THREE.DirectionalLight(0xbf79fc, 0.4);
  scene.add(light3);
  light3.position.set(-2, 2, -2.5);

  var light3 = new THREE.DirectionalLight(0xf6c7ff, 0.8);
  scene.add(light3);
  light3.position.set(1, 1, -1.5);

  //animate
  var wireframeY = 0;
  var wireframeX = 0;
  var easing = 0.2;
  var autoRotate = true;

  var render = function () {
    requestAnimationFrame(render);

    //Credit where credit is due, this rotation anim is by https://codepen.io/mpeach/pen/eZWGaz

    // I was going to use a simplified camera anim like my other prods, but I really liked the way this eases after release.
    if (autoRotate == true) {
      wireframe.rotation.y += 0.0008; //speed of auto rotation Y
      wireframe.rotation.x -= 0.001; //speed of auto rotation X
    } else {
      //rotate Y
      var yDistance = wireframe.rotation.y - wireframeY;
      yFullDistance = Math.sqrt(yDistance * yDistance);
      if (yFullDistance > 0) {
        wireframe.rotation.y -= yDistance * easing;
      }

      //rotate X
      var xDistance = wireframe.rotation.x - wireframeX;
      xFullDistance = Math.sqrt(xDistance * xDistance);
      if (xFullDistance > 0) {
        wireframe.rotation.x -= xDistance * easing;
      }
    }
    renderer.render(scene, camera);
  };
  render();

  var wait = null;

  //click and drag around
  $("canvas").on("mousedown", function (move) {
    clearTimeout(wait);
    $(this).addClass("grabbing");
    var lastX = move.pageX;
    var lastY = move.pageY;

    $("canvas").on("mousemove.sphere", function (move) {
      var amountX = lastX - move.pageX;
      lastX = move.pageX;
      var amountY = lastY - move.pageY;
      lastY = move.pageY;

      wireframeY = wireframe.rotation.y - (amountX / 100) * 8;
      wireframeX = wireframe.rotation.x - (amountY / 100) * 8;
      autoRotate = false;
    });
  });

  //release
  $(window).on("mouseup", function () {
    $("canvas").off("mousemove.sphere");
    $("canvas").removeClass("grabbing");

    waitTimeout = setTimeout(function () {
      autoRotate = true;
    }, 450); // it'll wait 450ms before starting rotation again
  });

  // controls resposive setup
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;

  window.addEventListener("resize", onWindowResize, false);

  //responsive
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
