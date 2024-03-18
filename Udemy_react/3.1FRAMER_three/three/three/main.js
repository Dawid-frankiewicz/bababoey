import * as THREE from "three";
import "./styles.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//dodanie kontrolowerów
import { gsap } from "gsap";
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const scene = new THREE.Scene(); //scena
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;

//PerspectiveCamera (fov, aspect, near, far)
// fov - field of view - widocznoś kamery w stopniach
//aspect stosounek szerokosci do wysokosci potrzebny do prawidłowej proporcji
// near / far zakres przestrzeni w kotrej obiekty są widoczne
//powyzej 100 zaczyna znikac

//positon kamera zwykle jest w (0,0,0) oraz obiekty są w (0,0,0) dlatego przesuwamy
// w osi Z
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);
//WebGL jest odpowiedzialne za renderowanie sceny 3d przy
// uzyciu WebGL
// set Size ustawia wieljkosc elementu <canvas>
// appendCHild dodanie canvas do html

// const geometry = new THREE.BoxGeometry();
renderer.setPixelRatio(window.devicePixelRatio);
//pozwala na ustawienie gestosci pixeli zaleznie od urzdzenia
// przez co nie ma efektu pixelozy
const geometry = new THREE.IcosahedronGeometry(1, 0); //k20
// tworzy prostopadloscian 1x1x1

// const material = new THREE.MeshBasicMaterial({
//   color: 0x00f00,
//   wireframe: false,
// });

const material = new THREE.MeshPhongMaterial({
  color: 0x00ffff, // Poprawiony kolor
  wireframe: false,
});
//PhonngMaterial pozwala naświatalo nie tak jak basic

//wireframe true to tylko krawedzie sa widoczne
// ustaiwnie materialu szescianu nie reagujacy na swiatlo
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(2, 2, 2);
// mesh łączy obeitk 3d z materiałem
scene.add(cube);
// dodanie szescianu do sceny

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
//emituje światło we wszystkich kierunkach jak żarówka , 1 to max intensywność świalta
// 100 to odległość na jaką świeci
pointLight.position.set(1, 1, 1); //ustawia światło nad elementem
scene.add(pointLight);
const ambientLight = new THREE.AmbientLight(0x404040, 20);
//20 to intensywność światla
scene.add(ambientLight);
//oświetla wszystkie obiekty równomiernie bez tworzenia cierni
//służy do symulacji rozporszonego światła

function animate() {
  requestAnimationFrame(animate);
  //rekurencja
  // Rotacja sześcianu
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderowanie sceny
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  // Aktualizacja wymiarów
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Aktualizacja kamery
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Aktualizacja renderera
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
//zmiana w zaleznie od wielkosci okna oraz kamerii renderer
const controls = new OrbitControls(camera, renderer.domElement);
// rendere.domelement to canvas u nas
controls.enableDamping = true;
// nie zatrzymuje sie od razu tylko jeszcze kreci
controls.enablePan = false;
controls.enableZoom = false;
//nie mozna przyblizac

const timeLine = gsap.timeline({ defaults: { duration: 1 } });
timeLine.fromTo(cube.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
//krótka animacja skalowania z 0 do 1
const colorParams = { color: "#00ffff" };
gsap.to(colorParams, {
  color: "#ff0000",
  duration: 2,
  repeat: -1, // w nieskonczonosc
  yoyo: true,
  ease: "linear",
  onUpdate: () => {
    cube.material.color.set(colorParams.color);
  },
}); //zmiana z niebieskiego na czerowny
