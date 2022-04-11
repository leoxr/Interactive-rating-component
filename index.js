"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var bnt = document.getElementById("btn");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var message = document.getElementById("message");
var h4 = document.createElement("h4");
var m4 = message.appendChild(h4);
m4.classList.add("message-content");
btn.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  modal1.classList.add("hidden");
});
var radioButtons = document.querySelectorAll(".ratings-check");
btn.addEventListener("click", function () {
  var selectedStar;

  var _iterator = _createForOfIteratorHelper(radioButtons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var radioButton = _step.value;

      if (radioButton.checked) {
        selectedStar = radioButton.value;
        break;
      }
    } // show the output:

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  m4.innerText = selectedStar ? "You selected ".concat(selectedStar, " out of 5") : "You haven't selected any ratings";
});