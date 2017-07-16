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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _Spinner = __webpack_require__(2);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Validation = __webpack_require__(3);

var _Validation2 = _interopRequireDefault(_Validation);

var _Sidebar = __webpack_require__(4);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Map = __webpack_require__(5);

var _Map2 = _interopRequireDefault(_Map);

var _tabs = __webpack_require__(7);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabs = new _tabs2.default();
var mobilemenu = new _MobileMenu2.default();
var spinner = new _Spinner2.default();
var validation = new _Validation2.default();
var sidebar = new _Sidebar2.default();
var map = new _Map2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
    function MobileMenu() {
        _classCallCheck(this, MobileMenu);

        this.mainMenu = $('.main-menu');
        this.menuIcon = $('.hamburger__menu-icon');
        this.menuLinks = $('.main-menu__list a');
        this.events();
    }

    _createClass(MobileMenu, [{
        key: 'events',
        value: function events() {
            this.menuIcon.click(this.toggleTheMenu.bind(this));
            this.menuLinks.click(this.toggleTheMenu.bind(this));
            this.menuLinks.on('tap', this.toggleTheMenu.bind(this));
        }
    }, {
        key: 'toggleTheMenu',
        value: function toggleTheMenu() {
            this.mainMenu.toggleClass('main-menu--shown');
            this.menuIcon.toggleClass('hamburger__menu-icon--close-x');
        }
    }]);

    return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spinner = function () {
    function Spinner() {
        _classCallCheck(this, Spinner);

        this.spinner = $('.spinner');
        this.events();
    }

    _createClass(Spinner, [{
        key: 'events',
        value: function events() {
            $(window).on('load', function () {
                var preloader = $('.spinner');
                var spinner = preloader.find('.spinner__img');
                spinner.fadeOut();
                preloader.delay(650).fadeOut('slow');
            });
        }
    }]);

    return Spinner;
}();

;
exports.default = Spinner;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validation = function () {
    function Validation() {
        _classCallCheck(this, Validation);

        this.events();
        // this.ValidateContact();
    }

    _createClass(Validation, [{
        key: 'events',
        value: function events() {
            $('#button').click(function () {
                var valid = true;
                $(".form-application__input").css('background-color', '');
                $(".info").html('');
                if (!$("#name").val()) {
                    $("#name-info").html("(required)").css('color', 'red');
                    $("#name").css('background-color', '#FFFFDF');
                    valid = false;
                }
                if (!$("#email").val()) {
                    $("#email-info").html("(required)").css('color', 'red');
                    $("#email").css('background-color', '#FFFFDF');
                    valid = false;
                }
                if (!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
                    $("#email-info").html("(invalid)").css('color', 'red');
                    $("#email").css('background-color', '#FFFFDF');
                    valid = false;
                }
                if (!$("#message").val()) {
                    $("#message-info").html("(required)").css('color', 'red');
                    $("#message").css('background-color', '#FFFFDF');
                    valid = false;
                }
                return valid;
                if (valid) {
                    $.ajax()({
                        url: 'http://localhost:3000/mail.php',
                        data: 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&message=' + $('#message').val(),
                        type: "POST",
                        success: function success(data) {
                            $("#mail-status").html(data);
                        },
                        error: function error() {}
                    });
                }
            });
        }
    }]);

    return Validation;
}();

exports.default = Validation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sidebar = function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.buttonSidebar = $('#sidebar-toogle');
    this.sidebar = $('.about__menu');
    this.events();
    // this.toggleTheMenu();
  }

  _createClass(Sidebar, [{
    key: 'events',
    value: function events() {

      $(this.buttonSidebar).click(function () {

        $('.about__menu').animate({
          left: '0px'
        }, 200);
        $('body').animate({
          left: '285px'
        }, 200);

        // var toggle_el = $(this).data("toggle");
        // $(toggle_el).toggleClass("about__menu--open");
      });
    }
  }]);

  return Sidebar;
}();

exports.default = Sidebar;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function Map() {
  _classCallCheck(this, Map);

  window.initMap = function () {
    var stylemap = new google.maps.StyledMapType(__webpack_require__(6));
    var map = new google.maps.Map(document.getElementById("google-map"), {
      center: { lat: 54.710426, lng: 20.452214 },
      zoom: 15,
      scrollwheel: false,
      zoomControl: true,
      scaleControl: false
    });

    map.mapTypes.set('styled_map', stylemap);
    map.setMapTypeId('styled_map');

    var clickIcon = {
      path: 'M8,0C3.400,0,0,3.582,0,8s8,24,8,24s8-19.582,8-24S12.418,0,8,0z M8,12c-2.209,0-4-1.791-4-4   s1.791-4,4-4s4,1.791,4,4S10.209,12,8,12z',
      fillColor: "#004cd1",
      fillOpacity: 1,
      strokeColor: "#004cd1",
      strokeWeight: 1,
      labelOrigin: new google.maps.Point(8, 10),
      anchor: new google.maps.Point(9, 35)
    };

    var marker = new google.maps.Marker({
      position: { lat: 54.710426, lng: 20.452214 },
      graggable: true,
      map: map,
      icon: clickIcon,
      animation: google.maps.Animation.BOUNCE
    });
  };
};

exports.default = Map;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#444444"
    }]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
        "color": "#f2f2f2"
    }]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 45
    }]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "color": "#4369aa"
    }, {
        "visibility": "on"
    }]
}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import $ from 'jquery';

var Tabs = function () {
  function Tabs() {
    _classCallCheck(this, Tabs);

    $('.tabs__list:first-child').addClass('active');
    this.tabitem = $('.tabs__item');
    this.tabs = $('.tabs__content').hide();
    $('.tabs__content:first').show();
    this.events();
  }

  _createClass(Tabs, [{
    key: 'events',
    value: function events() {
      $('.tabs__list li').click(function () {
        $('.tabs__list li').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      });
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;

/***/ })
/******/ ]);