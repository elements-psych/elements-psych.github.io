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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_flashcards_flashcards_component__ = __webpack_require__("../../../../../src/app/components/flashcards/flashcards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_flashcard_flashcard_component__ = __webpack_require__("../../../../../src/app/components/flashcard/flashcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_flashcards_sidenav_flashcards_sidenav_component__ = __webpack_require__("../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* Angular Material Modules */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_flashcards_flashcards_component__["a" /* FlashcardsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_flashcard_flashcard_component__["a" /* FlashcardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_flashcards_sidenav_flashcards_sidenav_component__["a" /* FlashcardsSidenavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatProgressBarModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/flashcard/flashcard.component.html":
/***/ (function(module, exports) {

module.exports = "<div #card class=\"flashcard-container\">\n  <mat-card class=\"front p-4\">\n    <div class=\"bar\">\n      <button mat-icon-button>\n        <mat-icon>volume_up</mat-icon>\n      </button>\n      <button mat-icon-button>\n        <mat-icon>star_outline</mat-icon>\n      </button>\n    </div>\n\n    <div (click)=\"flipCard()\" class=\"center-content mb-0\">\n      side1\n    </div>\n\n    <div class=\"bar\">\n      <div class=\"footer-cell text-right\">\n        <mat-icon style=\"font-size: 16px;\">autorenew</mat-icon>\n        <span>Tap to flip</span>\n      </div>\n    </div>\n  </mat-card>\n\n  <mat-card class=\"back p-4\">\n    <div class=\"bar\">\n      <button mat-icon-button>\n        <mat-icon>volume_up</mat-icon>\n      </button>\n      <button mat-icon-button>\n        <mat-icon>star_outline</mat-icon>\n      </button>\n    </div>\n\n    <div (click)=\"flipCard()\" class=\"center-content mb-0\">\n      side2\n    </div>\n\n    <div class=\"bar\">\n      <div class=\"footer-cell text-right\">\n        <mat-icon style=\"font-size: 16px;\">autorenew</mat-icon>\n        <span>Tap to flip</span>\n      </div>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/flashcard/flashcard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flashcard-container {\n  padding: 0;\n  height: 100%;\n  -webkit-transition: -webkit-transform 0.4s;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.front,\n.back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\n.center-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: auto;\n  cursor: pointer; }\n\n.front {\n  width: 100%;\n  height: 100%; }\n\n.back {\n  width: 100%;\n  height: 100%;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.bar {\n  width: 100%;\n  text-align: right; }\n\n.footer-cell {\n  color: #757575;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flashcard/flashcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashcardComponent; });
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

var FlashcardComponent = /** @class */ (function () {
    function FlashcardComponent(renderer) {
        this.renderer = renderer;
    }
    FlashcardComponent.prototype.ngOnInit = function () {
    };
    FlashcardComponent.prototype.ngAfterViewInit = function () {
    };
    FlashcardComponent.prototype.flipCard = function ($event) {
        if (this.flashcard.nativeElement.style.transform == "rotateY(180deg)") {
            this.flashcard.nativeElement.style.transform = "rotateY(0deg)";
        }
        else {
            this.flashcard.nativeElement.style.transform = "rotateY(180deg)";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('card'),
        __metadata("design:type", Object)
    ], FlashcardComponent.prototype, "flashcard", void 0);
    FlashcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flashcard',
            template: __webpack_require__("../../../../../src/app/components/flashcard/flashcard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/flashcard/flashcard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], FlashcardComponent);
    return FlashcardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container-col mat-elevation-z6\" fxHide=\"false\" fxHide.lt-sm>\n    <div class=\"row\">\n        <div class=\"col text-left mt-3\">\n            <button mat-button class=\"ml-2\">\n                <mat-icon>arrow_back</mat-icon>\n                <span>Back</span>\n            </button>\n            <hr>\n        </div>\n    </div>\n\n    <div class=\"row mb-4\">\n        <div class=\"col\">\n            <mat-list>\n                <mat-list-item>\n                    <mat-icon mat-list-icon class=\"amber-text\">layers</mat-icon>\n                    <h4 mat-line class=\"cards-line\">CARDS</h4>\n                </mat-list-item>\n            </mat-list>\n        </div>\n    </div>\n\n    <div class=\"row justify-content-center\">\n        <mat-progress-bar mode=\"determinate\" value=\"40\" color=\"accent\" class=\"w-75\" style=\"height: 10px;\"></mat-progress-bar>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-6 text-left\">\n            <span class=\"ml-4 prog-text\">Progress</span>\n        </div>\n        <div class=\"col-6 text-right\">\n            <span class=\"mr-4 prog-text\">14/56</span>\n        </div>\n    </div>\n\n    <div class=\"row fill-col\"></div>\n\n    <div class=\"row mb-4\">\n        <div class=\"col-12 text-center\">\n            <button class=\"option-button option-button-outline\" mat-button>\n                <mat-icon>play_arrow</mat-icon>\n                <span>Play</span>\n            </button>\n        </div>\n        <div class=\"col-12 text-center\">\n            <button class=\"option-button option-button-outline\" mat-button>\n                <mat-icon>shuffle</mat-icon>\n                <span>Shuffle</span>\n            </button>\n        </div>\n        <div class=\"col-12 text-center\">\n            <button class=\"option-button white-text\" mat-raised-button color=\"accent\">\n                <mat-icon>tune</mat-icon>\n                <span>Options</span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<!-- Mobile View -->\n<div class=\"sidenav-container-row mat-elevation-z11\" fxHide=\"false\" fxHide.gt-xs>\n    <div class=\"row m-0 h-100\">\n        <div class=\"col-2 align-self-center m-0\">\n            <button mat-button class=\"ml-2\">\n                <mat-icon>arrow_back</mat-icon>\n                <span>Back</span>\n            </button>\n        </div>\n\n        <div class=\"col align-self-center text-right m-0\">\n            <button mat-icon-button>\n                <mat-icon>play_arrow</mat-icon>\n            </button>\n            <button mat-icon-button>\n                <mat-icon>shuffle</mat-icon>\n            </button>\n            <button mat-icon-button>\n                <mat-icon>tune</mat-icon>\n            </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-container-col {\n  height: 100%;\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\n.sidenav-container-row {\n  height: 100%;\n  background-color: white; }\n\n.cards-line {\n  font-weight: bold;\n  letter-spacing: 1px; }\n\n.prog-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #757575; }\n\n.fill-col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  /* 1 and it will fill whole space left if no flex value are set to other children*/\n  overflow: auto; }\n\n.option-button {\n  width: 200px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding: 5px; }\n\n.option-button-outline {\n  border: 2px solid #BDBDBD;\n  color: #FF9800; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashcardsSidenavComponent; });
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

var FlashcardsSidenavComponent = /** @class */ (function () {
    function FlashcardsSidenavComponent() {
    }
    FlashcardsSidenavComponent.prototype.ngOnInit = function () {
    };
    FlashcardsSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flashcards-sidenav',
            template: __webpack_require__("../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/flashcards-sidenav/flashcards-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlashcardsSidenavComponent);
    return FlashcardsSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/flashcards/flashcards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container full-height-container\">\n  <div class=\"row justify-content-center full-height\">\n    <div class=\"col-3 sidenav-col hidden-sm-down\">\n      <app-flashcards-sidenav></app-flashcards-sidenav>\n    </div>\n    <div class=\"col text-center\">\n      <div class=\"row h-100\">\n        <div class=\"col-12 p-0 flashcard-container-col\">\n          <div class=\"sidenav-mobile hidden-sm-up\">\n            <app-flashcards-sidenav></app-flashcards-sidenav>\n          </div>\n          <div class=\"mt-4 mb-3 hidden-sm-down\">\n            <!-- Spacer div -->\n          </div>\n          <div class=\"flashcard-container p-3\">\n            <app-flashcard></app-flashcard>\n          </div>\n          <div class=\"card-controls\">\n            <div class=\"row m-0 h-100\">\n              <div class=\"col-2 col-md-5 align-self-center text-sm-center text-center\">\n                <button mat-icon-button class=\"bg-amber white-text\">\n                  <mat-icon>arrow_left</mat-icon>\n                </button>\n              </div>\n              <div class=\"col align-self-center\">\n                <mat-progress-bar mode=\"determinate\" value=\"40\" color=\"accent\" style=\"height: 10px;\" fxHide=\"false\" fxHide.gt-xs></mat-progress-bar>\n              </div>\n              <div class=\"col-2 col-md-5 align-self-center text-sm-center text-center\">\n                <button mat-icon-button class=\"bg-amber white-text\">\n                  <mat-icon>arrow_right</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/flashcards/flashcards.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-height {\n  height: calc(100vh - 70px); }\n\n.flashcard-container {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  max-width: 600px;\n  max-height: 600px;\n  display: block;\n  margin-right: auto;\n  margin-left: auto; }\n\n.sidenav-col {\n  min-width: 300px; }\n\n.h-10 {\n  height: 10%; }\n\n.sidenav-mobile {\n  height: 50px;\n  width: 100%; }\n\n.card-controls {\n  height: 70px;\n  width: 100%; }\n\n@media only screen and (max-width: 768px) {\n  .flashcard-container-col {\n    max-height: 80%; }\n  .text-sm-right {\n    text-align: right; }\n  .text-sm-left {\n    text-align: left; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flashcards/flashcards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashcardsComponent; });
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

var FlashcardsComponent = /** @class */ (function () {
    function FlashcardsComponent() {
    }
    FlashcardsComponent.prototype.ngOnInit = function () {
    };
    FlashcardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flashcards',
            template: __webpack_require__("../../../../../src/app/components/flashcards/flashcards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/flashcards/flashcards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlashcardsComponent);
    return FlashcardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-flashcards></app-flashcards>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"bg-deep-purple navbar m-0\">\n\n  <button mat-button routerLink=\"/\" class=\"ml-1 white-text elements-button\" *ngIf=\"!searchBarActive\" fxHide=\"false\" fxHide.gt-xs>\n    <mat-icon fxHide=\"false\" fxHide.lt-sm>airline_seat_recline_extra</mat-icon>\n    <span>ELEMENTS</span>\n  </button>\n\n  <button mat-button routerLink=\"/\" class=\"ml-1 white-text elements-button\" fxHide=\"false\" fxHide.lt-sm>\n    <mat-icon fxHide=\"false\" fxHide.lt-sm>airline_seat_recline_extra</mat-icon>\n    <span>ELEMENTS</span>\n  </button>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"fill-remaining-space\">\n    <div class=\"search-bar\" [ngClass]=\"{'mat-elevation-z3': searchBarActive}\">\n      <div class=\"search-icon-container search-bar-cell\" [ngClass]=\"{'search-icon-container-active': searchBarActive}\">\n        <button mat-icon-button class=\"search-icon\" (click)=\"toggleSearchBar()\">\n          <mat-icon *ngIf=\"!searchBarActive\">search</mat-icon>\n          <mat-icon *ngIf=\"searchBarActive\">close</mat-icon>\n        </button>\n      </div>\n      <input #input class=\"exp-input search-bar-cell\" [ngClass]=\"{'exp-input-active': searchBarActive}\" placeholder=\"Search\" (blur)=\"onSearchUnfocus()\">\n    </div>\n  </span>\n\n  <button mat-icon-button class=\"white-text\" *ngIf=\"!searchBarActive\" fxHide=\"false\" fxHide.gt-xs>\n    <mat-icon>add_box</mat-icon>\n  </button>\n\n  <button mat-button class=\"white-text ml-1 mr-1\" fxHide=\"false\" fxHide.lt-sm>\n    <mat-icon>add_box</mat-icon>\n    <span>Create</span>\n  </button>\n\n  <button mat-button class=\"white-text ml-1 mr-1\" fxHide=\"false\" fxHide.lt-sm>\n    <span>Login</span>\n  </button>\n\n  <button mat-raised-button color=\"accent\" class=\"white-text ml-1 mr-1\" fxHide=\"false\" fxHide.lt-sm>\n    <span>Sign Up</span>\n  </button>\n\n  <button mat-icon-button [mat-menu-trigger-for]=\"menu\" class=\"white-text\" *ngIf=\"!searchBarActive\" fxHide=\"false\" fxHide.gt-xs>\n    <mat-icon>menu</mat-icon>\n  </button>\n  <!-- <button mat-button (click)=\"sidenav.open()\" fxHide=\"false\" fxHide.gt-xs>\n    <span>Mobile View</span>\n    <mat-icon>menu</mat-icon>\n  </button> -->\n\n</mat-toolbar>\n\n<mat-menu x-position=\"before\" #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Login</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon>person_add</mat-icon>\n    <span>Sign Up</span>\n  </button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.\n   Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.elements-button {\n  font-size: 18px;\n  letter-spacing: 2px; }\n\n.navbar {\n  height: 70px; }\n\n.search-bar {\n  display: table;\n  width: 100%;\n  max-width: 600px;\n  -webkit-transition: -webkit-box-shadow 250ms ease-in-out;\n  transition: -webkit-box-shadow 250ms ease-in-out;\n  transition: box-shadow 250ms ease-in-out;\n  transition: box-shadow 250ms ease-in-out, -webkit-box-shadow 250ms ease-in-out; }\n\n.search-bar-cell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.search-icon-container {\n  width: 30px;\n  display: inline-table;\n  border-top-left-radius: 0.2em;\n  border-bottom-left-radius: 0.2em;\n  color: white;\n  -webkit-transition: background-color 250ms ease-in-out;\n  transition: background-color 250ms ease-in-out; }\n\n.search-icon-container-active {\n  background-color: white;\n  color: #2b2b2b; }\n\n.search-icon {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  padding-top: 1px; }\n\n.exp-input-active {\n  width: calc(100% - 40px) !important;\n  background-color: white !important; }\n\n.exp-input-active::-webkit-input-placeholder {\n    opacity: 1 !important; }\n\n.exp-input-active:-ms-input-placeholder {\n    opacity: 1 !important; }\n\n.exp-input-active::-ms-input-placeholder {\n    opacity: 1 !important; }\n\n.exp-input-active::placeholder {\n    opacity: 1 !important; }\n\n.exp-input {\n  width: 0;\n  height: 40px;\n  border-top-right-radius: 0.2em;\n  border-bottom-right-radius: 0.2em;\n  border: 0;\n  outline: none;\n  color: #222222;\n  background-color: transparent;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out; }\n\n.exp-input::-webkit-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #C5CAE9;\n    opacity: 0;\n    /* Firefox */ }\n\n.exp-input:-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #C5CAE9;\n    opacity: 0;\n    /* Firefox */ }\n\n.exp-input::-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #C5CAE9;\n    opacity: 0;\n    /* Firefox */ }\n\n.exp-input::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #C5CAE9;\n    opacity: 0;\n    /* Firefox */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngAfterViewInit = function () { };
    NavbarComponent.prototype.toggleSearchBar = function (forceBlur) {
        if (this.blurFlag) {
            this.blurFlag = false;
            return;
        }
        this.searchBarActive = !this.searchBarActive;
        if (this.searchBarActive) {
            this.vc.first.nativeElement.focus();
        }
    };
    NavbarComponent.prototype.onSearchUnfocus = function () {
        console.log('unfocus');
        this.blurFlag = true;
        this.searchBarActive = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChildren */])('input'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "vc", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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