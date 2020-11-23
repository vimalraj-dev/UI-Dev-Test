(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _under_banner_under_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./under-banner/under-banner.component */ "./src/app/under-banner/under-banner.component.ts");
/* harmony import */ var _featured_stories_featured_stories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featured-stories/featured-stories.component */ "./src/app/featured-stories/featured-stories.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _inspirations_inspirations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspirations/inspirations.component */ "./src/app/inspirations/inspirations.component.ts");
/* harmony import */ var _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learn-more/learn-more.component */ "./src/app/learn-more/learn-more.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");









class AppComponent {
    constructor() {
        this.title = 'interview-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 0, consts: [[1, "container-fluid", "banner"], [1, "row"], [1, "col-md-8", "banner-left"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control"], [1, "col-md-4", "banner-right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dolor sit Amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "At iam decimum annum in spelunca iacet. Cur tantas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " regiones barbarorum pedibus obiit,tot maria transmisit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Duarum enim vitarum nobis erunt instituta capienda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Fortasse id optimum, sed ubi illud: Plus semper voluptatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-under-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-featured-stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-inspirations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-learn-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
    } }, directives: [_under_banner_under_banner_component__WEBPACK_IMPORTED_MODULE_1__["UnderBannerComponent"], _featured_stories_featured_stories_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedStoriesComponent"], _download_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _inspirations_inspirations_component__WEBPACK_IMPORTED_MODULE_5__["InspirationsComponent"], _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_6__["LearnMoreComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.banner[_ngcontent-%COMP%] {\n  background-image: url('header-bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 700px;\n  position: relative;\n  margin-bottom: 3%;\n}\n@media (max-width: 425px) {\n  .banner[_ngcontent-%COMP%] {\n    background-size: cover;\n    height: 333px;\n    margin-bottom: 6%;\n  }\n}\n.banner-left[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  padding-left: 9%;\n  padding-right: 0%;\n}\n@media (max-width: 425px) {\n  .banner-left[_ngcontent-%COMP%] {\n    bottom: 0%;\n    padding: 0% 9%;\n  }\n}\n.banner-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 58px;\n  line-height: 101.8%;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-bottom: 9%;\n}\n@media (max-width: 425px) {\n  .banner-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 98.8%;\n    color: #FFFFFF;\n    margin-bottom: 5%;\n  }\n}\n.banner-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  text-align: justify;\n  font-size: 12px;\n  line-height: 130.8%;\n  color: #FFFFFF;\n  margin-bottom: 4%;\n}\n@media (max-width: 425px) {\n  .banner-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5%;\n    font-size: 9px;\n  }\n}\n.banner-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #EF7061;\n  border: none;\n  border-radius: 4px;\n  padding: 2% 7%;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 118.8%;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.banner-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  line-height: 4.5;\n  border-radius: 0rem;\n  border: none;\n  margin-top: 9%;\n}\n@media (max-width: 425px) {\n  .banner-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    top: 161%;\n    line-height: 2;\n  }\n}\n.banner-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background-image: url('union.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n}\n.banner-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0%;\n  padding-right: 9%;\n  padding-left: 0%;\n}\n@media (max-width: 425px) {\n  .banner-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\np[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcc3R5bGVzLnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsOERBQUE7QUNDRjtBRGFBO0VBQ0ksV0FBQTtBQ1hKO0FDSkE7RUFDSSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRE9KO0FDTEk7RUFSSjtJQVNRLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VEUU47QUFDRjtBQ05BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRFNKO0FDUkk7RUFMSjtJQU1RLFVBQUE7SUFDQSxjQUFBO0VEV047QUFDRjtBQ1hJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURhUjtBQ1pRO0VBVEo7SUFVUSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RURlVjtBQUNGO0FDZkk7RUZoQkEsb0JBckJZO0VBc0JaLGtCQXJCa0I7RUFzQmxCLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFWUksaUJBQUE7QUR1QlI7QUN0QlE7RUFISjtJQUlRLGlCQUFBO0lBQ0EsY0FBQTtFRHlCVjtBQUNGO0FDekJJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUQyQlI7QUN4Qkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUQwQlI7QUN6QlE7RUFMSjtJQU1RLFNBQUE7SUFDQSxjQUFBO0VENEJWO0FBQ0Y7QUM1QlE7RUFDSSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FEOEJaO0FDNUJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUQrQko7QUM5Qkk7RUFOSjtJQU9RLGFBQUE7RURpQ047QUFDRjtBQ2pDQTtFQUNJLFlBQUE7QURvQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDcwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5iYW5uZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAzMzNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgfVxufVxuXG4uYmFubmVyLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIHBhZGRpbmctbGVmdDogOSU7XG4gIHBhZGRpbmctcmlnaHQ6IDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5iYW5uZXItbGVmdCB7XG4gICAgYm90dG9tOiAwJTtcbiAgICBwYWRkaW5nOiAwJSA5JTtcbiAgfVxufVxuLmJhbm5lci1sZWZ0IGgxIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgbGluZS1oZWlnaHQ6IDEwMS44JTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA5JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuYmFubmVyLWxlZnQgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDk4LjglO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG59XG4uYmFubmVyLWxlZnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5iYW5uZXItbGVmdCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufVxuLmJhbm5lci1sZWZ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNFRjcwNjE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyJSA3JTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTE4LjglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmJhbm5lci1sZWZ0IC5mb3JtLWNvbnRyb2wge1xuICBsaW5lLWhlaWdodDogNC41O1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDklO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5iYW5uZXItbGVmdCAuZm9ybS1jb250cm9sIHtcbiAgICB0b3A6IDE2MSU7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gIH1cbn1cbi5iYW5uZXItbGVmdCAuZm9ybS1jb250cm9sIGlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3VuaW9uLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhbm5lci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5iYW5uZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCJAdXNlICcuLi9zdHlsZXMnXHJcblxyXG4vLyBDb2RlIGZvciBiYW5uZXIgc2VjdGlvblxyXG4uYmFubmVyXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItYmcucG5nXCIpXHJcbiAgICBiYWNrZ3JvdW5kLXNpemUgOiBjb3ZlclxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQgOiBuby1yZXBlYXRcclxuICAgIGhlaWdodCA6IDcwMHB4XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlXHJcbiAgICBtYXJnaW4tYm90dG9tIDogMyVcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA6IGNvdmVyXHJcbiAgICAgICAgaGVpZ2h0IDogMzMzcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tIDogNiVcclxuXHJcbi8vIEJhbm5lciBsZWZ0IHNlY3Rpb24gICAgICAgIFxyXG4uYmFubmVyLWxlZnRcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGVcclxuICAgIGJvdHRvbSA6IDAlXHJcbiAgICBwYWRkaW5nLWxlZnQgOiA5JVxyXG4gICAgcGFkZGluZy1yaWdodCA6IDAlXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGJvdHRvbSA6IDAlXHJcbiAgICAgICAgcGFkZGluZyA6IDAlIDklXHJcbiAgICBoMVxyXG4gICAgICAgIGZvbnQtZmFtaWx5IDogcG9wcGlucyBcclxuICAgICAgICBmb250LXN0eWxlIDogbm9ybWFsXHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiBib2xkXHJcbiAgICAgICAgZm9udC1zaXplIDogNThweFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMTAxLjglXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm0gOiBjYXBpdGFsaXplXHJcbiAgICAgICAgY29sb3IgOiAjRkZGRkZGXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDklIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogUG9wcGluc1xyXG4gICAgICAgICAgICBmb250LXN0eWxlIDogbm9ybWFsXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZFxyXG4gICAgICAgICAgICBmb250LXNpemUgOiAzMHB4XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogOTguOCVcclxuICAgICAgICAgICAgY29sb3IgOiAjRkZGRkZGXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiA1JSBcclxuICAgIHBcclxuICAgICAgICBAaW5jbHVkZSBzdHlsZXMucC13aGl0ZVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOiA0JVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiA1JVxyXG4gICAgICAgICAgICBmb250LXNpemUgOiA5cHhcclxuICAgIGJ1dHRvblxyXG4gICAgICAgIGJhY2tncm91bmQgOiAjRUY3MDYxXHJcbiAgICAgICAgYm9yZGVyIDogbm9uZVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA0cHhcclxuICAgICAgICBwYWRkaW5nIDogMiUgNyVcclxuICAgICAgICBmb250LWZhbWlseSA6IFBvcHBpbnNcclxuICAgICAgICBmb250LXN0eWxlIDogbm9ybWFsXHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiBub3JtYWxcclxuICAgICAgICBmb250LXNpemUgOiAxNnB4XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxMTguOCVcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm0gOiB1cHBlcmNhc2VcclxuICAgICAgICBjb2xvciA6ICNGRkZGRkZcclxuXHJcbiAgICAvLyBzZWFyY2ggYmFyIHN0eWxlXHJcbiAgICAuZm9ybS1jb250cm9sXHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiA0LjVcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMHJlbVxyXG4gICAgICAgIGJvcmRlciA6IG5vbmVcclxuICAgICAgICBtYXJnaW4tdG9wIDogOSVcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgICAgICB0b3AgOiAxNjElXHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogMlxyXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF1cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvdW5pb24uc3ZnXCIpXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA6IGNvbnRhaW5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQgOiBuby1yZXBlYXRcclxuICAgICAgICAgICAgd2lkdGggOiAxMDAlXHJcbi8vIEJhbm5lciByaWdodCBzZWN0aW9uXHJcbi5iYW5uZXItcmlnaHRcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGVcclxuICAgIHJpZ2h0IDogMFxyXG4gICAgYm90dG9tIDogMCVcclxuICAgIHBhZGRpbmctcmlnaHQgOiA5JVxyXG4gICAgcGFkZGluZy1sZWZ0IDogMCVcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAgICBcclxucFxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _under_banner_under_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./under-banner/under-banner.component */ "./src/app/under-banner/under-banner.component.ts");
/* harmony import */ var _featured_stories_featured_stories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./featured-stories/featured-stories.component */ "./src/app/featured-stories/featured-stories.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _featured_stories_videos_featured_stories_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-stories-videos/featured-stories-videos.component */ "./src/app/featured-stories-videos/featured-stories-videos.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _inspirations_inspirations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspirations/inspirations.component */ "./src/app/inspirations/inspirations.component.ts");
/* harmony import */ var _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./learn-more/learn-more.component */ "./src/app/learn-more/learn-more.component.ts");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_12__["AnimateOnScrollModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _under_banner_under_banner_component__WEBPACK_IMPORTED_MODULE_4__["UnderBannerComponent"],
        _featured_stories_featured_stories_component__WEBPACK_IMPORTED_MODULE_5__["FeaturedStoriesComponent"],
        _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"],
        _featured_stories_videos_featured_stories_videos_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedStoriesVideosComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _inspirations_inspirations_component__WEBPACK_IMPORTED_MODULE_10__["InspirationsComponent"],
        _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_11__["LearnMoreComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_12__["AnimateOnScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _under_banner_under_banner_component__WEBPACK_IMPORTED_MODULE_4__["UnderBannerComponent"],
                    _featured_stories_featured_stories_component__WEBPACK_IMPORTED_MODULE_5__["FeaturedStoriesComponent"],
                    _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"],
                    _featured_stories_videos_featured_stories_videos_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedStoriesVideosComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _inspirations_inspirations_component__WEBPACK_IMPORTED_MODULE_10__["InspirationsComponent"],
                    _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_11__["LearnMoreComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_12__["AnimateOnScrollModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DownloadComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 18, vars: 0, consts: [[1, "container-fluid"], [1, "row", "download-app"], [1, "col-md-6", "col-12", "download-left"], ["src", "../assets/images/download-left.png"], [1, "col-md-6", "col-12", "download-right"], [1, "row"], [1, "col-md-6", "p-1", "col-6"], ["href", "https://www.apple.com/in/app-store/", "target", "_blank"], ["src", "../assets/images/app-store.png"], ["href", "https://play.google.com/store", "target", "_blank"], ["src", "../assets/images/play-store.png"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Download Our App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "At iam decimum annum in spelunca iacet. Cur tantas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " regiones barbarorum pedibus obiit, tot maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.download-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  background-color: #F8F9FA;\n  padding-top: 3%;\n  position: relative;\n}\n@media (max-width: 425px) {\n  .download-app[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .download-app[_ngcontent-%COMP%]    > .download-left[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .download-app[_ngcontent-%COMP%]    > .download-right[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.download-left[_ngcontent-%COMP%] {\n  padding-left: 16%;\n}\n@media (max-width: 425px) {\n  .download-left[_ngcontent-%COMP%] {\n    padding-left: 7%;\n  }\n}\n.download-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 375px;\n}\n.download-right[_ngcontent-%COMP%] {\n  padding-right: 15%;\n}\n@media (max-width: 425px) {\n  .download-right[_ngcontent-%COMP%] {\n    padding: 0 17%;\n  }\n}\n.download-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  margin-bottom: 5%;\n}\n@media (max-width: 425px) {\n  .download-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    text-align: center;\n  }\n}\n.download-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 130.8%;\n  color: #889399;\n  margin-bottom: 5%;\n}\n@media (max-width: 425px) {\n  .download-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n  }\n  .download-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.download-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWQvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcc3R5bGVzLnNhc3MiLCJzcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9kb3dubG9hZC9HOlxcaW50ZXJ2aWV3LXByb2plY3Qvc3JjXFxhcHBcXGRvd25sb2FkXFxkb3dubG9hZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNKQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRE9KO0FDTEk7RUFUSjtJQVVRLGVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RURRTjtFQ1BNO0lBQ0ksUUFBQTtFRFNWO0VDUk07SUFDSSxRQUFBO0VEVVY7QUFDRjtBQ1RBO0VBQ0ksaUJBQUE7QURZSjtBQ1hJO0VBRko7SUFHWSxnQkFBQTtFRGNWO0FBQ0Y7QUNkSTtFQUNJLGFBQUE7QURnQlI7QUNiQTtFQUNRLGtCQUFBO0FEZ0JSO0FDZlE7RUFGUjtJQUdZLGNBQUE7RURrQlY7QUFDRjtBQ2xCUTtFRmJKLG9CQWhCWTtFQWlCWixrQkFoQmtCO0VBaUJsQixnQkFBQTtFQXFCQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFVlEsaUJBQUE7QUR5Qlo7QUN4Qlk7RUFISjtJQUlRLGVBQUE7SUFDQSxrQkFBQTtFRDJCZDtBQUNGO0FDM0JRO0VGTEosb0JBOUJZO0VBK0JaLGtCQTlCa0I7RUErQmxCLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFRUVRLGlCQUFBO0FEa0NaO0FDakNZO0VBSEo7SUFJUSxlQUFBO0lBQ0Esa0JBQUE7RURvQ2Q7RUNuQ2M7SUFDSSxhQUFBO0VEcUNsQjtBQUNGO0FDckNRO0VBQ0ksV0FBQTtBRHVDWiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSBcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnNcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKVxuXG4kZGVmYXVsdC1mb250IDogcG9wcGluc1xuJGRlZmF1bHQtZm9udC1zdHlsZSA6IG5vcm1hbFxuXG4keHRyYXNtYWxsLXNjcmVlbiA6IDMyMHB4XG4kc21hbGwtc2NyZWVuIDogMzc1cHhcbiRtb2ItbGFyZ2UgOiA0MjVweFxuJHRhYi1zY3JlZW4gOiA3NjhweFxuJGxhcHRvcC1zbWFsbCA6IDEwMjRweFxuJGxhcHRvcC1sYXJnZSA6IDE0NDBweFxuJHh0cmFsYXJnZS1zY3JlZW4gOiAyNTYwcHhcblxuXG5oMSxoMixoMyxoNCxoNSxoNixwXG4gICAgd2lkdGggOiAxMDAlXG5cbkBtaXhpbiBkZWZhdWx0LWZvbnQtaGVhZGVyXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnRcbiAgICBmb250LXN0eWxlOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuXG5AbWl4aW4gcC13aGl0ZVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGUgOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQgOiBub3JtYWxcbiAgICB0ZXh0LWFsaWduIDoganVzdGlmeSAgICAgXG4gICAgZm9udC1zaXplIDogMTJweFxuICAgIGxpbmUtaGVpZ2h0IDogMTMwLjglXG4gICAgY29sb3IgOiAjRkZGRkZGXG5cbkBtaXhpbiBwLWdyZXlcbiAgICBmb250LWZhbWlseSA6ICRkZWZhdWx0LWZvbnRcbiAgICBmb250LXN0eWxlOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxuICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIGxpbmUtaGVpZ2h0OiAxMzAuOCVcbiAgICBjb2xvcjogIzg4OTM5OVxuXG5AbWl4aW4gaGVhZGVyMVxuICAgIEBpbmNsdWRlIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LXNpemU6IDQ1cHhcbiAgICBsaW5lLWhlaWdodDogMTI2LjglXG4gICAgY29sb3I6ICMxMTI3MzNcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRvd25sb2FkLWFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmRvd25sb2FkLWFwcCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuZG93bmxvYWQtYXBwID4gLmRvd25sb2FkLWxlZnQge1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIC5kb3dubG9hZC1hcHAgPiAuZG93bmxvYWQtcmlnaHQge1xuICAgIG9yZGVyOiAxO1xuICB9XG59XG5cbi5kb3dubG9hZC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNiU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmRvd25sb2FkLWxlZnQge1xuICAgIHBhZGRpbmctbGVmdDogNyU7XG4gIH1cbn1cbi5kb3dubG9hZC1sZWZ0IGltZyB7XG4gIGhlaWdodDogMzc1cHg7XG59XG5cbi5kb3dubG9hZC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZG93bmxvYWQtcmlnaHQge1xuICAgIHBhZGRpbmc6IDAgMTclO1xuICB9XG59XG4uZG93bmxvYWQtcmlnaHQgaDIge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjYuOCU7XG4gIGNvbG9yOiAjMTEyNzMzO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZG93bmxvYWQtcmlnaHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5kb3dubG9hZC1yaWdodCBwIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTMwLjglO1xuICBjb2xvcjogIzg4OTM5OTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmRvd25sb2FkLXJpZ2h0IHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmRvd25sb2FkLXJpZ2h0IHAgYnIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kb3dubG9hZC1yaWdodCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn0iLCJAdXNlICcuL3NyYy9zdHlsZXMnXHJcblxyXG4vLyBkb3dubG9hZCBzZWN0aW9uIHN0eWxlc1xyXG4uZG93bmxvYWQtYXBwXHJcbiAgICBkaXNwbGF5IDogZmxleFxyXG4gICAgZmxleC13cmFwIDogbm93cmFwXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNGOEY5RkFcclxuICAgIHBhZGRpbmctdG9wIDogMyVcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmVcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICAgICAgPi5kb3dubG9hZC1sZWZ0XHJcbiAgICAgICAgICAgIG9yZGVyOiAyXHJcbiAgICAgICAgPi5kb3dubG9hZC1yaWdodFxyXG4gICAgICAgICAgICBvcmRlcjogMVxyXG4vLyBsZWZ0IHNlY3Rpb24gb2YgZG93bmxvYWQgYXBwXHJcbi5kb3dubG9hZC1sZWZ0XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3JVxyXG4gICAgaW1nXHJcbiAgICAgICAgaGVpZ2h0IDogMzc1cHhcclxuXHJcbi8vIHJpZ2h0IHNlY3Rpb24gb2YgZG93bmxvYWQgYXBwXHJcbi5kb3dubG9hZC1yaWdodFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTclXHJcbiAgICAgICAgaDJcclxuICAgICAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmhlYWRlcjFcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDUlXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHhcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIHBcclxuICAgICAgICAgICAgQGluY2x1ZGUgc3R5bGVzLnAtZ3JleVxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogNSVcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICBiclxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICBpbWdcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/featured-stories-videos/featured-stories-videos.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/featured-stories-videos/featured-stories-videos.component.ts ***!
  \******************************************************************************/
/*! exports provided: FeaturedStoriesVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedStoriesVideosComponent", function() { return FeaturedStoriesVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FeaturedStoriesVideosComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FeaturedStoriesVideosComponent.ɵfac = function FeaturedStoriesVideosComponent_Factory(t) { return new (t || FeaturedStoriesVideosComponent)(); };
FeaturedStoriesVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedStoriesVideosComponent, selectors: [["app-featured-stories-videos"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "featured-stories-videos"]], template: function FeaturedStoriesVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Featured Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "At iam decimum annum in spelunca iacet. Cur tantas regiones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " barbarorum pedibus obiit, tot maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.featured-stories-videos[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n.featured-stories-videos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  text-align: center;\n}\n.featured-stories-videos[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 130.8%;\n  color: #889399;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQtc3Rvcmllcy12aWRlb3MvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcc3R5bGVzLnNhc3MiLCJzcmMvYXBwL2ZlYXR1cmVkLXN0b3JpZXMtdmlkZW9zL2ZlYXR1cmVkLXN0b3JpZXMtdmlkZW9zLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9mZWF0dXJlZC1zdG9yaWVzLXZpZGVvcy9HOlxcaW50ZXJ2aWV3LXByb2plY3Qvc3JjXFxhcHBcXGZlYXR1cmVkLXN0b3JpZXMtdmlkZW9zXFxmZWF0dXJlZC1zdG9yaWVzLXZpZGVvcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNOQTtFQUNJLGNBQUE7QURTSjtBQ1JJO0VGa0JBLG9CQWhCWTtFQWlCWixrQkFoQmtCO0VBaUJsQixnQkFBQTtFQXFCQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFekNJLGtCQUFBO0FEZVI7QUNkSTtFRjZCQSxvQkE5Qlk7RUErQlosa0JBOUJrQjtFQStCbEIsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFaENJLGtCQUFBO0FEcUJSIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZWQtc3Rvcmllcy12aWRlb3MvZmVhdHVyZWQtc3Rvcmllcy12aWRlb3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmVhdHVyZWQtc3Rvcmllcy12aWRlb3Mge1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cbi5mZWF0dXJlZC1zdG9yaWVzLXZpZGVvcyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDEyNi44JTtcbiAgY29sb3I6ICMxMTI3MzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mZWF0dXJlZC1zdG9yaWVzLXZpZGVvcyBQIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTMwLjglO1xuICBjb2xvcjogIzg4OTM5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkB1c2UgJy4vc3JjL3N0eWxlcydcclxuLmZlYXR1cmVkLXN0b3JpZXMtdmlkZW9zXHJcbiAgICBtYXJnaW4tdG9wIDogOCVcclxuICAgIGgxXHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmhlYWRlcjFcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyXHJcbiAgICBQXHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLnAtZ3JleVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedStoriesVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured-stories-videos',
                templateUrl: './featured-stories-videos.component.html',
                styleUrls: ['./featured-stories-videos.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/featured-stories/featured-stories.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/featured-stories/featured-stories.component.ts ***!
  \****************************************************************/
/*! exports provided: FeaturedStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedStoriesComponent", function() { return FeaturedStoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FeaturedStoriesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FeaturedStoriesComponent.ɵfac = function FeaturedStoriesComponent_Factory(t) { return new (t || FeaturedStoriesComponent)(); };
FeaturedStoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedStoriesComponent, selectors: [["app-featured-stories"]], decls: 48, vars: 0, consts: [[1, "container-fluid", "featured-stories"], [1, "row", "one"], [1, "col-md-8", "col-12", "featured-stories-content-left"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-md-4", "col-12", "featured-stories-content-right"], [1, "row"], [1, "col-md-4", "col-4"], ["src", "../assets/images/Ellipse1.png"], [1, "col-md-8", "col-8"], ["src", "../assets/images/Ellipse2.png"], ["src", "../assets/images/Ellipse3.png"], ["src", "../assets/images/Ellipse4.png"]], template: function FeaturedStoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem Ipsum Dolor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sit Amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "At iam decimum annum in spelunca iacet. Cur tantas regiones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " barbarorum pedibus obiit, tot maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Featured Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "At iam decimum annum in spelunca iacet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "19 May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "At iam decimum annum in spelunca iacet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "19 May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "At iam decimum annum in spelunca iacet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "19 May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "At iam decimum annum in spelunca iacet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "19 May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.featured-stories[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/overlay-featured-stories.png), url(/assets/images/featured-stories-bg.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 750px;\n}\n.one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.featured-stories-content-left[_ngcontent-%COMP%] {\n  padding: 27% 0% 10% 9%;\n}\n.featured-stories-content-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  font-size: 40px;\n  line-height: 108.8%;\n  color: #FFFFFF;\n}\n.featured-stories-content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  text-align: justify;\n  font-size: 12px;\n  line-height: 130.8%;\n  color: #FFFFFF;\n}\n@media (max-width: 425px) {\n  .featured-stories-content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.featured-stories-content-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #EF7061;\n  border: none;\n  border-radius: 4px;\n  padding: 2% 7%;\n}\n.featured-stories-content-right[_ngcontent-%COMP%] {\n  background: #112733;\n  opacity: 0.9;\n  padding: 9% 9% 9% 6%;\n  height: 750px;\n}\n@media (max-width: 425px) {\n  .featured-stories-content-right[_ngcontent-%COMP%] {\n    height: 520px;\n    padding: 9%;\n  }\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-top: 6%;\n  border-bottom: 1px solid #455158;\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  padding-bottom: 10%;\n  color: #FFFFFF;\n}\n@media (max-width: 425px) {\n  .featured-stories-content-right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 22px;\n    padding-bottom: 3%;\n  }\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n  float: right;\n  text-align: end;\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-blend-mode: normal;\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  text-align: justify;\n  font-size: 12px;\n  line-height: 130.8%;\n  color: #FFFFFF;\n  font-size: 11px;\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%] {\n  float: left;\n}\n.featured-stories-content-right[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 130.8%;\n  color: #90999F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQtc3Rvcmllcy9HOlxcaW50ZXJ2aWV3LXByb2plY3Qvc3JjXFxzdHlsZXMuc2FzcyIsInNyYy9hcHAvZmVhdHVyZWQtc3Rvcmllcy9mZWF0dXJlZC1zdG9yaWVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9mZWF0dXJlZC1zdG9yaWVzL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXGFwcFxcZmVhdHVyZWQtc3Rvcmllc1xcZmVhdHVyZWQtc3Rvcmllcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNKQTtFQUNJLCtHQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FET0o7QUNKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FET0o7QUNKQTtFQUNJLHNCQUFBO0FET0o7QUNOSTtFRkVBLG9CQWhCWTtFQWlCWixrQkFoQmtCO0VBaUJsQixnQkFBQTtFQXFCQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFekJJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURhUjtBQ1pJO0VGRUEsb0JBckJZO0VBc0JaLGtCQXJCa0I7RUFzQmxCLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDYUo7QUNsQlE7RUFISjtJQUlRLGVBQUE7RURxQlY7QUFDRjtBQ3JCSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRHVCUjtBQ3BCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBRHVCSjtBQ3JCSTtFQU5KO0lBT1EsYUFBQTtJQUNBLFdBQUE7RUR3Qk47QUFDRjtBQ3hCSTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBRDBCUjtBQ3pCSTtFRjNCQSxvQkFoQlk7RUFpQlosa0JBaEJrQjtFQWlCbEIsZ0JBQUE7RUFxQkEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFRUlJLG1CQUFBO0VBQ0EsY0FBQTtBRGdDUjtBQzlCUTtFQUxKO0lBTVEsa0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RURpQ1Y7QUFDRjtBQ2pDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FEbUNSO0FDbENJO0VBQ0ksNkJBQUE7QURvQ1I7QUNuQ0k7RUZwQ0Esb0JBckJZO0VBc0JaLGtCQXJCa0I7RUFzQmxCLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFZ0NJLGVBQUE7QUQyQ1I7QUMxQ0k7RUFDSSxXQUFBO0FENENSO0FDMUNZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUQ0Q2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZWQtc3Rvcmllcy9mZWF0dXJlZC1zdG9yaWVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSBcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnNcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKVxuXG4kZGVmYXVsdC1mb250IDogcG9wcGluc1xuJGRlZmF1bHQtZm9udC1zdHlsZSA6IG5vcm1hbFxuXG4keHRyYXNtYWxsLXNjcmVlbiA6IDMyMHB4XG4kc21hbGwtc2NyZWVuIDogMzc1cHhcbiRtb2ItbGFyZ2UgOiA0MjVweFxuJHRhYi1zY3JlZW4gOiA3NjhweFxuJGxhcHRvcC1zbWFsbCA6IDEwMjRweFxuJGxhcHRvcC1sYXJnZSA6IDE0NDBweFxuJHh0cmFsYXJnZS1zY3JlZW4gOiAyNTYwcHhcblxuXG5oMSxoMixoMyxoNCxoNSxoNixwXG4gICAgd2lkdGggOiAxMDAlXG5cbkBtaXhpbiBkZWZhdWx0LWZvbnQtaGVhZGVyXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnRcbiAgICBmb250LXN0eWxlOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuXG5AbWl4aW4gcC13aGl0ZVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGUgOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQgOiBub3JtYWxcbiAgICB0ZXh0LWFsaWduIDoganVzdGlmeSAgICAgXG4gICAgZm9udC1zaXplIDogMTJweFxuICAgIGxpbmUtaGVpZ2h0IDogMTMwLjglXG4gICAgY29sb3IgOiAjRkZGRkZGXG5cbkBtaXhpbiBwLWdyZXlcbiAgICBmb250LWZhbWlseSA6ICRkZWZhdWx0LWZvbnRcbiAgICBmb250LXN0eWxlOiAkZGVmYXVsdC1mb250LXN0eWxlXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxuICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIGxpbmUtaGVpZ2h0OiAxMzAuOCVcbiAgICBjb2xvcjogIzg4OTM5OVxuXG5AbWl4aW4gaGVhZGVyMVxuICAgIEBpbmNsdWRlIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LXNpemU6IDQ1cHhcbiAgICBsaW5lLWhlaWdodDogMTI2LjglXG4gICAgY29sb3I6ICMxMTI3MzNcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZlYXR1cmVkLXN0b3JpZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvb3ZlcmxheS1mZWF0dXJlZC1zdG9yaWVzLnBuZyksIHVybCgvYXNzZXRzL2ltYWdlcy9mZWF0dXJlZC1zdG9yaWVzLWJnLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1MHB4O1xufVxuXG4ub25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1sZWZ0IHtcbiAgcGFkZGluZzogMjclIDAlIDEwJSA5JTtcbn1cbi5mZWF0dXJlZC1zdG9yaWVzLWNvbnRlbnQtbGVmdCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDEyNi44JTtcbiAgY29sb3I6ICMxMTI3MzM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwOC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmVhdHVyZWQtc3Rvcmllcy1jb250ZW50LWxlZnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1sZWZ0IHAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1sZWZ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNFRjcwNjE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyJSA3JTtcbn1cblxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1yaWdodCB7XG4gIGJhY2tncm91bmQ6ICMxMTI3MzM7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcGFkZGluZzogOSUgOSUgOSUgNiU7XG4gIGhlaWdodDogNzUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1yaWdodCB7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBwYWRkaW5nOiA5JTtcbiAgfVxufVxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1yaWdodCAucm93IHtcbiAgcGFkZGluZy10b3A6IDYlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ1NTE1ODtcbn1cbi5mZWF0dXJlZC1zdG9yaWVzLWNvbnRlbnQtcmlnaHQgaDEge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjYuOCU7XG4gIGNvbG9yOiAjMTEyNzMzO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZmVhdHVyZWQtc3Rvcmllcy1jb250ZW50LXJpZ2h0IGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgfVxufVxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1yaWdodCAuY29sLW1kLTQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5mZWF0dXJlZC1zdG9yaWVzLWNvbnRlbnQtcmlnaHQgaW1nIHtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG59XG4uZmVhdHVyZWQtc3Rvcmllcy1jb250ZW50LXJpZ2h0IHAge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAuOCU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uZmVhdHVyZWQtc3Rvcmllcy1jb250ZW50LXJpZ2h0IC5jb2wtbWQtOCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmZlYXR1cmVkLXN0b3JpZXMtY29udGVudC1yaWdodCAuY29sLW1kLTggcDpudGgtY2hpbGQoMikge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMC44JTtcbiAgY29sb3I6ICM5MDk5OUY7XG59IiwiQHVzZSAnLi9zcmMvc3R5bGVzJ1xyXG5cclxuLy8gYmFja2dyb3VuZCBpbWFnZSBzdHlsZVxyXG4uZmVhdHVyZWQtc3Rvcmllc1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCgvYXNzZXRzL2ltYWdlcy9vdmVybGF5LWZlYXR1cmVkLXN0b3JpZXMucG5nKSwgdXJsKC9hc3NldHMvaW1hZ2VzL2ZlYXR1cmVkLXN0b3JpZXMtYmcucG5nKVxyXG4gICAgYmFja2dyb3VuZC1zaXplIDogY292ZXIgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdCA6IG5vLXJlcGVhdCBcclxuICAgIHdpZHRoIDogMTAwJVxyXG4gICAgaGVpZ2h0IDogNzUwcHhcclxuXHJcbi8vIHJvdyBjbGFzcyBjc3NcclxuLm9uZVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLy8gbGVmdCBzZWN0aW9uIGNvbnRlbnQgY3NzXHJcbi5mZWF0dXJlZC1zdG9yaWVzLWNvbnRlbnQtbGVmdFxyXG4gICAgcGFkZGluZyA6IDI3JSAwJSAxMCUgOSVcclxuICAgIGgyXHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmhlYWRlcjFcclxuICAgICAgICBmb250LXNpemUgOiA0MHB4XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxMDguOCVcclxuICAgICAgICBjb2xvciA6ICNGRkZGRkYgXHJcbiAgICBwIFxyXG4gICAgICAgIEBpbmNsdWRlIHN0eWxlcy5wLXdoaXRlXHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4XHJcbiAgICBidXR0b25cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUY3MDYxXHJcbiAgICAgICAgYm9yZGVyIDogbm9uZVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgICAgIHBhZGRpbmcgOiAyJSA3JVxyXG5cclxuLy8gcmlnaHQgc2VjdGlvbiBjb250ZW50IHN0eWxlc1xyXG4uZmVhdHVyZWQtc3Rvcmllcy1jb250ZW50LXJpZ2h0XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTEyNzMzXHJcbiAgICBvcGFjaXR5OiAwLjlcclxuICAgIHBhZGRpbmcgOjklIDklIDklIDYlIFxyXG4gICAgaGVpZ2h0IDogNzUwcHhcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGhlaWdodDogNTIwcHhcclxuICAgICAgICBwYWRkaW5nOiA5JVxyXG4gICAgLnJvd1xyXG4gICAgICAgIHBhZGRpbmctdG9wIDogNiVcclxuICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICM0NTUxNThcclxuICAgIGgxXHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmhlYWRlcjFcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAlXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkZcclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzJSBcclxuICAgIC5jb2wtbWQtNFxyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZFxyXG4gICAgaW1nXHJcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWxcclxuICAgIHBcclxuICAgICAgICBAaW5jbHVkZSBzdHlsZXMucC13aGl0ZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweFxyXG4gICAgLmNvbC1tZC04XHJcbiAgICAgICAgZmxvYXQgOiBsZWZ0XHJcbiAgICAgICAgcFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKVxyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsXHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHhcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAuOCVcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTA5OTlGIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedStoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured-stories',
                templateUrl: './featured-stories.component.html',
                styleUrls: ['./featured-stories.component.sass']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 71, vars: 0, consts: [[1, "container-fluid", "footer"], [1, "row", "first"], [1, "col-md-9"], [1, "row"], [1, "col-md-3", "col-6"], [1, "col-md-3", "col-12"], [1, "row", "second"], [1, "col-md-5", "col-12", "terms"], [1, "col-md-4", "col-12", "icons"], [1, "col-md-3", "col-3"], ["src", "../assets/images/fb.svg", "alt", "facebook", "width", "100%"], ["src", "../assets/images/linked-in.svg", "alt", "linked-in", "width", "100%"], ["src", "../assets/images/twitter.svg", "alt", "twitter", "width", "100%"], ["src", "../assets/images/Union.svg", "alt", "union", "width", "100%"], [1, "col-md-3", "col-12", "rights"], [2, "float", "right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COMPANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "info@companyname.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "+9884648340");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Terms & conditions | Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2020.All right reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 0% 9%;\n}\nh5[_ngcontent-%COMP%] {\n  padding-bottom: 3%;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  color: #2E2E31;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: inline-block;\n  padding-left: 0%;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 30px;\n  color: #2E2E31;\n}\np[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  color: #888888;\n}\n.second[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n@media (max-width: 425px) {\n  .second[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n  }\n  .second[_ngcontent-%COMP%]    > .terms[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .second[_ngcontent-%COMP%]    > .icons[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .second[_ngcontent-%COMP%]    > .rights[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .second[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.second[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  background-color: #83BCC5;\n  border-radius: 6px 6px 0% 0%;\n}\n.second[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n  padding: 9%;\n}\n@media (max-width: 425px) {\n  .second[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    border-radius: 6px;\n    margin-bottom: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXHN0eWxlcy5zYXNzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9mb290ZXIvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNKQTtFQUNJLGNBQUE7QURPSjtBQ05BO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEU0o7QUNSQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRFdKO0FDVkk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEWVI7QUNYQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURjSjtBQ1pBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURlSjtBQ2RJO0VBSko7SUFLUSxhQUFBO0lBQ0Esc0JBQUE7RURpQk47RUNoQk07SUFDSSxRQUFBO0VEa0JWO0VDakJNO0lBQ0ksUUFBQTtFRG1CVjtFQ2xCTTtJQUNJLFFBQUE7RURvQlY7RUNuQk07SUFDSSxrQkFBQTtFRHFCVjtBQUNGO0FDckJJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBRHVCUjtBQ3RCUTtFQUNJLFdBQUE7QUR3Qlo7QUN2QlE7RUFMSjtJQU1RLGtCQUFBO0lBQ0EsaUJBQUE7RUQwQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMCUgOSU7XG59XG5cbmg1IHtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzJFMkUzMTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbn1cbnVsIGxpIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMyRTJFMzE7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLnNlY29uZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnNlY29uZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICB9XG4gIC5zZWNvbmQgPiAudGVybXMge1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIC5zZWNvbmQgPiAuaWNvbnMge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5zZWNvbmQgPiAucmlnaHRzIHtcbiAgICBvcmRlcjogMztcbiAgfVxuICAuc2Vjb25kIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLnNlY29uZCAuaWNvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNCQ0M1O1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAlIDAlO1xufVxuLnNlY29uZCAuaWNvbnMgLmNvbC1tZC0zIHtcbiAgcGFkZGluZzogOSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnNlY29uZCAuaWNvbnMge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufSIsIkB1c2UgJy4vc3JjL3N0eWxlcydcclxuXHJcbi8vIGZvb3RlciBzdHlsZXNcclxuLmZvb3RlclxyXG4gICAgcGFkZGluZyA6IDAlIDklXHJcbmg1XHJcbiAgICBwYWRkaW5nLWJvdHRvbSA6IDMlXHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICBmb250LXNpemU6IDEycHhcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4XHJcbiAgICBjb2xvcjogIzJFMkUzMVxyXG51bFxyXG4gICAgbGlzdC1zdHlsZS10eXBlIDogbm9uZVxyXG4gICAgZGlzcGxheSA6IGlubGluZS1ibG9ja1xyXG4gICAgcGFkZGluZy1sZWZ0IDogMCVcclxuICAgIGxpXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWxcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHhcclxuICAgICAgICBjb2xvcjogIzJFMkUzMVxyXG5wXHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICBmb250LXNpemU6IDEzcHhcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4XHJcbiAgICBjb2xvcjogIzg4ODg4OFxyXG4vLyBzZWNvbmQgc2VjdGlvbiBvZiBmb290ciBkZXNpZ25cclxuLnNlY29uZFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcCAgICBcclxuICAgICAgICA+LnRlcm1zXHJcbiAgICAgICAgICAgIG9yZGVyIDogMlxyXG4gICAgICAgID4gLmljb25zXHJcbiAgICAgICAgICAgIG9yZGVyIDogMVxyXG4gICAgICAgID4gLnJpZ2h0c1xyXG4gICAgICAgICAgICBvcmRlciA6IDNcclxuICAgICAgICBwXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgLmljb25zXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM4M0JDQzVcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAlIDAlXHJcbiAgICAgICAgLmNvbC1tZC0zXHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiA5JVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogNSVcclxuICAgICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/inspirations/inspirations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inspirations/inspirations.component.ts ***!
  \********************************************************/
/*! exports provided: InspirationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspirationsComponent", function() { return InspirationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InspirationsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
InspirationsComponent.ɵfac = function InspirationsComponent_Factory(t) { return new (t || InspirationsComponent)(); };
InspirationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InspirationsComponent, selectors: [["app-inspirations"]], decls: 71, vars: 0, consts: [[1, "container-fluid", "inspirations"], [1, "flex-container"], [1, "item"], ["src", "../assets/images/inspiration/inspiration1.svg", "width", "100%", "alt", "inspiration"], [1, "row", "content"], [1, "col-md-12"], ["src", "../assets/images/inspiration/inspiration2.svg", "width", "100%", "alt", "inspiration"], ["src", "../assets/images/inspiration/inspiration3.svg", "width", "100%", "alt", "inspiration"], ["src", "../assets/images/inspiration/inspiration4.svg", "width", "100%", "alt", "inspiration"], ["src", "../assets/images/inspiration/inspiration5.svg", "width", "100%", "alt", "inspiration"], ["src", "../assets/images/inspiration/inspiration6.svg", "width", "100%", "alt", "inspiration"], ["src", "../assets/images/inspiration/inspiration7.svg", "width", "100%", "alt", "inspiration"]], template: function InspirationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inspirations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "At iam decimum annum in spelunca iacet. Cur tantas regiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " barbarorum pedibus obiit, tot maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cur tantas regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "At iam decimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Regiones barbarorum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inspirations[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  padding: 0% 9%;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 130.8%;\n  color: #889399;\n  text-align: center;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media (max-width: 425px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n  width: 66%;\n}\n@media (max-width: 425px) {\n  .flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n  width: 66%;\n}\n@media (max-width: 425px) {\n  .flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 32%;\n  margin-bottom: 3%;\n  position: relative;\n  top: 0px;\n  left: 0px;\n}\n@media (max-width: 425px) {\n  .flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 5%;\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  text-align: left;\n  font-size: 24px;\n  line-height: 108.8%;\n  color: #FFFFFF;\n}\n.flex-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: normal;\n  text-align: justify;\n  font-size: 12px;\n  line-height: 130.8%;\n  color: #FFFFFF;\n  font-size: 10px;\n  text-align: left;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zcGlyYXRpb25zL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXHN0eWxlcy5zYXNzIiwic3JjL2FwcC9pbnNwaXJhdGlvbnMvaW5zcGlyYXRpb25zLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9pbnNwaXJhdGlvbnMvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcYXBwXFxpbnNwaXJhdGlvbnNcXGluc3BpcmF0aW9ucy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNOQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FEU0o7QUNSQTtFRmlCSSxvQkFoQlk7RUFpQlosa0JBaEJrQjtFQWlCbEIsZ0JBQUE7RUFxQkEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFRXhDQSxrQkFBQTtBRGdCSjtBQ2ZBO0VGNEJJLG9CQTlCWTtFQStCWixrQkE5QmtCO0VBK0JsQixtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUUvQkEsa0JBQUE7QUR1Qko7QUNyQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FEd0JKO0FDdkJJO0VBSko7SUFLUSxpQkFBQTtFRDBCTjtBQUNGO0FDMUJJO0VBQ0ksVUFBQTtBRDRCUjtBQzNCUTtFQUZKO0lBR1EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUQ4QlY7QUFDRjtBQzlCSTtFQUNJLFVBQUE7QURnQ1I7QUMvQlE7RUFGSjtJQUdRLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VEa0NWO0FBQ0Y7QUNsQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEb0NSO0FDbkNRO0VBTko7SUFPUSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFRHNDVjtBQUNGO0FDdENRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBRHdDWjtBQ3ZDWTtFRnRCUixvQkFoQlk7RUFpQlosa0JBaEJrQjtFQWlCbEIsZ0JBQUE7RUFxQkEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFRURZLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRDhDaEI7QUM1Q1k7RUZ4QlIsb0JBckJZO0VBc0JaLGtCQXJCa0I7RUFzQmxCLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFb0JZLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FEb0RoQiIsImZpbGUiOiJzcmMvYXBwL2luc3BpcmF0aW9ucy9pbnNwaXJhdGlvbnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5zcGlyYXRpb25zIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHBhZGRpbmc6IDAlIDklO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDEyNi44JTtcbiAgY29sb3I6ICMxMTI3MzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEzMC44JTtcbiAgY29sb3I6ICM4ODkzOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxufVxuLmZsZXgtY29udGFpbmVyIC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDY2JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZmxleC1jb250YWluZXIgLml0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mbGV4LWNvbnRhaW5lciAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDY2JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZmxleC1jb250YWluZXIgLml0ZW06bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZsZXgtY29udGFpbmVyIC5pdGVtIHtcbiAgd2lkdGg6IDMyJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuZmxleC1jb250YWluZXIgLml0ZW0ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mbGV4LWNvbnRhaW5lciAuaXRlbSAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1JTtcbn1cbi5mbGV4LWNvbnRhaW5lciAuaXRlbSAuY29udGVudCBoNSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDEyNi44JTtcbiAgY29sb3I6ICMxMTI3MzM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEwOC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmxleC1jb250YWluZXIgLml0ZW0gLmNvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCJAdXNlICcuL3NyYy9zdHlsZXMnXHJcbi5pbnNwaXJhdGlvbnNcclxuICAgIG1hcmdpbi10b3AgOiAzJVxyXG4gICAgcGFkZGluZyA6IDAlIDklXHJcbmg0XHJcbiAgICBAaW5jbHVkZSBzdHlsZXMuaGVhZGVyMVxyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlclxyXG5wXHJcbiAgICBAaW5jbHVkZSBzdHlsZXMucC1ncmV5XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuLy8gaW5zcGlyYXRpb24gc2VjdGlvbiBjb250YWluZXIgc3R5bGVcclxuLmZsZXgtY29udGFpbmVyXHJcbiAgICBkaXNwbGF5IDogZmxleFxyXG4gICAgZmxleC13cmFwIDogd3JhcFxyXG4gICAganVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2VlblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtblxyXG4gICAgLml0ZW06Zmlyc3QtY2hpbGRcclxuICAgICAgICB3aWR0aCA6IDY2JVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIC5pdGVtOmxhc3QtY2hpbGRcclxuICAgICAgICB3aWR0aCA6IDY2JVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIC5pdGVtXHJcbiAgICAgICAgd2lkdGg6IDMyJVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOiAzJVxyXG4gICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmVcclxuICAgICAgICB0b3AgOiAwcHhcclxuICAgICAgICBsZWZ0IDogMHB4XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGVcclxuICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgIGxlZnQgOiA1JVxyXG4gICAgICAgICAgICBoNVxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmhlYWRlcjFcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAyNHB4XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodCA6IDEwOC44JVxyXG4gICAgICAgICAgICAgICAgY29sb3IgOiAjRkZGRkZGXHJcblxyXG4gICAgICAgICAgICBwXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdHlsZXMucC13aGl0ZVxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogbGVmdFxyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InspirationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inspirations',
                templateUrl: './inspirations.component.html',
                styleUrls: ['./inspirations.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/learn-more/learn-more.component.ts":
/*!****************************************************!*\
  !*** ./src/app/learn-more/learn-more.component.ts ***!
  \****************************************************/
/*! exports provided: LearnMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMoreComponent", function() { return LearnMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LearnMoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LearnMoreComponent.ɵfac = function LearnMoreComponent_Factory(t) { return new (t || LearnMoreComponent)(); };
LearnMoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearnMoreComponent, selectors: [["app-learn-more"]], decls: 28, vars: 0, consts: [[1, "container-fluid", "learn-more"], [1, "row", "content"], [1, "col-md-5"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-md-7"], [1, "container"], [1, "item"], ["src", "/assets/images/learn-more/learn-more-1.svg"], ["src", "/assets/images/learn-more/learn-more-2.svg"], [1, "container", "row2"], ["src", "/assets/images/learn-more/learn-more-3.svg"], ["src", "/assets/images/learn-more/learn-more-4.svg"]], template: function LearnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dolor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sit Amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "At iam decimum annum in spelunca iacet. Cur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " tantas regiones barbarorum pedibus obiit, tot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.learn-more[_ngcontent-%COMP%] {\n  padding: 3% 9%;\n}\n.content[_ngcontent-%COMP%] {\n  padding-bottom: 5%;\n  border-bottom: 1px solid #D8D8D8;\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 25%;\n  }\n}\n.content[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%] {\n  margin-bottom: 22%;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  font-size: 50px;\n}\n@media (max-width: 425px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n    text-align: center;\n  }\n}\nh4[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none;\n}\np[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 130.8%;\n  color: #889399;\n}\n@media (max-width: 425px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n  }\n}\np[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none;\n}\nbutton[_ngcontent-%COMP%] {\n  background: #83BCC5;\n  border: none;\n  border-radius: 4px;\n  padding: 2% 7%;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 118.8%;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.container.row2[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  padding: 0% 2%;\n}\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm4tbW9yZS9HOlxcaW50ZXJ2aWV3LXByb2plY3Qvc3JjXFxzdHlsZXMuc2FzcyIsInNyYy9hcHAvbGVhcm4tbW9yZS9sZWFybi1tb3JlLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9sZWFybi1tb3JlL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXGFwcFxcbGVhcm4tbW9yZVxcbGVhcm4tbW9yZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNMQTtFQUNJLGNBQUE7QURRSjtBQ1BBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtBRFVKO0FDUkk7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtFRFVWO0FBQ0Y7QUNSSTtFQUNJLGtCQUFBO0FEVVI7QUNUQTtFRktJLG9CQWhCWTtFQWlCWixrQkFoQmtCO0VBaUJsQixnQkFBQTtFQXFCQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFNUJBLGVBQUE7QURpQko7QUNmSTtFQUpKO0lBS1EsZUFBQTtJQUNBLGtCQUFBO0VEa0JOO0FBQ0Y7QUNsQkk7RUFDSSxhQUFBO0FEb0JSO0FDbkJBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRHNCSjtBQ3BCSTtFQVJKO0lBU1EsZUFBQTtJQUNBLGtCQUFBO0VEdUJOO0FBQ0Y7QUN2Qkk7RUFDSSxhQUFBO0FEeUJSO0FDeEJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUQyQko7QUMxQkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBRDZCSjtBQzVCSTtFQUNJLHVCQUFBO0FEOEJSO0FDN0JJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FEK0JSO0FDN0JZO0VBREo7SUFFUSxXQUFBO0VEZ0NkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGVhcm4tbW9yZSB7XG4gIHBhZGRpbmc6IDMlIDklO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRlbnQgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjUlO1xuICB9XG59XG4uY29udGVudCAuY29sLW1kLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMiU7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBsaW5lLWhlaWdodDogMTI2LjglO1xuICBjb2xvcjogIzExMjczMztcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5oNCBiciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAuOCU7XG4gIGNvbG9yOiAjODg5Mzk5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbnAgYnIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjODNCQ0M1O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMiUgNyU7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDExOC44JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyLnJvdzIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jb250YWluZXIgLml0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgcGFkZGluZzogMCUgMiU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAuaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiQHVzZSAnLi9zcmMvc3R5bGVzJ1xyXG4vLyBjb250ZW50IHN0eWxlc1xyXG4ubGVhcm4tbW9yZVxyXG4gICAgcGFkZGluZyA6IDMlIDklXHJcbi5jb250ZW50XHJcbiAgICBwYWRkaW5nLWJvdHRvbSA6IDUlXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEOFxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGVcclxuICAgICAgICAgICAgbGVmdCA6IDI1JVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAuY29sLW1kLTVcclxuICAgICAgICBtYXJnaW4tYm90dG9tIDogMjIlXHJcbmg0XHJcbiAgICBAaW5jbHVkZSBzdHlsZXMuaGVhZGVyMVxyXG4gICAgZm9udC1zaXplIDogNTBweFxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgZm9udC1zaXplIDogMjVweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgYnJcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbnBcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWxcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxyXG4gICAgY29sb3I6ICM4ODkzOTlcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICBmb250LXNpemU6IDEycHhcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIGJyXHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG5idXR0b25cclxuICAgIGJhY2tncm91bmQ6ICM4M0JDQzVcclxuICAgIGJvcmRlciA6IG5vbmVcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgcGFkZGluZyA6IDIlIDclXHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGxpbmUtaGVpZ2h0OiAxMTguOCVcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxyXG4gICAgY29sb3I6ICNGRkZGRkZcclxuLmNvbnRhaW5lclxyXG4gICAgZGlzcGxheSA6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zIDogZmxleC1lbmRcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlclxyXG4gICAgJi5yb3cyXHJcbiAgICAgICAgYWxpZ24taXRlbXMgOiBmbGV4LXN0YXJ0XHJcbiAgICAuaXRlbVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOiA0JVxyXG4gICAgICAgIHBhZGRpbmcgOiAwJSAyJVxyXG4gICAgICAgIGltZ1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnMoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-learn-more',
                templateUrl: './learn-more.component.html',
                styleUrls: ['./learn-more.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SignUpComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 28, vars: 0, consts: [[1, "container-fluid", "sign-up-bg"], [1, "row"], [1, "col-md-6", "content-left"], [1, "col-md-12"], [1, "col-md-6", "content-right"], ["id", "sign-up-form"], [1, "form-group"], ["type", "text", "id", "name", "placeholder", "Name", 1, "form-control"], ["type", "email", "id", "mail", "placeholder", "Email", 1, "form-control"], ["type", "tel", "id", "phone", "placeholder", "Phone Number", 1, "form-control"], ["type", "submit", "form", "sign-up-form", 1, "btn", "btn-primary"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up Our");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "At iam decimum annum in spelunca iac ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " et. Cur tantas regiones barbarorum ped ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ibus obiit, tot maria transmisit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SIGN UP NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sign-up-bg[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/sign-up.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 82%;\n  height: 600px;\n  margin: 0 auto;\n  border-radius: 6px;\n  position: relative;\n  margin-bottom: 5%;\n}\n@media (max-width: 425px) {\n  .sign-up-bg[_ngcontent-%COMP%] {\n    height: 500px;\n    margin-bottom: 50%;\n  }\n}\n.content-left[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 18%;\n  padding-left: 9%;\n}\n@media (max-width: 425px) {\n  .content-left[_ngcontent-%COMP%] {\n    bottom: 24%;\n  }\n}\n.content-left[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%] {\n  padding: 3% 0%;\n}\n.content-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 50px;\n  line-height: 108.8%;\n  color: #FFFFFF;\n}\n.content-left[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 130.8%;\n  color: #FFFFFF;\n}\n.content-right[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -51px;\n  right: -103px;\n  padding-right: 9%;\n}\n@media (max-width: 425px) {\n  .content-right[_ngcontent-%COMP%] {\n    bottom: -30%;\n    right: -7px;\n  }\n}\n.content-right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  padding: 10%;\n  width: 75%;\n  border-top-right-radius: 2%;\n  border-top-left-radius: 2%;\n}\n@media (max-width: 425px) {\n  .content-right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.content-right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-right: 0px;\n  border-top: 0px;\n  border-bottom: 1px solid #EBEBEB;\n  border-left: 0px;\n}\n.content-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75%;\n  background-color: #83BCC5;\n  border: none;\n  padding: 3% 0;\n  border-top-left-radius: 0%;\n  border-top-right-radius: 0%;\n}\n@media (max-width: 425px) {\n  .content-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9HOlxcaW50ZXJ2aWV3LXByb2plY3Qvc3JjXFxzdHlsZXMuc2FzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaWduLXVwL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNKQTtFQUNJLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRE9KO0FDTkk7RUFWSjtJQVdRLGFBQUE7SUFDQSxrQkFBQTtFRFNOO0FBQ0Y7QUNSQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEV0o7QUNWSTtFQUpKO0lBS1EsV0FBQTtFRGFOO0FBQ0Y7QUNiSTtFQUNJLGNBQUE7QURlUjtBQ2RJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRGdCUjtBQ2ZJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRGlCUjtBQ2ZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FEa0JKO0FDakJJO0VBTEo7SUFNUSxZQUFBO0lBQ0EsV0FBQTtFRG9CTjtBQUNGO0FDcEJJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QURzQlI7QUNyQlE7RUFOSjtJQU9RLFdBQUE7RUR3QlY7QUFDRjtBQ3hCUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUQwQlo7QUN6Qkk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUQyQlI7QUMxQlE7RUFQSjtJQVFRLFdBQUE7RUQ2QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2UgXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zXG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIilcblxuJGRlZmF1bHQtZm9udCA6IHBvcHBpbnNcbiRkZWZhdWx0LWZvbnQtc3R5bGUgOiBub3JtYWxcblxuJHh0cmFzbWFsbC1zY3JlZW4gOiAzMjBweFxuJHNtYWxsLXNjcmVlbiA6IDM3NXB4XG4kbW9iLWxhcmdlIDogNDI1cHhcbiR0YWItc2NyZWVuIDogNzY4cHhcbiRsYXB0b3Atc21hbGwgOiAxMDI0cHhcbiRsYXB0b3AtbGFyZ2UgOiAxNDQwcHhcbiR4dHJhbGFyZ2Utc2NyZWVuIDogMjU2MHB4XG5cblxuaDEsaDIsaDMsaDQsaDUsaDYscFxuICAgIHdpZHRoIDogMTAwJVxuXG5AbWl4aW4gZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZTogJGRlZmF1bHQtZm9udC1zdHlsZVxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcblxuQG1peGluIHAtd2hpdGVcbiAgICBmb250LWZhbWlseSA6ICRkZWZhdWx0LWZvbnRcbiAgICBmb250LXN0eWxlIDogJGRlZmF1bHQtZm9udC1zdHlsZVxuICAgIGZvbnQtd2VpZ2h0IDogbm9ybWFsXG4gICAgdGV4dC1hbGlnbiA6IGp1c3RpZnkgICAgIFxuICAgIGZvbnQtc2l6ZSA6IDEycHhcbiAgICBsaW5lLWhlaWdodCA6IDEzMC44JVxuICAgIGNvbG9yIDogI0ZGRkZGRlxuXG5AbWl4aW4gcC1ncmV5XG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZTogJGRlZmF1bHQtZm9udC1zdHlsZVxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcbiAgICBmb250LXNpemU6IDE0cHhcbiAgICBsaW5lLWhlaWdodDogMTMwLjglXG4gICAgY29sb3I6ICM4ODkzOTlcblxuQG1peGluIGhlYWRlcjFcbiAgICBAaW5jbHVkZSBkZWZhdWx0LWZvbnQtaGVhZGVyXG4gICAgZm9udC1zaXplOiA0NXB4XG4gICAgbGluZS1oZWlnaHQ6IDEyNi44JVxuICAgIGNvbG9yOiAjMTEyNzMzXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWduLXVwLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NpZ24tdXAucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDgyJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuc2lnbi11cC1iZyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MCU7XG4gIH1cbn1cblxuLmNvbnRlbnQtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxOCU7XG4gIHBhZGRpbmctbGVmdDogOSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRlbnQtbGVmdCB7XG4gICAgYm90dG9tOiAyNCU7XG4gIH1cbn1cbi5jb250ZW50LWxlZnQgLmNvbC1tZC0xMiB7XG4gIHBhZGRpbmc6IDMlIDAlO1xufVxuLmNvbnRlbnQtbGVmdCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwOC44JTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGVudC1sZWZ0IFAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAuOCU7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29udGVudC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNTFweDtcbiAgcmlnaHQ6IC0xMDNweDtcbiAgcGFkZGluZy1yaWdodDogOSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRlbnQtcmlnaHQge1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICByaWdodDogLTdweDtcbiAgfVxufVxuLmNvbnRlbnQtcmlnaHQgZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDEwJTtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY29udGVudC1yaWdodCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRlbnQtcmlnaHQgZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVCRUI7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG59XG4uY29udGVudC1yaWdodCBidXR0b24ge1xuICB3aWR0aDogNzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNCQ0M1O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDMlIDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRlbnQtcmlnaHQgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIkB1c2UgJy4vc3JjL3N0eWxlcydcclxuXHJcbi8vIGJhY2tncm91bmQgaW1hZ2Ugc3R5bGVcclxuLnNpZ24tdXAtYmcgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2lnbi11cC5wbmcpXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbiAgICB3aWR0aDogODIlXHJcbiAgICBoZWlnaHQ6NjAwcHhcclxuICAgIG1hcmdpbjogMCBhdXRvXHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHhcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgbWFyZ2luLWJvdHRvbTogNSVcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTAlXHJcbi8vIGxlZnQgc2lkZSBjb250ZW4gc2VjdGlvblxyXG4uY29udGVudC1sZWZ0XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIGJvdHRvbTogMTglXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDklXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGJvdHRvbTogMjQlXHJcbiAgICAuY29sLW1kLTEyXHJcbiAgICAgICAgcGFkZGluZzogMyUgMCVcclxuICAgIGgyXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWxcclxuICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwOC44JVxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGXHJcbiAgICBQXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWxcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzMC44JVxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGXHJcbi8vIGZvcm0gc2VjdGlvbiBzdHlsZXNcclxuLmNvbnRlbnQtcmlnaHRcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgYm90dG9tOiAtNTFweFxyXG4gICAgcmlnaHQ6IC0xMDNweFxyXG4gICAgcGFkZGluZy1yaWdodDo5JVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IHN0eWxlcy4kbW9iLWxhcmdlKVxyXG4gICAgICAgIGJvdHRvbTogLTMwJVxyXG4gICAgICAgIHJpZ2h0OiAtN3B4XHJcbiAgICBmb3JtXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxyXG4gICAgICAgIHBhZGRpbmc6IDEwJVxyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMiVcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyJVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAuZm9ybS1jb250cm9sXHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDBweFxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUJFQlxyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMHB4XHJcbiAgICBidXR0b25cclxuICAgICAgICB3aWR0aDogNzUlXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgzQkNDNVxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIHBhZGRpbmc6IDMlIDBcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwJVxyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwJVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/under-banner/under-banner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/under-banner/under-banner.component.ts ***!
  \********************************************************/
/*! exports provided: UnderBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderBannerComponent", function() { return UnderBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");



class UnderBannerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UnderBannerComponent.ɵfac = function UnderBannerComponent_Factory(t) { return new (t || UnderBannerComponent)(); };
UnderBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderBannerComponent, selectors: [["app-under-banner"]], decls: 15, vars: 0, consts: [["animateOnScroll", "", "animationName", "slideInLeft", 1, "container-fluid", "under-banner"], [1, "row", "under-banner-content"], [1, "row", "under-banner-image"], [1, "item"], ["src", "../assets/images/under-banner/Rectangle 191.png"], ["src", "../assets/images/under-banner/Rectangle 192.png"], ["src", "../assets/images/under-banner/Rectangle 193.png"], ["src", "../assets/images/under-banner/Rectangle 194.png"]], template: function UnderBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quae quo sunt excelsiores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dant clariora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__["AnimateOnScrollDirective"]], styles: ["@font-face {\n  font-family: poppins;\n  src: url(/assets/fonts/Poppins-Regular.ttf) format(\"opentype\");\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.under-banner[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n@media (max-width: 425px) {\n  .under-banner[_ngcontent-%COMP%] {\n    margin-bottom: 6%;\n  }\n}\n.under-banner-content[_ngcontent-%COMP%] {\n  padding: 0 9%;\n}\n.under-banner-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 45px;\n  line-height: 126.8%;\n  color: #112733;\n  font-size: 50px;\n  color: #203A4B;\n  line-height: 118.8%;\n}\n@media (max-width: 425px) {\n  .under-banner-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.under-banner-image[_ngcontent-%COMP%] {\n  padding-top: 3%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 0 9%;\n}\n@media (max-width: 425px) {\n  .under-banner-image[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.under-banner-image[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 24%;\n}\n@media (max-width: 425px) {\n  .under-banner-image[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-top: 3%;\n  }\n}\n.under-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 98%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXItYmFubmVyL0c6XFxpbnRlcnZpZXctcHJvamVjdC9zcmNcXHN0eWxlcy5zYXNzIiwic3JjL2FwcC91bmRlci1iYW5uZXIvdW5kZXItYmFubmVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC91bmRlci1iYW5uZXIvRzpcXGludGVydmlldy1wcm9qZWN0L3NyY1xcYXBwXFx1bmRlci1iYW5uZXJcXHVuZGVyLWJhbm5lci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FEYUE7RUFDSSxXQUFBO0FDWEo7QUNMQTtFQUNJLGlCQUFBO0FEUUo7QUNQSTtFQUZKO0lBR1EsaUJBQUE7RURVTjtBQUNGO0FDUkE7RUFDSSxhQUFBO0FEV0o7QUNWSTtFRldBLG9CQWhCWTtFQWlCWixrQkFoQmtCO0VBaUJsQixnQkFBQTtFQXFCQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VFbENJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURpQlI7QUNmUTtFQU5KO0lBT1EsZUFBQTtFRGtCVjtBQUNGO0FDakJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBRG9CSjtBQ2xCSTtFQVBKO0lBUVEsZUFBQTtFRHFCTjtBQUNGO0FDckJJO0VBQ0ksVUFBQTtBRHVCUjtBQ3JCUTtFQUhKO0lBSVEsVUFBQTtJQUNBLGNBQUE7RUR3QlY7QUFDRjtBQ3hCSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBRDBCUiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLWJhbm5lci91bmRlci1iYW5uZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIFxuICBmb250LWZhbWlseTogcG9wcGluc1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpXG5cbiRkZWZhdWx0LWZvbnQgOiBwb3BwaW5zXG4kZGVmYXVsdC1mb250LXN0eWxlIDogbm9ybWFsXG5cbiR4dHJhc21hbGwtc2NyZWVuIDogMzIwcHhcbiRzbWFsbC1zY3JlZW4gOiAzNzVweFxuJG1vYi1sYXJnZSA6IDQyNXB4XG4kdGFiLXNjcmVlbiA6IDc2OHB4XG4kbGFwdG9wLXNtYWxsIDogMTAyNHB4XG4kbGFwdG9wLWxhcmdlIDogMTQ0MHB4XG4keHRyYWxhcmdlLXNjcmVlbiA6IDI1NjBweFxuXG5cbmgxLGgyLGgzLGg0LGg1LGg2LHBcbiAgICB3aWR0aCA6IDEwMCVcblxuQG1peGluIGRlZmF1bHQtZm9udC1oZWFkZXJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogNjAwXG5cbkBtaXhpbiBwLXdoaXRlXG4gICAgZm9udC1mYW1pbHkgOiAkZGVmYXVsdC1mb250XG4gICAgZm9udC1zdHlsZSA6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodCA6IG5vcm1hbFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5ICAgICBcbiAgICBmb250LXNpemUgOiAxMnB4XG4gICAgbGluZS1oZWlnaHQgOiAxMzAuOCVcbiAgICBjb2xvciA6ICNGRkZGRkZcblxuQG1peGluIHAtZ3JleVxuICAgIGZvbnQtZmFtaWx5IDogJGRlZmF1bHQtZm9udFxuICAgIGZvbnQtc3R5bGU6ICRkZWZhdWx0LWZvbnQtc3R5bGVcbiAgICBmb250LXdlaWdodDogbm9ybWFsXG4gICAgZm9udC1zaXplOiAxNHB4XG4gICAgbGluZS1oZWlnaHQ6IDEzMC44JVxuICAgIGNvbG9yOiAjODg5Mzk5XG5cbkBtaXhpbiBoZWFkZXIxXG4gICAgQGluY2x1ZGUgZGVmYXVsdC1mb250LWhlYWRlclxuICAgIGZvbnQtc2l6ZTogNDVweFxuICAgIGxpbmUtaGVpZ2h0OiAxMjYuOCVcbiAgICBjb2xvcjogIzExMjczM1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udW5kZXItYmFubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnVuZGVyLWJhbm5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gIH1cbn1cblxuLnVuZGVyLWJhbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMCA5JTtcbn1cbi51bmRlci1iYW5uZXItY29udGVudCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDEyNi44JTtcbiAgY29sb3I6ICMxMTI3MzM7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICMyMDNBNEI7XG4gIGxpbmUtaGVpZ2h0OiAxMTguOCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnVuZGVyLWJhbm5lci1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLnVuZGVyLWJhbm5lci1pbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCA5JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAudW5kZXItYmFubmVyLWltYWdlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi51bmRlci1iYW5uZXItaW1hZ2UgLml0ZW0ge1xuICB3aWR0aDogMjQlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC51bmRlci1iYW5uZXItaW1hZ2UgLml0ZW0ge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cbn1cbi51bmRlci1iYW5uZXItaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDk4JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIkB1c2UgJy4vc3JjL3N0eWxlcydcclxuXHJcbi51bmRlci1iYW5uZXJcclxuICAgIG1hcmdpbi1ib3R0b20gOiAzJVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICBtYXJnaW4tYm90dG9tIDogNiVcclxuXHJcbi8vIGNvbnRlbnQgc2VjdGlvblxyXG4udW5kZXItYmFubmVyLWNvbnRlbnRcclxuICAgIHBhZGRpbmcgOiAwIDklXHJcbiAgICBoM1xyXG4gICAgICAgIEBpbmNsdWRlIHN0eWxlcy5oZWFkZXIxXHJcbiAgICAgICAgZm9udC1zaXplIDogNTBweFxyXG4gICAgICAgIGNvbG9yIDogIzIwM0E0QlxyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMTE4LjglXHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCBcclxuLy8gaW1hZ2Ugc2VjdGlvbiAgIFxyXG4udW5kZXItYmFubmVyLWltYWdlXHJcbiAgICBwYWRkaW5nLXRvcCA6IDMlXHJcbiAgICBkaXNwbGF5IDogZmxleFxyXG4gICAgZmxleC13cmFwIDogbm93cmFwXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuXHJcbiAgICBwYWRkaW5nIDogMCA5JVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogc3R5bGVzLiRtb2ItbGFyZ2UpXHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwXHJcbiAgICAuaXRlbVxyXG4gICAgICAgIHdpZHRoIDogMjQlXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGggOiBzdHlsZXMuJG1vYi1sYXJnZSlcclxuICAgICAgICAgICAgd2lkdGg6IDQ5JVxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wIDogMyVcclxuICAgIGltZ1xyXG4gICAgICAgIHdpZHRoIDogOTglXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDVweCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-banner',
                templateUrl: './under-banner.component.html',
                styleUrls: ['./under-banner.component.sass']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\interview-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map