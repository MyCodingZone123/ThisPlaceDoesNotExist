let photo;

function preload() {
  photo = loadImage('https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}

function draw() {
  image(photo, 0, 0);
}

function keyTyped() {
  if (key === 's') {
    photo.save('photo', 'png');
  }
}
