/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$('.carousel').slick({\r\n    slidesToShow: 3,\r\n    slidesToScroll: 1,\r\n    autoplay: true,\r\n    autoplaySpeed: 9000,\r\n    arrows: true,\r\n    prevArrow: '<svg class=\"left_arrow\" width=\"13\" height=\"25\" viewBox=\"0 0 13 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12.4989L0.870549 11.481L10.6796 -0.00109863L13 2.03465L4.06154 12.4989L13 22.9632L10.6826 24.9989L0.873614 13.5168L0 12.4989Z\" fill=\"black\"/></svg>',\r\n    nextArrow: '<svg class=\"right_arrow\" width=\"13\" height=\"25\" viewBox=\"0 0 13 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 12.5011L12.1295 13.519L2.32044 25.0011L3.55942e-07 22.9653L8.93846 12.5011L4.0152e-06 2.03685L2.31738 0.00108378L12.1264 11.4832L13 12.5011Z\" fill=\"black\"/></svg>',\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });


$(".modal_popup").magnificPopup({
    // delegate: 'img',
		type: 'image',
    mainClass: 'mfp-img-mobile',
		gallery: {
      enabled: true, 
      navigateByImgClick: true,
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
			preload: [1,1] // Will preload 0 - before current, and 1 after the current image
    },
    mainClass: 'mfp-with-zoom', 
    zoom: {
      enabled: true,
      duration: 400,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    mainClass: 'mfp-fade',
    callbacks: {
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      }
  }
});