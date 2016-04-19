var SpaceAge = function(seconds) {
  this.seconds=seconds;
};

SpaceAge.prototype.onEarth = function() {
  var earth = (this.seconds / 31557600);
  var round = Math.round(earth * 100) / 100
  return round;
};


module.exports = SpaceAge;