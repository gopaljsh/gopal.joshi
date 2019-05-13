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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\np {\r\n    color: #616161;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjNjE2MTYxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi! I'm Gopal Joshi</h1>\r\n\r\n<p>\r\n    A Front-end developer with over 9 years of experiences in a wide range of disciplines. Currently shaping the digital user experience at Gatewaytechnolabs.\r\n</p>\r\n\r\n<p>\r\n    My journey as a UI/UX designer started after graduation for Digital communication, design and media.This has helped me to widen my range of knowledge and gather experiences through various disciplines, such as front-end development, HTML development, javascript, HTML-javascript animations and many more. Fast forward few years, I’m now focusing on font-end development using angular, node, express, javascript, jquery, typescript, html, css and sass. I also do UI/UX design for web and mobile application.  \r\n</p>\r\n\r\n<p>\r\n    I have also done angular, node, express, mondodb and typescript certification from Udemy.\r\n</p>\r\n<p>\r\n    My work is something I do with lot of honesty, appetite and commitment. Over the past years I had the opportunity to drive and do hands-on work for some amazing brands from all over the world. I also got opportunity to travel onsite and explore some countries like Oman and Sweden.\r\n</p>\r\n<p>&nbsp;</p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h4>Experience summary</h4>\r\n        <hr>\r\n        <ul>\r\n            <li>\r\n                5+ years of experience working in a corporate environment as a front-end UI/Web developer. Strong technical skills in complex web application development including web-based applications.\r\n            </li>\r\n            <li>\r\n                Experience developing highly interactive web applications utilizing JavaScript, HTML5, CSS, JSON, Angular JS 1.5 & 4, and Bootstrap. \r\n            </li>\r\n            <li>\r\n                Extensive experience in UI web applications using HTML5, CSS3, JavaScript, jQuery, JSON, Twitter Bootstrap, Angular JS. \r\n            </li>\r\n            <li>\r\n                Good Experience in developing the Single Page Applications using AngularJS.\r\n            </li>\r\n            <li>\r\n                Experience on working with Custom Directives, Controllers, Services, filters modules of AngularJS.\r\n            </li>\r\n            <li>\r\n                Experienced in designing wireframes, prototypes in Invision tool, information architecture, navigation, visual elements and interface based on usability principles.\r\n            </li>\r\n            <li>\r\n                Worked in various version control systems – SVN and GIT.\r\n            </li>\r\n            <li>\r\n                Worked extensively in Agile Development process.\r\n            </li>\r\n            <li>\r\n                Also have onsite experience of Oman and Sweden.\r\n            </li>\r\n            <li>\r\n                Have created demo project in angular4, for auth, login and database have used google firebase database service, it is just recipe and shopping list demo application. I have created individual module, route and service just to increase performance of app. Please have look at give below link for source files.\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _resume_resume_create_resume_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/resume-create/resume-create.component */ "./src/app/resume/resume-create/resume-create.component.ts");
/* harmony import */ var _post_post_single_post_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post-single/post-single.component */ "./src/app/post/post-single/post-single.component.ts");
/* harmony import */ var _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagenotfound/page-not-found.component */ "./src/app/pagenotfound/page-not-found.component.ts");














var routes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'blog', component: _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"] },
    { path: 'resume/create', component: _resume_resume_create_resume_create_component__WEBPACK_IMPORTED_MODULE_11__["ResumeCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'create', component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'edit/:postId', component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'post/:singleId', component: _post_post_single_post_single_component__WEBPACK_IMPORTED_MODULE_12__["PostSingleComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '**', component: _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
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

module.exports = ".content-wrapper {\r\n  padding: 50px;\r\n  margin-left: 400px;\r\n  background: #fff;\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* sidebar css start */\r\n\r\n.sidebar-left{\r\n  width: 300px;\r\n  background:#f0262a;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100vh;\r\n}\r\n\r\n.user-info{\r\n  display: block;\r\n  padding: 10px 23px;\r\n}\r\n\r\n.personal-info {\r\n  display: block;\r\n}\r\n\r\n.personal-info .user-name {\r\n  display: block;\r\n  color:white;\r\n  font-family: 'Oswald', sans-serif;\r\n  font-size: 30px;\r\n}\r\n\r\n.personal-info .user-post {\r\n  color:white;\r\n}\r\n\r\n.user-social-media {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.user-social-media ul {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.user-social-media ul li {\r\n  display: inline-block;\r\n}\r\n\r\n.user-social-media ul li a {\r\n  color: white;\r\n  display: block;\r\n  margin-right: 10px;\r\n  font-size: 24px;\r\n}\r\n\r\n.contact-info {\r\n  display: block;\r\n}\r\n\r\n.contact-info ul {\r\n  display: block;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.contact-info ul li {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* sidebar css ends */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsT0FBTztFQUNQLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUdELHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIHNpZGViYXIgY3NzIHN0YXJ0ICovXHJcbi5zaWRlYmFyLWxlZnR7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6I2YwMjYyYTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnVzZXItaW5mb3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDIzcHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8gLnVzZXItbmFtZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8gLnVzZXItcG9zdCB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi51c2VyLXNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnVzZXItc29jaWFsLW1lZGlhIHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXItc29jaWFsLW1lZGlhIHVsIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi51c2VyLXNvY2lhbC1tZWRpYSB1bCBsaSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gdWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIHVsIGxpIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIHNpZGViYXIgY3NzIGVuZHMgKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \r\n<!-- <app-banner></app-banner> -->\r\n<div class=\"sidebar-left\">\r\n  <div class=\"profile-img\">\r\n    <img src=\"./assets/images/logo.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"user-info\">\r\n    <div class=\"personal-info\">\r\n        <span class=\"user-name\">Gopal Joshi</span>\r\n        <span class=\"user-post\">Sr. Front-End Developer</span>\r\n    </div>\r\n    <div class=\"user-social-media\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://www.facebook.com/gopal.joshi.5477\" target=\"blank\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://wa.me/919974622377\" target=\"blank\">\r\n                    <i class=\"fab fa-whatsapp\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.linkedin.com/in/gopal-joshi-963420109/\" target=\"blank\">\r\n                    <i class=\"fab fa-linkedin\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <hr>\r\n    <div class=\"contact-info\">\r\n        <ul>\r\n            <li>\r\n                <span style=\"margin-left: 3px;\"><i class=\"fas fa-mobile-alt\"></i></span> &nbsp; 9974622377\r\n            </li>\r\n            <li>\r\n                <span><i class=\"far fa-envelope\"></i></span> &nbsp; gopaljsh98@gmail.com\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"content-wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-bootstrap.module */ "./src/app/ngx-bootstrap.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _post_post_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post.module */ "./src/app/post/post.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _resume_resume_create_resume_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resume/resume-create/resume-create.component */ "./src/app/resume/resume-create/resume-create.component.ts");
/* harmony import */ var _post_post_single_post_single_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post/post-single/post-single.component */ "./src/app/post/post-single/post-single.component.ts");
/* harmony import */ var _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pagenotfound/page-not-found.component */ "./src/app/pagenotfound/page-not-found.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_17__["ResumeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _resume_resume_create_resume_create_component__WEBPACK_IMPORTED_MODULE_19__["ResumeCreateComponent"],
                _post_post_single_post_single_component__WEBPACK_IMPORTED_MODULE_20__["PostSingleComponent"],
                _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _post_post_module__WEBPACK_IMPORTED_MODULE_14__["PostModule"],
                _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getStatus();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceComponent", function() { return AuthServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user/';
var AuthServiceComponent = /** @class */ (function () {
    function AuthServiceComponent(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authServiceListner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthServiceComponent.prototype.getToken = function () {
        return this.token;
    };
    AuthServiceComponent.prototype.getStatus = function () {
        return this.isAuthenticated;
    };
    AuthServiceComponent.prototype.getUserId = function () {
        return this.userId;
    };
    AuthServiceComponent.prototype.getAuthStatus = function () {
        return this.authServiceListner.asObservable();
    };
    AuthServiceComponent.prototype.createUser = function (email, password) {
        var authData = {
            email: email,
            password: password
        };
        this.http.post(BACKEND_URL + 'signup', authData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthServiceComponent.prototype.loginUser = function (email, password) {
        var _this = this;
        var authData = {
            email: email,
            password: password
        };
        this.http.post(BACKEND_URL + 'login', authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expirationIn = response.expirationIn;
                _this.tokenTimer = setTimeout(function () {
                    _this.logoutUser();
                }, expirationIn * 1000);
                _this.userId = response.userId;
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expirationIn * 1000);
                _this.saveAuthData(token, expirationDate, _this.userId);
                _this.isAuthenticated = true;
                _this.authServiceListner.next(true);
                _this.router.navigate(['/']);
            }
        });
    };
    AuthServiceComponent.prototype.logoutUser = function () {
        this.token = null;
        this.isAuthenticated = false;
        clearTimeout(this.tokenTimer);
        this.authServiceListner.next(false);
        this.userId = null;
        this.clearAuthData();
        this.router.navigate(['/login']);
    };
    AuthServiceComponent.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authServiceListner.next(true);
        }
    };
    AuthServiceComponent.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.logoutTimer = setTimeout(function () {
            _this.logoutUser();
        }, duration * 1000);
    };
    AuthServiceComponent.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    };
    AuthServiceComponent.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
    };
    AuthServiceComponent.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expirationDate');
        var userId = localStorage.getItem('userId');
        if (!token && !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    AuthServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthServiceComponent);
    return AuthServiceComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\r\n<div class=\"container mt-5\" *ngIf=\"!isLoading\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n              <h5 class=\"card-title\">User login</h5>\r\n              <p class=\"card-text\"><input type=\"email\" name=\"email\" ngModel #emailInput=\"ngModel\" class=\"form-control\" placeholder=\"Email\" required email /></p>\r\n              <p class=\"card-text\"><input type=\"password\" name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"form-control\" placeholder=\"Password\" required /></p>\r\n              <button type=\"submit\" class=\"card-link\">Login</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.loginUser(form.value.email, form.value.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\r\n<div class=\"container mt-5\" *ngIf=\"!isLoading\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\">\r\n              <h5 class=\"card-title\">User login</h5>\r\n              <p class=\"card-text\"><input type=\"email\" name=\"email\" ngModel #emailInput=\"ngModel\" class=\"form-control\" placeholder=\"Email\" required email /></p>\r\n              <p class=\"card-text\"><input type=\"password\" name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"form-control\" placeholder=\"Password\" required /></p>\r\n              <button type=\"submit\" class=\"card-link\">Submit</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignUpComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\r\n  background: #333;\r\n  color: white\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron jumbotron-fluid banner\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Technical World !</h1>\r\n    <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        })
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4 text-center\">\r\n    <h4><i class=\"fas fa-phone-square\"></i></h4>\r\n    <h4>Phone</h4>\r\n    <p class=\"mt-1\">+91 7990942098</p>\r\n  </div>\r\n  <div class=\"col-sm-4 text-center\">\r\n    <h4><i class=\"fas fa-envelope-open-text\"></i></h4>\r\n    <h4>Email</h4>\r\n    <p class=\"mt-1\">gopaljsh98@gmail.com</p>\r\n  </div>\r\n  <div class=\"col-sm-4 text-center\">\r\n    <h4><i class=\"fas fa-mobile-alt\"></i></h4>\r\n    <h4>Social Media</h4>\r\n    <h4 class=\"mt-1\"><i class=\"fab fa-facebook-square\"></i> &nbsp; <i class=\"fab fa-skype\"></i> &nbsp; <i class=\"fab fa-linkedin\"></i></h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html")
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");







var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, modalService) {
        this.authService = authService;
        this.modalService = modalService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorMsg = 'A unknown error occured';
            if (error) {
                errorMsg = error.error.message;
            }
            var initialState = {
                list: [
                    errorMsg
                ]
            };
            _this.bsModalRef = _this.modalService.show(_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], { initialState: initialState });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceComponent"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-list {\r\n  padding-left: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtbGlzdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <ul *ngIf=\"list.length\" class=\"message-list\">\r\n    <li *ngFor=\"let item of list\">{{item}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.title = 'Error';
        this.list = [];
    }
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-nav {\r\n    position: fixed;\r\n    left: 300px;\r\n    background: #e6e7e7;\r\n    width: 100px;\r\n    top: 0;\r\n    height: 100vh;\r\n    box-shadow: -4px 0 3px rgba(0,0,0,0.5);\r\n    z-index: 1;\r\n}\r\n\r\n.main-nav ul {\r\n    list-style-type: none;\r\n    padding: 30px 0;\r\n}\r\n\r\n.main-nav ul li {\r\n    display: block;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.main-nav ul li a { \r\n    display: block;\r\n    text-align: center;\r\n    color: #93989c;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-nav ul li a.active { \r\n    color: black;\r\n}\r\n\r\n.main-nav ul li a:hover { \r\n    color: #515050;\r\n    text-decoration: none;\r\n}\r\n\r\n.main-nav ul li a .nav-icon {\r\n    display: block;\r\n    font-size: 25px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLE9BQU87SUFDUCxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7Q0FFbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlN2U3O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMCAzcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1haW4tbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG5cclxuLm1haW4tbmF2IHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1haW4tbmF2IHVsIGxpIGEgeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5Mzk4OWM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW5hdiB1bCBsaSBhLmFjdGl2ZSB7IFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWFpbi1uYXYgdWwgbGkgYTpob3ZlciB7IFxyXG4gICAgY29sb3I6ICM1MTUwNTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluLW5hdiB1bCBsaSBhIC5uYXYtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- As a link -->\r\n<!-- <nav class=\"navbar navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">MyMessages</a>\r\n  <div class=\"mr-right\">\r\n    <a class=\"navbar-item\" routerLink=\"/\" routerLinkActive=\"active\" *ngIf=\"userisAuthenticated\">List</a> &nbsp;\r\n    <a class=\"navbar-item\" routerLink=\"/create\" routerLinkActive=\"active\" *ngIf=\"userisAuthenticated\">Create</a> &nbsp;\r\n    <a class=\"navbar-item\" routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!userisAuthenticated\">Login</a> &nbsp;\r\n    <a class=\"navbar-item\" routerLink=\"/signup\" routerLinkActive=\"active\" *ngIf=\"!userisAuthenticated\">Signup</a>\r\n    <button class=\"navbar-item\" (click)=\"onLogout()\" *ngIf=\"userisAuthenticated\">Logout</button>\r\n  </div>\r\n</nav> -->\r\n\r\n<div class=\"main-nav\">\r\n  <ul>\r\n    <li>\r\n      <a routerLink='/' routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\r\n        true}\">\r\n        <span class=\"nav-icon\">\r\n            <i class=\"fas fa-user-tie\"></i>\r\n        </span>\r\n        About Me\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink='/blog' routerLinkActive=\"active\">\r\n        <span class=\"nav-icon\">\r\n            <i class=\"fas fa-globe-asia\"></i>\r\n        </span>\r\n        Blog\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink='/resume' routerLinkActive=\"active\">\r\n        <span class=\"nav-icon\">\r\n          <i class=\"far fa-file\"></i>\r\n        </span>\r\n        Resume\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink='/contact' routerLinkActive=\"active\">\r\n        <span class=\"nav-icon\">\r\n            <i class=\"far fa-envelope\"></i>\r\n        </span>\r\n        Contact\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"userisAuthenticated\">\r\n      <a (click)=\"onLogout()\">\r\n        <span class=\"nav-icon\">\r\n          <i class=\"fas fa-sign-out-alt\"></i>\r\n        </span>\r\n        Logout\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userisAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userisAuthenticated = this.authService.getStatus();
        this.userAuthSubscription = this.authService.getAuthStatus()
            .subscribe(function (isAuthenticated) {
            _this.userisAuthenticated = isAuthenticated;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userAuthSubscription.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ngx-bootstrap.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ngx-bootstrap.module.ts ***!
  \*****************************************/
/*! exports provided: NgxBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var NgxBootstrapModule = /** @class */ (function () {
    function NgxBootstrapModule() {
    }
    NgxBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
            ]
        })
    ], NgxBootstrapModule);
    return NgxBootstrapModule;
}());



/***/ }),

/***/ "./src/app/pagenotfound/page-not-found.component.html":
/*!************************************************************!*\
  !*** ./src/app/pagenotfound/page-not-found.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h1>Page not found</h1>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/page-not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/page-not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pagenotfound/page-not-found.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/post/post-create/post-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ImageHiddenInput {\r\n  visibility: hidden;\r\n}\r\n.image-preview {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.image-preview > img {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkltYWdlSGlkZGVuSW5wdXQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmltYWdlLXByZXZpZXcgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\r\n<div class=\"container mt-5\" *ngIf=\"!isLoading\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form (submit)=\"onAddPost()\" [formGroup]=\"form\">\r\n              <h5 class=\"card-title\">Write New Post</h5>\r\n              <p class=\"card-text\"><input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Post title\" /></p>\r\n              <p class=\"card-text\"><ckeditor formControlName=\"content\"\r\n                #myckeditor\r\n                [config]='config'\r\n                debounce=\"500\"\r\n                >\r\n      </ckeditor></p>\r\n              <p class=\"card-text\"><input type=\"text\" class=\"form-control\" formControlName=\"image\" placeholder=\"Image URL\" /></p>\r\n              <button type=\"submit\" class=\"card-link\">Save Post</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.ts ***!
  \***********************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/post/post.service.ts");






var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.mode = 'create';
        this.isLoading = false;
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postService.getPost(_this.postId)
                    .subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        creator: postData.creator
                    };
                    _this.form.setValue({
                        'title': _this.post.title,
                        'content': _this.post.content,
                        'image': _this.post.imagePath
                    });
                    _this.imagePreview = _this.post.imagePath;
                });
            }
            else {
                _this.mode = 'create';
                _this.postId = null;
            }
        });
        this.config = {
            height: 200,
            toolbarGroups: [
                { name: 'document', groups: ['mode'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'links' },
                { name: 'insert' },
                '/',
                { name: 'styles' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'about' }
            ],
            extraPlugins: 'divarea'
        };
    };
    PostCreateComponent.prototype.onAddPost = function () {
        this.isLoading = true;
        if (this.form.invalid) {
            return;
        }
        if (this.mode === 'create') {
            this.postService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postService.updatedPost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
            this.isLoading = false;
        }
        this.form.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myckeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorComponent"])
    ], PostCreateComponent.prototype, "myCKeditor", void 0);
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/post/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/post/post-create/post-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_5__["PostServiceComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/post/post-list/post-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\r\n  background: #333;\r\n  color: white\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiB3aGl0ZVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/post/post-list/post-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\r\n<div class=\"container\" *ngIf=\"posts.length > 0 && !isLoading\">\r\n  <div class=\"row\" *ngIf=\"userIsAuthenticated\">\r\n    <div class=\"col-sm-12 text-right\"><button class=\"btn btn-success\" routerLink=\"/create\"><i class=\"fas fa-plus\"></i> Add blog</button></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 mt-3\" *ngFor=\"let post of posts\">\r\n      <div class=\"card\">\r\n        <img [src]=\"post.imagePath\" class=\"card-img-top\" [alt]=\"post.title\" />\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{ post.title }}</h5>\r\n          <!-- <p class=\"card-text\" [innerHtml]=\"post.content\">{{ post.content | slice:0:90 }} <span *ngIf=\"post.content.length > 30\">...</span></p> -->\r\n          <p class=\"card-text\" [innerHtml]=\"post.content\"></p>\r\n          <a [routerLink]=\"['/post', post.id]\">Read more</a>\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/edit', post.id]\" *ngIf=\"userIsAuthenticated && userId === post.creator\">Edit</a>&nbsp;\r\n          <button class=\"btn btn-danger\" (click)=\"onDelete(post.id)\" *ngIf=\"userIsAuthenticated && userId === post.creator\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-sm-8\">\r\n        <pagination [totalItems]=\"totalPosts\" [itemsPerPage]=\"postPerPage\" [rotate]=\"rotate\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" [maxSize]=\"5\"></pagination>\r\n    </div>\r\n    <div class=\"col-sm-4 text-right\">{{ numberOfPosts * currentPage }} of {{ totalPosts }}</div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"posts.length <= 0 && !isLoading\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"alert alert-secondary\">\r\n            No post yet !\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post-list/post-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.ts ***!
  \*******************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post/post.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var PostListComponent = /** @class */ (function () {
    function PostListComponent(PostService, authService) {
        this.PostService = PostService;
        this.authService = authService;
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postPerPage = 5;
        this.currentPage = 1;
        this.userIsAuthenticated = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        this.PostService.getPosts(this.postPerPage, this.currentPage);
        this.postsSub = this.PostService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
            _this.numberOfPosts = _this.posts.length;
        });
        this.userIsAuthenticated = this.authService.getStatus();
        this.authStatusSub = this.authService.getAuthStatus()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.PostService.deletePost(postId)
            .subscribe(function () {
            _this.PostService.getPosts(_this.postPerPage, _this.currentPage);
        });
    };
    PostListComponent.prototype.pageChanged = function (pageData) {
        this.currentPage = pageData.page;
        this.PostService.getPosts(this.postPerPage, this.currentPage);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/post/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/post/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostServiceComponent"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceComponent"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/post/post-single/post-single.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/post-single/post-single.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-display {\r\n  display: block;\r\n  height: 400px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.post-display > img {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.post-display .post-title {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background: rgba(0,0,0,0.5);\r\n  color: white;\r\n  font-size: 20px;\r\n  padding: 15px;\r\n}\r\n\r\n.post-content {\r\n  display: block;\r\n  margin-top: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LXNpbmdsZS9wb3N0LXNpbmdsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LXNpbmdsZS9wb3N0LXNpbmdsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvc3QtZGlzcGxheSA+IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucG9zdC1kaXNwbGF5IC5wb3N0LXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnBvc3QtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/post/post-single/post-single.component.html":
/*!*************************************************************!*\
  !*** ./src/app/post/post-single/post-single.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\r\n<div class=\"container\">\r\n  <div class=\"row\" *ngIf=\"post && !isLoading\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"post-display\">\r\n        <img [src]=\"post.imagePath\" alt=\"\" >\r\n        <div class=\"post-title\">\r\n            {{ post.title }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"post-content\" [innerHTML]=\"post.content\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post-single/post-single.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/post-single/post-single.component.ts ***!
  \***********************************************************/
/*! exports provided: PostSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSingleComponent", function() { return PostSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post/post.service.ts");




var PostSingleComponent = /** @class */ (function () {
    function PostSingleComponent(route, postService) {
        this.route = route;
        this.postService = postService;
        this.isLoading = false;
    }
    PostSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('singleId')) {
                _this.postId = paramMap.get('singleId');
                _this.isLoading = true;
                _this.postSub = _this.postService.getPost(_this.postId)
                    .subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        creator: postData.creator
                    };
                });
            }
        });
    };
    PostSingleComponent.prototype.ngOnDestroy = function () {
        this.postSub.unsubscribe();
    };
    PostSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-single',
            template: __webpack_require__(/*! ./post-single.component.html */ "./src/app/post/post-single/post-single.component.html"),
            styles: [__webpack_require__(/*! ./post-single.component.css */ "./src/app/post/post-single/post-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _post_service__WEBPACK_IMPORTED_MODULE_3__["PostServiceComponent"]])
    ], PostSingleComponent);
    return PostSingleComponent;
}());



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ngx-bootstrap.module */ "./src/app/ngx-bootstrap.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");









var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["NgxBootstrapModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"]
            ]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "./src/app/post/post.service.ts":
/*!**************************************!*\
  !*** ./src/app/post/post.service.ts ***!
  \**************************************/
/*! exports provided: PostServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceComponent", function() { return PostServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/posts/';
var PostServiceComponent = /** @class */ (function () {
    function PostServiceComponent(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PostServiceComponent.prototype.getPosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pageSize=" + postsPerPage + "&page=" + currentPage;
        this.http.get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator
                    };
                }), maxPosts: postData.maxPosts };
        }))
            .subscribe(function (transformedData) {
            _this.posts = transformedData.posts;
            _this.postUpdated.next({ posts: _this.posts.slice(), postCount: transformedData.maxPosts });
        });
    };
    PostServiceComponent.prototype.getPostUpdateListener = function () {
        return this.postUpdated.asObservable();
    };
    PostServiceComponent.prototype.getPost = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    PostServiceComponent.prototype.addPost = function (title, content, image) {
        var _this = this;
        var postData = {
            'title': title,
            'content': content,
            'imagePath': image
        };
        this.http.post(BACKEND_URL, postData)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
        });
    };
    PostServiceComponent.prototype.updatedPost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof (image) === 'object') {
            postData = new FormData();
            postData.append('id', id);
            postData.append('title', title);
            postData.append('content', content);
            postData.append('image', image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image,
                creator: null
            };
        }
        this.http.put(BACKEND_URL + id, postData)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
        });
    };
    PostServiceComponent.prototype.deletePost = function (postId) {
        return this.http.delete(BACKEND_URL + postId);
    };
    PostServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PostServiceComponent);
    return PostServiceComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume-create/resume-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/resume/resume-create/resume-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span> -->\r\n<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form (submit)=\"onSubmit(myForm)\" #myForm='ngForm'>\r\n            <h5 class=\"card-title\">Write your resume</h5>\r\n            <ckeditor [(ngModel)]=\"mycontent\"\r\n            #myckeditor\r\n            name=\"myckeditor\"\r\n            required\r\n            debounce=\"500\"\r\n            >\r\n\t</ckeditor>\r\n            <button type=\"submit\" class=\"card-link mt-3\">Save Resume</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\" [innerHTML]=\"mycontent\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/resume/resume-create/resume-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resume/resume-create/resume-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResumeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeCreateComponent", function() { return ResumeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume.service */ "./src/app/resume/resume.service.ts");




var ResumeCreateComponent = /** @class */ (function () {
    function ResumeCreateComponent(resumeService) {
        this.resumeService = resumeService;
        this.mycontent = '<p>This is the ckeditor content first text</p>';
    }
    ResumeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resumeSub = this.resumeService.getResume()
            .subscribe(function (resumeContent) {
            if (!resumeContent.resume) {
                _this.id = null;
            }
            else {
                _this.mycontent = resumeContent.resume[0].resumedata;
                _this.id = resumeContent.resume[0]._id;
            }
        });
        this.myCKeditor.config = {
            height: 300,
            toolbarGroups: [
                { name: 'document', groups: ['mode'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'links' },
                { name: 'insert' },
                '/',
                { name: 'styles' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'about' }
            ],
            extraPlugins: 'divarea'
        };
    };
    ResumeCreateComponent.prototype.onSubmit = function (form) {
        if (form.invalid) {
            return;
        }
        if (!this.id) {
            this.resumeService.postResume(form.value.myckeditor);
        }
        else {
            this.resumeService.updateResume(form.value.myckeditor, this.id);
        }
        form.reset();
    };
    ResumeCreateComponent.prototype.ngOnDestroy = function () {
        this.resumeSub.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myckeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2__["CKEditorComponent"])
    ], ResumeCreateComponent.prototype, "myCKeditor", void 0);
    ResumeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume-create',
            template: __webpack_require__(/*! ./resume-create.component.html */ "./src/app/resume/resume-create/resume-create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resume_service__WEBPACK_IMPORTED_MODULE_3__["ResumeService"]])
    ], ResumeCreateComponent);
    return ResumeCreateComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.resume-table {\r\n  width: 100%;\r\n  border: 1px solid #dcdcdc;\r\n  margin: 15px 0;\r\n}\r\ntable.resume-table > tbody > tr > td {\r\n  border: 2px dotted #dcdcdc;\r\n  padding: 10px;\r\n  vertical-align: top;\r\n}\r\ntable.resume-table > tbody > tr > td:first-child {\r\n  font-weight: bold;\r\n  width: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLnJlc3VtZS10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG50YWJsZS5yZXN1bWUtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIGJvcmRlcjogMnB4IGRvdHRlZCAjZGNkY2RjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG50YWJsZS5yZXN1bWUtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHtml]=\"displayResume\"></div>\r\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.service */ "./src/app/resume/resume.service.ts");



var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(resumeService) {
        this.resumeService = resumeService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resumeSub = this.resumeService.getResume()
            .subscribe(function (resumeContent) {
            _this.displayResume = resumeContent.resume[0].resumedata;
        });
    };
    ResumeComponent.prototype.ngOnDestroy = function () {
        this.resumeSub.unsubscribe();
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resume_service__WEBPACK_IMPORTED_MODULE_2__["ResumeService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.service.ts":
/*!******************************************!*\
  !*** ./src/app/resume/resume.service.ts ***!
  \******************************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/resume';
var ResumeService = /** @class */ (function () {
    function ResumeService(http, router) {
        this.http = http;
        this.router = router;
    }
    ResumeService.prototype.getResume = function () {
        return this.http.get(BACKEND_URL);
    };
    ResumeService.prototype.postResume = function (resumedata) {
        var _this = this;
        var resumeData = {
            resumedata: resumedata
        };
        this.http.post(BACKEND_URL + 'post', resumeData)
            .subscribe(function (res) {
            _this.router.navigate(['/resume']);
        });
    };
    ResumeService.prototype.updateResume = function (resumedata, id) {
        var _this = this;
        var updateResume = {
            resumedata: resumedata,
            _id: id
        };
        this.http.put(BACKEND_URL + '/post/' + id, updateResume)
            .subscribe(function (res) {
            _this.router.navigate(['/resume']);
        });
    };
    ResumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResumeService);
    return ResumeService;
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
    production: false,
    apiUrl: 'http://gopal-joshi.herokuapp.com/api'
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

module.exports = __webpack_require__(/*! D:\angularjs\angular-practice\angular-bootstrap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map