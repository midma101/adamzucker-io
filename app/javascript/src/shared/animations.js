const exampleEmojis = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
window.emoji = '🙃';
const leftCircles = [];
const rightCircles = [];
const exampleObjects = [];
let exampleContainer, leftGutter, rightGutter;
const getRandomEmoji = () => exampleEmojis[Math.floor((Math.random() * exampleEmojis.length))];

export function initializeGutterAnimation() {
  leftGutter = document.getElementById('left-gutter-animation');
  rightGutter = document.getElementById('right-gutter-animation');

  addObjects(emoji, leftGutter, leftCircles);
  addObjects(emoji, rightGutter, rightCircles)
}

export function initializeExampleAnimation() {
  exampleContainer = document.getElementById('adamzucker-example-container');

  addObjects(getRandomEmoji(), exampleContainer, exampleObjects, true);
}

function addObjects(emoji, container, objects, random = false) {
  for (let i = 0; i < 15; i++) {
    emoji = random ? getRandomEmoji() : emoji;
    addExampleObject(i * 150, [10, 300], emoji, container, objects);
    addExampleObject(i * 150, [10, -300], emoji, container, objects);
    addExampleObject(i * 150, [-190, -300], emoji, container, objects);
    addExampleObject(i * 150, [210, 300], emoji, container, objects);
    addExampleObject(i * 150, [-390, -300], emoji, container, objects);
    addExampleObject(i * 150, [410, 300], emoji, container, objects);
    addExampleObject(i * 150, [-590, -300], emoji, container, objects);
    addExampleObject(i * 150, [610, 300], emoji, container, objects);
  }
}

function addExampleObject(delay, range, color, container, objects) {
  setTimeout(function() {
    const c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range, container);
    objects.push(c);
  }, delay);
}

function Circle(x, y, c, v, range, container) {
  const _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = '0';
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 800) {
      _this.y = 80 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

export function animateExample() {
  for (let i in exampleObjects) {
    exampleObjects[i].update();
  }
  requestAnimationFrame(animateExample);
}

export function animateLeft() {
  for (let i in leftCircles) {
    leftCircles[i].update();
  }
  requestAnimationFrame(animateLeft);
}

export function animateRight() {
  for (let i in rightCircles) {
    rightCircles[i].update();
  }
  requestAnimationFrame(animateRight);
}