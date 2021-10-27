document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let apple1X = apple1Y = 15;
let apple2X = apple2Y = 5;
let apple0X = apple0Y = 8;
let color = "lime";
