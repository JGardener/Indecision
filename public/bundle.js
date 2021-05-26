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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(2);
// import './utils.js';
// import square from './utils.js';




console.log("Hello");
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* square */](12));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](24,8));
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["c" /* isAdult */](25));
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* canDrink */](13));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */](2,1))
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["b" /* default */](25))

/* 
Because subtract is the default export from utils, note the word default, 
you can name it whatever you want here, but stick with the name of the function
so it makes sense to other devs and you later. 
I named it maths
*/

/* 
isSenior is coming from the person.js file. 
Due to it being a default export, I can name it whatever I want here
I named it seniorCitizen
*/


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
console.log("Utils.js is running!");

const square = (x) => x *= x;
const add = (a, b) => a + b;
const minus = (a,b) => a - b;


/* harmony default export */ __webpack_exports__["b"] = (minus); 

/* 
You can also write this, if you wish: 
export { square, add, minus as default }
*/


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });

const isAdult = (age) => age >= 18;
const canDrink = (age) =>  age >= 21;

const isSenior = (age) => age >= 65;


/* harmony default export */ __webpack_exports__["b"] = (isSenior);

/***/ })
/******/ ]);