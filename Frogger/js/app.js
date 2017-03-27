const Enemy = function (x, y, speed) {
  this.sprite = 'images/enemy-bug.png'
  this.x = x
  this.y = y
  this.speed = speed
}

Enemy.prototype.update = function (dt) {
  this.x += this.speed * dt
  if (this.x > 505) {
    this.x = 0
  }
  checkCollision(this)
}

Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

const Player = function (x, y, speed) {
  this.sprite = 'images/Rock.png'
  this.x = x
  this.y = y
  this.speed = speed
}

Player.prototype.update = function () {

}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.handleInput = function (input) {
  if (input === 'left') {
    player.x -= player.speed
  }
  if (input === 'up') {
    player.y -= player.speed - 20
    console.log(player.y)
  }
  if (input === 'right') {
    player.x += player.speed
  }
  if (input === 'down') {
    player.y += player.speed - 20
    console.log(player.y)
  }
}

let allEnemies = []
let counter = 1
const player = new Player(202.5, 383, 50)
const enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256)
const enemy2 = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256)
const enemy3 = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256)
const enemy4 = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256)
allEnemies.push(enemy)
allEnemies.push(enemy2)
allEnemies.push(enemy3)
allEnemies.push(enemy4)

const checkCollision = function (theEnemy) {
  if (
    player.y + 131 >= theEnemy.y + 90 &&
    player.x + 25 <= theEnemy.x + 88 &&
    player.y + 73 <= theEnemy.y + 135 &&
    player.x + 76 >= theEnemy.x + 11) {
    player.x = 202.5
    player.y = 383
    console.log('Hit Counter: ' + counter)
    counter++
  }

  // Keeps character in map boundaries
  if (player.y > 383) {
    player.y = 383
  }
  if (player.x > 402.5) {
    player.x = 402.5
  }
  if (player.x < 2.5) {
    player.x = 2.5
  }
  if (player.y === -7) {
    alert("WINNERRRRRRRRR!")
    player.y = -37
  }
}

document.addEventListener('keyup', function (e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  player.handleInput(allowedKeys[e.keyCode])
})