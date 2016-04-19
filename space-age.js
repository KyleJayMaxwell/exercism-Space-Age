var SpaceAge = function(seconds) {
  this.seconds=seconds;
};

SpaceAge.prototype.onEarth = function() {
  var earth = (this.seconds / 31557600);
  var round = Math.round(earth * 100) / 100
  return round;
};

SpaceAge.prototype.onMercury = function() {
  var mercury = (this.seconds / 7600525);
  var round = Math.round(mercury * 100) / 100
  return round;
};

SpaceAge.prototype.onVenus = function() {
  var venus = (this.seconds / 19411026);
  var round = Math.round(venus * 100) / 100
  return round;
};

SpaceAge.prototype.onMars = function() {
  var mars = (this.seconds / 59359776);
  var round = Math.round(mars * 100) / 100
  return round;
};

SpaceAge.prototype.onJupiter = function() {
  var jupiter = (this.seconds / 374222565);
  var round = Math.round(jupiter * 100) / 100
  return round;
};

SpaceAge.prototype.onSaturn = function() {
  var saturn = (this.seconds / 928792569);
  var round = Math.round(saturn * 100) / 100
  return round;
};

SpaceAge.prototype.onUranus = function() {
  var uranus = (this.seconds / 2652994591);
  var round = Math.round(uranus * 100) / 100
  return round;
};

SpaceAge.prototype.onNeptune = function() {
  var neptune = (this.seconds / 5196280668);
  var round = Math.round(neptune * 100) / 100
  return round;
};

module.exports = SpaceAge;