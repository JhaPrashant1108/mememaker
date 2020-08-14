console.log("hello");
function makeResizableDiv(div) {
  const element = document.querySelector(div);

  const resizers = element.querySelectorAll(".resizer");
  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener("mousedown", function (e) {
      e.preventDefault();
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResize);
    });

    function resize(e) {
      if (currentResizer.classList.contains("bottom-right")) {
        element.style.width =
          e.pageX - element.getBoundingClientRect().left + "px";
        element.style.height =
          e.pageY - element.getBoundingClientRect().top + "px";
      }
    }

    function stopResize() {
      window.removeEventListener("mousemove", resize);
    }
  }
}



function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (elmnt.querySelector(".boxdraggable")) {
    // if present, the header is where you move the DIV from:
    elmnt.querySelector(".boxdraggable").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const resizediv = document.querySelectorAll(".resizable");
resizediv.forEach((divbox) => {
  const divId = "#" + divbox.id;
  makeResizableDiv(divId);
  dragElement(divbox)
});
// dragElement(document.getElementById("divchild2"));


(function() {
  var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;

  active = false;

  angle = 0;

  rotation = 0;

  startAngle = 0;

  center = {
    x: 0,
    y: 0
  };

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  init = function() {
    target.addEventListener("mousedown", start, false);
    target.addEventListener("mousemove", rotate, false);
    return target.addEventListener("mouseup", stop, false);
  };

  R2D = 180 / Math.PI;

  start = function(e) {
    var height, left, top, width, x, y, _ref;
    e.preventDefault();
    _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
    center = {
      x: left + (width / 2),
      y: top + (height / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    var d, x, y;
    e.preventDefault();
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    if (active) {
      return this.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    }
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);