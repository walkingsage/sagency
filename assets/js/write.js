
let TxtRotateFirst = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

let TxtRotateSecond = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

let TxtRotateThree = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

let TxtRotateFour = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
  console.log(el);
};
  
TxtRotateFirst.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];


  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150;

  setTimeout(function() {
    that.tick();
  }, delta);
};

TxtRotateSecond.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];


  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150;

  setTimeout(function() {
    that.tick();
  }, delta);
};

TxtRotateThree.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];


  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150;

  setTimeout(function() {
    that.tick();
  }, delta);
};

TxtRotateFour.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];


  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150;

  setTimeout(function() {
    that.tick();
  }, delta);
};

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 150;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    const titleFirst = document.getElementsByClassName('first-txt-rotate'),
    elements = document.getElementsByClassName('txt-rotate'),
    titlesecond = document.getElementsByClassName('second-txt-rotate'),
    titlethree = document.getElementsByClassName('three-txt-rotate'),
    titleFour = document.getElementsByClassName('four-txt-rotate');
      for (var i=0; i<titleFirst.length; i++) {
        var toRotatefirst = titleFirst[i].getAttribute('data-rotate-first');
        var periodfirst = titleFirst[i].getAttribute('data-period');
        if (toRotatefirst) {
          new TxtRotateFirst(titleFirst[i], JSON.parse(toRotatefirst), periodfirst);
        }
      }
      setTimeout(() => {
        for (var i=0; i<titlesecond.length; i++) {
          var toRotateSecond = titlesecond[i].getAttribute('data-rotate-second');
          var periodSecond = titlesecond[i].getAttribute('data-period');
          if (toRotateSecond) {
            new TxtRotateSecond(titlesecond[i], JSON.parse(toRotateSecond), periodSecond);
          }
        }
      }, 2400);
      setTimeout(() => {
        for (var i=0; i<titlethree.length; i++) {
          var toRotateThree = titlethree[i].getAttribute('data-rotate-three');
          var periodThree = titlethree[i].getAttribute('data-period');
          if (toRotateThree) {
            new TxtRotateThree(titlethree[i], JSON.parse(toRotateThree), periodThree);
          }
        }
      }, 4400); 
      setTimeout(() => {
        for (var i=0; i<titleFour.length; i++) {
          var toRotateFour = titleFour[i].getAttribute('data-rotate-four');
          var periodFour = titleFour[i].getAttribute('data-period');
          if (toRotateFour) {
            new TxtRotateFour(titleFour[i], JSON.parse(toRotateFour), periodFour);
          }
        }
      }, 6000);
      setTimeout(() => {
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
      }, 7000);
    
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
  };

  