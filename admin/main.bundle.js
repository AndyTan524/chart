webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_getjson_service__ = __webpack_require__("../../../../../src/app/services/getjson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kchart_kchart_component__ = __webpack_require__("../../../../../src/app/kchart/kchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manager_login_manager_login_component__ = __webpack_require__("../../../../../src/app/manager-login/manager-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manager_register_manager_register_component__ = __webpack_require__("../../../../../src/app/manager-register/manager-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_site_manage_site_component__ = __webpack_require__("../../../../../src/app/manage-site/manage-site.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Service










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__manage_user_manage_user_component__["a" /* ManageUserComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__manager_register_manager_register_component__["a" /* ManagerRegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__manager_login_manager_login_component__["a" /* ManagerLoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */] },
    { path: 'kchart', component: __WEBPACK_IMPORTED_MODULE_13__kchart_kchart_component__["a" /* KchartComponent */] },
    { path: 'manageuser', component: __WEBPACK_IMPORTED_MODULE_16__manage_user_manage_user_component__["a" /* ManageUserComponent */] },
    { path: 'managesite', component: __WEBPACK_IMPORTED_MODULE_17__manage_site_manage_site_component__["a" /* ManageSiteComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__kchart_kchart_component__["a" /* KchartComponent */],
                __WEBPACK_IMPORTED_MODULE_14__manager_login_manager_login_component__["a" /* ManagerLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__manager_register_manager_register_component__["a" /* ManagerRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__manage_user_manage_user_component__["a" /* ManageUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__manage_site_manage_site_component__["a" /* ManageSiteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_9__services_getjson_service__["a" /* GetjsonService */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "video#bgvid { \n    /* position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n    -ms-transform: translateX(-50%) translateY(-50%);\n    -moz-transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%);\n    background: url(polina.jpg) no-repeat;\n\tbackground-size: cover;  */\n    width: 100%;\n    height: 100%;\n}\ndiv.row{\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.center {\n    margin: auto;\n    width: 50%;\n}\nimg {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 70%;\n}\n.paragraph {\n    margin-left: 40px;\n    margin-right: 40px;\n    font-size: 18px;\n    line-height: 1.5;\n    font-style: italic;\n    color: #6B74A0;\n    text-align: center;\n}\nh3.block-header{\n    margin: 60px 0 40px 0;\n    font-weight: 900;\n    font-size: 17px;\n    letter-spacing: 2px;\n    color: #8085e8;\n    text-align: center;\n}\np.box-header {\n    color : #eeeaea;\n    font-size: 28px;\n}\ndiv.hs-bottom{\n    background-color: #252530;\n    color: #eeeaea;\n    font-size: 16px;\n    line-height: 1.5;\n}\na {\n    color :#eeeaea;\n    font-size: 38px;\n    line-height: 1.5;\n    font-weight: 300;\n    letter-spacing: -1px;\n    /* color: #787D88; */\n    transition: 0.3s ease-in-out;\n    -webkit-transition: 0.3s ease-in-out;\n    -moz-transition: 0.3s ease-in-out;\n    -ms-transition: 0.3s ease-in-out;\n}\n.author-text-container {\n    margin-top: 15px;\n}\n.author-text-container .author {\n    font-weight: 700;\n}\n.testimonial {\n    text-align: center;\n    color: #6B74A0;\n}\n.author-logo-container {\n    width: 160px;\n    margin: auto;\n}\n.tweet {\n    background-color: #fff;\n    padding: 15px;\n    border-radius: 5px;\n    color: #555;\n    margin: 15px 0 30px 0;\n}\n.tweet .tweet-body {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 5px;\n}\n.tweet .tweet-body p {\n    font-weight: 500;\n}\n.tweet-footer {\n    padding-top: 10px;\n    font-size: 14px;\n}\n.grayed {\n    color: #8A8A8A;\n    margin: 0;\n    font-size: 15px;\n}\n.hs-bottom .tweet-body a {\n    color: #1DCAFF;\n    font-size: 15px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <div *ngIf=\"videoPath != ''\"class=\"row\">\n    <video playsinline autoplay muted loop id=\"bgvid\">\n      <source src=\"{{videoPath}}\">\n    </video>\n  </div>\n  <div class=\"row center\">\n    <h3 style = \"color : red;\">Link to the Company Goes Here!</h3>\n  </div>\n  <div class=\"row\">\n    <img src = \"assets/Chart.png\"/>\n  </div>\n  <div class=\"row\" style=\"margin-top:10px; background-color:#eee\">\n    <div class=\"container testimonial\">\n      <h3 class=\"block-header\">TESTIMONIAL</h3>\n      <p class=\"paragraph\">\n          \"I absolutely LOVE Highcharts & maps, very cool! We use it for a web metrics dashboard, which is shared with internal marketing stakeholders. The tool is brilliant and the API documentation is super-helpful. I set up some basic, manual reports using Highcharts back in August 2014, and since then we make a JSON request to Adobe Analytics and pass the data back to HighCharts. It works really well!\n      </p>\n      <p class=\"paragraph\">\n          The API and the chart demos meant I could get up and running very, very quickly.\"\n      </p>\n      <div class=\"author-text-container\">\n        <p class=\"author\">Donal Phipps</p>\n        <p class=\"author-title\">Strategic Digital Analyst at GE Healthcare</p>\n      </div>\n\n      <div class=\"author-logo-container\">\n        <img src=\"/assets/avarta.png\" border=\"0\">\n        <!-- <h4>CompanyLogo</h4> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"row hs-bottom\">\n    <div class=\"container\" style=\"margin-top:30px; margin-bottom: 30px\">\n      <div class=\"col-md-5\">\n          <!-- <p>\n            <a href=\"/news\">News <i class=\"fa fa-angle-right\"></i></a>\n          </p> -->\n          \n          <a href=\"/about\">About us <i class=\"fa fa-angle-right\"></i></a>\n          <p><strong>Highsoft</strong> is the company behind the world's most popular JavaScript charting engine, Highcharts JS, and it's sister products Highstock JS, Highmaps JS, and Highcharts Cloud.</p>\n          <p>Our bootstrapped company is located in Vik i Sogn, Norway, and has 20 employees working full-time on developing, marketing, and supporting our products. Additionally, we retain 8 people offshore in various support and custom development roles. We have sold more than 45,000 licenses, and our clients include 70 of the 100 largest companies in the world.</p>\n      </div>\n      <div class=\"col-md-7\">\n        <img src = \"/assets/qrcode.jpg\"/>\n      </div>\n      <!-- <div class=\"col-md-7\">\n        <p class=\"box-header\">#Highcharts On <i class=\"fa fa-twitter\" style=\"color: #1dcaff;\"></i></p>\n        <div id=\"twitter-quotes\">\n          <div style=\"\">\n            <div class=\"tweet\">\n              <div class=\"tweet-body\">\n                <p style=\"margin-top: 0;\">My first proper corporate web-app! Learned lots about UX, mobile experience, cross browser support, error handling… <a href=\"https://t.co/YUc0cXHeZR\">https://t.co/YUc0cXHeZR</a></p>\n              </div>\n              <div class=\"tweet-footer\">\n                <a class=\"grayed\" href=\"http://twitter.com/tomewing1979\"><strong>Tom Ewing</strong>@tomewing1979</a>\n                <p class=\"grayed\">18.Jan.2018</p>\n              </div>\n            </div>\n                <div class=\"tweet\">\n              <div class=\"tweet-body\">\n                <p style=\"margin-top: 0;\">A interactive map of poverty by county in Michigan, from <a href=\"http://twitter.com/umich\">@umich</a> Poverty Solutions and a meaningful implementation o… <a href=\"https://t.co/xxA2DjeXBz\">https://t.co/xxA2DjeXBz</a></p>\n              </div>\n              <div class=\"tweet-footer\">\n                <a class=\"grayed\" href=\"http://twitter.com/umfamilymed\"><strong>U-M Family Medicine</strong>@umfamilymed</a>\n                <p class=\"grayed\">17.Jan.2018</p>\n              </div>\n            </div>\n          </div>\t\n        </div>\n        <div class=\"clearfix\"></div>\n      </div> -->\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        // videoPath = "assets/bgvideo7.mp4";
        this.videoPath = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getVideo().subscribe(function (data) {
            if (!data.success) {
                alert("Failed");
            }
            else {
                console.log(data.data[0]);
                _this.videoPath = "assets/" + data.data[0].path;
                console.log(_this.videoPath);
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kchart/kchart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kchart/kchart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id = \"chart\"></div> -->\n<div id=\"chartdiv\" style = \"width: 100%; height: 500px;\">\n</div>\n<div class = \"col-xs-12 col-md-6 col-sm-6\">\n    <button class=\"btn btn-success\" (click) = \"onAdd()\"> + </button>\n    <button class=\"btn btn-danger\" (click) = \"onRemove()\"> - </button>\n    <div *ngIf = \"showFlag\" id=\"chartparent\" >\n        <h4>{{svg1caption}}</h4>\n        <div id=\"chartpicdiv\" style = \"width: 100px; height: 200px;\">\n        </div>\n    </div>\n    <div id=\"tempchartdiv\" style = \"width: 100px; height: 200px;\">\n    </div>\n</div>\n\n<div class = \"col-xs-12 col-md-6 col-sm-6\">\n    <button class=\"btn btn-success\" (click) = \"onAdd1()\"> + </button>\n    <button class=\"btn btn-danger\" (click) = \"onRemove1()\"> - </button>\n    <div *ngIf = \"showFlag1\" id=\"chartparent1\" >\n        <h4>{{svg2caption}}</h4>\n        <div id=\"chartpicdiv1\" style = \"width: 100px; height: 200px;\">\n\n        </div>\n    </div>\n    <div id=\"tempchartdiv1\" style = \"width: 100px; height: 200px;\">\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kchart/kchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KchartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var indexarray = [];
var KchartComponent = (function () {
    function KchartComponent(auth, http) {
        this.auth = auth;
        this.http = http;
        this.showFlag = false;
        this.showFlag1 = false;
        this.dataProvider = [];
        this.origin_dataProvider = [{
                "date": "2011-08-01",
                "open": "136.65",
                "high": "136.96",
                "low": "134.15",
                "close": "136.49"
            }, {
                "date": "2011-08-02",
                "open": "135.26",
                "high": "135.95",
                "low": "131.50",
                "close": "131.85"
            }, {
                "date": "2011-08-05",
                "open": "132.90",
                "high": "135.27",
                "low": "128.30",
                "close": "135.25"
            }, {
                "date": "2011-08-06",
                "open": "134.94",
                "high": "137.24",
                "low": "132.63",
                "close": "135.03"
            }, {
                "date": "2011-08-07",
                "open": "136.76",
                "high": "136.86",
                "low": "132.00",
                "close": "134.01"
            }, {
                "date": "2011-08-08",
                "open": "131.11",
                "high": "133.00",
                "low": "125.09",
                "close": "126.39"
            }, {
                "date": "2011-08-09",
                "open": "123.12",
                "high": "127.75",
                "low": "120.30",
                "close": "125.00"
            }, {
                "date": "2011-08-12",
                "open": "128.32",
                "high": "129.35",
                "low": "126.50",
                "close": "127.79"
            }, {
                "date": "2011-08-13",
                "open": "128.29",
                "high": "128.30",
                "low": "123.71",
                "close": "124.03"
            }, {
                "date": "2011-08-14",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            }, {
                "date": "2011-08-15",
                "open": "117.01",
                "high": "118.50",
                "low": "111.62",
                "close": "117.05"
            }, {
                "date": "2011-08-16",
                "open": "122.01",
                "high": "123.50",
                "low": "119.82",
                "close": "122.06"
            }, {
                "date": "2011-08-19",
                "open": "123.96",
                "high": "124.50",
                "low": "120.50",
                "close": "122.22"
            }, {
                "date": "2011-08-20",
                "open": "122.21",
                "high": "128.96",
                "low": "121.00",
                "close": "127.57"
            }, {
                "date": "2011-08-21",
                "open": "131.22",
                "high": "132.75",
                "low": "130.33",
                "close": "132.51"
            }, {
                "date": "2011-08-22",
                "open": "133.09",
                "high": "133.34",
                "low": "129.76",
                "close": "131.07"
            }, {
                "date": "2011-08-23",
                "open": "130.53",
                "high": "135.37",
                "low": "129.81",
                "close": "135.30"
            }, {
                "date": "2011-08-26",
                "open": "133.39",
                "high": "134.66",
                "low": "132.10",
                "close": "132.25"
            }, {
                "date": "2011-08-27",
                "open": "130.99",
                "high": "132.41",
                "low": "126.63",
                "close": "126.82"
            }, {
                "date": "2011-08-28",
                "open": "129.88",
                "high": "134.18",
                "low": "129.54",
                "close": "134.08"
            }, {
                "date": "2011-08-29",
                "open": "132.67",
                "high": "138.25",
                "low": "132.30",
                "close": "136.25"
            }, {
                "date": "2011-08-30",
                "open": "139.49",
                "high": "139.65",
                "low": "137.41",
                "close": "138.48"
            }, {
                "date": "2011-09-03",
                "open": "139.94",
                "high": "145.73",
                "low": "139.84",
                "close": "144.16"
            }, {
                "date": "2011-09-04",
                "open": "144.97",
                "high": "145.84",
                "low": "136.10",
                "close": "136.76"
            }, {
                "date": "2011-09-05",
                "open": "135.56",
                "high": "137.57",
                "low": "132.71",
                "close": "135.01"
            }, {
                "date": "2011-09-06",
                "open": "132.01",
                "high": "132.30",
                "low": "130.00",
                "close": "131.77"
            }, {
                "date": "2011-09-09",
                "open": "136.99",
                "high": "138.04",
                "low": "133.95",
                "close": "136.71"
            }, {
                "date": "2011-09-10",
                "open": "137.90",
                "high": "138.30",
                "low": "133.75",
                "close": "135.49"
            }, {
                "date": "2011-09-11",
                "open": "135.99",
                "high": "139.40",
                "low": "135.75",
                "close": "136.85"
            }, {
                "date": "2011-09-12",
                "open": "138.83",
                "high": "139.00",
                "low": "136.65",
                "close": "137.20"
            }, {
                "date": "2011-09-13",
                "open": "136.57",
                "high": "138.98",
                "low": "136.20",
                "close": "138.81"
            }, {
                "date": "2011-09-16",
                "open": "138.99",
                "high": "140.59",
                "low": "137.60",
                "close": "138.41"
            }, {
                "date": "2011-09-17",
                "open": "139.06",
                "high": "142.85",
                "low": "137.83",
                "close": "140.92"
            }, {
                "date": "2011-09-18",
                "open": "143.02",
                "high": "143.16",
                "low": "139.40",
                "close": "140.77"
            }, {
                "date": "2011-09-19",
                "open": "140.15",
                "high": "141.79",
                "low": "139.32",
                "close": "140.31"
            }, {
                "date": "2011-09-20",
                "open": "141.14",
                "high": "144.65",
                "low": "140.31",
                "close": "144.15"
            }, {
                "date": "2011-09-23",
                "open": "146.73",
                "high": "149.85",
                "low": "146.65",
                "close": "148.28"
            }, {
                "date": "2011-09-24",
                "open": "146.84",
                "high": "153.22",
                "low": "146.82",
                "close": "153.18"
            }, {
                "date": "2011-09-25",
                "open": "154.47",
                "high": "155.00",
                "low": "151.25",
                "close": "152.77"
            }, {
                "date": "2011-09-26",
                "open": "153.77",
                "high": "154.52",
                "low": "152.32",
                "close": "154.50"
            }, {
                "date": "2011-09-27",
                "open": "153.44",
                "high": "154.60",
                "low": "152.75",
                "close": "153.47"
            }, {
                "date": "2011-09-30",
                "open": "154.63",
                "high": "157.41",
                "low": "152.93",
                "close": "156.34"
            }, {
                "date": "2011-10-01",
                "open": "156.55",
                "high": "158.59",
                "low": "155.89",
                "close": "158.45"
            }, {
                "date": "2011-10-02",
                "open": "157.78",
                "high": "159.18",
                "low": "157.01",
                "close": "157.92"
            }, {
                "date": "2011-10-03",
                "open": "158.00",
                "high": "158.08",
                "low": "153.50",
                "close": "156.24"
            }, {
                "date": "2011-10-04",
                "open": "158.37",
                "high": "161.58",
                "low": "157.70",
                "close": "161.45"
            }, {
                "date": "2011-10-07",
                "open": "163.49",
                "high": "167.91",
                "low": "162.97",
                "close": "167.91"
            }, {
                "date": "2011-10-08",
                "open": "170.20",
                "high": "171.11",
                "low": "166.68",
                "close": "167.86"
            }, {
                "date": "2011-10-09",
                "open": "167.55",
                "high": "167.88",
                "low": "165.60",
                "close": "166.79"
            }, {
                "date": "2011-10-10",
                "open": "169.49",
                "high": "171.88",
                "low": "153.21",
                "close": "162.23"
            }, {
                "date": "2011-10-11",
                "open": "163.01",
                "high": "167.28",
                "low": "161.80",
                "close": "167.25"
            }, {
                "date": "2011-10-14",
                "open": "167.98",
                "high": "169.57",
                "low": "163.50",
                "close": "166.98"
            }, {
                "date": "2011-10-15",
                "open": "165.54",
                "high": "170.18",
                "low": "165.15",
                "close": "169.58"
            }, {
                "date": "2011-10-16",
                "open": "172.69",
                "high": "173.04",
                "low": "169.18",
                "close": "172.75"
            }, {
                "date": "2011-10-17",
                "open": "171.50",
                "high": "174.19",
                "low": "171.05",
                "close": "173.50"
            }, {
                "date": "2011-10-18",
                "open": "174.24",
                "high": "174.63",
                "low": "170.00",
                "close": "170.42"
            }, {
                "date": "2011-10-21",
                "open": "170.35",
                "high": "174.90",
                "low": "169.96",
                "close": "174.36"
            }, {
                "date": "2011-10-22",
                "open": "188.56",
                "high": "188.60",
                "low": "182.76",
                "close": "186.16"
            }, {
                "date": "2011-10-23",
                "open": "185.81",
                "high": "187.21",
                "low": "179.24",
                "close": "185.93"
            }, {
                "date": "2011-10-24",
                "open": "184.87",
                "high": "185.90",
                "low": "181.66",
                "close": "182.78"
            }, {
                "date": "2011-10-25",
                "open": "185.29",
                "high": "185.37",
                "low": "182.88",
                "close": "184.70"
            }, {
                "date": "2011-10-28",
                "open": "185.45",
                "high": "186.59",
                "low": "184.70",
                "close": "185.09"
            }, {
                "date": "2011-10-29",
                "open": "186.18",
                "high": "189.37",
                "low": "184.73",
                "close": "187.00"
            }, {
                "date": "2011-10-30",
                "open": "187.63",
                "high": "190.12",
                "low": "184.95",
                "close": "189.95"
            }, {
                "date": "2011-10-31",
                "open": "188.60",
                "high": "190.10",
                "low": "180.00",
                "close": "187.44"
            }, {
                "date": "2011-11-01",
                "open": "189.21",
                "high": "189.44",
                "low": "183.49",
                "close": "187.87"
            }, {
                "date": "2011-11-04",
                "open": "185.29",
                "high": "188.96",
                "low": "184.24",
                "close": "186.18"
            }, {
                "date": "2011-11-05",
                "open": "187.05",
                "high": "192.00",
                "low": "185.27",
                "close": "191.79"
            }, {
                "date": "2011-11-06",
                "open": "190.61",
                "high": "192.68",
                "low": "186.13",
                "close": "186.30"
            }, {
                "date": "2011-11-07",
                "open": "186.67",
                "high": "186.90",
                "low": "167.77",
                "close": "175.47"
            }, {
                "date": "2011-11-08",
                "open": "171.15",
                "high": "175.12",
                "low": "165.21",
                "close": "165.37"
            }, {
                "date": "2011-11-11",
                "open": "165.28",
                "high": "167.70",
                "low": "150.63",
                "close": "153.76"
            }, {
                "date": "2011-11-12",
                "open": "160.85",
                "high": "170.98",
                "low": "153.76",
                "close": "169.96"
            }, {
                "date": "2011-11-13",
                "open": "177.16",
                "high": "177.57",
                "low": "163.74",
                "close": "166.11"
            }, {
                "date": "2011-11-14",
                "open": "166.39",
                "high": "169.59",
                "low": "160.30",
                "close": "164.30"
            }, {
                "date": "2011-11-15",
                "open": "165.30",
                "high": "167.02",
                "low": "159.33",
                "close": "166.39"
            }, {
                "date": "2011-11-18",
                "open": "166.10",
                "high": "168.20",
                "low": "162.10",
                "close": "163.95"
            }, {
                "date": "2011-11-19",
                "open": "165.67",
                "high": "171.79",
                "low": "163.53",
                "close": "168.85"
            }, {
                "date": "2011-11-20",
                "open": "165.84",
                "high": "172.35",
                "low": "164.67",
                "close": "168.46"
            }, {
                "date": "2011-11-22",
                "open": "172.00",
                "high": "172.05",
                "low": "169.75",
                "close": "171.54"
            }, {
                "date": "2011-11-25",
                "open": "173.59",
                "high": "177.27",
                "low": "172.35",
                "close": "172.54"
            }, {
                "date": "2011-11-26",
                "open": "175.22",
                "high": "175.79",
                "low": "170.01",
                "close": "174.81"
            }, {
                "date": "2011-11-27",
                "open": "176.82",
                "high": "180.60",
                "low": "175.35",
                "close": "180.22"
            }, {
                "date": "2011-11-28",
                "open": "179.43",
                "high": "185.17",
                "low": "179.15",
                "close": "184.29"
            }, {
                "date": "2011-11-29",
                "open": "187.34",
                "high": "187.70",
                "low": "179.70",
                "close": "182.22"
            }, {
                "date": "2011-12-02",
                "open": "181.86",
                "high": "184.14",
                "low": "177.70",
                "close": "178.86"
            }, {
                "date": "2011-12-03",
                "open": "177.15",
                "high": "180.90",
                "low": "176.99",
                "close": "179.81"
            }, {
                "date": "2011-12-04",
                "open": "182.89",
                "high": "186.00",
                "low": "182.41",
                "close": "185.50"
            }, {
                "date": "2011-12-05",
                "open": "186.19",
                "high": "190.10",
                "low": "186.12",
                "close": "189.95"
            }, {
                "date": "2011-12-06",
                "open": "190.54",
                "high": "194.99",
                "low": "188.04",
                "close": "194.30"
            }, {
                "date": "2011-12-09",
                "open": "193.59",
                "high": "195.66",
                "low": "192.69",
                "close": "194.21"
            }, {
                "date": "2011-12-10",
                "open": "194.75",
                "high": "196.83",
                "low": "187.39",
                "close": "188.54"
            }, {
                "date": "2011-12-11",
                "open": "193.44",
                "high": "194.48",
                "low": "185.76",
                "close": "190.86"
            }, {
                "date": "2011-12-12",
                "open": "190.19",
                "high": "192.12",
                "low": "187.82",
                "close": "191.83"
            }, {
                "date": "2011-12-13",
                "open": "190.37",
                "high": "193.20",
                "low": "189.54",
                "close": "190.39"
            }, {
                "date": "2011-12-16",
                "open": "190.72",
                "high": "192.65",
                "low": "182.98",
                "close": "184.40"
            }, {
                "date": "2011-12-17",
                "open": "186.52",
                "high": "187.33",
                "low": "178.60",
                "close": "182.98"
            }, {
                "date": "2011-12-18",
                "open": "182.98",
                "high": "184.64",
                "low": "180.90",
                "close": "183.12"
            }, {
                "date": "2011-12-19",
                "open": "185.43",
                "high": "187.83",
                "low": "183.33",
                "close": "187.21"
            }, {
                "date": "2011-12-20",
                "open": "190.12",
                "high": "193.91",
                "low": "189.89",
                "close": "193.91"
            }, {
                "date": "2011-12-23",
                "open": "195.03",
                "high": "199.33",
                "low": "194.79",
                "close": "198.80"
            }, {
                "date": "2011-12-25",
                "open": "199.01",
                "high": "200.96",
                "low": "196.82",
                "close": "198.95"
            }, {
                "date": "2011-12-26",
                "open": "198.95",
                "high": "202.96",
                "low": "197.80",
                "close": "198.57"
            }, {
                "date": "2011-12-27",
                "open": "200.59",
                "high": "201.56",
                "low": "196.88",
                "close": "199.83"
            }, {
                "date": "2011-12-30",
                "open": "199.50",
                "high": "200.50",
                "low": "197.75",
                "close": "198.08"
            }, {
                "date": "2012-01-01",
                "open": "199.27",
                "high": "200.26",
                "low": "192.55",
                "close": "194.84"
            }, {
                "date": "2012-01-02",
                "open": "195.41",
                "high": "197.39",
                "low": "192.69",
                "close": "194.93"
            }, {
                "date": "2012-01-03",
                "open": "191.45",
                "high": "193.00",
                "low": "178.89",
                "close": "180.05"
            }, {
                "date": "2012-01-06",
                "open": "181.25",
                "high": "183.60",
                "low": "170.23",
                "close": "177.64"
            }, {
                "date": "2012-01-07",
                "open": "180.14",
                "high": "182.46",
                "low": "170.80",
                "close": "171.25"
            }, {
                "date": "2012-01-08",
                "open": "171.30",
                "high": "179.50",
                "low": "168.30",
                "close": "179.40"
            }, {
                "date": "2012-01-09",
                "open": "177.58",
                "high": "181.00",
                "low": "175.41",
                "close": "178.02"
            }, {
                "date": "2012-01-10",
                "open": "176.00",
                "high": "177.85",
                "low": "170.00",
                "close": "172.69"
            }, {
                "date": "2012-01-13",
                "open": "177.52",
                "high": "179.42",
                "low": "175.17",
                "close": "178.78"
            }, {
                "date": "2012-01-14",
                "open": "177.72",
                "high": "179.22",
                "low": "164.66",
                "close": "169.04"
            }, {
                "date": "2012-01-15",
                "open": "165.23",
                "high": "169.01",
                "low": "156.70",
                "close": "159.64"
            }, {
                "date": "2012-01-16",
                "open": "161.51",
                "high": "165.36",
                "low": "158.42",
                "close": "160.89"
            }, {
                "date": "2012-01-17",
                "open": "161.71",
                "high": "165.75",
                "low": "159.61",
                "close": "161.36"
            }, {
                "date": "2012-01-21",
                "open": "148.06",
                "high": "159.98",
                "low": "146.00",
                "close": "155.64"
            }, {
                "date": "2012-01-22",
                "open": "136.19",
                "high": "140.00",
                "low": "126.14",
                "close": "139.07"
            }, {
                "date": "2012-01-23",
                "open": "139.99",
                "high": "140.70",
                "low": "132.01",
                "close": "135.60"
            }, {
                "date": "2012-01-24",
                "open": "138.99",
                "high": "139.09",
                "low": "129.61",
                "close": "130.01"
            }, {
                "date": "2012-01-27",
                "open": "128.16",
                "high": "133.20",
                "low": "126.45",
                "close": "130.01"
            }, {
                "date": "2012-01-28",
                "open": "131.15",
                "high": "132.79",
                "low": "129.05",
                "close": "131.54"
            }, {
                "date": "2012-01-29",
                "open": "131.37",
                "high": "135.45",
                "low": "130.00",
                "close": "132.18"
            }, {
                "date": "2012-01-30",
                "open": "129.45",
                "high": "136.65",
                "low": "129.40",
                "close": "135.36"
            }, {
                "date": "2012-01-31",
                "open": "136.24",
                "high": "136.59",
                "low": "132.18",
                "close": "133.75"
            }, {
                "date": "2012-02-03",
                "open": "134.21",
                "high": "135.90",
                "low": "131.42",
                "close": "131.65"
            }, {
                "date": "2012-02-04",
                "open": "130.43",
                "high": "134.00",
                "low": "128.90",
                "close": "129.36"
            }, {
                "date": "2012-02-05",
                "open": "130.83",
                "high": "131.92",
                "low": "121.77",
                "close": "122.00"
            }, {
                "date": "2012-02-06",
                "open": "119.97",
                "high": "124.78",
                "low": "117.27",
                "close": "121.24"
            }, {
                "date": "2012-02-07",
                "open": "122.08",
                "high": "125.70",
                "low": "121.60",
                "close": "125.48"
            }, {
                "date": "2012-02-10",
                "open": "128.01",
                "high": "129.98",
                "low": "127.20",
                "close": "129.45"
            }, {
                "date": "2012-02-11",
                "open": "130.70",
                "high": "131.00",
                "low": "123.62",
                "close": "124.86"
            }, {
                "date": "2012-02-12",
                "open": "126.68",
                "high": "129.78",
                "low": "125.63",
                "close": "129.40"
            }];
        console.log("constructor");
    }
    KchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "/assets/data.json";
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("AAAAAAAA");
            for (var i in data) {
                var date = new Date(data[i][0]);
                var datestring = _this.js_yyyy_mm_dd_hh_mm_ss(data[i][0]);
                _this.dataProvider.push({
                    "date": datestring,
                    "open": data[i][1],
                    "high": data[i][2],
                    "low": data[i][3],
                    "close": data[i][4]
                });
            }
            console.log(_this.dataProvider);
            _this.makeChart();
        });
        if (localStorage.getItem("imagesvg1") && localStorage.getItem("imagesvg1caption")) {
            this.svg1 = localStorage.getItem("imagesvg1");
            this.svg1caption = localStorage.getItem("imagesvg1caption");
            this.showFlag = true;
        }
        if (localStorage.getItem("imagesvg2") && localStorage.getItem("imagesvg2caption")) {
            this.svg2 = localStorage.getItem("imagesvg2");
            this.svg2caption = localStorage.getItem("imagesvg2caption");
            this.showFlag1 = true;
        }
        // console.log(localStorage.getItem("image1"));
        // console.log(localStorage.getItem("image2"));
    };
    KchartComponent.prototype.ngAfterViewInit = function () {
        if (this.showFlag) {
            document.getElementById("chartpicdiv").setAttribute("style", "content: url('data:image/svg+xml; utf8," + this.svg1 + "');");
        }
        if (this.showFlag1) {
            document.getElementById("chartpicdiv1").setAttribute("style", "content: url('data:image/svg+xml; utf8," + this.svg2 + "');");
        }
        // console.log(document.getElementById("chartpicdiv"));
    };
    KchartComponent.prototype.makeChart = function () {
        this.kchart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "addClassNames": true,
            "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
            "valueAxes": [{
                    "position": "bottom"
                }],
            // "mouseWheelZoomEnabled": true,
            "graphs": [{
                    "id": "g1",
                    "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                    "closeField": "close",
                    "fillColors": "#7f8da9",
                    "highField": "high",
                    "lineColor": "#7f8da9",
                    "lineAlpha": 1,
                    "lowField": "low",
                    "fillAlphas": 0.9,
                    "negativeFillColors": "#db4c3c",
                    "negativeLineColor": "#db4c3c",
                    "openField": "open",
                    "title": "Price:",
                    "type": "candlestick",
                    "valueField": "close"
                }],
            "chartScrollbar": {
                "graph": "g1",
                "graphType": "line",
                "scrollbarHeight": 50,
                "resizeEnabled": false
            },
            "chartCursor": {
                "selectWithoutZooming": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "categoryField": "date",
            "categoryAxis": {
                "autoGridCount": false,
                "gridCount": 8,
                "labelRotation": 10,
            },
            "dataProvider": this.dataProvider,
            "export": {
                "enabled": true,
                "menu": []
            }
        });
        this.kchart.addListener("rendered", zoomChart);
        this.kchart.addListener("zoomed", handleZoom);
        this.kchart.chartCursor.addListener("selected", handleSelect);
        this.kchart.zoomToIndexes(this.dataProvider.length - 100, this.dataProvider.length - 1);
        // this method is called when chart is first inited as we listen for "dataUpdated" event
        function handleSelect(event) {
            console.log(event);
            for (var i = event.startIndex; i <= event.endIndex; i++)
                indexarray.push(i);
        }
        function zoomChart() {
        }
        function handleZoom(event) {
            console.log(event);
        }
    };
    KchartComponent.prototype.js_yyyy_mm_dd_hh_mm_ss = function (timestamp) {
        var now = new Date(timestamp);
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = "" + now.getDate();
        if (day.length == 1) {
            day = "0" + day;
        }
        var hour = "" + now.getHours();
        if (hour.length == 1) {
            hour = "0" + hour;
        }
        var minute = "" + now.getMinutes();
        if (minute.length == 1) {
            minute = "0" + minute;
        }
        var second = "" + now.getSeconds();
        if (second.length == 1) {
            second = "0" + second;
        }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    };
    KchartComponent.prototype.onAdd = function () {
        console.log(this);
        if (indexarray.length < 2) {
            alert("You must select more than 2 item! Select Again!");
            indexarray = [];
            return;
        }
        // alert("You have selected index" + indexarray);
        document.getElementById("tempchartdiv").style.display = 'block';
        var tempdata = [];
        indexarray.sort(function (a, b) { return a - b; });
        for (var i in indexarray) {
            tempdata.push(this.dataProvider[indexarray[i]]);
        }
        console.log(tempdata);
        this.showFlag = true;
        this.timestamp = Date.now();
        function pad2(n) { return n < 10 ? '0' + n : n; }
        var date = new Date();
        this.timestamp = this.js_yyyy_mm_dd_hh_mm_ss(tempdata[0]["date"]) + '_' + indexarray.length;
        this.userId = this.auth.getLoggedInUser().name;
        var templatechart = AmCharts.makeChart("tempchartdiv", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
            "valueAxes": [{
                    "labelsEnabled": false,
                    "gridThickness": 0
                }],
            // "mouseWheelZoomEnabled": true,
            "graphs": [{
                    "id": "g2",
                    "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                    "closeField": "close",
                    "fillColors": "#7f8da9",
                    "highField": "high",
                    "lineColor": "#7f8da9",
                    "lineAlpha": 1,
                    "lowField": "low",
                    "fillAlphas": 0.9,
                    "negativeFillColors": "#db4c3c",
                    "negativeLineColor": "#db4c3c",
                    "openField": "open",
                    "title": "Price:",
                    "type": "candlestick",
                    "valueField": "close"
                }],
            "chartCursor": {
                "selectWithoutZooming": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "categoryField": "date",
            "categoryAxis": {
                "labelsEnabled": false,
                // "parseDates": true,
                "gridThickness": 0
            },
            "dataProvider": tempdata,
            "export": {
                "enabled": true,
                "menu": []
            }
        });
        this.svg1caption = this.userId + '_' + this.timestamp;
        localStorage.setItem("imagesvg1caption", this.svg1caption);
        templatechart["export"].capture({}, function () {
            // SAVE TO PNG
            this.toSVG({}, function (svg) {
                document.getElementById("chartpicdiv").setAttribute("style", "content: url('data:image/svg+xml; utf8," + svg + "');");
                localStorage.setItem("imagesvg1", svg);
                // this.http.post('http://localhost:3000/admin/register', )
            });
        });
        document.getElementById("tempchartdiv").style.display = 'none';
        indexarray = [];
    };
    KchartComponent.prototype.onRemove = function () {
        this.showFlag = false;
    };
    KchartComponent.prototype.onAdd1 = function () {
        console.log(this);
        if (indexarray.length < 2) {
            alert("You must select more than 2 item! Select Again!");
            indexarray = [];
            return;
        }
        // alert("You have selected index" + indexarray);
        document.getElementById("tempchartdiv1").style.display = 'block';
        var tempdata = [];
        indexarray.sort(function (a, b) { return a - b; });
        for (var i in indexarray) {
            tempdata.push(this.dataProvider[indexarray[i]]);
        }
        console.log(tempdata);
        this.showFlag1 = true;
        function pad2(n) { return n < 10 ? '0' + n : n; }
        var date = new Date();
        this.timestamp1 = this.js_yyyy_mm_dd_hh_mm_ss(tempdata[0]["date"]) + '_' + indexarray.length;
        this.userId1 = this.auth.getLoggedInUser().name;
        var templatechart = AmCharts.makeChart("tempchartdiv1", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
            "valueAxes": [{
                    "labelsEnabled": false,
                    "gridThickness": 0
                }],
            // "mouseWheelZoomEnabled": true,
            "graphs": [{
                    "id": "g2",
                    "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                    "closeField": "close",
                    "fillColors": "#7f8da9",
                    "highField": "high",
                    "lineColor": "#7f8da9",
                    "lineAlpha": 1,
                    "lowField": "low",
                    "fillAlphas": 0.9,
                    "negativeFillColors": "#db4c3c",
                    "negativeLineColor": "#db4c3c",
                    "openField": "open",
                    "title": "Price:",
                    "type": "candlestick",
                    "valueField": "close"
                }],
            "chartCursor": {
                "selectWithoutZooming": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "categoryField": "date",
            "categoryAxis": {
                "labelsEnabled": false,
                // "parseDates": true,
                "gridThickness": 0
            },
            "dataProvider": tempdata,
            "export": {
                "enabled": true,
                "menu": []
            }
        });
        this.svg2caption = this.userId1 + '_' + this.timestamp1;
        localStorage.setItem("imagesvg2caption", this.svg2caption);
        templatechart["export"].capture({}, function () {
            // SAVE TO PNG
            this.toSVG({}, function (svg) {
                document.getElementById("chartpicdiv1").setAttribute("style", "content: url('data:image/svg+xml; utf8," + svg + "');");
                localStorage.setItem("imagesvg2", svg);
                // this.http.post('http://localhost:3000/admin/register', )
            });
        });
        document.getElementById("tempchartdiv1").style.display = 'none';
        indexarray = [];
    };
    KchartComponent.prototype.onRemove1 = function () {
        this.showFlag1 = false;
    };
    KchartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kchart',
            template: __webpack_require__("../../../../../src/app/kchart/kchart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kchart/kchart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], KchartComponent);
    return KchartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-site/manage-site.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-site/manage-site.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <div class=\"form-group\"> \n        <h3>Upload Video</h3>\n  </div>\n  <div class=\"form-group\"> \n      <input type = \"file\" (change)=\"onChange($event)\">\n  </div>\n\n  <div class=\"form-group\"> \n      <h3>Testmotional</h3>\n  </div>\n  <div class=\"form-group\"> \n      <textarea style=\"width:100%; height: 100px\" class=\"form-control\" [(ngModel)] = \"testmotional\"></textarea>\n  </div>\n  <div class=\"form-group\" align=\"center\"> \n      <input type = \"button\" width = \"500\" class= \"btn btn-primary\" value = \"Change Site\" style=\"width:300px\" (click)=\"onChangeSite()\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-site/manage-site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageSiteComponent = (function () {
    function ManageSiteComponent(authService) {
        this.authService = authService;
    }
    ManageSiteComponent.prototype.ngOnInit = function () {
    };
    ManageSiteComponent.prototype.onChangeSite = function () {
        var uploadData = {
            emailorphone: this.authService.getLoggedInUser().email,
            video: this.videofile,
            testmotional: this.testmotional
        };
        this.authService.uploadVideo(uploadData).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Uploaded");
            }
            else {
                alert("Try Again");
            }
        });
    };
    ManageSiteComponent.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        this.videofile = files[0];
        console.log(this.videofile);
    };
    ManageSiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-site',
            template: __webpack_require__("../../../../../src/app/manage-site/manage-site.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-site/manage-site.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ManageSiteComponent);
    return ManageSiteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageUserComponent = (function () {
    function ManageUserComponent() {
    }
    ManageUserComponent.prototype.ngOnInit = function () {
    };
    ManageUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-user',
            template: __webpack_require__("../../../../../src/app/manage-user/manage-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-user/manage-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager-login/manager-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager-login/manager-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px;\">\n  <form (submit)=\"onManagerLoginSubmit()\">\n    <div class=\"form-group\" align=\"center\">\n    <img src=\"assets/logomanager.png\" width=\"100px\">\n      <!-- <h3>Bigger Logo Goes Here</h3> -->\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"username\" name = \"username\" class=\"form-control\" style=\"width:300px\" placeholder=\"Email Address\">\n    </div> \n    <div class=\"form-group\" align=\"center\"> \n      <input type = \"password\" [(ngModel)] = \"password\" name = \"password\" class=\"form-control\" style=\"width:300px\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\" align=\"center\"> \n      <input type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"ManagerLogin\" style=\"width:300px\">\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manager-login/manager-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FlashMessagesService } from 'angular2-flash-messages';
var ManagerLoginComponent = (function () {
    function ManagerLoginComponent(authService, router
        // private flashMessage:FlashMessagesService
    ) {
        this.authService = authService;
        this.router = router;
    }
    ManagerLoginComponent.prototype.ngOnInit = function () {
        // if(this.authService.loggedIn() == true)
        //   this.router.navigate(['kchart']);
    };
    ManagerLoginComponent.prototype.onManagerLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateManager(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now logged in',{cssClass : 'alert-success', timeout: 2000});
                _this.router.navigate(['']);
            }
            else {
                // this.flashMessage.show(data.msg, {cssClass : 'alert-danger', timeout: 2000});
                alert("Failed");
                _this.router.navigate(['login']);
            }
        });
    };
    ManagerLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-login',
            template: __webpack_require__("../../../../../src/app/manager-login/manager-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager-login/manager-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]
            // private flashMessage:FlashMessagesService
        ])
    ], ManagerLoginComponent);
    return ManagerLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager-register/manager-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager-register/manager-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px;\" align = \"center\">\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"name\" name = \"name\" style=\"width:400px\" class=\"form-control\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"username\" name = \"username\" style=\"width:400px\" class=\"form-control\" placeholder=\"User Name\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"email\" name = \"email\" style=\"width:400px\" class=\"form-control\" placeholder=\"Email Address\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"password\" [(ngModel)] = \"password\" name = \"password\" style=\"width:400px\" class=\"form-control\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type= \"submit\" class=\"btn btn-primary\" value= \"ManagerRegister\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manager-register/manager-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FlashMessagesService } from 'angular2-flash-messages';

var ManagerRegisterComponent = (function () {
    function ManagerRegisterComponent(validateService, 
        // private flashMessage:FlashMessagesService,
        authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    ManagerRegisterComponent.prototype.ngOnInit = function () {
    };
    ManagerRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessage.show('Please fill in all fields', {cssClass : 'alert-danger', timeout:3000});
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // this.flashMessage.show('Please use a valid email', {cssClass : 'alert-danger', timeout:3000});
            return false;
        }
        //Register User
        this.authService.registerManager(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                // this.flashMessage.show('You are now registered and can log in', {cssClass : 'alert-danger', timeout:3000});
                _this.router.navigate(['/login']);
            }
            else {
                // this.flashMessage.show('Something went wrong', {cssClass : 'alert-danger', timeout:3000});
                _this.router.navigate(['/register']);
            }
        });
    };
    ManagerRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-register',
            template: __webpack_require__("../../../../../src/app/manager-register/manager-register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager-register/manager-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ManagerRegisterComponent);
    return ManagerRegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #menu {\n    background : #47475C;\n}\n#menu a {\n    color : #eeeaea;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse\" id = \"menu\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/logo.png\" style=\"height: 100%\"/></a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/kchart']\">K-Chart</a></li> -->\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/manageuser']\">Manage User</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/managesite']\">Manage Site</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/about']\">About US</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/profile']\" style=\"color: chocolate\">{{this.authService.getLoggedInUser().name}}</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click) = \"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FlashMessagesService } from 'angular2-flash-messages';
var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // username : any;
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // this.flashMessage.show('You are logged out', { cssClass:'alert-success', tiemout: 1000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//declare var AuthGuard: any;
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerManager = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/manager/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateManager = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/manager/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.uploadVideo = function (uploadData) {
        console.log("Upload Video");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', undefined);
        var formData = new FormData();
        formData.append("video", uploadData.video);
        formData.append("emailorphone", uploadData.emailorphone);
        formData.append("testmotional", uploadData.testmotional);
        return this.http.post('http://localhost:3000/user/uploadVideo', formData)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getVideo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/getVideo', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getLoggedInUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/getjson.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetjsonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetjsonService = (function () {
    function GetjsonService(http) {
        this.http = http;
    }
    GetjsonService.prototype.getJsonData = function () {
        var url = "/assets/data.json";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    GetjsonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetjsonService);
    return GetjsonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map