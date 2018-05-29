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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_getjson_service__ = __webpack_require__("../../../../../src/app/services/getjson.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_phoneverify_service__ = __webpack_require__("../../../../../src/app/services/phoneverify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_kchart_service__ = __webpack_require__("../../../../../src/app/services/kchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__kchart_kchart_component__ = __webpack_require__("../../../../../src/app/kchart/kchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Service










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */] },
    { path: 'kchart', component: __WEBPACK_IMPORTED_MODULE_17__kchart_kchart_component__["a" /* KchartComponent */] },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_18__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__kchart_kchart_component__["a" /* KchartComponent */],
                __WEBPACK_IMPORTED_MODULE_18__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_10__services_getjson_service__["a" /* GetjsonService */],
                __WEBPACK_IMPORTED_MODULE_12__services_phoneverify_service__["a" /* PhoneverifyService */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_13__services_kchart_service__["a" /* KchartService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px;\">\n  <form *ngIf=\"!resetPass\"(submit)=\"onSendVerifyCode()\">\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"phonenumber\" name = \"phonenumber\" class=\"form-control\" style=\"width:300px\" placeholder=\"Phone Number\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input *ngIf=\"!resend\" type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"Send Verify Code\" style=\"width:300px\">\n      <input *ngIf=\"resend\" type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"Resend Verify Code\" style=\"width:300px\">\n    </div>\n    <div *ngIf=\"resend\" class=\"form-group\" style = \"display: flex\">\n      <div align =\"right\" style=\"width:50%; margin-right: 5px;\">\n        <input type = \"text\" [(ngModel)] = \"verifycode\" name = \"verifycode\" class=\"form-control\" style=\"width:145px\" placeholder=\"Verification Code\">\n      </div>\n      <div align=\"left\" style=\"width:50%; margin-left: 5px;\">\n        <input type = \"button\" width = \"500\" class= \"btn btn-primary\" value = \"Verify\" style=\"width:145px\" (click) = \"onVerify()\">\n      </div>\n    </div>\n  </form>\n\n  <form *ngIf = \"resetPass\" (submit)=\"onResetPass()\">\n    <div class =\"form-group\" align =\"center\">\n      <input type = \"text\" [(ngModel)] = \"newpass\" name = \"newpass\" class=\"form-control\" style=\"width:300px\" placeholder=\"New Password\">\n    </div>\n\n    <div class =\"form-group\" align =\"center\">\n      <input type = \"text\" [(ngModel)] = \"confirmpass\" name = \"confirmpass\" class=\"form-control\" style=\"width:300px\" placeholder=\"Confirm Password\">\n    </div>\n\n    <div class =\"form-group\" align =\"center\">\n      <input type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"Reset Password\" style=\"width:300px\">\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_phoneverify_service__ = __webpack_require__("../../../../../src/app/services/phoneverify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService, phoneService, validateService, router
        // private flashMessage:FlashMessagesService
    ) {
        this.authService = authService;
        this.phoneService = phoneService;
        this.validateService = validateService;
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.resend = false;
        this.resetPass = false;
    };
    ForgotPasswordComponent.prototype.onSendVerifyCode = function () {
        if (this.validateService.validatePhoneNumber(this.phonenumber)) {
            this.resend = true; // Enable Resend Verify Code Button.
            this.phoneService.sendVerificationCode(this.phonenumber).subscribe(function (data) {
                if (data.success && JSON.parse(data.body)["returnstatus"] == "Success") {
                    console.log(data);
                }
                else {
                    alert(JSON.parse(data.body));
                }
            });
        }
        else {
            alert("再次检查您的电话号码");
        }
    };
    ForgotPasswordComponent.prototype.onVerify = function () {
        var _this = this;
        var phone = {
            phone: this.phonenumber,
            vcode: this.verifycode
        };
        this.authService.authenticatePhone(phone).subscribe(function (data) {
            if (data.success) {
                _this.resetPass = true;
                // this.authService.resetPassword(phone).subscribe(data1 => {
                // });
            }
            else {
                alert("Verify code not matching");
            }
        });
    };
    ForgotPasswordComponent.prototype.onResetPass = function () {
        var _this = this;
        if (this.newpass == this.confirmpass) {
            var phone = {
                phone: this.phonenumber,
                password: this.newpass
            };
            this.authService.resetPassword(phone).subscribe(function (data) {
                if (data.success) {
                    alert("Password Reset");
                    _this.router.navigate(['login']);
                }
                else {
                    alert("Password not set, input the original phone number you use");
                }
            });
        }
        else {
            alert("Password didn't match");
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_phoneverify_service__["a" /* PhoneverifyService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]
            // private flashMessage:FlashMessagesService
        ])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
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

module.exports = "<!-- <div class=\"container\"> -->\n  <div class=\"row\">\n    <video playsinline autoplay muted loop id=\"bgvid\">\n      <source src=\"{{videoPath}}\">\n      </video>\n  </div>\n  <div class=\"row center\">\n    <h3 style = \"color : red;\">Link to the Company Goes Here!</h3>\n  </div>\n  <div class=\"row\">\n    <img src = \"assets/Chart.png\"/>\n  </div>\n  <div class=\"row\" style=\"margin-top:10px; background-color:#eee\">\n    <div class=\"container testimonial\">\n      <h3 class=\"block-header\">TESTIMONIAL</h3>\n      <p class=\"paragraph\">\n          \"I absolutely LOVE Highcharts & maps, very cool! We use it for a web metrics dashboard, which is shared with internal marketing stakeholders. The tool is brilliant and the API documentation is super-helpful. I set up some basic, manual reports using Highcharts back in August 2014, and since then we make a JSON request to Adobe Analytics and pass the data back to HighCharts. It works really well!\n      </p>\n      <p class=\"paragraph\">\n          The API and the chart demos meant I could get up and running very, very quickly.\"\n      </p>\n      <div class=\"author-text-container\">\n        <p class=\"author\">Donal Phipps</p>\n        <p class=\"author-title\">Strategic Digital Analyst at GE Healthcare</p>\n      </div>\n\n      <div class=\"author-logo-container\">\n        <img src=\"/assets/avarta.png\" border=\"0\">\n        <!-- <h4>CompanyLogo</h4> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"row hs-bottom\">\n    <div class=\"container\" style=\"margin-top:30px; margin-bottom: 30px\">\n      <div class=\"col-md-5\">\n          <!-- <p>\n            <a href=\"/news\">News <i class=\"fa fa-angle-right\"></i></a>\n          </p> -->\n          \n          <a href=\"/about\">About us <i class=\"fa fa-angle-right\"></i></a>\n          <p><strong>Highsoft</strong> is the company behind the world's most popular JavaScript charting engine, Highcharts JS, and it's sister products Highstock JS, Highmaps JS, and Highcharts Cloud.</p>\n          <p>Our bootstrapped company is located in Vik i Sogn, Norway, and has 20 employees working full-time on developing, marketing, and supporting our products. Additionally, we retain 8 people offshore in various support and custom development roles. We have sold more than 45,000 licenses, and our clients include 70 of the 100 largest companies in the world.</p>\n      </div>\n      <div class=\"col-md-7\">\n        <img src = \"/assets/qrcode.jpg\"/>\n      </div>\n      <!-- <div class=\"col-md-7\">\n        <p class=\"box-header\">#Highcharts On <i class=\"fa fa-twitter\" style=\"color: #1dcaff;\"></i></p>\n        <div id=\"twitter-quotes\">\n          <div style=\"\">\n            <div class=\"tweet\">\n              <div class=\"tweet-body\">\n                <p style=\"margin-top: 0;\">My first proper corporate web-app! Learned lots about UX, mobile experience, cross browser support, error handling… <a href=\"https://t.co/YUc0cXHeZR\">https://t.co/YUc0cXHeZR</a></p>\n              </div>\n              <div class=\"tweet-footer\">\n                <a class=\"grayed\" href=\"http://twitter.com/tomewing1979\"><strong>Tom Ewing</strong>@tomewing1979</a>\n                <p class=\"grayed\">18.Jan.2018</p>\n              </div>\n            </div>\n                <div class=\"tweet\">\n              <div class=\"tweet-body\">\n                <p style=\"margin-top: 0;\">A interactive map of poverty by county in Michigan, from <a href=\"http://twitter.com/umich\">@umich</a> Poverty Solutions and a meaningful implementation o… <a href=\"https://t.co/xxA2DjeXBz\">https://t.co/xxA2DjeXBz</a></p>\n              </div>\n              <div class=\"tweet-footer\">\n                <a class=\"grayed\" href=\"http://twitter.com/umfamilymed\"><strong>U-M Family Medicine</strong>@umfamilymed</a>\n                <p class=\"grayed\">17.Jan.2018</p>\n              </div>\n            </div>\n          </div>\t\n        </div>\n        <div class=\"clearfix\"></div>\n      </div> -->\n    </div>\n  </div>\n<!-- </div> -->"

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

module.exports = "<!-- <div id = \"chart\"></div> -->\n<div id=\"chartdiv\" style = \"width: 100%; height: 500px;\">\n</div>\n<div class = \"col-xs-12 col-md-6 col-sm-6\">\n    <button class=\"btn btn-success\" (click) = \"onAdd()\"> + </button>\n    <button class=\"btn btn-danger\" (click) = \"onRemove()\"> - </button>\n    <form id=\"formdata1\">\n        <div *ngIf = \"showFlag\" id=\"chartparent\" >\n            <h4>{{svg1caption}}</h4>\n            <div id=\"chartpicdiv\" style = \"width: 100px; height: 200px;\">\n            </div>\n        </div>\n        <div id=\"tempchartdiv\" style = \"width: 100px; height: 200px;\">\n        </div>\n        <div id=\"simchartdiv\" style = \"width: 100px; height: 200px;\">\n            <img id=\"simchartimg\" style = \"width: 300px; height: 300px;\">\n        </div>\n    </form>\n</div>\n\n<div class = \"col-xs-12 col-md-6 col-sm-6\">\n    <button class=\"btn btn-success\" (click) = \"onAdd1()\"> + </button>\n    <button class=\"btn btn-danger\" (click) = \"onRemove1()\"> - </button>\n    <div *ngIf = \"showFlag1\" id=\"chartparent1\" >\n        <h4>{{svg2caption}}</h4>\n        <div id=\"chartpicdiv1\" style = \"width: 100px; height: 200px;\">\n\n        </div>\n    </div>\n    <div id=\"tempchartdiv1\" style = \"width: 100px; height: 200px;\">\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kchart/kchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KchartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_kchart_service__ = __webpack_require__("../../../../../src/app/services/kchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
    function KchartComponent(auth, http, kService) {
        this.auth = auth;
        this.http = http;
        this.kService = kService;
        this.showFlag = false;
        this.showFlag1 = false;
        this.dataProvider = [
            { "date": "2018-02-14 15:00:00", "open": 8.17, "close": 8.28, "low": 8.14, "high": 8.28 },
            { "date": "2018-02-14 14:00:00", "open": 8.01, "close": 8.17, "low": 8.0, "high": 8.25 },
            { "date": "2018-02-14 11:30:00", "open": 8.03, "close": 8.01, "low": 7.97, "high": 8.06 },
            { "date": "2018-02-14 10:30:00", "open": 7.71, "close": 8.03, "low": 7.65, "high": 8.27 },
            { "date": "2018-02-13 15:00:00", "open": 7.6, "close": 7.52, "low": 7.51, "high": 7.62 },
            { "date": "2018-02-13 14:00:00", "open": 7.68, "close": 7.6, "low": 7.57, "high": 7.72 },
            { "date": "2018-02-13 11:30:00", "open": 7.74, "close": 7.68, "low": 7.65, "high": 7.74 },
            { "date": "2018-02-13 10:30:00", "open": 7.65, "close": 7.74, "low": 7.56, "high": 7.79 },
            { "date": "2018-02-12 15:00:00", "open": 7.61, "close": 7.49, "low": 7.38, "high": 7.63 },
            { "date": "2018-02-12 14:00:00", "open": 7.57, "close": 7.61, "low": 7.55, "high": 7.63 },
            { "date": "2018-02-12 11:30:00", "open": 7.55, "close": 7.57, "low": 7.52, "high": 7.62 },
            { "date": "2018-02-12 10:30:00", "open": 7.36, "close": 7.55, "low": 7.31, "high": 7.67 }
        ];
        console.log("constructor");
    }
    KchartComponent.prototype.ngOnInit = function () {
        // let url = "/assets/data.json";
        // this.http.get(url)
        // .map(res  => res.json())
        // .subscribe(data =>{
        //   console.log("AAAAAAAA");
        //   for(let i in data){
        //     let date = new Date(data[i][0]);
        //     let datestring = this.js_yyyy_mm_dd_hh_mm_ss(data[i][0]);
        //     this.dataProvider.push({
        //       "date" : datestring,
        //       "open" : data[i][1],
        //       "low" : data[i][2],
        //       "high" : data[i][3],
        //       "close" : data[i][4]
        //     })
        //   }
        //   console.log(this.dataProvider);
        //   this.makeChart();
        // });
        this.makeChart();
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
        window.addEventListener("storage", function (e) {
            console.log("storage event fired... woohoo!");
            console.log(e);
        }, true);
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
                "valueLineBalloonEnabled": true,
                "listeners": [
                    {
                        "event": "selected",
                        "method": handleSelect
                    },
                ]
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
        // this.kchart.addListener("rendered", zoomChart);
        // this.kchart.addListener("zoomed", handleZoom);
        console.log(this.kchart.chartCursor);
        // this.kchart.chartCursor.addListener("selected", handleSelect);
        // this.kchart.zoomToIndexes(this.dataProvider.length-100, this.dataProvider.length - 1);
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
        console.log(indexarray);
        // indexarray = indexarray.sort(function(a, b){return a-b});
        // console.log(indexarray);
        for (var i in indexarray) {
            tempdata.push(this.dataProvider[indexarray[i]]);
        }
        console.log(tempdata);
        this.showFlag = true;
        this.timestamp = Date.now();
        function pad2(n) { return n < 10 ? '0' + n : n; }
        var date = new Date();
        // this.timestamp = this.js_yyyy_mm_dd_hh_mm_ss(tempdata[0]["date"])+'_'+indexarray.length;
        this.timestamp = this.js_yyyy_mm_dd_hh_mm_ss(Date.now()) + '_' + indexarray.length;
        this.loggedUser = this.auth.getLoggedInUser();
        this.userId = this.loggedUser.name;
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
        var _SELF = this;
        templatechart["export"].capture({}, function () {
            // SAVE TO PNG
            this.toSVG({ width: '100px', height: '200px' }, function (svg) {
                document.getElementById("chartpicdiv").setAttribute("style", "content: url('data:image/svg+xml; utf8," + svg + "');");
                localStorage.setItem("imagesvg1", svg);
                var file = new File([svg], this.svg1caption, { type: "image/svg+xml" });
                var uploadData = {
                    emailorphone: _SELF.loggedUser.emailorphone,
                    image: file,
                    filename: _SELF.svg1caption
                };
                _SELF.auth.uploadImage(uploadData).subscribe(function (data) {
                    if (data.success) {
                        console.log("success");
                    }
                    else {
                        console.log("failed");
                    }
                });
            });
        });
        document.getElementById("tempchartdiv").style.display = 'none';
        // Request Data to the Backend.
        var simRequestData = {};
        if (tempdata[0].date.localeCompare(tempdata[tempdata.length - 1].date)) {
            simRequestData = { 'start_date': tempdata[tempdata.length - 1].date, 'end_date': tempdata[0].date };
        }
        else {
            simRequestData = { 'start_date': tempdata[0].date, 'end_date': tempdata[tempdata.length - 1].date };
        }
        simRequestData['count'] = indexarray.length.toString();
        simRequestData['company'] = '罗顿发展';
        simRequestData['period'] = '60';
        this.kService.findSimilarchart(simRequestData).subscribe(function (data) {
            if (data.success) {
                console.log(data.body);
                document.getElementById("simchartimg").setAttribute('src', data.body);
            }
        });
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
        var loggedUser = this.auth.getLoggedInUser();
        this.userId1 = loggedUser.name;
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
        var _SELF = this;
        templatechart["export"].capture({}, function () {
            // SAVE TO PNG
            this.toSVG({}, function (svg) {
                document.getElementById("chartpicdiv1").setAttribute("style", "content: url('data:image/svg+xml; utf8," + svg + "');");
                localStorage.setItem("imagesvg2", svg);
                // this.http.post('http://localhost:3000/admin/register', )
                var file = new File([svg], this.svg2caption, { type: "image/svg+xml" });
                var uploadData = {
                    emailorphone: _SELF.loggedUser.emailorphone,
                    image: file,
                    filename: _SELF.svg2caption
                };
                _SELF.auth.uploadImage(uploadData).subscribe(function (data) {
                    if (data.success) {
                        console.log("success");
                    }
                    else {
                        console.log("failed");
                    }
                });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_kchart_service__["a" /* KchartService */]])
    ], KchartComponent);
    return KchartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px;\">\n  <form *ngIf = \"!loginType\" (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\" align=\"center\">\n    <img src=\"assets/logo.png\" width=\"100px\">\n      <!-- <h3>Bigger Logo Goes Here</h3> -->\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"emailorphone\" name = \"emailorphone\" class=\"form-control\" style=\"width:300px\" placeholder=\"Email Address/Phone Number\">\n    </div> \n    <div class=\"form-group\" align=\"center\"> \n      <input type = \"password\" [(ngModel)] = \"password\" name = \"password\" class=\"form-control\" style=\"width:300px\" placeholder=\"Password\">\n    </div>\n\n    <div class=\"form-group\" style = \"display: flex\">\n      <div align =\"right\" style=\"width:50%; margin-right: 5px;\">\n        <input type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"Login\" style=\"width:145px\">\n      </div>\n      <div align=\"left\" style=\"width:50%; margin-left: 5px;\">\n        <input type = \"button\" width = \"500\" class= \"btn btn-primary\" value = \"忘记密码\" style=\"width:145px\" (click) = \"forgotPassword()\">\n      </div>      \n    </div>\n  </form>\n  <form *ngIf = \"loginType\" (submit)=\"onPhoneLoginSubmit()\">\n\n    <div class=\"form-group\" align=\"center\">\n      <img src=\"assets/logo.png\" width=\"100px\">\n    </div>\n\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"phonenumber\" name = \"phonenumber\" class=\"form-control\" style=\"width:300px\" placeholder=\"Phone Number\">\n    </div> \n\n    <div class=\"form-group\" style = \"display: flex\">\n      <div align =\"right\" style=\"width:50%; margin-right: 5px;\">\n          <input type = \"text\" [(ngModel)] = \"verifycode\" name = \"verifycode\" class=\"form-control\" style=\"width:145px\" placeholder=\"Verification Code\">\n      </div>\n      <div *ngIf=\"!resend\" align=\"left\" style=\"width:50%; margin-left: 5px;\">\n        <input type = \"button\" width = \"500\" class= \"btn btn-primary\" value = \"Send Verify Code\" style=\"width:145px\" (click) = \"sendVerifyCode()\">\n      </div>\n      <div *ngIf=\"resend\" align=\"left\" style=\"width:50%; margin-left: 5px;\">\n        <input type = \"button\" width = \"500\" class= \"btn btn-primary\" value = \"Resend Verify Code\" style=\"width:145px\" (click) = \"sendVerifyCode()\">\n      </div>\n    </div>\n\n    <div class=\"form-group\" align=\"center\"> \n      <input type = \"submit\" width = \"500\" class= \"btn btn-primary\" value = \"Login\" style=\"width:300px\">\n    </div>\n\n  </form>\n  <div align=\"center\">\n    <input type=\"checkbox\" [(ngModel)] = \"loginType\" value=\"Login with Phone\">\n    Login with Phone(With Verify Code)\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_phoneverify_service__ = __webpack_require__("../../../../../src/app/services/phoneverify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
var LoginComponent = (function () {
    function LoginComponent(authService, phoneService, validateService, router
        // private flashMessage:FlashMessagesService
    ) {
        this.authService = authService;
        this.phoneService = phoneService;
        this.validateService = validateService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginType = false;
        this.resend = false;
        if (this.authService.loggedIn() == true)
            this.router.navigate(['kchart']);
    };
    LoginComponent.prototype.sendVerifyCode = function () {
        this.resend = true; // Enable Resend Verify Code Button.
        if (this.validateService.validatePhoneNumber(this.phonenumber)) {
            this.phoneService.sendVerificationCode(this.phonenumber).subscribe(function (data) {
                if (data.success && JSON.parse(data.body)["returnstatus"] == "Success") {
                    console.log(data);
                }
                else {
                    alert(JSON.parse(data.body));
                }
            });
        }
        else {
            alert("再次检查您的电话号码");
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            emailorphone: this.emailorphone,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['kchart']);
            }
            else {
                alert("Failed");
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent.prototype.onPhoneLoginSubmit = function () {
        var _this = this;
        var phone = {
            phone: this.phonenumber,
            vcode: this.verifycode
        };
        this.authService.authenticatePhone(phone).subscribe(function (data) {
            if (data.success) {
                _this.authService.storePhoneData(data.token, phone);
                _this.router.navigate(['kchart']);
            }
            else {
                alert("Verify code not matching");
            }
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['forgotpass']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_phoneverify_service__["a" /* PhoneverifyService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]
            // private flashMessage:FlashMessagesService
        ])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "\n<nav class=\"navbar navbar-inverse\" id = \"menu\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/logo.png\" style=\"height: 100%\"/></a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/kchart']\">K-Chart</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/about']\">About US</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/profile']\" style=\"color: chocolate\">{{this.authService.getLoggedInUser().name}}</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click) = \"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

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

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = " <div style=\"margin-top: 100px;\" align = \"center\">\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"name\" name = \"name\" style=\"width:400px\" class=\"form-control\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"username\" name = \"username\" style=\"width:400px\" class=\"form-control\" placeholder=\"User Name\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"text\" [(ngModel)] = \"emailorphone\" name = \"emailorphone\" style=\"width:400px\" class=\"form-control\" placeholder=\"Email Address/Phone Number\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type = \"password\" [(ngModel)] = \"password\" name = \"password\" style=\"width:400px\" class=\"form-control\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\" align=\"center\">\n      <input type= \"submit\" class=\"btn btn-primary\" value= \"Submit\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = (function () {
    function RegisterComponent(validateService, 
        // private flashMessage:FlashMessagesService,
        authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.emailorphone,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessage.show('Please fill in all fields', {cssClass : 'alert-danger', timeout:3000});
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email) && !this.validateService.validatePhoneNumber(user.email)) {
            alert("Invalid Email or Phone Number");
            // this.flashMessage.show('Please use a valid email', {cssClass : 'alert-danger', timeout:3000});
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
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
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
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
    AuthService.prototype.getVideo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/getVideo', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.uploadImage = function (uploadData) {
        console.log("Upload Image");
        // alert(uploadData.emailorphone);
        // alert(uploadData.filename);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', undefined);
        var formData = new FormData();
        formData.append("image", uploadData.image);
        formData.append("emailorphone", uploadData.emailorphone);
        formData.append("filename", uploadData.filename);
        console.log(formData);
        return this.http.post('http://localhost:3000/user/uploadImage', formData)
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
    AuthService.prototype.authenticatePhone = function (phone) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/authenticatebyphone', phone, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (phone) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/resetpass', phone, { headers: headers })
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
    AuthService.prototype.storePhoneData = function (token, phone) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify({ name: phone.phone }));
        this.authToken = token;
        this.phone = phone;
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

/***/ "../../../../../src/app/services/kchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
var KchartService = (function () {
    function KchartService(http) {
        this.http = http;
        this.loadToken();
    }
    KchartService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    KchartService.prototype.findSimilarchart = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // 1: open
        // 2: low
        // 3: high
        // 4: close
        console.log(data);
        return this.http.post('http://localhost:3000/user/findsimilarchart/', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    KchartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], KchartService);
    return KchartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/phoneverify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneverifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneverifyService = (function () {
    function PhoneverifyService(http) {
        this.http = http;
    }
    PhoneverifyService.prototype.sendVerificationCode = function (phoneNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/sendsms', { "phone": phoneNumber }, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PhoneverifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PhoneverifyService);
    return PhoneverifyService;
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
    ValidateService.prototype.validatePhoneNumber = function (phone) {
        if (/^\d{11}$/.test(phone))
            return true;
        else
            return false;
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