webpackJsonp([0],{

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    //map: GoogleMap;
    function MapPage(navCtrl, googleMaps) {
        this.navCtrl = navCtrl;
        this.googleMaps = googleMaps;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    MapPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(20.489972, -87.242412);
        var options = {
            center: location,
            zoom: 15.5
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapRef", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-image">\n  <div #map id="map"></div>\n  <ion-grid>\n\n  </ion-grid>\n  <!--<div #map_canvas id="map_canvas"></div>-->\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button style="width: 100%" (click)="showDiv()">22</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button style="width: 100%" (click)="showDiv()">23</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button style="width: 100%" (click)="showDiv()">24</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button style="width: 100%" (click)="showDiv()">25</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button style="width: 100%" (click)="showDiv()">26</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SpeakersPage.prototype.hide = function (name) {
        if (document.getElementById(name).style.display === 'block') {
            document.getElementById(name).style.display = "none";
        }
        else {
            document.getElementById(name).style.display = "block";
        }
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/speakers/speakers.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Speakers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n  <ion-grid>\n    <ion-row>\n      <img src="../../assets/imgs/images/amy_emme.png" alt="Avatar" (click)=hide(1)>\n    </ion-row>\n    <ion-row id="1" style="display:none">\n      <ion-card>\n        <ion-card-header style="background-color:orange" align="center">\n          <b><font color="#060E29" size="4">Amy Emme</font></b>\n        </ion-card-header>\n        <ion-list>\n          <ion-card-content>\n            <p align="justify"><font size="3">Entrenadora de corporativo en temas de\n              Liderazgo Motivaciones, Oradora, Coach ejecutiva de Estrategias de Negocio.\n              Exitosa mujer, energética, inspiradora y educadora de audiencias para\n              convertirlas en casos de éxito. Convirtió su exitoso negocio de arquería\n              en el Más grande Centro de Capacitación del Mundo, se enfocó en deportistas\n              Olimpicos que llevó con sus estrategias a alcanzar su máximo nivel de competencia.</font></p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n       <p></p>\n    </ion-row>\n    <ion-row>\n      <img src="../../assets/imgs/images/rob_ryan.png" alt="Avatar" (click)=hide(2)>\n    </ion-row>\n    <ion-row id="2" style="display:none">\n      <ion-card>\n        <ion-card-header style="background-color:orange" align="center">\n          <b><font color="#060E29" size="4">Rob Ryan</font></b>\n        </ion-card-header>\n        <ion-list>\n          <ion-card-content>\n            <p align="justify"><font size="3">Papá, fundador, inversionista de Capital de riesgo,\n              Conector y mentor de compañías y sus fundadores en todo el mundo.\n              Es narrador de redes sociales, orador público sobre emprendimiento global\n              en el siglo XXI y fundador y CEO de 4 empresas. </font></p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n    <ion-row padding-top="10px">\n      <ion-card>\n        <ion-card-header style="background-color:#060E29">\n          <b><font color="white">Guests</font></b>\n        </ion-card-header>\n        <ion-list>\n          <ion-card-content>\n            <b>ASCIENDE COMPUTACIÓN, S.A. DE C.V.</b> (GDL-MEX)\n          </ion-card-content>\n          <ion-card-content>\n            <b>CONVERGENCIA TECNOLÓGICA DE OCCIDENTE, S.A. DE C.V.</b> (GDL-MEX)\n          </ion-card-content>\n          <ion-card-content>\n            <b>FRANJA IT SAS</b> (BTA-COL)\n          </ion-card-content>\n          <ion-card-content>\n            <b>LEONTIC INNOVA, S.L.</b> (LEON-ESP)\n          </ion-card-content>\n          <ion-card-content>\n            <b>MAYACCESS A.S. DE C.V.</b> (Q ROO-MEX)\n          </ion-card-content>\n          <ion-card-content>\n            <b>PC-SOFTWARE</b> (GDL-MEX)\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/speakers/speakers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelExperiencePage = /** @class */ (function () {
    function HotelExperiencePage(navCtrl, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    HotelExperiencePage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    HotelExperiencePage.prototype.pressButton = function (choice) {
        var s = new String(document.getElementById(choice).style.display);
        if (s == "none") {
            document.getElementById(choice).style.display = "block";
        }
        else if (s == "block") {
            document.getElementById(choice).style.display = "none";
        }
    };
    HotelExperiencePage.prototype.pressInButton = function (choice, num) {
        var s = new String(document.getElementById(choice).style.display);
        if (s == "none") {
            document.getElementById(choice).style.display = "block";
            for (var i = 1; i < 26; i++) {
                var x = i.toString();
                if (x === num) {
                    document.getElementById(x).style.display = "block";
                }
                else {
                    document.getElementById(x).style.display = "none";
                }
            }
        }
        else if (s == "block") {
            document.getElementById(choice).style.display = "none";
            for (var i = 1; i < 26; i++) {
                var x = i.toString();
                if (x === '1') {
                    document.getElementById(x).style.display = "block";
                }
                else {
                    document.getElementById(x).style.display = "none";
                }
            }
        }
    };
    HotelExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotelExperience',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/hotelExperience/hotelExperience.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hotel Experience</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-image">\n\n  <ion-grid>\n    <ion-row id="1" style="display:block">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/mapa-limpio.png" style="width:100%; height:100%" #myImage1 (click)="presentImage(myImage1)">\n    </ion-row>\n    <ion-row id="2" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya palace-actividades.png" style="width:100%; height:100%" #myImage2 (click)="presentImage(myImage2)">\n    </ion-row>\n    <ion-row id="3" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya tropical-actividades.png" style="width:100%; height:100%" #myImage3 (click)="presentImage(myImage3)">\n    </ion-row>\n    <ion-row id="4" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya colonial-actividades.png" style="width:100%; height:100%" #myImage4 (click)="presentImage(myImage4)">\n    </ion-row>\n    <ion-row id="5" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya caribe-actividades.png" style="width:100%; height:100%" #myImage5 (click)="presentImage(myImage5)">\n    </ion-row>\n    <ion-row id="6" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya beach-actividades.png" style="width:100%; height:100%" #myImage6 (click)="presentImage(myImage6)">\n    </ion-row>\n    <ion-row id="7" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/MAPA ACTIVIDADES.png" style="width:100%; height:100%" #myImage7 (click)="presentImage(myImage7)">\n    </ion-row>\n    <ion-row id="8" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/maya palace-restaurantes.png" style="width:100%; height:100%" #myImage8 (click)="presentImage(myImage8)">\n    </ion-row>\n    <ion-row id="9" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/maya tropical-Restaurantes.png" style="width:100%; height:100%" #myImage9 (click)="presentImage(myImage9)">\n    </ion-row>\n    <ion-row id="10" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/maya colonial-restaurantes.png" style="width:100%; height:100%" #myImage10 (click)="presentImage(myImage10)">\n    </ion-row>\n    <ion-row id="11" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/maya caribe-restaurantes.png" style="width:100%; height:100%" #myImage11 (click)="presentImage(myImage11)">\n    </ion-row>\n    <ion-row id="12" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/maya beach-restaurantes.png" style="width:100%; height:100%" #myImage12 (click)="presentImage(myImage12)">\n    </ion-row>\n    <ion-row id="13" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/MAPA RESTAURANTES.png" style="width:100%; height:100%" #myImage13 (click)="presentImage(myImage13)">\n    </ion-row>\n    <ion-row id="14" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya palace-bares.png" style="width:100%; height:100%" #myImage14 (click)="presentImage(myImage14)">\n    </ion-row>\n    <ion-row id="15" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya tropical-bares.png" style="width:100%; height:100%" #myImage15 (click)="presentImage(myImage15)">\n    </ion-row>\n    <ion-row id="16" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya colonial-bares.png" style="width:100%; height:100%" #myImage16 (click)="presentImage(myImage16)">\n    </ion-row>\n    <ion-row id="17" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya caribe-bares.png" style="width:100%; height:100%" #myImage17 (click)="presentImage(myImage17)">\n    </ion-row>\n    <ion-row id="18" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya beach-bares.png" style="width:100%; height:100%" #myImage18 (click)="presentImage(myImage18)">\n    </ion-row>\n    <ion-row id="19" style="display:none">\n      <img src="../../assets/imgs/images/reimagenesmapabarcelo/MAPA BARES.png" style="width:100%; height:100%" #myImage19 (click)="presentImage(myImage19)">\n    </ion-row>\n    <ion-row id="20" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya palace-services.png" style="width:100%; height:100%" #myImage20 (click)="presentImage(myImage20)">\n    </ion-row>\n    <ion-row id="21" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya tropical-services.png" style="width:100%; height:100%" #myImage21 (click)="presentImage(myImage21)">\n    </ion-row>\n    <ion-row id="22" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya colonial-services.png" style="width:100%; height:100%" #myImage22 (click)="presentImage(myImage22)">\n    </ion-row>\n    <ion-row id="23" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya caribe-services.png" style="width:100%; height:100%" #myImage23 (click)="presentImage(myImage23)">\n    </ion-row>\n    <ion-row id="24" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/maya beach services.png" style="width:100%; height:100%" #myImage24 (click)="presentImage(myImage24)">\n    </ion-row>\n    <ion-row id="25" style="display:none">\n      <img src="../../assets/imgs/images/imagenesmapabarcelo/MAPA SERVICES.png" style="width:100%; height:100%" #myImage25 (click)="presentImage(myImage25)">\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style="padding-top:5%">\n    <ion-row>\n      <button ion-button full round (click)="pressButton(\'a\')">\n        <b>Actividades</b>\n      </button>\n    </ion-row>\n    <ion-row id="a" style="display:none">\n      <ion-card>\n        <ion-list>\n          <button ion-item (click)="pressInButton(\'a1\', \'2\')">\n            <b>Maya Palace</b>\n          </button>\n          <ion-card-content id="a1" style="display:none">\n            <p>7 - <b>Monte Albán</b> teatro</p>\n            <p>8 - Piscina semi-olímpica</p>\n            <p>9 - Actividades</p>\n            <p>10 - Piscina de adultos</p>\n            <p>11 - Spa & Fitness</p>\n            <p>12 - <b>Barcy Club</b> & Water park</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'a2\', \'3\')">\n            <b>Maya Tropical</b>\n          </button>\n          <ion-card-content id="a2" style="display:none">\n            <p>20 - <b>Palenque</b> teatro</p>\n            <p>21 - Piscina semi-olímpica</p>\n            <p>22 - Actividades</p>\n            <p>23 - Cancha multiusos</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'a3\', \'4\')">\n            <b>Maya Colonial</b>\n          </button>\n          <ion-card-content id="a3" style="display:none">\n            <p>30 - U Spa & Fitness Center</p>\n            <p>31 - <b>Barcy Club</b> & Water park</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'a4\', \'5\')">\n            <b>Maya Caribe</b>\n          </button>\n          <ion-card-content id="a4" style="display:none">\n            <p>37 - <b>Kukulcán</b> teatro</p>\n            <p>39 - Actividades</p>\n            <p>40 - <b>Barcy Club</b> & Kids pool</p>\n            <p>41 - <b>Wet & Sun Beach Shop & Diving Center</b> Deportes Náuticos</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'a5\', \'6\')">\n            <b>Maya Beach</b>\n          </button>\n          <ion-card-content id="a5" style="display:none">\n            <p>49 - Actividades</p>\n            <p>50 - Piscina semi-olímpica</p>\n            <p>51 - Piscina de adultos</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'a6\', \'7\')">\n            <b>Todos</b>\n          </button>\n          <ion-card-content id="a6" style="display:none">\n            <p>7 - <b>Monte Albán</b> teatro</p>\n            <p>8 - Piscina semi-olímpica</p>\n            <p>9 - Actividades</p>\n            <p>10 - Piscina de adultos</p>\n            <p>11 - Spa & Fitness</p>\n            <p>12 - <b>Barcy Club</b> & Water park</p>\n            <p>20 - <b>Palenque</b> teatro</p>\n            <p>21 - Piscina semi-olímpica</p>\n            <p>22 - Actividades</p>\n            <p>23 - Cancha multiusos</p>\n            <p>30 - U Spa & Fitness Center</p>\n            <p>31 - <b>Barcy Club</b> & Water park</p>\n            <p>37 - <b>Kukulcán</b> teatro</p>\n            <p>39 - Actividades</p>\n            <p>40 - <b>Barcy Club</b> & Kids pool</p>\n            <p>41 - <b>Wet & Sun Beach Shop & Diving Center</b> Deportes Náuticos</p>\n            <p>49 - Actividades</p>\n            <p>50 - Piscina semi-olímpica</p>\n            <p>51 - Piscina de adultos</p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <button ion-button full round (click)="pressButton(\'b\')">\n        <b>Restaurantes</b>\n      </button>\n    </ion-row>\n    <ion-row id="b" style="display:none">\n      <ion-card>\n        <ion-list>\n          <button ion-item (click)="pressInButton(\'b1\', \'8\')">\n            <b>Maya Palace</b>\n          </button>\n          <ion-card-content id="b1" style="display:none">\n            <p>4 - <b>Mirador</b> buffet, <b>La Hacienda</b> buffet</p>\n            <p>5 - <b>Rodizio</b> (brasileño), <b>Brasserie</b> (francés), <b>Caribe</b> (caribeño)</p>\n            <p>6 - <b>Coral</b> grill</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'b2\', \'9\')">\n            <b>Maya Tropical</b>\n          </button>\n          <ion-card-content id="b2" style="display:none">\n            <p>17 - <b>Tropical</b> buffet</p>\n            <p>18 - <b>Capri</b> (italiano), <b>Santa Fé</b> (steak house)</p>\n            <p>19 - <b>Palmeras</b> grill</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'b3\', \'10\')">\n            <b>Maya Colonial</b>\n          </button>\n          <ion-card-content id="b3" style="display:none">\n            <p>27 - <b>Colonial</b> buffet</p>\n            <p>28 - <b>Mare Nostrume</b> (pescados y mariscos), <b>Kyoto</b> (japonés)</p>\n            <p>29 - <b>Mariachi</b> grill</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'b4\', \'11\')">\n            <b>Maya Caribe</b>\n          </button>\n          <ion-card-content id="b4" style="display:none">\n            <p>34 - <b>Caribe</b> buffet</p>\n            <p>35 - <b>La Fuente</b> (español)</p>\n            <p>38 - <b>Capitán Morgan</b> grill</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'b5\', \'12\')">\n            <b>Maya Beach</b>\n          </button>\n          <ion-card-content id="b5" style="display:none">\n            <p>46 - <b>Beach</b> buffet</p>\n            <p>47 - <b>México Lindo</b> (mexicano)</p>\n            <p>48 - <b>Rancho Grande</b> grill</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'b6\', \'13\')">\n            <b>Todos</b>\n          </button>\n          <ion-card-content id="b6" style="display:none">\n            <p>4 - <b>Mirador</b> buffet, <b>La Hacienda</b> buffet</p>\n            <p>5 - <b>Rodizio</b> (brasileño), <b>Brasserie</b> (francés), <b>Caribe</b> (caribeño)</p>\n            <p>6 - <b>Coral</b> grill</p>\n            <p>17 - <b>Tropical</b> buffet</p>\n            <p>18 - <b>Capri</b> (italiano), <b>Santa Fé</b> (steak house)</p>\n            <p>19 - <b>Palmeras</b> grill</p>\n            <p>27 - <b>Colonial</b> buffet</p>\n            <p>28 - <b>Mare Nostrum</b> (pescados y mariscos), <b>Kyoto</b> (japonés)</p>\n            <p>29 - <b>Mariachi</b> grill</p>\n            <p>34 - <b>Caribe</b> buffet</p>\n            <p>35 - <b>La Fuente</b> (español)</p>\n            <p>38 - <b>Capitán Morgan</b> grill</p>\n            <p>46 - <b>Beach</b> buffet</p>\n            <p>47 - <b>México Lindo</b> (mexicano)</p>\n            <p>48 - <b>Rancho Grande</b> grill</p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <button ion-button full round (click)="pressButton(\'c\')">\n        <b>Bar</b>\n      </button>\n    </ion-row>\n    <ion-row id="c" style="display:none">\n      <ion-card>\n        <ion-list>\n          <button ion-item (click)="pressInButton(\'c1\', \'14\')">\n            <b>Maya Palace</b>\n          </button>\n          <ion-card-content id="c1" style="display:none">\n            <p>2 - <b>Carey</b> Lobby Bar</p>\n            <p>9 - <b>Coco</b> Bar</p>\n            <p>10 - <b>El Cielo</b> Bar</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'c2\', \'15\')">\n            <b>Maya Tropical</b>\n          </button>\n          <ion-card-content id="c2" style="display:none">\n            <p>15 - <b>Tequila</b> Lobby Bar</p>\n            <p>16 - <b>La Cantina</b> Tequila & Cigarette Bar</p>\n            <p>19 - Pool Bar</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'c3\', \'16\')">\n            <b>Maya Colonial</b>\n          </button>\n          <ion-card-content id="c3" style="display:none">\n            <p>25 - <b>Puebla</b> Lobby Bar</p>\n            <p>29 - <b>Mariachi</b> Pool Bar</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'c4\', \'17\')">\n            <b>Maya Caribe</b>\n          </button>\n          <ion-card-content id="c4" style="display:none">\n            <p>36 - <b>The Mall Bar</b> Lobby Bar</p>\n            <p>38 - <b>Capitán Morgan</b> Pool Bar</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'c5\', \'18\')">\n            <b>Maya Beach</b>\n          </button>\n          <ion-card-content id="c5" style="display:none">\n            <p>43 - <b>Beach</b> Lobby Bar</p>\n            <p>48 - <b>Ranchito Grande</b> Pool Bar</p>\n            <p>51 - <b>El Cielito</b> Bar</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'c6\', \'19\')">\n            <b>Todos</b>\n          </button>\n          <ion-card-content id="c6" style="display:none">\n            <p>2 - <b>Carey</b> Lobby Bar</p>\n            <p>9 - <b>Coco</b> Bar</p>\n            <p>10 - <b>El Cielo</b> Bar</p>\n            <p>15 - <b>Tequila</b> Lobby Bar</p>\n            <p>16 - <b>La Cantina</b> Tequila & Cigarette Bar</p>\n            <p>19 - Pool Bar</p>\n            <p>25 - <b>Puebla</b> Lobby Bar</p>\n            <p>29 - <b>Mariachi</b> Pool Bar</p>\n            <p>36 - <b>The Mall Bar</b> Lobby Bar</p>\n            <p>38 - <b>Capitán Morgan</b> Pool Bar</p>\n            <p>43 - <b>Beach</b> Lobby Bar</p>\n            <p>48 - <b>Ranchito Grande</b> Pool Bar</p>\n            <p>51 - <b>El Cielito</b> Bar</p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <button ion-button full round (click)="pressButton(\'d\')">\n        <b>Servicios</b>\n      </button>\n    </ion-row>\n    <ion-row id="d" style="display:none">\n      <ion-card>\n        <ion-list>\n          <button ion-item (click)="pressInButton(\'d1\', \'14\')">\n            <b>Maya Palace</b>\n          </button>\n          <ion-card-content id="d1" style="display:none">\n            <p>1 - Lobby, Guest Service, Gift Shop, Premium Level Lounge</p>\n            <p>3 - <b>Chak-Halal, Tule</b> Salones</p>\n            <p>9 - Toallas</p>\n            <p>11 - Artesanías</p>\n            <p>13 - <b>Convention Center</b></p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'d2\', \'15\')">\n            <b>Maya Tropical</b>\n          </button>\n          <ion-card-content id="d2" style="display:none">\n            <p>14 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>22 - Toallas, Gift Shop, Artesanías</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'d3\', \'16\')">\n            <b>Maya Colonial</b>\n          </button>\n          <ion-card-content id="d3" style="display:none">\n            <p>24 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>26 - <b>Barceló Maya Convention Center</b></p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'d4\', \'17\')">\n            <b>Maya Caribe</b>\n          </button>\n          <ion-card-content id="d4" style="display:none">\n            <p>32 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>33 - <b>Jaguar</b> salones</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'d5\', \'18\')">\n            <b>Maya Beach</b>\n          </button>\n          <ion-card-content id="d5" style="display:none">\n            <p>42 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>44 - <b>Chac Mool</b> salones</p>\n            <p>45 - <b>Gift Shop, Jewelry & Logshop</b></p>\n            <p>49 - Toallas y artesanías</p>\n          </ion-card-content>\n          <button ion-item (click)="pressInButton(\'d6\', \'19\')">\n            <b>Todos</b>\n          </button>\n          <ion-card-content id="d6" style="display:none">\n            <p>1 - Lobby, Guest Service, Gift Shop, Premium Level Lounge</p>\n            <p>3 - <b>Chak-Halal, Tule</b> Salones</p>\n            <p>9 - Toallas</p>\n            <p>11 - Artesanías</p>\n            <p>13 - <b>Convention Center</b></p>\n            <p>14 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>22 - Toallas, Gift Shop, Artesanías</p>\n            <p>24 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>26 - <b>Barceló Maya Convention Center</b></p>\n            <p>32 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>33 - <b>Jaguar</b> salones</p>\n            <p>42 - Lobby, Guest Service, Gift Shop, Premium Level Lounge, Vacaciones Barceló (Tours)</p>\n            <p>44 - <b>Chac Mool</b> salones</p>\n            <p>45 - <b>Gift Shop, Jewelry & Logshop</b></p>\n            <p>49 - Toallas y artesanías</p>\n          </ion-card-content>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/hotelExperience/hotelExperience.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], HotelExperiencePage);
    return HotelExperiencePage;
}());

//# sourceMappingURL=hotelExperience.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SponsorsPage.prototype.hide = function (name) {
        if (document.getElementById(name).style.display === 'block') {
            document.getElementById(name).style.display = "none";
        }
        else {
            document.getElementById(name).style.display = "block";
        }
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/sponsors/sponsors.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sponsors</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-image">\n\n\n  <ion-grid style="padding-top:10%">\n    <ion-row style="padding-left: 10%; padding-right: 10%">\n      <img src="../../assets/imgs/images/tsplus_logo.png" style="width: 100%; height: 100%" (click)=hide(1)>\n      <div id="1" style="display:none">\n        <h2>TS PLUS</h2>\n        <p>Aplicación segura para acceso remoto que transforma cualquier versión de\n          Sistema Operativo Microsoft en un poderoso servidor Multiusuario de sesiones\n          y aplicaciones, con una avanzada funcionalidad, ventajas en impresión y\n          conectividad por web o html5. Permite conectarse y ejecutar las aplicaciones\n          publicadas para un usuario particular o bien, ver una sesión de escritorio remoto.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="../../assets/imgs/images/neogenesys_logo.png" style="width: 100%; height: 100%" (click)=hide(2)>\n      <div id="2" style="display:none">\n        <h2>NEOGENSYS</h2>\n        <p>Empresa con más de 18 años de experiencia especializada en identificar productos\n          de alta tecnología a nivel mundial e incorporarlos al mercado  Latinoamericano.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="../../assets/imgs/images/synology_logo.png" style="width: 100%; height: 100%" (click)=hide(3)>\n      <div id="3" style="display:none">\n        <h2>SYNOLOGY</h2>\n        <p>Servidores de Almacenamiento de Datos, solución para todos los tamaños y giros\n          de empresas, utilizando el sistema operativo "DSM" desarrollado por Synology\n          para facilitar su uso y administración mediante una avanzada interfaz gráfica\n          muy amigable.  Las soluciones tienen una gama de funciones incluidas, así como\n          una avanzada interfaz gráfica amigable.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="../../assets/imgs/images/sby_instituto_logo.png" style="width: 100%; height: 100%" (click)=hide(4)>\n      <div id="4" style="display:none">\n        <h2>SBY</h2>\n        <p>Comunidad en  donde encontrarás herramientas que te permitirán llegar un\n          equilibrio en todas las áreas de tu vida: Fisica, Emocional, Espiritual, Mental\n          y Económica.  Nuestro objetivo es crear un estilo de vida en donde encuentres\n          eso que te permita elevar tu calida de vida.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="../../assets/imgs/images/sby_instituto_logo.png" style="width: 100%; height: 100%" (click)=hide(5)>\n      <div id="5" style="display:none">\n        <h2>INSTITUTO SBY</h2>\n        <p>Institución dedicada a la capacitación de profesionales y no profesionales\n          de la salud en diferentes temas que afectan la salud mundial, con un enfoque\n          multidisciplinario que permita abolir estos padecimientos.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="" style="width: 100%; height: 100%" (click)=hide(6)>\n      <div id="6" style="display:none">\n        <h2>SBY CELLS</h2>\n        <p>Somos distribuidores  autorizados de CbCells Bio Technology en el uso de\n          células madre para su comercialización, distribución y aplicación.</p>\n      </div>\n    </ion-row>\n    <ion-row style="padding-left: 10%; padding-right: 10%; padding-top:10%">\n      <img src="" style="width: 100%; height: 100%" (click)=hide(7)>\n      <div id="7" style="display:none">\n        <h2>APPLEBRIJE</h2>\n        <p></p>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/sponsors/sponsors.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, afAuth, alertCtrl, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.myForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.user = afAuth.authState;
        this.menuCtrl.enable(false, 'myMenu');
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        console.log("Email:" + this.myForm.value.email);
        console.log("Password:" + this.myForm.value.password);
        this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(function () {
            console.log("User logging");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */]);
        }, function (err) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    message: err.message,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        });
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/login/login.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content> -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-image">\n  <div padding text-center>\n    <img width="200px" src="../../assets/imgs/images/tsplus_neo_logo.png">\n  </div>\n\n  <form [formGroup]="myForm" (ngSubmit)="loginUser()">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Email:</ion-label>\n        <ion-input formControlName="email" type="text" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="key" item-left></ion-icon>\n        <ion-label stacked>Password:</ion-label>\n        <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!myForm.valid">Ingresar</button>\n    </div>\n  </form>\n  <div text-center>\n    <a ion-button block clear (click)="goToSignup()">\n      Nueva cuenta\n    </a>\n    <a ion-button block clear (click)="goToResetPassword()">\n      Olvide password\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, afAuth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.myForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log("Email:" + this.myForm.value.email);
        console.log("Password:" + this.myForm.value.password);
        this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */]);
        }, function (error) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        });
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n  <form [formGroup]="myForm" (ngSubmit)="signup()">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Email:</ion-label>\n        <ion-input formControlName="email" type="text" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="key" item-left></ion-icon>\n        <ion-label stacked>Password:</ion-label>\n        <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!myForm.valid">Register</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(formBuilder, afAuth, nav, alertCtrl) {
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.myForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ResetPasswordPage Page');
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        console.log("Email:" + this.myForm.value.email);
        this.afAuth.auth.sendPasswordResetEmail(this.myForm.value.email)
            .then(function (user) {
            var alert = _this.alertCtrl.create({
                message: "Te enviamos un link a tu correo.",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel',
                        handler: function () {
                            _this.nav.pop();
                        }
                    }
                ]
            });
            alert.present();
        }, function (error) {
            var errorMessage = error.message;
            var errorAlert = _this.alertCtrl.create({
                message: errorMessage,
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            errorAlert.present();
        });
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/reset-password/reset-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n  <form [formGroup]="myForm" (ngSubmit)="resetPassword()">\n    <!-- <ion-icon name="contact"></ion-icon> -->\n    <ion-list>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Email:</ion-label>\n        <ion-input formControlName="email" type="text" placeholder="Email"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!myForm.valid">Reset</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CameraPage = /** @class */ (function () {
    //imageURI: any;
    //imageFileName: any;
    function CameraPage(navCtrl, camera, transfer, file, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            var i = 0;
        });
    };
    CameraPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        //var random = Math.floor(Math.random() * 100);
        var options = {
            fileKey: 'photo',
            fileName: 'photo_' + 1 + '.jpg',
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.myPhoto, 'http://178.128.158.114/api/upload.php', options)
            .then(function (data) {
            console.log(data + "Uploaded Successfully");
            //this.imageFileName = "hellouitsmeionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    CameraPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/camera/camera.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Photos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="takePhoto()">Take Photo</button>\n\n  <p align="center"><img src="{{myPhoto}}"></p>\n\n  <button ion-button (click)="uploadFile()">Upload</button>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/camera/camera.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]) === "function" && _f || Object])
    ], CameraPage);
    return CameraPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_speakers_speakers__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hotelExperience_hotelExperience__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sponsors_sponsors__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_camera_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_firebase_config__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hotelExperience_hotelExperience__["a" /* HotelExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_camera_camera__["a" /* CameraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hotelExperience_hotelExperience__["a" /* HotelExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_camera_camera__["a" /* CameraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
                /*FileUploadOptions,
                FileTransferObject,*/
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

// export const firebaseConfig = {
//   // apiKey: "AIzaSyBvvc2iaIRhx1NqF9AiGkY_hkuueKOST6g",
//   // authDomain: "eventotsplus-1530635392183.firebaseapp.com",
//   // databaseURL: "https://eventotsplus-1530635392183.firebaseio.com",
//   // projectId: "eventotsplus-1530635392183",
//   // storageBucket: "eventotsplus-1530635392183.appspot.com",
//   // messagingSenderId: "217744633046"
//   apiKey: "AIzaSyAjy6wRLwJuQ6_RSmxe_r62wlsW56Jdojw",
//   authDomain: "eventotsplus2-1532907176175.firebaseapp.com",
//   databaseURL: "https://eventotsplus2-1532907176175.firebaseio.com",
//   projectId: "eventotsplus2-1532907176175",
//   storageBucket: "eventotsplus2-1532907176175.appspot.com",
//   messagingSenderId: "390741891020"
// }
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_schedule_schedule__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_speakers_speakers__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hotelExperience_hotelExperience__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sponsors_sponsors__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_camera_camera__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_speakers_speakers__["a" /* SpeakersPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            /*{ title: 'Home', component: HomePage, icon: 'star' },
              { title: 'List', component: ListPage, icon: 'star' },*/
            { title: 'Horarios', component: __WEBPACK_IMPORTED_MODULE_4__pages_schedule_schedule__["a" /* SchedulePage */] /*, icon: 'calendar' */ },
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */] /*, icon: 'map' */ },
            { title: 'Ponentes', component: __WEBPACK_IMPORTED_MODULE_6__pages_speakers_speakers__["a" /* SpeakersPage */] /*, icon: 'person' */ },
            { title: 'Hotel', component: __WEBPACK_IMPORTED_MODULE_7__pages_hotelExperience_hotelExperience__["a" /* HotelExperiencePage */] /*, icon: 'bonfire' */ },
            { title: 'Patrocinadores', component: __WEBPACK_IMPORTED_MODULE_8__pages_sponsors_sponsors__["a" /* SponsorsPage */] /*, icon: 'people' */ },
            { title: 'Galería', component: __WEBPACK_IMPORTED_MODULE_10__pages_camera_camera__["a" /* CameraPage */] /*, icon: 'camera' */ }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/app/app.html"*/'<ion-menu [content]="content" id="myMenu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-end name="{{p.icon}}"></ion-icon>\n        <!-- <ion-icon item-end md name="{{p.icon}}"></ion-icon> -->\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <ion-list>\n      <button ion-item (click)="signout()">\n        <ion-icon item-end name="log-out"></ion-icon>\n        Salir\n      </button>\n    </ion-list>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAjy6wRLwJuQ6_RSmxe_r62wlsW56Jdojw",
    authDomain: "eventotsplus2-1532907176175.firebaseapp.com",
    databaseURL: "https://eventotsplus2-1532907176175.firebaseio.com",
    projectId: "eventotsplus2-1532907176175",
    storageBucket: "eventotsplus2-1532907176175.appspot.com",
    messagingSenderId: "390741891020"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true, 'myMenu');
    }
    SchedulePage.prototype.showDiv = function (d) {
        //document.getElementById('22').style.display = "block";
        if (d == 22) {
            document.getElementById('22-b').style.background = "orange";
            document.getElementById('23-b').style.background = "#304B78";
            document.getElementById('24-b').style.background = "#304B78";
            document.getElementById('25-b').style.background = "#304B78";
            document.getElementById('26-b').style.background = "#304B78";
            document.getElementById('22-b').style.color = "#060E29";
            document.getElementById('23-b').style.color = "white";
            document.getElementById('24-b').style.color = "white";
            document.getElementById('25-b').style.color = "white";
            document.getElementById('26-b').style.color = "white";
            document.getElementById('22').style.display = "block";
            document.getElementById('23').style.display = "none";
            document.getElementById('24').style.display = "none";
            document.getElementById('25').style.display = "none";
            document.getElementById('26').style.display = "none";
        }
        else if (d == 23) {
            // document.getElementById('22-b').style.background = "#304B78";
            document.getElementById('23-b').style.background = "orange";
            document.getElementById('24-b').style.background = "#304B78";
            document.getElementById('25-b').style.background = "#304B78";
            document.getElementById('26-b').style.background = "#304B78";
            // document.getElementById('22-b').style.color = "white";
            document.getElementById('23-b').style.color = "#060E29";
            document.getElementById('24-b').style.color = "white";
            document.getElementById('25-b').style.color = "white";
            document.getElementById('26-b').style.color = "white";
            // document.getElementById('22').style.display = "none";
            document.getElementById('23').style.display = "block";
            document.getElementById('24').style.display = "none";
            document.getElementById('25').style.display = "none";
            document.getElementById('26').style.display = "none";
        }
        else if (d == 24) {
            // document.getElementById('22-b').style.background = "#304B78";
            document.getElementById('23-b').style.background = "#304B78";
            document.getElementById('24-b').style.background = "orange";
            document.getElementById('25-b').style.background = "#304B78";
            document.getElementById('26-b').style.background = "#304B78";
            // document.getElementById('22-b').style.color = "white";
            document.getElementById('23-b').style.color = "white";
            document.getElementById('24-b').style.color = "#060E29";
            document.getElementById('25-b').style.color = "white";
            document.getElementById('26-b').style.color = "white";
            // document.getElementById('22').style.display = "none";
            document.getElementById('23').style.display = "none";
            document.getElementById('24').style.display = "block";
            document.getElementById('25').style.display = "none";
            document.getElementById('26').style.display = "none";
        }
        else if (d == 25) {
            // document.getElementById('22-b').style.background = "#304B78";
            document.getElementById('23-b').style.background = "#304B78";
            document.getElementById('24-b').style.background = "#304B78";
            document.getElementById('25-b').style.background = "orange";
            document.getElementById('26-b').style.background = "#304B78";
            // document.getElementById('22-b').style.color = "white";
            document.getElementById('23-b').style.color = "white";
            document.getElementById('24-b').style.color = "white";
            document.getElementById('25-b').style.color = "#060E29";
            document.getElementById('26-b').style.color = "white";
            // document.getElementById('22').style.display = "none";
            document.getElementById('23').style.display = "none";
            document.getElementById('24').style.display = "none";
            document.getElementById('25').style.display = "block";
            document.getElementById('26').style.display = "none";
        }
        else if (d == 26) {
            // document.getElementById('22-b').style.background = "#304B78";
            document.getElementById('23-b').style.background = "#304B78";
            document.getElementById('24-b').style.background = "#304B78";
            document.getElementById('25-b').style.background = "#304B78";
            document.getElementById('26-b').style.background = "orange";
            // document.getElementById('22-b').style.color = "white";
            document.getElementById('23-b').style.color = "white";
            document.getElementById('24-b').style.color = "white";
            document.getElementById('25-b').style.color = "white";
            document.getElementById('26-b').style.color = "#060E29";
            // document.getElementById('22').style.display = "none";
            document.getElementById('23').style.display = "none";
            document.getElementById('24').style.display = "none";
            document.getElementById('25').style.display = "none";
            document.getElementById('26').style.display = "block";
        }
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/erick/EventoTSPlus/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-image">\n\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col>\n        <button id="22-b" ion-button style="width: 100%" (click)="showDiv(22)">22</button>\n      </ion-col> -->\n      <ion-col>\n        <button id="23-b" ion-button style="width: 100%" (click)="showDiv(23)">23</button>\n      </ion-col>\n      <ion-col>\n        <button id="24-b" ion-button style="width: 100%" (click)="showDiv(24)">24</button>\n      </ion-col>\n      <ion-col>\n        <button id="25-b" ion-button style="width: 100%" (click)="showDiv(25)">25</button>\n      </ion-col>\n      <ion-col>\n        <button id="26-b" ion-button style="width: 100%" (click)="showDiv(26)">26</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <!-- <ion-row id="22" style="display:block">\n      <iframe width="100%" style="height:90vh; align:center" src="https://www.testsby.tk/webrtcexamples/horario/dist/22ago.html"></iframe>\n    </ion-row> -->\n    <ion-row id="23" style="display:block">\n      <iframe width="100%" style="height:90vh; align:center" src="https://www.testsby.tk/webrtcexamples/horario/dist/23ago.html"></iframe>\n    </ion-row>\n    <ion-row id="24" style="display:block">\n      <iframe width="100%" style="height:90vh; align:center" src="https://www.testsby.tk/webrtcexamples/horario/dist/24ago.html"></iframe>\n    </ion-row>\n    <ion-row id="25" style="display:block">\n      <iframe width="100%" style="height:90vh; align:center" src="https://www.testsby.tk/webrtcexamples/horario/dist/25ago.html"></iframe>\n    </ion-row>\n    <ion-row id="26" style="display:block">\n      <iframe width="100%" style="height:90vh; align:center" src="https://www.testsby.tk/webrtcexamples/horario/dist/26ago.html"></iframe>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/erick/EventoTSPlus/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map