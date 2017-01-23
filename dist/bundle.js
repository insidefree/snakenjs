/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var term = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"terminal-kit\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).terminal;
	//import {terminal} from "terminal-kit"
	var Snake_1 = __webpack_require__(1);
	var snake01 = new Snake_1.Snake(3, 3, "*");
	var snake02 = new Snake_1.Snake(4, 5, "#");
	snake01.Draw();
	snake02.Draw();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var term = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"terminal-kit\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).terminal;
	var Snake = (function () {
	    function Snake(x, y, symb) {
	        var _this = this;
	        this.x = x;
	        this.y = y;
	        this.symb = symb;
	        this.Draw = function () {
	            term.moveTo.red(_this.x, _this.y, _this.symb);
	        };
	        this.x = x;
	        this.y = y;
	        this.symb = symb;
	    }
	    return Snake;
	}());
	exports.Snake = Snake;


/***/ }
/******/ ]);