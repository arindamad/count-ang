(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-prt></app-banner-prt>\n<app-right-top></app-right-top>\n<app-phot360></app-phot360>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'coundToGangtock';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _banner_prt_banner_prt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-prt/banner-prt.component */ "./src/app/banner-prt/banner-prt.component.ts");
/* harmony import */ var _phot360_phot360_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phot360/phot360.component */ "./src/app/phot360/phot360.component.ts");
/* harmony import */ var _right_top_right_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./right-top/right-top.component */ "./src/app/right-top/right-top.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _banner_prt_banner_prt_component__WEBPACK_IMPORTED_MODULE_5__["BannerPrtComponent"],
                _phot360_phot360_component__WEBPACK_IMPORTED_MODULE_6__["Phot360Component"],
                _right_top_right_top_component__WEBPACK_IMPORTED_MODULE_7__["RightTopComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner-prt/banner-prt.component.css":
/*!*****************************************************!*\
  !*** ./src/app/banner-prt/banner-prt.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci1wcnQvYmFubmVyLXBydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/banner-prt/banner-prt.component.html":
/*!******************************************************!*\
  !*** ./src/app/banner-prt/banner-prt.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"section2\" class=\"bannerPanel\" style=\"position: absolute; top: 0; left: 0; z-index: -1;\">\n  <div class=\"owl-carousel  myowlcarousel\">\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/1.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13727.98097793682!2d88.60864961587896!3d27.329476996422283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0x73d6132c501c8f20!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1567478873434!5m2!1sen!2sin\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/2.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/3.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/4.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/5.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/6.jpg\" alt=\"\">\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"full itemInner\">\n              <img src=\"/assets/images/7.jpg\" alt=\"\">\n          </div>\n      </div>\n  </div>\n  <div class=\"countWrap\">\n      <h2 class=\"h2\">Countdown for </h2>\n      <h1>Gangtok</h1>\n      <div class=\"countdown\">\n          <div class=\"eachTimeer days\">\n              <canvas id=\"days-canvas\" width=\"200\" height=\"200\"></canvas>\n              <svg width=\"200\" height=\"200\">\n                  <circle id=\"outer\" cx=\"100\" cy=\"100\" r=\"90\" fill=\"transparent\" stroke-width=\"20\"\n                      stroke=\"#fff\" opacity=\"0.3\" />\n              </svg>\n              <div class=\"label\">\n                  <span id=\"days-value\"></span><br>\n                  <span>days</span>\n              </div>\n          </div>\n          <div class=\"eachTimeer hours\">\n              <canvas id=\"hours-canvas\" width=\"200\" height=\"200\"></canvas>\n              <svg width=\"200\" height=\"200\">\n                  <circle id=\"outer\" cx=\"100\" cy=\"100\" r=\"90\" fill=\"transparent\" stroke-width=\"20\"\n                      stroke=\"#fff\" opacity=\"0.3\" />\n              </svg>\n              <div class=\"label\">\n                  <span id=\"hours-value\"></span><br>\n                  <span>hours</span>\n              </div>\n          </div>\n          <div class=\"eachTimeer minutes\">\n              <canvas id=\"minutes-canvas\" width=\"200\" height=\"200\"></canvas>\n              <svg width=\"200\" height=\"200\">\n                  <circle id=\"outer\" cx=\"100\" cy=\"100\" r=\"90\" fill=\"transparent\" stroke-width=\"20\"\n                      stroke=\"#fff\" opacity=\"0.3\" />\n              </svg>\n              <div class=\"label\">\n                  <span id=\"minutes-value\"></span><br>\n                  <span>minutes</span>\n              </div>\n          </div>\n          <div class=\"eachTimeer seconds\">\n              <canvas id=\"seconds-canvas\" width=\"200\" height=\"200\"></canvas>\n              <svg width=\"200\" height=\"200\">\n                  <circle id=\"outer\" cx=\"100\" cy=\"100\" r=\"90\" fill=\"transparent\" stroke-width=\"20\"\n                      stroke=\"#fff\" opacity=\"0.3\" />\n              </svg>\n              <div class=\"label\">\n                  <span id=\"seconds-value\"></span><br>\n                  <span>seconds</span>\n              </div>\n          </div>\n      </div>\n  </div>\n  \n  \n  \n</section>"

/***/ }),

/***/ "./src/app/banner-prt/banner-prt.component.ts":
/*!****************************************************!*\
  !*** ./src/app/banner-prt/banner-prt.component.ts ***!
  \****************************************************/
/*! exports provided: BannerPrtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPrtComponent", function() { return BannerPrtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerPrtComponent = /** @class */ (function () {
    function BannerPrtComponent() {
    }
    BannerPrtComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.myowlcarousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items: 1,
                margin: 0,
                stagePadding: 0,
                autoplay: true,
                dots: true,
                loop: true,
                autoplayTimeout: 10000,
                autoplayHoverPause: true,
            });
        });
        // Set Launch Date (ms)
        var launchDate = new Date("November 27, 2019 00:00:00").getTime();
        var cstartDate = new Date("september 27, 2019 00:00:00").getTime();
        // Context object
        var c = {
            context: {},
            values: {},
            times: {}
        };
        // Convert radians to degrees
        function deg(d) {
            return (Math.PI / 180) * d - (Math.PI / 180) * 90;
        }
        var seconds;
        var minutes;
        var hours;
        function render() {
            //@ts-ignore
            c.context.seconds.clearRect(0, 0, 200, 200);
            //@ts-ignore
            c.context.seconds.beginPath();
            //@ts-ignore
            c.context.seconds.strokeStyle = "#3A55FF";
            //@ts-ignore
            c.context.seconds.arc(100, 100, 90, deg(-360), deg(-6 * (60 - c.times.seconds)));
            //@ts-ignore
            c.context.seconds.lineWidth = 20;
            //@ts-ignore
            c.context.seconds.lineCap = "round";
            //@ts-ignore
            c.context.seconds.stroke();
            //@ts-ignore
            c.context.minutes.clearRect(0, 0, 200, 200);
            //@ts-ignore
            c.context.minutes.beginPath();
            //@ts-ignore
            c.context.minutes.strokeStyle = "#E834B1";
            //@ts-ignore
            c.context.minutes.arc(100, 100, 90, deg(0), deg(-6 * (60 - c.times.minutes)));
            //@ts-ignore
            c.context.minutes.lineWidth = 20;
            //@ts-ignore
            c.context.minutes.lineCap = "round";
            //@ts-ignore
            c.context.minutes.stroke();
            //@ts-ignore
            c.context.hours.clearRect(0, 0, 200, 200);
            //@ts-ignore
            c.context.hours.beginPath();
            //@ts-ignore
            c.context.hours.strokeStyle = "#FFA246";
            //@ts-ignore
            c.context.hours.arc(100, 100, 90, deg(0), deg(-15 * (24 - c.times.hours)));
            //@ts-ignore
            c.context.hours.lineWidth = 20;
            //@ts-ignore
            c.context.hours.lineCap = "round";
            //@ts-ignore
            c.context.hours.stroke();
            //@ts-ignore    
            c.context.days.clearRect(0, 0, 200, 200);
            //@ts-ignore
            c.context.days.beginPath();
            //@ts-ignore
            c.context.days.strokeStyle = "#47FFAF";
            //@ts-ignore
            c.context.days.arc(100, 100, 90, deg(-360), deg(-365 - c.times.days));
            //@ts-ignore
            c.context.days.lineWidth = 20;
            //@ts-ignore
            c.context.days.lineCap = "round";
            //@ts-ignore
            c.context.days.stroke();
        }
        function init() {
            // Get 2D contexts
            //@ts-ignore
            c.context.seconds = document.getElementById('seconds-canvas').getContext('2d');
            //@ts-ignore
            c.context.minutes = document.getElementById('minutes-canvas').getContext('2d');
            //@ts-ignore
            c.context.hours = document.getElementById('hours-canvas').getContext('2d');
            //@ts-ignore
            c.context.days = document.getElementById('days-canvas').getContext('2d');
            // Get displayed values
            //@ts-ignore
            c.values.seconds = document.getElementById('seconds-value');
            //@ts-ignore
            c.values.minutes = document.getElementById('minutes-value');
            //@ts-ignore
            c.values.hours = document.getElementById('hours-value');
            //@ts-ignore
            c.values.days = document.getElementById('days-value');
            setInterval(function () {
                // Get todays date and time (ms)
                var now = new Date().getTime();
                // Get distance from now to launchDate
                var distance = launchDate - now;
                // Time calculations
                //@ts-ignore
                c.times.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                //@ts-ignore
                c.times.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                //@ts-ignore
                c.times.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                //@ts-ignore
                c.times.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                //@ts-ignore
                c.values.days.innerText = c.times.days;
                //@ts-ignore
                c.values.hours.innerText = c.times.hours;
                //@ts-ignore
                c.values.minutes.innerText = c.times.minutes;
                //@ts-ignore
                c.values.seconds.innerText = c.times.seconds;
                render(); // Draw!
            }, 1000);
        }
        init();
    };
    BannerPrtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-prt',
            template: __webpack_require__(/*! ./banner-prt.component.html */ "./src/app/banner-prt/banner-prt.component.html"),
            styles: [__webpack_require__(/*! ./banner-prt.component.css */ "./src/app/banner-prt/banner-prt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerPrtComponent);
    return BannerPrtComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n    text-align: center;\r\n}\r\na{\r\n    color: #fff;\r\n    font-size: 18px;\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md text-center\">\n              Frok this project on github <a href=\"https://github.com/arindamad/count-ang\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n          </div>\n          \n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/phot360/phot360.component.css":
/*!***********************************************!*\
  !*** ./src/app/phot360/phot360.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3QzNjAvcGhvdDM2MC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/phot360/phot360.component.html":
/*!************************************************!*\
  !*** ./src/app/phot360/phot360.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ar360photo\">\n  <div class=\"owl360slide owl-carousel\">\n      <div class=\"item\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!4v1567447934389!6m8!1m7!1sCAoSLEFGMVFpcE1KRE5RTzRlX18xWnZydGpRV2lWbUFkTVBoNVdMQXJRUVhXd1Jl!2m2!1d27.3389356!2d88.6065035!3f335.732866015569!4f-0.13396381832538395!5f0.7820865974627469\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n      </div>\n      <div class=\"item\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!4v1568050209331!6m8!1m7!1sCAoSLEFGMVFpcE9RSm1PaThjTHZwcGpVTHpacUVWSjd4SVhJTFFtY2ZnV3pNTzI5!2m2!1d27.3577612!2d88.62335089999999!3f220!4f0!5f0.7820865974627469\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n      </div>\n      <div class=\"item\"><iframe src=\"https://www.google.com/maps/embed?pb=!4v1568051489516!6m8!1m7!1sCAoSLEFGMVFpcE5sOFUtZlVJZ19zVEk4TFF4U1pVbkJNYVdvYXMxb21BNjFTNGNV!2m2!1d27.3389356!2d88.6065035!3f60!4f0!5f0.7820865974627469\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe></div> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/phot360/phot360.component.ts":
/*!**********************************************!*\
  !*** ./src/app/phot360/phot360.component.ts ***!
  \**********************************************/
/*! exports provided: Phot360Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phot360Component", function() { return Phot360Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Phot360Component = /** @class */ (function () {
    function Phot360Component() {
    }
    Phot360Component.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.owl360slide').owlCarousel({
                margin: 0,
                loop: true,
                items: 1,
                dots: false,
                nav: true,
                touchDrag: false,
                mouseDrag: false,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            });
        });
    };
    Phot360Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phot360',
            template: __webpack_require__(/*! ./phot360.component.html */ "./src/app/phot360/phot360.component.html"),
            styles: [__webpack_require__(/*! ./phot360.component.css */ "./src/app/phot360/phot360.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Phot360Component);
    return Phot360Component;
}());



/***/ }),

/***/ "./src/app/right-top/right-top.component.css":
/*!***************************************************!*\
  !*** ./src/app/right-top/right-top.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LXRvcC9yaWdodC10b3AuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/right-top/right-top.component.html":
/*!****************************************************!*\
  !*** ./src/app/right-top/right-top.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weatherReprot\">\n  <h4>Current Weather</h4>\n  <div class=\"d-flex\">\n      <div class=\"eachWeather gangtokWeather\">\n          <h5>Gangtok, IN</h5>\n          <div class=\"weather-container\">\n              <img class=\"icon\">\n              <div class=\"weatherInfo\">\n                  <p class=\"weather\"></p>\n                  <p class=\"temp\"></p>\n              </div>\n          </div>\n\n          <ul  class=\"weatherTable\">\n              <li class=\"weDes\"></li>\n              <li>\n                  Humidity: <span class=\"humidity1\"></span>\n              </li>\n              <li>Wind: <span class=\"winspeed\"></span></li>\n          </ul>\n      </div>\n      <div class=\"eachWeather kolkataWeather\">\n          <h5>Kolkata, IN</h5>\n              <div class=\"weather-container\">\n                  <img class=\"icon2\">\n                  <div class=\"weatherInfo\">\n                      <p class=\"weather2\"></p>\n                      <p class=\"temp2\"></p>\n                  </div>\n              </div>\n              <ul class=\"weatherTable\">\n                  <li class=\"weDes\"></li>\n                  <li>Humidity: <span class=\"humidity2\"></span>\n                  </li>\n                  <li>Wind: <span class=\"winspeed\"></span></li>\n              </ul>\n      </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/right-top/right-top.component.ts":
/*!**************************************************!*\
  !*** ./src/app/right-top/right-top.component.ts ***!
  \**************************************************/
/*! exports provided: RightTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTopComponent", function() { return RightTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RightTopComponent = /** @class */ (function () {
    function RightTopComponent() {
    }
    RightTopComponent.prototype.ngOnInit = function () {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=gangtok&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede", function (data) {
            // https://openweathermap.org/weathermap?zoom=12&lat=22.5677&lon=88.3476
            console.log(data);
            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            $('.icon').attr('src', icon);
            $(".temp").append(temp + '°C');
            $(".weather").append(weather);
            $('.humidity1').html(data.main.humidity + "%");
            $('.weDes').eq(0).html(data.weather[0].description);
            $('.winspeed').eq(0).html(data.wind.speed + ' m / sec');
        });
        // for kolkata
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede", function (data) {
            // https://openweathermap.org/weathermap?zoom=12&lat=22.5677&lon=88.3476
            console.log(data);
            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            $('.icon2').attr('src', icon);
            $(".temp2").append(temp + '°C');
            $(".weather2").append(weather);
            $('.humidity2').html(data.main.humidity + "%");
            $('.weDes').eq(1).html(data.weather[0].description);
            $('.winspeed').eq(1).html(data.wind.speed + ' m / sec');
        });
    };
    RightTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-top',
            template: __webpack_require__(/*! ./right-top.component.html */ "./src/app/right-top/right-top.component.html"),
            styles: [__webpack_require__(/*! ./right-top.component.css */ "./src/app/right-top/right-top.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RightTopComponent);
    return RightTopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\my-projects\coundToGangtock\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map