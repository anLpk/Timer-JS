// let timePass = Math.round((Date.now() - new Date(2020, 2, 20)));

// document.getElementById("time").innerHTML = timePass;

function xClock() {
   xC = new Date(2020, 1, 17);
   xV = vClock(Date.now());
   document.getElementById("time").innerHTML = xV - xC;
   setTimeout("xClock()", 1);
}

function vClock(v) {
   return (v > 9) ? "" + v : "0" + v;
}

function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
      window.onload = func;
   } else {
      window.onload = function() {
         if (oldonload) {
            oldonload();
         }
         func();
      }
   }
}

addLoadEvent(xClock);
