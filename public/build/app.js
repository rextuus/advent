(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/calendar.scss */ "./assets/styles/calendar.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




















































































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(' ')));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, ' ').trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var componentMapByElement = new WeakMap();
var componentMapByComponent = new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
      return;
    }
    if (onlyMatchName && componentName !== onlyMatchName) {
      return;
    }
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) {
      return;
    }
    if (!currentComponent.element.contains(component.element)) {
      return;
    }
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) {
        return;
      }
      if (childComponent === component) {
        return;
      }
      if (childComponent.element.contains(component.element)) {
        foundChildComponent = true;
      }
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) {
      return component;
    }
    parentElement = parentElement.parentElement;
  }
  return null;
};
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        }
        if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
        }
      }
      if (element.hasAttribute('value')) {
        return element.checked ? element.getAttribute('value') : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value === value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val === element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        if (element.hasAttribute('value')) {
          element.checked = element.value === value;
        } else {
          element.checked = value;
        }
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return "".concat(value);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  findChildren(component).forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  return _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== undefined) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== undefined) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== undefined) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
}(); // base IIFE to define idiomorph
var Idiomorph = function () {
  //=============================================================================
  // AND NOW IT BEGINS...
  //=============================================================================
  var EMPTY_SET = new Set();

  // default configuration values, updatable by users now
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: 'merge',
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };

  //=============================================================================
  // Core Morphing Algorithm - morph, morphNormalizedContent, morphOldNodeTo, morphChildren
  //=============================================================================
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) {
      oldNode = oldNode.documentElement;
    }
    if (typeof newContent === 'string') {
      newContent = parseContent(newContent);
    }
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector('head');
      var newHead = normalizedNewContent.querySelector('head');
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        // when head promises resolve, call morph again, ignoring the head tag
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      // innerHTML, so we are only updating the children
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      // otherwise find the best element match in the new content, morph that, and merge its siblings
      // into either side of the best match
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);

      // stash the siblings that will need to be inserted on either side of the best match
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;

      // morph it
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) {
        // if there was a best match, merge the siblings in too and return the
        // whole bunch
        return insertSiblings(previousSibling, morphedNode, nextSibling);
      } else {
        // otherwise nothing was added to the DOM
        return [];
      }
    } else {
      throw "Do not understand how to morph style " + ctx.morphStyle;
    }
  }

  /**
   * @param possibleActiveElement
   * @param ctx
   * @returns {boolean}
   */
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }

  /**
   * @param oldNode root node to merge content into
   * @param newContent new content to merge
   * @param ctx the merge context
   * @returns {Element} the element that ended up in the DOM
   */
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) ;else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) ;else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
        handleHeadElement(newContent, oldNode, ctx);
      } else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) {
          morphChildren(newContent, oldNode, ctx);
        }
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }

  /**
   * This is the core algorithm for matching up children.  The idea is to use id sets to try to match up
   * nodes as faithfully as possible.  We greedily match, which allows us to keep the algorithm fast, but
   * by using id sets, we are able to better match up with content deeper in the DOM.
   *
   * Basic algorithm is, for each node in the new content:
   *
   * - if we have reached the end of the old parent, append the new content
   * - if the new content has an id set match with the current insertion point, morph
   * - search for an id set match
   * - if id set match found, morph
   * - otherwise search for a "soft" match
   * - if a soft match is found, morph
   * - otherwise, prepend the new node before the current insertion point
   *
   * The two search algorithms terminate if competing node matches appear to outweigh what can be achieved
   * with the current node.  See findIdSetMatch() and findSoftMatch() for details.
   *
   * @param {Element} newParent the parent element of the new content
   * @param {Element } oldParent the old content that we are merging the new content into
   * @param ctx the merge context
   */
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;

    // run through all the new content
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;

      // if we are at the end of the exiting parent's children, just append
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // if the current node has an id set match then morph
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // otherwise search forward in the existing old children for an id set match
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a potential match, remove the nodes until that point and morph
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // no id set match found, so scan forward for a soft match for the current node
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a soft match for the current node, morph
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // abandon all hope of morphing, just insert the new child before the insertion point
      // and move on
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }

    // remove any remaining old nodes that didn't match up with new content
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }

  //=============================================================================
  // Attribute Syncing Code
  //=============================================================================

  /**
   * @param attr {String} the attribute to be mutated
   * @param to {Element} the element that is going to be updated
   * @param updateType {("update"|"remove")}
   * @param ctx the merge context
   * @returns {boolean} true if the attribute should be ignored, false otherwise
   */
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === 'value' && ctx.ignoreActiveValue && to === document.activeElement) {
      return true;
    }
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }

  /**
   * syncs a given node with another node, copying over all attributes and
   * inner element state from the 'from' node to the 'to' node
   *
   * @param {Element} from the element to copy attributes & state from
   * @param {Element} to the element to copy attributes & state to
   * @param ctx the merge context
   */
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;

    // if is an element type, sync the attributes from the
    // new node into the new node
    if (type === 1 /* element type */) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator = _createForOfIteratorHelper(fromAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fromAttribute = _step.value;
          if (ignoreAttribute(fromAttribute.name, to, 'update', ctx)) {
            continue;
          }
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) {
            to.setAttribute(fromAttribute.name, fromAttribute.value);
          }
        }
        // iterate backwards to avoid skipping over items when a delete occurs
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, 'remove', ctx)) {
          continue;
        }
        if (!from.hasAttribute(toAttribute.name)) {
          to.removeAttribute(toAttribute.name);
        }
      }
    }

    // sync text nodes
    if (type === 8 /* comment */ || type === 3 /* text */) {
      if (to.nodeValue !== from.nodeValue) {
        to.nodeValue = from.nodeValue;
      }
    }
    if (!ignoreValueOfActiveElement(to, ctx)) {
      // sync input values
      syncInputValue(from, to, ctx);
    }
  }

  /**
   * @param from {Element} element to sync the value from
   * @param to {Element} element to sync the value to
   * @param attributeName {String} the attribute name
   * @param ctx the merge context
   */
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, 'update', ctx);
      if (!ignoreUpdate) {
        to[attributeName] = from[attributeName];
      }
      if (from[attributeName]) {
        if (!ignoreUpdate) {
          to.setAttribute(attributeName, from[attributeName]);
        }
      } else {
        if (!ignoreAttribute(attributeName, to, 'remove', ctx)) {
          to.removeAttribute(attributeName);
        }
      }
    }
  }

  /**
   * NB: many bothans died to bring us information:
   *
   *  https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
   *  https://github.com/choojs/nanomorph/blob/master/lib/morph.jsL113
   *
   * @param from {Element} the element to sync the input value from
   * @param to {Element} the element to sync the input value to
   * @param ctx the merge context
   */
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== 'file') {
      var fromValue = from.value;
      var toValue = to.value;

      // sync boolean attributes
      syncBooleanAttribute(from, to, 'checked', ctx);
      syncBooleanAttribute(from, to, 'disabled', ctx);
      if (!from.hasAttribute('value')) {
        if (!ignoreAttribute('value', to, 'remove', ctx)) {
          to.value = '';
          to.removeAttribute('value');
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute('value', to, 'update', ctx)) {
          to.setAttribute('value', fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) {
      syncBooleanAttribute(from, to, 'selected', ctx);
    } else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute('value', to, 'update', ctx)) {
        return;
      }
      if (_fromValue !== _toValue) {
        to.value = _fromValue;
      }
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) {
        to.firstChild.nodeValue = _fromValue;
      }
    }
  }

  //=============================================================================
  // the HEAD tag can be handled specially, either w/ a 'merge' or 'append' style
  //=============================================================================
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;

    // put all new head elements into a Map, by their outerHTML
    var srcToNewHeadNodes = new Map();
    var _iterator2 = _createForOfIteratorHelper(newHeadTag.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var newHeadChild = _step2.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }

      // for each elt in the current head
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(currentHead.children),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentHeadElt = _step3.value;
        // If the current head element is in the map
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            // remove the current version and let the new version replace it and re-execute
            removed.push(currentHeadElt);
          } else {
            // this element already exists and should not be re-appended, so remove it from
            // the new content map, preserving it in the DOM
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (headMergeStyle === "append") {
            // we are appending and this existing element is not new content
            // so if and only if it is marked for re-append do we do anything
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            // if this is a merge, we remove this content since it is not in the new head
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }

      // Push the remaining new head elements in the Map into the
      // nodes to append to the head tag
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i2];
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener('load', function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i2 = 0, _nodesToAppend = nodesToAppend; _i2 < _nodesToAppend.length; _i2++) {
      _loop();
    }

    // remove all removed elements, after we have appended the new elements to avoid
    // additional network requests for things like style sheets
    for (var _i3 = 0, _removed = removed; _i3 < _removed.length; _i3++) {
      var removedElement = _removed[_i3];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function noOp() {}

  /*
    Deep merges the config object and the Idiomoroph.defaults object to
    produce a final configuration object
   */
  function mergeDefaults(config) {
    var finalConfig = {};
    // copy top level stuff into final config
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);

    // copy callbacks into final config (do this to deep merge the callbacks)
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);

    // copy head config into final config  (do this to deep merge the head)
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) {
      if (node1.id !== "" && node1.id === node2.id) {
        return true;
      } else {
        return getIdIntersectionCount(ctx, node1, node2) > 0;
      }
    }
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) {
      return false;
    }
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential id match
  // for the newChild.  We stop if we find a potential id match for the new child OR
  // if the number of potential id matches we are discarding is greater than the
  // potential id matches for the new child
  //=============================================================================
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    // max id matches we are willing to discard in our search
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;

    // only search forward if there is a possibility of an id match
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      // if there is a possibility of an id match, scan forward
      // keep track of the potential id match count we are discarding (the
      // newChildPotentialIdCount must be greater than this to make it likely
      // worth it)
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        // If we have an id match, return the current potential match
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) {
          return _potentialMatch;
        }

        // computer the other potential matches of this new content
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) {
          // if we have more potential id matches in _other_ content, we
          // do not have a good candidate for an id match, so return null
          return null;
        }

        // advanced to the next old content child
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential soft match
  // for the newChild.  We stop if we find a potential soft match for the new child OR
  // if we find a potential id match in the old parents children OR if we find two
  // potential soft matches for the next two pieces of new content
  //=============================================================================
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) {
        // the current potential soft match has a potential id set match with the remaining new
        // content so bail out of looking
        return null;
      }

      // if we have a soft match with the current node, return it
      if (isSoftMatch(newChild, potentialSoftMatch)) {
        return potentialSoftMatch;
      }
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        // the next new node has a soft match with this node, so
        // increment the count of future soft matches
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;

        // If there are two future soft matches, bail to allow the siblings to soft match
        // so that we don't consume future soft matches for the sake of the current node
        if (siblingSoftMatchCount >= 2) {
          return null;
        }
      }

      // advanced to the next old content child
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();

    // remove svgs to avoid false-positive matches on head, etc.
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, '');

    // if the newContent contains a html, head or body tag, we can simply parse it w/o wrapping
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      // if it is a full HTML document, return the document itself as the parent container
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        // otherwise return the html element as the parent container
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else {
          return null;
        }
      }
    } else {
      // if it is partial HTML, wrap it in a template tag to provide a parent element and also to help
      // deal with touchy tags like tr, tbody, etc.
      var responseDoc = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html");
      var _content = responseDoc.body.querySelector('template').content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) {
      // noinspection UnnecessaryLocalVariableJS
      var dummyParent = document.createElement('div');
      return dummyParent;
    } else if (newContent.generatedByIdiomorph) {
      // the template tag created by idiomorph parsing can serve as a dummy parent
      return newContent;
    } else if (newContent instanceof Node) {
      // a single node is added as a child to a dummy parent
      var _dummyParent = document.createElement('div');
      _dummyParent.append(newContent);
      return _dummyParent;
    } else {
      // all nodes in the array or HTMLElement collection are consolidated under
      // a single dummy parent element
      var _dummyParent2 = document.createElement('div');
      for (var _i4 = 0, _arr = _toConsumableArray(newContent); _i4 < _arr.length; _i4++) {
        var elt = _arr[_i4];
        _dummyParent2.append(elt);
      }
      return _dummyParent2;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node); // push added preceding siblings on in order and insert
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling); // here we are going in order, so push on as we scan, rather than add
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) {
      morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    }
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) {
      return .5 + getIdIntersectionCount(ctx, node1, node2);
    }
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }

  //=============================================================================
  // ID Set Functions
  //=============================================================================

  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    var idSet = ctx.idMap.get(targetNode) || EMPTY_SET;
    return idSet.has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator4 = _createForOfIteratorHelper(idSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var id = _step4.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator5 = _createForOfIteratorHelper(sourceSet),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var id = _step5.value;
        // a potential match is an id in the source and potentialIdsSet, but
        // that has not already been merged into the DOM
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) {
          ++matchCount;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return matchCount;
  }

  /**
   * A bottom up algorithm that finds all elements with ids inside of the node
   * argument and populates id sets for those nodes and all their parents, generating
   * a set of ids contained within all nodes for the entire hierarchy in the DOM
   *
   * @param node {Element}
   * @param {Map<Node, Set<String>>} idMap
   */
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    // find all elements with an id property
    var idElements = node.querySelectorAll('[id]');
    var _iterator6 = _createForOfIteratorHelper(idElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elt = _step6.value;
        var current = elt;
        // walk up the parent hierarchy of that element, adding the id
        // of element to the parent's id set
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          // if the id set doesn't exist, create it and insert it in the  map
          if (idSet == null) {
            idSet = new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  /**
   * This function computes a map of nodes to all ids contained within that node (inclusive of the
   * node).  This map can be used to ask if two nodes have intersecting sets of ids, which allows
   * for a looser definition of "matching" than tradition id matching, and allows child nodes
   * to contribute to a parent nodes matching.
   *
   * @param {Element} oldContent  the old content that will be morphed
   * @param {Element} newContent  the new content to morph to
   * @returns {Map<Node, Set<String>>} a map of nodes to id sets for the
   */
  function createIdMap(oldContent, newContent) {
    var idMap = new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }

  //=============================================================================
  // This is what ends up becoming the Idiomorph global object
  //=============================================================================
  return {
    morph: morph,
    defaults: defaults
  };
}();
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("Original element with id ".concat(id, " not found"));
    }
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) {
      return null;
    }
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll('[data-live-preserve]').forEach(function (newElement) {
    var id = newElement.id;
    if (!id) {
      throw new Error('The data-live-preserve attribute requires an id attribute to be set on the element');
    }
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    }
    newElement.removeAttribute('data-live-preserve');
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) {
          return true;
        }
        if (fromEl === rootFromElement) {
          return true;
        }
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) {
            return false;
          }
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) {
            throw new Error('missing clone');
          }
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== 'undefined') {
            if (!window.Alpine) {
              throw new Error('Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.');
            }
            if (typeof window.Alpine.morph !== 'function') {
              throw new Error('Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.');
            }
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement('afterend', toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) {
            elementChanges.applyToElement(toEl);
          }
          if (fromEl.nodeName.toUpperCase() !== 'OPTION' && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) {
              return false;
            }
          }
        }
        if (fromEl.hasAttribute('data-skip-morph') || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute('data-skip-morph')) {
          return false;
        }
        return !fromEl.hasAttribute('data-live-ignore');
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) {
          return true;
        }
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) {
          return false;
        }
        return !node.hasAttribute('data-live-ignore');
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) {
      throw new Error('Missing elements.');
    }
    newElement.replaceWith(originalElement);
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  return _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  return _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  return _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        return callback.apply(void 0, args);
      });
    }
  }]);
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  return _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
}();
var ChangingItemsTracker = /*#__PURE__*/function () {
  function ChangingItemsTracker() {
    _classCallCheck(this, ChangingItemsTracker);
    this.changedItems = new Map();
    this.removedItems = new Map();
  }
  return _createClass(ChangingItemsTracker, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          value = _ref4[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = new Set();
    this.removedClasses = new Set();
    this.styleChanges = new ChangingItemsTracker();
    this.attributeChanges = new ChangingItemsTracker();
  }
  return _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) {
        this.addedClasses.add(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) {
        this.removedClasses.add(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
}();
var ExternalMutationTracker = /*#__PURE__*/function () {
  function ExternalMutationTracker(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker);
    this.changedElements = new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  return _createClass(ExternalMutationTracker, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = new WeakMap();
      var _iterator7 = _createForOfIteratorHelper(mutations),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var mutation = _step7.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator8 = _createForOfIteratorHelper(this.addedElements),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var addedElement = _step8.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case 'childList':
              this.handleChildListMutation(mutation);
              break;
            case 'attributes':
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this5 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.removedElements.includes(node)) {
          _this5.removedElements.splice(_this5.removedElements.indexOf(node), 1);
          return;
        }
        if (_this5.isElementAddedByTranslation(node)) {
          return;
        }
        _this5.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.addedElements.includes(node)) {
          _this5.addedElements.splice(_this5.addedElements.indexOf(node), 1);
          return;
        }
        _this5.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case 'class':
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case 'style':
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousValues = previousValue.match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute('style') || '';
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === undefined || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === undefined ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = '';
      }
      if (newValue === attributeName) {
        newValue = '';
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(';').forEach(function (style) {
        var parts = style.split(':');
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(':').trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === 'FONT' && element.getAttribute('style') === 'vertical-align: inherit;';
    }
  }]);
}();
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this6 = this;
    _classCallCheck(this, Component);
    this.fingerprint = '';
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = new Map();
    listeners.forEach(function (listener) {
      var _this6$listeners$get;
      if (!_this6.listeners.has(listener.event)) {
        _this6.listeners.set(listener.event, []);
      }
      (_this6$listeners$get = _this6.listeners.get(listener.event)) === null || _this6$listeners$get === void 0 || _this6$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this6);
    });
    this.externalMutationTracker.start();
  }
  return _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = findComponents(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this7 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this7.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== 'undefined' && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this8 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.pendingFiles); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook('request:started', requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i6, _Object$values, input, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                for (_i6 = 0, _Object$values = Object.values(_this8.pendingFiles); _i6 < _Object$values.length; _i6++) {
                  input = _Object$values[_i6];
                  input.value = '';
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get('Content-Type')) !== null && _headers$get !== void 0 && _headers$get.includes('application/vnd.live-component+html')) && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 14;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this8.valueStore.pushPendingPropsBackToDirty();
                _this8.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this8.renderError(html);
                }
                _this8.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 14:
                _this8.processRerender(html, backendResponse);
                if (_this8.element.dataset.liveCsrfValue) {
                  _this8.backend.updateCsrfToken(_this8.element.dataset.liveCsrfValue);
                }
                _this8.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this8.isRequestPending) {
                  _this8.isRequestPending = false;
                  _this8.performRequest();
                }
                return _context2.abrupt("return", response);
              case 20:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this9 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this9.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this9.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this9.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === 'up') {
          _this9.emitUp(event, data, componentName);
          return;
        }
        if (target === 'self') {
          _this9.emitSelf(event, data);
          return;
        }
        _this9.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this9.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this10 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this10.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this11 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this11.nextRequestPromiseResolve = resolve;
      });
    }
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      if (isChanged) {
        this.render();
      }
    }
  }]);
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this12 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this12.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  return _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
}();
var RequestBuilder = /*#__PURE__*/function () {
  function RequestBuilder(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    var csrfToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, RequestBuilder);
    this.url = url;
    this.method = method;
    this.csrfToken = csrfToken;
  }
  return _createClass(RequestBuilder, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html',
        'X-Requested-With': 'XMLHttpRequest'
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === 'get' && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set('props', JSON.stringify(props));
        params.set('updated', JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set('propsFromParent', JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set('children', JSON.stringify(children));
        }
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (this.csrfToken && (actions.length || totalFiles)) {
          fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append('data', JSON.stringify(requestData));
        for (var _i7 = 0, _Object$entries3 = Object.entries(files); _i7 < _Object$entries3.length; _i7++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }, {
    key: "updateCsrfToken",
    value: function updateCsrfToken(csrfToken) {
      this.csrfToken = csrfToken;
    }
  }]);
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    var csrfToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Backend);
    this.requestBuilder = new RequestBuilder(url, method, csrfToken);
  }
  return _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }, {
    key: "updateCsrfToken",
    value: function updateCsrfToken(csrfToken) {
      this.requestBuilder.updateCsrfToken(csrfToken);
    }
  }]);
}();
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  return _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  return _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on('loading.state:started', function (element, request) {
        _this13.startLoading(component, element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this13.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this14 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) {
          _this14.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this14.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this14.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this15 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          var callable = (_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            return _this15.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this15.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this15.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this15.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this15.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this15.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = _toConsumableArray(Array.from(element.querySelectorAll('[data-loading]')));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute('data-loading')) {
        matchingElements = [element].concat(_toConsumableArray(matchingElements));
      }
      matchingElements.forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'revert';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        element.removeAttribute('class');
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  return _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this16 = this;
      component.on('model:set', function (modelName) {
        _this16.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  return _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this17 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this17.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this17.isConnected = true;
      });
      component.on('disconnect', function () {
        _this17.isConnected = false;
      });
    }
  }]);
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  return _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this18 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this18.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this19 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this19.component.render();
        };
      } else {
        callback = function callback() {
          _this19.component.action(actionName, {}, 0);
        };
      }
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  return _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this20.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this20.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this20.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this21 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = Number.parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this21.addPoll(directive.action, duration);
      });
    }
  }]);
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  return _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this22 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this22.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
function isValueEmpty(value) {
  if (null === value || value === '' || undefined === value || Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (_typeof(value) !== 'object') {
    return false;
  }
  for (var _i8 = 0, _Object$keys = Object.keys(value); _i8 < _Object$keys.length; _i8++) {
    var key = _Object$keys[_i8];
    if (!isValueEmpty(value[key])) {
      return false;
    }
  }
  return true;
}
function toQueryString(data) {
  var _buildQueryStringEntries = function buildQueryStringEntries(data) {
    var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var baseKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    Object.entries(data).forEach(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
        iKey = _ref11[0],
        iValue = _ref11[1];
      var key = baseKey === '' ? iKey : "".concat(baseKey, "[").concat(iKey, "]");
      if ('' === baseKey && isValueEmpty(iValue)) {
        entries[key] = '';
      } else if (null !== iValue) {
        if (_typeof(iValue) === 'object') {
          entries = _objectSpread(_objectSpread({}, entries), _buildQueryStringEntries(iValue, entries, key));
        } else {
          entries[key] = encodeURIComponent(iValue).replace(/%20/g, '+').replace(/%2C/g, ',');
        }
      }
    });
    return entries;
  };
  var entries = _buildQueryStringEntries(data);
  return Object.entries(entries).map(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
      key = _ref13[0],
      value = _ref13[1];
    return "".concat(key, "=").concat(value);
  }).join('&');
}
function fromQueryString(search) {
  search = search.replace('?', '');
  if (search === '') return {};
  var _insertDotNotatedValueIntoData = function insertDotNotatedValueIntoData(key, value, data) {
    var _key$split = key.split('.'),
      _key$split2 = _toArray(_key$split),
      first = _key$split2[0],
      second = _key$split2[1],
      rest = _key$split2.slice(2);
    if (!second) {
      data[key] = value;
      return value;
    }
    if (data[first] === undefined) {
      data[first] = Number.isNaN(Number.parseInt(second)) ? {} : [];
    }
    _insertDotNotatedValueIntoData([second].concat(_toConsumableArray(rest)).join('.'), value, data[first]);
  };
  var entries = search.split('&').map(function (i) {
    return i.split('=');
  });
  var data = {};
  entries.forEach(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      key = _ref15[0],
      value = _ref15[1];
    value = decodeURIComponent(value.replace(/\+/g, '%20'));
    if (!key.includes('[')) {
      data[key] = value;
    } else {
      if ('' === value) return;
      var dotNotatedKey = key.replace(/\[/g, '.').replace(/]/g, '');
      _insertDotNotatedValueIntoData(dotNotatedKey, value, data);
    }
  });
  return data;
}
var UrlUtils = /*#__PURE__*/function (_URL) {
  function UrlUtils() {
    _classCallCheck(this, UrlUtils);
    return _callSuper(this, UrlUtils, arguments);
  }
  _inherits(UrlUtils, _URL);
  return _createClass(UrlUtils, [{
    key: "has",
    value: function has(key) {
      var data = this.getData();
      return Object.keys(data).includes(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var data = this.getData();
      data[key] = value;
      this.setData(data);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.getData()[key];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var data = this.getData();
      delete data[key];
      this.setData(data);
    }
  }, {
    key: "getData",
    value: function getData() {
      if (!this.search) {
        return {};
      }
      return fromQueryString(this.search);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.search = toQueryString(data);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(URL));
var HistoryStrategy = /*#__PURE__*/function () {
  function HistoryStrategy() {
    _classCallCheck(this, HistoryStrategy);
  }
  return _createClass(HistoryStrategy, null, [{
    key: "replace",
    value: function replace(url) {
      history.replaceState(history.state, '', url);
    }
  }]);
}();
var QueryStringPlugin = /*#__PURE__*/function () {
  function QueryStringPlugin(mapping) {
    _classCallCheck(this, QueryStringPlugin);
    this.mapping = mapping;
  }
  return _createClass(QueryStringPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      component.on('render:finished', function (component) {
        var urlUtils = new UrlUtils(window.location.href);
        var currentUrl = urlUtils.toString();
        Object.entries(_this23.mapping).forEach(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
            prop = _ref17[0],
            mapping = _ref17[1];
          var value = component.valueStore.get(prop);
          urlUtils.set(mapping.name, value);
        });
        if (currentUrl !== urlUtils.toString()) {
          HistoryStrategy.replace(urlUtils);
        }
      });
    }
  }]);
}();
var ChildComponentPlugin = /*#__PURE__*/function () {
  function ChildComponentPlugin(component) {
    _classCallCheck(this, ChildComponentPlugin);
    this.parentModelBindings = [];
    this.component = component;
    var modelDirectives = getAllModelDirectiveFromElements(this.component.element);
    this.parentModelBindings = modelDirectives.map(getModelBinding);
  }
  return _createClass(ChildComponentPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this24 = this;
      component.on('request:started', function (requestData) {
        requestData.children = _this24.getChildrenFingerprints();
      });
      component.on('model:set', function (model, value) {
        _this24.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) {
        return;
      }
      this.parentModelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
}();
var LazyPlugin = /*#__PURE__*/function () {
  function LazyPlugin() {
    _classCallCheck(this, LazyPlugin);
    this.intersectionObserver = null;
  }
  return _createClass(LazyPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this25 = this;
      if ('lazy' !== ((_component$element$at = component.element.attributes.getNamedItem('loading')) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) {
        return;
      }
      component.on('connect', function () {
        _this25.getObserver().observe(component.element);
      });
      component.on('disconnect', function () {
        var _this25$intersectionO;
        (_this25$intersectionO = _this25.intersectionObserver) === null || _this25$intersectionO === void 0 || _this25$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) {
        this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.dispatchEvent(new CustomEvent('live:appear'));
              observer.unobserve(entry.target);
            }
          });
        });
      }
      return this.intersectionObserver;
    }
  }]);
}();
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  function LiveControllerDefault() {
    var _this26;
    _classCallCheck(this, LiveControllerDefault);
    _this26 = _callSuper(this, LiveControllerDefault, arguments);
    _this26.pendingActionTriggerModelElement = null;
    _this26.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this26.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this26.handleChangeEvent(event);
      }
    }];
    _this26.pendingFiles = {};
    return _this26;
  }
  _inherits(LiveControllerDefault, _Controller);
  return _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this27 = this;
      var params = event.params;
      if (!params.action) {
        throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      }
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = new Map();
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set('files', function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this27.pendingFiles;
          } else if (_this27.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this27.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            var callable = (_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        for (var _i9 = 0, _Object$entries4 = Object.entries(pendingFiles); _i9 < _Object$entries4.length; _i9++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i9], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this27.component.files(key, input);
          }
          delete _this27.pendingFiles[key];
        }
        _this27.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this27.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this28 = this;
      this.getEmitDirectives(event).forEach(function (_ref18) {
        var name = _ref18.name,
          data = _ref18.data,
          nameMatch = _ref18.nameMatch;
        _this28.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this29 = this;
      this.getEmitDirectives(event).forEach(function (_ref19) {
        var name = _ref19.name,
          data = _ref19.data,
          nameMatch = _ref19.nameMatch;
        _this29.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this30 = this;
      this.getEmitDirectives(event).forEach(function (_ref20) {
        var name = _ref20.name,
          data = _ref20.data;
        _this30.component.emitSelf(name, data);
      });
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) {
        throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      }
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'name':
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this31 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new LazyPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin(), new QueryStringPlugin(this.queryMappingValue), new ChildComponentPlugin(this.component)];
      plugins.forEach(function (plugin) {
        _this31.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this32 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref21) {
        var event = _ref21.event,
          callback = _ref21.callback;
        _this32.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this33 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref22) {
        var event = _ref22.event,
          callback = _ref22.callback;
        _this33.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      if (element instanceof HTMLInputElement && element.type === 'file') {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this34 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'id' && _this34.element.id !== _this34.component.id) {
          _this34.disconnectComponent();
          _this34.createComponent();
          _this34.connectComponent();
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_83__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  csrf: String,
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ''
  },
  requestMethod: {
    type: String,
    "default": 'post'
  },
  queryMapping: {
    type: Object,
    "default": {}
  }
};
LiveControllerDefault.backendFactory = function (controller) {
  return new Backend(controller.urlValue, controller.requestMethodValue, controller.csrfValue);
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/calendar.scss":
/*!*************************************!*\
  !*** ./assets/styles/calendar.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-5466bb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDNi9CLHNCQUFzQixFQUFFO0lBQUVyK0IsSUFBSSxFQUFFeEIsTUFBTTtJQUFFLFdBQVMsQ0FBQztFQUFFLENBQUM7RUFDckQ4L0IsSUFBSSxFQUFFajRCLE1BQU07RUFDWjRnQixTQUFTLEVBQUU7SUFBRWpuQixJQUFJLEVBQUVnRixLQUFLO0lBQUUsV0FBUztFQUFHLENBQUM7RUFDdkNnbkIsWUFBWSxFQUFFO0lBQUVoc0IsSUFBSSxFQUFFZ0YsS0FBSztJQUFFLFdBQVM7RUFBRyxDQUFDO0VBQzFDdTVCLGdCQUFnQixFQUFFO0lBQUV2K0IsSUFBSSxFQUFFZ0YsS0FBSztJQUFFLFdBQVM7RUFBRyxDQUFDO0VBQzlDdWpCLFFBQVEsRUFBRTtJQUFFdm9CLElBQUksRUFBRXNHLE1BQU07SUFBRSxXQUFTO0VBQUksQ0FBQztFQUN4QytnQixXQUFXLEVBQUU7SUFBRXJuQixJQUFJLEVBQUVxRyxNQUFNO0lBQUUsV0FBUztFQUFHLENBQUM7RUFDMUNtNEIsYUFBYSxFQUFFO0lBQUV4K0IsSUFBSSxFQUFFcUcsTUFBTTtJQUFFLFdBQVM7RUFBTyxDQUFDO0VBQ2hEbzRCLFlBQVksRUFBRTtJQUFFeitCLElBQUksRUFBRXhCLE1BQU07SUFBRSxXQUFTLENBQUM7RUFBRTtBQUM5QyxDQUFDO0FBQ0RtOEIscUJBQXFCLENBQUN1QyxjQUFjLEdBQUcsVUFBQ3JMLFVBQVU7RUFBQSxPQUFLLElBQUlOLE9BQU8sQ0FBQ00sVUFBVSxDQUFDNk0sUUFBUSxFQUFFN00sVUFBVSxDQUFDOE0sa0JBQWtCLEVBQUU5TSxVQUFVLENBQUMrTSxTQUFTLENBQUM7QUFBQTs7Ozs7Ozs7Ozs7OztBQzlvRzVJOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzPzk2YzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jYWxlbmRhci5zY3NzPzE4YTQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jYWxlbmRhci5zY3NzJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FmdGVyX2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi50cmltQWxsKHBhcnQpLnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gdHJpbUFsbChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCAnICcpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZSgnXScsICcnKSlcbiAgICAgICAgLmpvaW4oJy4nKSk7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuXG5sZXQgY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoY29tcG9uZW50LmVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG59O1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG1heENvdW50ID0gMTA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgfVxuICAgIH0sIDUpO1xufSk7XG5jb25zdCBmaW5kQ29tcG9uZW50cyA9IChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjb21wb25lbnQuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgZmluZFBhcmVudCA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbE5hbWVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KG1vZGVsVmFsdWUpID09PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5tb2RlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgICBjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG4gICAgaWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZGF0YU1vZGVsRGlyZWN0aXZlc1swXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50ICYmICdtb2RlbCcgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsIHx8ICcqJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghdGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGZpbmRDaGlsZHJlbihjb21wb25lbnQpLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gIWZvdW5kQ2hpbGRDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZmluYWxWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmaW5hbFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xuY29uc3QgaW5wdXRWYWx1ZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xuXG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudExldmVsRGF0YVtmaW5hbEtleV07XG59XG5jb25zdCBwYXJzZURlZXBEYXRhID0gKGRhdGEsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuICAgIGNvbnN0IHBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgICAgIGZpbmFsRGF0YSxcbiAgICAgICAgZmluYWxLZXksXG4gICAgICAgIHBhcnRzLFxuICAgIH07XG59O1xuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgfTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHsgLi4udGhpcy5wZW5kaW5nUHJvcHMsIC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbi8vIGJhc2UgSUlGRSB0byBkZWZpbmUgaWRpb21vcnBoXG52YXIgSWRpb21vcnBoID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEFORCBOT1cgSVQgQkVHSU5TLi4uXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgbGV0IEVNUFRZX1NFVCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzLCB1cGRhdGFibGUgYnkgdXNlcnMgbm93XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG4gICAgICAgICAgICBjYWxsYmFja3MgOiB7XG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZUFkZGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlTm9kZVJlbW92ZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkOiBub09wLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnbWVyZ2UnLFxuICAgICAgICAgICAgICAgIHNob3VsZFByZXNlcnZlOiBmdW5jdGlvbiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVBcHBlbmQ6IGZ1bmN0aW9uIChlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVtb3ZlOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVySGVhZE1vcnBoZWQ6IG5vT3AsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBDb3JlIE1vcnBoaW5nIEFsZ29yaXRobSAtIG1vcnBoLCBtb3JwaE5vcm1hbGl6ZWRDb250ZW50LCBtb3JwaE9sZE5vZGVUbywgbW9ycGhDaGlsZHJlblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cbiAgICAgICAgICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvbGROb2RlID0gb2xkTm9kZS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50ID0gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY3R4ID0gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5vcm1hbGl6ZWRDb250ZW50LCBjb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZE5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5oZWFkLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSBvbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkSGVhZCAmJiBuZXdIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IGhhbmRsZUhlYWRFbGVtZW50KG5ld0hlYWQsIG9sZEhlYWQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gaGVhZCBwcm9taXNlcyByZXNvbHZlLCBjYWxsIG1vcnBoIGFnYWluLCBpZ25vcmluZyB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgT2JqZWN0LmFzc2lnbihjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwsIHNvIHdlIGFyZSBvbmx5IHVwZGF0aW5nIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3R4Lm1vcnBoU3R5bGUgPT09IFwib3V0ZXJIVE1MXCIgfHwgY3R4Lm1vcnBoU3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmaW5kIHRoZSBiZXN0IGVsZW1lbnQgbWF0Y2ggaW4gdGhlIG5ldyBjb250ZW50LCBtb3JwaCB0aGF0LCBhbmQgbWVyZ2UgaXRzIHNpYmxpbmdzXG4gICAgICAgICAgICAgICAgLy8gaW50byBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBiZXN0TWF0Y2ggPSBmaW5kQmVzdE5vZGVNYXRjaChub3JtYWxpemVkTmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0YXNoIHRoZSBzaWJsaW5ncyB0aGF0IHdpbGwgbmVlZCB0byBiZSBpbnNlcnRlZCBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgYmVzdCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSBiZXN0TWF0Y2g/LnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgLy8gbW9ycGggaXRcbiAgICAgICAgICAgICAgICBsZXQgbW9ycGhlZE5vZGUgPSBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBiZXN0TWF0Y2gsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdhcyBhIGJlc3QgbWF0Y2gsIG1lcmdlIHRoZSBzaWJsaW5ncyBpbiB0b28gYW5kIHJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hvbGUgYnVuY2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugbm90aGluZyB3YXMgYWRkZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwiRG8gbm90IHVuZGVyc3RhbmQgaG93IHRvIG1vcnBoIHN0eWxlIFwiICsgY3R4Lm1vcnBoU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gcG9zc2libGVBY3RpdmVFbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSBjdHhcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChwb3NzaWJsZUFjdGl2ZUVsZW1lbnQsIGN0eCkge1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG9sZE5vZGUgcm9vdCBub2RlIHRvIG1lcmdlIGNvbnRlbnQgaW50b1xuICAgICAgICAgKiBAcGFyYW0gbmV3Q29udGVudCBuZXcgY29udGVudCB0byBtZXJnZVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGVuZGVkIHVwIGluIHRoZSBET01cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgOyBlbHNlIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgb2xkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NvZnRNYXRjaChvbGROb2RlLCBuZXdDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKG9sZE5vZGUpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSA7IGVsc2UgaWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuc3R5bGUgIT09IFwibW9ycGhcIikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVIZWFkRWxlbWVudChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNOb2RlRnJvbShuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KG9sZE5vZGUsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4obmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB0aGUgY29yZSBhbGdvcml0aG0gZm9yIG1hdGNoaW5nIHVwIGNoaWxkcmVuLiAgVGhlIGlkZWEgaXMgdG8gdXNlIGlkIHNldHMgdG8gdHJ5IHRvIG1hdGNoIHVwXG4gICAgICAgICAqIG5vZGVzIGFzIGZhaXRoZnVsbHkgYXMgcG9zc2libGUuICBXZSBncmVlZGlseSBtYXRjaCwgd2hpY2ggYWxsb3dzIHVzIHRvIGtlZXAgdGhlIGFsZ29yaXRobSBmYXN0LCBidXRcbiAgICAgICAgICogYnkgdXNpbmcgaWQgc2V0cywgd2UgYXJlIGFibGUgdG8gYmV0dGVyIG1hdGNoIHVwIHdpdGggY29udGVudCBkZWVwZXIgaW4gdGhlIERPTS5cbiAgICAgICAgICpcbiAgICAgICAgICogQmFzaWMgYWxnb3JpdGhtIGlzLCBmb3IgZWFjaCBub2RlIGluIHRoZSBuZXcgY29udGVudDpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgb2xkIHBhcmVudCwgYXBwZW5kIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgKiAtIGlmIHRoZSBuZXcgY29udGVudCBoYXMgYW4gaWQgc2V0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50LCBtb3JwaFxuICAgICAgICAgKiAtIHNlYXJjaCBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAqIC0gaWYgaWQgc2V0IG1hdGNoIGZvdW5kLCBtb3JwaFxuICAgICAgICAgKiAtIG90aGVyd2lzZSBzZWFyY2ggZm9yIGEgXCJzb2Z0XCIgbWF0Y2hcbiAgICAgICAgICogLSBpZiBhIHNvZnQgbWF0Y2ggaXMgZm91bmQsIG1vcnBoXG4gICAgICAgICAqIC0gb3RoZXJ3aXNlLCBwcmVwZW5kIHRoZSBuZXcgbm9kZSBiZWZvcmUgdGhlIGN1cnJlbnQgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB0d28gc2VhcmNoIGFsZ29yaXRobXMgdGVybWluYXRlIGlmIGNvbXBldGluZyBub2RlIG1hdGNoZXMgYXBwZWFyIHRvIG91dHdlaWdoIHdoYXQgY2FuIGJlIGFjaGlldmVkXG4gICAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgbm9kZS4gIFNlZSBmaW5kSWRTZXRNYXRjaCgpIGFuZCBmaW5kU29mdE1hdGNoKCkgZm9yIGRldGFpbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3UGFyZW50IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50IH0gb2xkUGFyZW50IHRoZSBvbGQgY29udGVudCB0aGF0IHdlIGFyZSBtZXJnaW5nIHRoZSBuZXcgY29udGVudCBpbnRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgbmV4dE5ld0NoaWxkID0gbmV3UGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZDtcblxuICAgICAgICAgICAgLy8gcnVuIHRocm91Z2ggYWxsIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKG5leHROZXdDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgbmV4dE5ld0NoaWxkID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgZXhpdGluZyBwYXJlbnQncyBjaGlsZHJlbiwganVzdCBhcHBlbmRcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0aW9uUG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgbm9kZSBoYXMgYW4gaWQgc2V0IG1hdGNoIHRoZW4gbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugc2VhcmNoIGZvcndhcmQgaW4gdGhlIGV4aXN0aW5nIG9sZCBjaGlsZHJlbiBmb3IgYW4gaWQgc2V0IG1hdGNoXG4gICAgICAgICAgICAgICAgbGV0IGlkU2V0TWF0Y2ggPSBmaW5kSWRTZXRNYXRjaChuZXdQYXJlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZm91bmQgYSBwb3RlbnRpYWwgbWF0Y2gsIHJlbW92ZSB0aGUgbm9kZXMgdW50aWwgdGhhdCBwb2ludCBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoaWRTZXRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgaWRTZXRNYXRjaCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oaWRTZXRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBubyBpZCBzZXQgbWF0Y2ggZm91bmQsIHNvIHNjYW4gZm9yd2FyZCBmb3IgYSBzb2Z0IG1hdGNoIGZvciB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgbGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZvdW5kIGEgc29mdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgbm9kZSwgbW9ycGhcbiAgICAgICAgICAgICAgICBpZiAoc29mdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBzb2Z0TWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKHNvZnRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhYmFuZG9uIGFsbCBob3BlIG9mIG1vcnBoaW5nLCBqdXN0IGluc2VydCB0aGUgbmV3IGNoaWxkIGJlZm9yZSB0aGUgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG1vdmUgb25cbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgYW55IHJlbWFpbmluZyBvbGQgbm9kZXMgdGhhdCBkaWRuJ3QgbWF0Y2ggdXAgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKGluc2VydGlvblBvaW50ICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEF0dHJpYnV0ZSBTeW5jaW5nIENvZGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gYXR0ciB7U3RyaW5nfSB0aGUgYXR0cmlidXRlIHRvIGJlIG11dGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHRvIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgICogQHBhcmFtIHVwZGF0ZVR5cGUgeyhcInVwZGF0ZVwifFwicmVtb3ZlXCIpfVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgc2hvdWxkIGJlIGlnbm9yZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcbiAgICAgICAgICAgIGlmKGF0dHIgPT09ICd2YWx1ZScgJiYgY3R4Lmlnbm9yZUFjdGl2ZVZhbHVlICYmIHRvID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdHguY2FsbGJhY2tzLmJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQoYXR0ciwgdG8sIHVwZGF0ZVR5cGUpID09PSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzeW5jcyBhIGdpdmVuIG5vZGUgd2l0aCBhbm90aGVyIG5vZGUsIGNvcHlpbmcgb3ZlciBhbGwgYXR0cmlidXRlcyBhbmRcbiAgICAgICAgICogaW5uZXIgZWxlbWVudCBzdGF0ZSBmcm9tIHRoZSAnZnJvbScgbm9kZSB0byB0aGUgJ3RvJyBub2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZnJvbSB0aGUgZWxlbWVudCB0byBjb3B5IGF0dHJpYnV0ZXMgJiBzdGF0ZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdG8gdGhlIGVsZW1lbnQgdG8gY29weSBhdHRyaWJ1dGVzICYgc3RhdGUgdG9cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc3luY05vZGVGcm9tKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gZnJvbS5ub2RlVHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgaXMgYW4gZWxlbWVudCB0eXBlLCBzeW5jIHRoZSBhdHRyaWJ1dGVzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBuZXcgbm9kZSBpbnRvIHRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEgLyogZWxlbWVudCB0eXBlICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZXMgPSBmcm9tLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGVzID0gdG8uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIGJhY2t3YXJkcyB0byBhdm9pZCBza2lwcGluZyBvdmVyIGl0ZW1zIHdoZW4gYSBkZWxldGUgb2NjdXJzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRvQXR0cmlidXRlcy5sZW5ndGggLSAxOyAwIDw9IGk7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IHRvQXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJvbS5oYXNBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3luYyB0ZXh0IG5vZGVzXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gOCAvKiBjb21tZW50ICovIHx8IHR5cGUgPT09IDMgLyogdGV4dCAqLykge1xuICAgICAgICAgICAgICAgIGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvLm5vZGVWYWx1ZSA9IGZyb20ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkge1xuICAgICAgICAgICAgICAgIC8vIHN5bmMgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGZyb20ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IGVsZW1lbnQgdG8gc3luYyB0aGUgdmFsdWUgdG9cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUge1N0cmluZ30gdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBhdHRyaWJ1dGVOYW1lLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIGxldCBpZ25vcmVVcGRhdGUgPSBpZ25vcmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdG8sICd1cGRhdGUnLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlmICghaWdub3JlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW2F0dHJpYnV0ZU5hbWVdID0gZnJvbVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBmcm9tW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCAncmVtb3ZlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5COiBtYW55IGJvdGhhbnMgZGllZCB0byBicmluZyB1cyBpbmZvcm1hdGlvbjpcbiAgICAgICAgICpcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRyaWNrLXN0ZWVsZS1pZGVtL21vcnBoZG9tL2Jsb2IvbWFzdGVyL3NyYy9zcGVjaWFsRWxIYW5kbGVycy5qc1xuICAgICAgICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL2Nob29qcy9uYW5vbW9ycGgvYmxvYi9tYXN0ZXIvbGliL21vcnBoLmpzTDExM1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZnJvbSB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdG8gc3luYyB0aGUgaW5wdXQgdmFsdWUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0gdG8ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRvIHN5bmMgdGhlIGlucHV0IHZhbHVlIHRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRvIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGZyb20udHlwZSAhPT0gJ2ZpbGUnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gc3luYyBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgJ2NoZWNrZWQnLCBjdHgpO1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnZGlzYWJsZWQnLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSgndmFsdWUnLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCAnc2VsZWN0ZWQnLCBjdHgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnJvbVZhbHVlID0gZnJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBdHRyaWJ1dGUoJ3ZhbHVlJywgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvLmZpcnN0Q2hpbGQgJiYgdG8uZmlyc3RDaGlsZC5ub2RlVmFsdWUgIT09IGZyb21WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIHRoZSBIRUFEIHRhZyBjYW4gYmUgaGFuZGxlZCBzcGVjaWFsbHksIGVpdGhlciB3LyBhICdtZXJnZScgb3IgJ2FwcGVuZCcgc3R5bGVcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkVGFnLCBjdXJyZW50SGVhZCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBhZGRlZCA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBwcmVzZXJ2ZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cbiAgICAgICAgICAgIGxldCBoZWFkTWVyZ2VTdHlsZSA9IGN0eC5oZWFkLnN0eWxlO1xuXG4gICAgICAgICAgICAvLyBwdXQgYWxsIG5ldyBoZWFkIGVsZW1lbnRzIGludG8gYSBNYXAsIGJ5IHRoZWlyIG91dGVySFRNTFxuICAgICAgICAgICAgbGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdIZWFkQ2hpbGQgb2YgbmV3SGVhZFRhZy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLnNldChuZXdIZWFkQ2hpbGQub3V0ZXJIVE1MLCBuZXdIZWFkQ2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBlbHQgaW4gdGhlIGN1cnJlbnQgaGVhZFxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50SGVhZEVsdCBvZiBjdXJyZW50SGVhZC5jaGlsZHJlbikge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaGVhZCBlbGVtZW50IGlzIGluIHRoZSBtYXBcbiAgICAgICAgICAgICAgICBsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzUmVBcHBlbmRlZCA9IGN0eC5oZWFkLnNob3VsZFJlQXBwZW5kKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICBsZXQgaXNQcmVzZXJ2ZWQgPSBjdHguaGVhZC5zaG91bGRQcmVzZXJ2ZShjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZUFwcGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgdmVyc2lvbiBhbmQgbGV0IHRoZSBuZXcgdmVyc2lvbiByZXBsYWNlIGl0IGFuZCByZS1leGVjdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGFuZCBzaG91bGQgbm90IGJlIHJlLWFwcGVuZGVkLCBzbyByZW1vdmUgaXQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5ldyBjb250ZW50IG1hcCwgcHJlc2VydmluZyBpdCBpbiB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkTWVyZ2VTdHlsZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBhbmQgdGhpcyBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gaWYgYW5kIG9ubHkgaWYgaXQgaXMgbWFya2VkIGZvciByZS1hcHBlbmQgZG8gd2UgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbWVyZ2UsIHdlIHJlbW92ZSB0aGlzIGNvbnRlbnQgc2luY2UgaXQgaXMgbm90IGluIHRoZSBuZXcgaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eC5oZWFkLnNob3VsZFJlbW92ZShjdXJyZW50SGVhZEVsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVzaCB0aGUgcmVtYWluaW5nIG5ldyBoZWFkIGVsZW1lbnRzIGluIHRoZSBNYXAgaW50byB0aGVcbiAgICAgICAgICAgIC8vIG5vZGVzIHRvIGFwcGVuZCB0byB0aGUgaGVhZCB0YWdcbiAgICAgICAgICAgIG5vZGVzVG9BcHBlbmQucHVzaCguLi5zcmNUb05ld0hlYWROb2Rlcy52YWx1ZXMoKSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdOb2RlIG9mIG5vZGVzVG9BcHBlbmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0VsdCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdFbHQuaHJlZiB8fCBuZXdFbHQuc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmFwcGVuZENoaWxkKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3RWx0KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQucHVzaChuZXdFbHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCByZW1vdmVkIGVsZW1lbnRzLCBhZnRlciB3ZSBoYXZlIGFwcGVuZGVkIHRoZSBuZXcgZWxlbWVudHMgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgbmV0d29yayByZXF1ZXN0cyBmb3IgdGhpbmdzIGxpa2Ugc3R5bGUgc2hlZXRzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWRFbGVtZW50IG9mIHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChyZW1vdmVkRWxlbWVudCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLnJlbW92ZUNoaWxkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5oZWFkLmFmdGVySGVhZE1vcnBoZWQoY3VycmVudEhlYWQsIHthZGRlZDogYWRkZWQsIGtlcHQ6IHByZXNlcnZlZCwgcmVtb3ZlZDogcmVtb3ZlZH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbm9PcCgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgRGVlcCBtZXJnZXMgdGhlIGNvbmZpZyBvYmplY3QgYW5kIHRoZSBJZGlvbW9yb3BoLmRlZmF1bHRzIG9iamVjdCB0b1xuICAgICAgICAgIHByb2R1Y2UgYSBmaW5hbCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VEZWZhdWx0cyhjb25maWcpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbENvbmZpZyA9IHt9O1xuICAgICAgICAgICAgLy8gY29weSB0b3AgbGV2ZWwgc3R1ZmYgaW50byBmaW5hbCBjb25maWdcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgY2FsbGJhY2tzIGludG8gZmluYWwgY29uZmlnIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGNhbGxiYWNrcylcbiAgICAgICAgICAgIGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGRlZmF1bHRzLmNhbGxiYWNrcyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmNhbGxiYWNrcywgY29uZmlnLmNhbGxiYWNrcyk7XG5cbiAgICAgICAgICAgIC8vIGNvcHkgaGVhZCBjb25maWcgaW50byBmaW5hbCBjb25maWcgIChkbyB0aGlzIHRvIGRlZXAgbWVyZ2UgdGhlIGhlYWQpXG4gICAgICAgICAgICBmaW5hbENvbmZpZy5oZWFkID0ge307XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGRlZmF1bHRzLmhlYWQpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBjb25maWcuaGVhZCk7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBtZXJnZURlZmF1bHRzKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhcmdldDogb2xkTm9kZSxcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50OiBuZXdDb250ZW50LFxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuICAgICAgICAgICAgICAgIGlnbm9yZUFjdGl2ZTogY29uZmlnLmlnbm9yZUFjdGl2ZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVBY3RpdmVWYWx1ZTogY29uZmlnLmlnbm9yZUFjdGl2ZVZhbHVlLFxuICAgICAgICAgICAgICAgIGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcbiAgICAgICAgICAgICAgICBkZWFkSWRzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiBjb25maWcuY2FsbGJhY2tzLFxuICAgICAgICAgICAgICAgIGhlYWQ6IGNvbmZpZy5oZWFkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0lkU2V0TWF0Y2gobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChub2RlMSA9PSBudWxsIHx8IG5vZGUyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZTEubm9kZVR5cGUgPT09IG5vZGUyLm5vZGVUeXBlICYmIG5vZGUxLnRhZ05hbWUgPT09IG5vZGUyLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZTEuaWQgIT09IFwiXCIgJiYgbm9kZTEuaWQgPT09IG5vZGUyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSA+IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSB7XG4gICAgICAgICAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2Rlc0JldHdlZW4oc3RhcnRJbmNsdXNpdmUsIGVuZEV4Y2x1c2l2ZSwgY3R4KSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IHN0YXJ0SW5jbHVzaXZlO1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5jbHVzaXZlID0gc3RhcnRJbmNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgZW5kRXhjbHVzaXZlKTtcbiAgICAgICAgICAgIHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFNjYW5zIGZvcndhcmQgZnJvbSB0aGUgaW5zZXJ0aW9uUG9pbnQgaW4gdGhlIG9sZCBwYXJlbnQgbG9va2luZyBmb3IgYSBwb3RlbnRpYWwgaWQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBpZCBtYXRjaCBmb3IgdGhlIG5ldyBjaGlsZCBPUlxuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIHBvdGVudGlhbCBpZCBtYXRjaGVzIHdlIGFyZSBkaXNjYXJkaW5nIGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgICAgLy8gcG90ZW50aWFsIGlkIG1hdGNoZXMgZm9yIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kSWRTZXRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cbiAgICAgICAgICAgIC8vIG1heCBpZCBtYXRjaGVzIHdlIGFyZSB3aWxsaW5nIHRvIGRpc2NhcmQgaW4gb3VyIHNlYXJjaFxuICAgICAgICAgICAgbGV0IG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBuZXdDaGlsZCwgb2xkUGFyZW50KTtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gb25seSBzZWFyY2ggZm9yd2FyZCBpZiB0aGVyZSBpcyBhIHBvc3NpYmlsaXR5IG9mIGFuIGlkIG1hdGNoXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwb3RlbnRpYWxNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYW4gaWQgbWF0Y2gsIHNjYW4gZm9yd2FyZFxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIHBvdGVudGlhbCBpZCBtYXRjaCBjb3VudCB3ZSBhcmUgZGlzY2FyZGluZyAodGhlXG4gICAgICAgICAgICAgICAgLy8gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoaXMgdG8gbWFrZSBpdCBsaWtlbHlcbiAgICAgICAgICAgICAgICAvLyB3b3J0aCBpdClcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocG90ZW50aWFsTWF0Y2ggIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYW4gaWQgbWF0Y2gsIHJldHVybiB0aGUgY3VycmVudCBwb3RlbnRpYWwgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsTWF0Y2gsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVyIHRoZSBvdGhlciBwb3RlbnRpYWwgbWF0Y2hlcyBvZiB0aGlzIG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIG1vcmUgcG90ZW50aWFsIGlkIG1hdGNoZXMgaW4gX290aGVyXyBjb250ZW50LCB3ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGhhdmUgYSBnb29kIGNhbmRpZGF0ZSBmb3IgYW4gaWQgbWF0Y2gsIHNvIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkdmFuY2VkIHRvIHRoZSBuZXh0IG9sZCBjb250ZW50IGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE1hdGNoID0gcG90ZW50aWFsTWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBTY2FucyBmb3J3YXJkIGZyb20gdGhlIGluc2VydGlvblBvaW50IGluIHRoZSBvbGQgcGFyZW50IGxvb2tpbmcgZm9yIGEgcG90ZW50aWFsIHNvZnQgbWF0Y2hcbiAgICAgICAgLy8gZm9yIHRoZSBuZXdDaGlsZC4gIFdlIHN0b3AgaWYgd2UgZmluZCBhIHBvdGVudGlhbCBzb2Z0IG1hdGNoIGZvciB0aGUgbmV3IGNoaWxkIE9SXG4gICAgICAgIC8vIGlmIHdlIGZpbmQgYSBwb3RlbnRpYWwgaWQgbWF0Y2ggaW4gdGhlIG9sZCBwYXJlbnRzIGNoaWxkcmVuIE9SIGlmIHdlIGZpbmQgdHdvXG4gICAgICAgIC8vIHBvdGVudGlhbCBzb2Z0IG1hdGNoZXMgZm9yIHRoZSBuZXh0IHR3byBwaWVjZXMgb2YgbmV3IGNvbnRlbnRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBmaW5kU29mdE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFNvZnRNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKHBvdGVudGlhbFNvZnRNYXRjaCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIHBvdGVudGlhbFNvZnRNYXRjaCwgbmV3Q29udGVudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHBvdGVudGlhbCBzb2Z0IG1hdGNoIGhhcyBhIHBvdGVudGlhbCBpZCBzZXQgbWF0Y2ggd2l0aCB0aGUgcmVtYWluaW5nIG5ld1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IHNvIGJhaWwgb3V0IG9mIGxvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNvZnQgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBub2RlLCByZXR1cm4gaXRcbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvdGVudGlhbFNvZnRNYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobmV4dFNpYmxpbmcsIHBvdGVudGlhbFNvZnRNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgbmV3IG5vZGUgaGFzIGEgc29mdCBtYXRjaCB3aXRoIHRoaXMgbm9kZSwgc29cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudCBvZiBmdXR1cmUgc29mdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB0d28gZnV0dXJlIHNvZnQgbWF0Y2hlcywgYmFpbCB0byBhbGxvdyB0aGUgc2libGluZ3MgdG8gc29mdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGNvbnN1bWUgZnV0dXJlIHNvZnQgbWF0Y2hlcyBmb3IgdGhlIHNha2Ugb2YgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWR2YW5jZWQgdG8gdGhlIG5leHQgb2xkIGNvbnRlbnQgY2hpbGRcbiAgICAgICAgICAgICAgICBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBwb3RlbnRpYWxTb2Z0TWF0Y2gubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHN2Z3MgdG8gYXZvaWQgZmFsc2UtcG9zaXRpdmUgbWF0Y2hlcyBvbiBoZWFkLCBldGMuXG4gICAgICAgICAgICBsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sICcnKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIG5ld0NvbnRlbnQgY29udGFpbnMgYSBodG1sLCBoZWFkIG9yIGJvZHkgdGFnLCB3ZSBjYW4gc2ltcGx5IHBhcnNlIGl0IHcvbyB3cmFwcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9oZWFkPi8pIHx8IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9ib2R5Pi8pKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgZnVsbCBIVE1MIGRvY3VtZW50LCByZXR1cm4gdGhlIGRvY3VtZW50IGl0c2VsZiBhcyB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHJldHVybiB0aGUgaHRtbCBlbGVtZW50IGFzIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgcGFydGlhbCBIVE1MLCB3cmFwIGl0IGluIGEgdGVtcGxhdGUgdGFnIHRvIHByb3ZpZGUgYSBwYXJlbnQgZWxlbWVudCBhbmQgYWxzbyB0byBoZWxwXG4gICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIHRvdWNoeSB0YWdzIGxpa2UgdHIsIHRib2R5LCBldGMuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcIjxib2R5Pjx0ZW1wbGF0ZT5cIiArIG5ld0NvbnRlbnQgKyBcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLCBcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlRG9jLmJvZHkucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGlmIChuZXdDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVW5uZWNlc3NhcnlMb2NhbFZhcmlhYmxlSlNcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSB0YWcgY3JlYXRlZCBieSBpZGlvbW9ycGggcGFyc2luZyBjYW4gc2VydmUgYXMgYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBhIHNpbmdsZSBub2RlIGlzIGFkZGVkIGFzIGEgY2hpbGQgdG8gYSBkdW1teSBwYXJlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGR1bW15UGFyZW50LmFwcGVuZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBub2RlcyBpbiB0aGUgYXJyYXkgb3IgSFRNTEVsZW1lbnQgY29sbGVjdGlvbiBhcmUgY29uc29saWRhdGVkIHVuZGVyXG4gICAgICAgICAgICAgICAgLy8gYSBzaW5nbGUgZHVtbXkgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBkdW1teVBhcmVudC5hcHBlbmQoZWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgbGV0IGFkZGVkID0gW107XG4gICAgICAgICAgICB3aGlsZSAocHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5vZGUpOyAvLyBwdXNoIGFkZGVkIHByZWNlZGluZyBzaWJsaW5ncyBvbiBpbiBvcmRlciBhbmQgaW5zZXJ0XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgbW9ycGhlZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkZWQucHVzaChtb3JwaGVkTm9kZSk7XG4gICAgICAgICAgICB3aGlsZSAobmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpOyAvLyBoZXJlIHdlIGFyZSBnb2luZyBpbiBvcmRlciwgc28gcHVzaCBvbiBhcyB3ZSBzY2FuLCByYXRoZXIgdGhhbiBhZGRcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdGFjay5wb3AoKSwgbW9ycGhlZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZEJlc3ROb2RlTWF0Y2gobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTY29yZSA9IHNjb3JlRWxlbWVudChjdXJyZW50RWxlbWVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3U2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IG5ld1Njb3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlc3RFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2NvcmVFbGVtZW50KG5vZGUxLCBub2RlMiwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAuNSArIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpIHtcbiAgICAgICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgdGVtcE5vZGUpO1xuICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0ZW1wTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIElEIFNldCBGdW5jdGlvbnNcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkge1xuICAgICAgICAgICAgcmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldCh0YXJnZXROb2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICByZXR1cm4gaWRTZXQuaGFzKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuICAgICAgICAgICAgbGV0IGlkU2V0ID0gY3R4LmlkTWFwLmdldChub2RlKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkU2V0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmRlYWRJZHMuYWRkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG4gICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHNvdXJjZVNldCkge1xuICAgICAgICAgICAgICAgIC8vIGEgcG90ZW50aWFsIG1hdGNoIGlzIGFuIGlkIGluIHRoZSBzb3VyY2UgYW5kIHBvdGVudGlhbElkc1NldCwgYnV0XG4gICAgICAgICAgICAgICAgLy8gdGhhdCBoYXMgbm90IGFscmVhZHkgYmVlbiBtZXJnZWQgaW50byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKGlzSWRJbkNvbnNpZGVyYXRpb24oY3R4LCBpZCkgJiYgaWRJc1dpdGhpbk5vZGUoY3R4LCBpZCwgbm9kZTIpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrbWF0Y2hDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvdHRvbSB1cCBhbGdvcml0aG0gdGhhdCBmaW5kcyBhbGwgZWxlbWVudHMgd2l0aCBpZHMgaW5zaWRlIG9mIHRoZSBub2RlXG4gICAgICAgICAqIGFyZ3VtZW50IGFuZCBwb3B1bGF0ZXMgaWQgc2V0cyBmb3IgdGhvc2Ugbm9kZXMgYW5kIGFsbCB0aGVpciBwYXJlbnRzLCBnZW5lcmF0aW5nXG4gICAgICAgICAqIGEgc2V0IG9mIGlkcyBjb250YWluZWQgd2l0aGluIGFsbCBub2RlcyBmb3IgdGhlIGVudGlyZSBoaWVyYXJjaHkgaW4gdGhlIERPTVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAgICAgICAgICogQHBhcmFtIHtNYXA8Tm9kZSwgU2V0PFN0cmluZz4+fSBpZE1hcFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVJZE1hcEZvck5vZGUobm9kZSwgaWRNYXApIHtcbiAgICAgICAgICAgIGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZWxlbWVudHMgd2l0aCBhbiBpZCBwcm9wZXJ0eVxuICAgICAgICAgICAgbGV0IGlkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWx0IG9mIGlkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsdDtcbiAgICAgICAgICAgICAgICAvLyB3YWxrIHVwIHRoZSBwYXJlbnQgaGllcmFyY2h5IG9mIHRoYXQgZWxlbWVudCwgYWRkaW5nIHRoZSBpZFxuICAgICAgICAgICAgICAgIC8vIG9mIGVsZW1lbnQgdG8gdGhlIHBhcmVudCdzIGlkIHNldFxuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBpZCBzZXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBpbnNlcnQgaXQgaW4gdGhlICBtYXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkU2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuc2V0KGN1cnJlbnQsIGlkU2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZFNldC5hZGQoZWx0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBjb21wdXRlcyBhIG1hcCBvZiBub2RlcyB0byBhbGwgaWRzIGNvbnRhaW5lZCB3aXRoaW4gdGhhdCBub2RlIChpbmNsdXNpdmUgb2YgdGhlXG4gICAgICAgICAqIG5vZGUpLiAgVGhpcyBtYXAgY2FuIGJlIHVzZWQgdG8gYXNrIGlmIHR3byBub2RlcyBoYXZlIGludGVyc2VjdGluZyBzZXRzIG9mIGlkcywgd2hpY2ggYWxsb3dzXG4gICAgICAgICAqIGZvciBhIGxvb3NlciBkZWZpbml0aW9uIG9mIFwibWF0Y2hpbmdcIiB0aGFuIHRyYWRpdGlvbiBpZCBtYXRjaGluZywgYW5kIGFsbG93cyBjaGlsZCBub2Rlc1xuICAgICAgICAgKiB0byBjb250cmlidXRlIHRvIGEgcGFyZW50IG5vZGVzIG1hdGNoaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9sZENvbnRlbnQgIHRoZSBvbGQgY29udGVudCB0aGF0IHdpbGwgYmUgbW9ycGhlZFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld0NvbnRlbnQgIHRoZSBuZXcgY29udGVudCB0byBtb3JwaCB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7TWFwPE5vZGUsIFNldDxTdHJpbmc+Pn0gYSBtYXAgb2Ygbm9kZXMgdG8gaWQgc2V0cyBmb3IgdGhlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJZE1hcChvbGRDb250ZW50LCBuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShvbGRDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICBwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG4gICAgICAgICAgICByZXR1cm4gaWRNYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIFRoaXMgaXMgd2hhdCBlbmRzIHVwIGJlY29taW5nIHRoZSBJZGlvbW9ycGggZ2xvYmFsIG9iamVjdFxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3JwaCxcbiAgICAgICAgICAgIGRlZmF1bHRzXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHN5bmNBdHRyaWJ1dGVzID0gKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbUVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGZyb21FbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICB0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcbiAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciA9IFtdO1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcCA9IChpZCwgcmVwbGFjZVdpdGhDbG9uZSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG4gICAgICAgIGlmICghcmVwbGFjZVdpdGhDbG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvbmVkT2xkRWxlbWVudCA9IGNsb25lSFRNTEVsZW1lbnQob2xkRWxlbWVudCk7XG4gICAgICAgIG9sZEVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkT2xkRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuICAgIH07XG4gICAgcm9vdFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saXZlLXByZXNlcnZlXScpLmZvckVhY2goKG5ld0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXZlLXByZXNlcnZlJyk7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLnNldChpZCwgb2xkRWxlbWVudCk7XG4gICAgICAgIHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIElkaW9tb3JwaC5tb3JwaChyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGZyb21FbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHx8ICEodG9FbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEZyb21FbCA9IG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcChmcm9tRWwuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb25lZEZyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgSWRpb21vcnBoLm1vcnBoKGNsb25lZEZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5BbHBpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQWxwaW5lLm1vcnBoKGZyb21FbC5fX3gsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbUVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZnJvbUVsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnT1BUSU9OJyAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJykgfHwgKGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbm5lckhUTUwgPSB0b0VsLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZU5vZGVSZW1vdmVkKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSByb290RnJvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG4gICAgICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50cy4nKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnJlcGxhY2VXaXRoKG9yaWdpbmFsRWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKC4uLmFyZ3MpKTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoYW5naW5nSXRlbXNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRydWVPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxSZWNvcmQub3JpZ2luYWw7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbmdlZEl0ZW1zLCAoW25hbWUsIHsgbmV3OiB2YWx1ZSB9XSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVtb3ZlZEl0ZW1zLmtleXMoKSk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRJdGVtcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZEl0ZW1zLnNpemUgPT09IDA7XG4gICAgfVxufVxuXG5jbGFzcyBFbGVtZW50Q2hhbmdlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuZGVsZXRlKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkU3R5bGUoc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5zZXRJdGVtKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMucmVtb3ZlSXRlbShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMucmVtb3ZlSXRlbShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgZ2V0QWRkZWRDbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuYWRkZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG4gICAgfVxuICAgIGdldENoYW5nZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuYWRkZWRDbGFzc2VzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMucmVtb3ZlZENsYXNzZXMpO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJlxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKSk7XG4gICAgfVxufVxuXG5jbGFzcyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrID0gc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuICAgIH1cbiAgICB3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICAgIH1cbiAgICBoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZEVsZW1lbnQgb2YgdGhpcy5hZGRlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUubWF0Y2goLyhcXFMrKS9ndSkgfHwgW107XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICBjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlcyA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFuZXdWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMocHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgYWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgfVxuICAgIGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eV0gPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSAnRk9OVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09ICd2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsnO1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gJyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICAgICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlKHByb3BzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIgPSBuZXcgVW5zeW5jZWRJbnB1dHNUcmFja2VyKHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIodGhpcy5lbGVtZW50LCAoZWxlbWVudCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcykpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRTZWxmKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBmaW5kQ29tcG9uZW50cyh0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9FbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdO1xuICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVHVyYm9FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXR1cmJvPVwiZmFsc2VcIl0nKTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9TZW5kID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNUb1NlbmRba2V5XSA9IHZhbHVlLmZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3RDb25maWcgPSB7XG4gICAgICAgICAgICBwcm9wczogdGhpcy52YWx1ZVN0b3JlLmdldE9yaWdpbmFsUHJvcHMoKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMucGVuZGluZ0FjdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHt9LFxuICAgICAgICAgICAgdXBkYXRlZFByb3BzRnJvbVBhcmVudDogdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSxcbiAgICAgICAgICAgIGZpbGVzOiBmaWxlc1RvU2VuZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVxdWVzdDpzdGFydGVkJywgcmVxdWVzdENvbmZpZyk7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLmZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoIWhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKT8uaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJykgJiZcbiAgICAgICAgICAgICAgICAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlQ3NyZlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kLnVwZGF0ZUNzcmZUb2tlbih0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlQ3NyZlZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlICcke3RoaXMubmFtZX0nIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOmAsIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICAgICAgZXhlY3V0ZU1vcnBoZG9tKHRoaXMuZWxlbWVudCwgbmV3RWxlbWVudCwgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSwgKGVsZW1lbnQpID0+IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy52YWx1ZVN0b3JlKSwgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlcik7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZUFsbFByb3BzKG5ld1Byb3BzKTtcbiAgICAgICAgY29uc3QgZXZlbnRzVG9FbWl0ID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEV2ZW50c1RvRW1pdCgpO1xuICAgICAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdXBkYXRlRnJvbVBhcmVudFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9PT0gJ2dldCcgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiYgKGFjdGlvbnMubGVuZ3RoIHx8IHRvdGFsRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG4gICAgdXBkYXRlQ3NyZlRva2VuKGNzcmZUb2tlbikge1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBtZXRob2QsIGNzcmZUb2tlbik7XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgT2JqZWN0LmtleXModXBkYXRlZCkpO1xuICAgIH1cbiAgICB1cGRhdGVDc3JmVG9rZW4oY3NyZlRva2VuKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIudXBkYXRlQ3NyZlRva2VuKGNzcmZUb2tlbik7XG4gICAgfVxufVxuXG5jbGFzcyBTdGltdWx1c0VsZW1lbnREcml2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0Rpc3BhdGNoVmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGNvbXBvbmVudCwgdHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpID8/ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJlxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGJhY2tlbmRSZXF1ZXN0ICYmXG4gICAgICAgICAgICAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHtmaW5hbEFjdGlvbn1cImApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICB9XG4gICAgZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoY29tcG9uZW50LCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGluZ0VsZW1lbnRzID0gWy4uLkFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpKV07XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gW2VsZW1lbnQsIC4uLm1hdGNoaW5nRWxlbWVudHNdO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuICAgIH1cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZXZlcnQnO1xuICAgIH1cbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnO1xuICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRBdHRyaWJ1dGUnIDogJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnYWRkQXR0cmlidXRlJztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFnZVVubG9hZGluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOnN0YXJ0ZWQnLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdEaXJlY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICckcmVuZGVyJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlRW1wdHkodmFsdWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09ICcnIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgIGlmICghaXNWYWx1ZUVtcHR5KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBjb25zdCBidWlsZFF1ZXJ5U3RyaW5nRW50cmllcyA9IChkYXRhLCBlbnRyaWVzID0ge30sIGJhc2VLZXkgPSAnJykgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaUtleSwgaVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYmFzZUtleSA9PT0gJycgPyBpS2V5IDogYCR7YmFzZUtleX1bJHtpS2V5fV1gO1xuICAgICAgICAgICAgaWYgKCcnID09PSBiYXNlS2V5ICYmIGlzVmFsdWVFbXB0eShpVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChudWxsICE9PSBpVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IHsgLi4uZW50cmllcywgLi4uYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoaVZhbHVlLCBlbnRyaWVzLCBrZXkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQoaVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJTJDL2csICcsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfTtcbiAgICBjb25zdCBlbnRyaWVzID0gYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMoZGF0YSk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApXG4gICAgICAgIC5qb2luKCcmJyk7XG59XG5mdW5jdGlvbiBmcm9tUXVlcnlTdHJpbmcoc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJz8nLCAnJyk7XG4gICAgaWYgKHNlYXJjaCA9PT0gJycpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCBpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSA9IChrZXksIHZhbHVlLCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCAuLi5yZXN0XSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbZmlyc3RdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGFbZmlyc3RdID0gTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChzZWNvbmQpKSA/IHt9IDogW107XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoW3NlY29uZCwgLi4ucmVzdF0uam9pbignLicpLCB2YWx1ZSwgZGF0YVtmaXJzdF0pO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IHNlYXJjaC5zcGxpdCgnJicpLm1hcCgoaSkgPT4gaS5zcGxpdCgnPScpKTtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCdbJykpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCcnID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBkb3ROb3RhdGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcWy9nLCAnLicpLnJlcGxhY2UoL10vZywgJycpO1xuICAgICAgICAgICAgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEoZG90Tm90YXRlZEtleSwgdmFsdWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5jbGFzcyBVcmxVdGlscyBleHRlbmRzIFVSTCB7XG4gICAgaGFzKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpW2tleV07XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVF1ZXJ5U3RyaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdG9RdWVyeVN0cmluZyhkYXRhKTtcbiAgICB9XG59XG5jbGFzcyBIaXN0b3J5U3RyYXRlZ3kge1xuICAgIHN0YXRpYyByZXBsYWNlKHVybCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5LnN0YXRlLCAnJywgdXJsKTtcbiAgICB9XG59XG5cbmNsYXNzIFF1ZXJ5U3RyaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBwaW5nKSB7XG4gICAgICAgIHRoaXMubWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsIChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybFV0aWxzID0gbmV3IFVybFV0aWxzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB1cmxVdGlscy50b1N0cmluZygpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tYXBwaW5nKS5mb3JFYWNoKChbcHJvcCwgbWFwcGluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChwcm9wKTtcbiAgICAgICAgICAgICAgICB1cmxVdGlscy5zZXQobWFwcGluZy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXJsICE9PSB1cmxVdGlscy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeVN0cmF0ZWd5LnJlcGxhY2UodXJsVXRpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyh0aGlzLmNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZXF1ZXN0OnN0YXJ0ZWQnLCAocmVxdWVzdERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICBub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAoIXBhcmVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBMYXp5UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoJ2xhenknICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnbG9hZGluZycpPy52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRPYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdmU6YXBwZWFyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIH1cbn1cblxuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aW9uIG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuICAgIH1cbiAgICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgZGVsZXRlIGV2ZW50QXJncy5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IExhenlQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUXVlcnlTdHJpbmdQbHVnaW4odGhpcy5xdWVyeU1hcHBpbmdWYWx1ZSksXG4gICAgICAgICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW4odGhpcy5jb21wb25lbnQpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZXZlbnRzVG9FbWl0OiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGV2ZW50c1RvRGlzcGF0Y2g6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgcmVxdWVzdE1ldGhvZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdwb3N0JyB9LFxuICAgIHF1ZXJ5TWFwcGluZzogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IHt9IH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5ID0gKGNvbnRyb2xsZXIpID0+IG5ldyBCYWNrZW5kKGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlLCBjb250cm9sbGVyLmNzcmZWYWx1ZSk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJhcmdzIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNvbmNhdCIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwidHJpbUFsbCIsInNwbGl0Iiwic3RyIiwicmVwbGFjZSIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwibWFwIiwiam9pbiIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiV2Vha01hcCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwiTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJzZXQiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXQiLCJjbGVhckludGVydmFsIiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiY29tcG9uZW50cyIsImNvbXBvbmVudE5hbWUiLCJjb250YWlucyIsImZpbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXREZWVwRGF0YSIsImRhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJWYWx1ZVN0b3JlIiwicHJvcHMiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwidXBkYXRlZFByb3BzRnJvbVBhcmVudCIsIm5vcm1hbGl6ZWROYW1lIiwiaGFzIiwiZ2V0T3JpZ2luYWxQcm9wcyIsImdldERpcnR5UHJvcHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImNoYW5nZWQiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJjdXJyZW50VmFsdWUiLCJJZGlvbW9ycGgiLCJFTVBUWV9TRVQiLCJTZXQiLCJkZWZhdWx0cyIsIm1vcnBoU3R5bGUiLCJjYWxsYmFja3MiLCJiZWZvcmVOb2RlQWRkZWQiLCJub09wIiwiYWZ0ZXJOb2RlQWRkZWQiLCJiZWZvcmVOb2RlTW9ycGhlZCIsImFmdGVyTm9kZU1vcnBoZWQiLCJiZWZvcmVOb2RlUmVtb3ZlZCIsImFmdGVyTm9kZVJlbW92ZWQiLCJiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkIiwiaGVhZCIsInN0eWxlIiwic2hvdWxkUHJlc2VydmUiLCJlbHQiLCJzaG91bGRSZUFwcGVuZCIsInNob3VsZFJlbW92ZSIsImFmdGVySGVhZE1vcnBoZWQiLCJtb3JwaCIsIm9sZE5vZGUiLCJuZXdDb250ZW50IiwiY29uZmlnIiwiRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJzZUNvbnRlbnQiLCJub3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJjdHgiLCJjcmVhdGVNb3JwaENvbnRleHQiLCJtb3JwaE5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplZE5ld0NvbnRlbnQiLCJibG9jayIsIm9sZEhlYWQiLCJxdWVyeVNlbGVjdG9yIiwibmV3SGVhZCIsInByb21pc2VzIiwiaGFuZGxlSGVhZEVsZW1lbnQiLCJhbGwiLCJhc3NpZ24iLCJpZ25vcmUiLCJtb3JwaENoaWxkcmVuIiwiYmVzdE1hdGNoIiwiZmluZEJlc3ROb2RlTWF0Y2giLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsIm1vcnBoZWROb2RlIiwibW9ycGhPbGROb2RlVG8iLCJpbnNlcnRTaWJsaW5ncyIsImlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50IiwicG9zc2libGVBY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlVmFsdWUiLCJhY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlIiwicmVtb3ZlIiwiaXNTb2Z0TWF0Y2giLCJyZXBsYWNlQ2hpbGQiLCJIVE1MSGVhZEVsZW1lbnQiLCJzeW5jTm9kZUZyb20iLCJuZXdQYXJlbnQiLCJvbGRQYXJlbnQiLCJuZXh0TmV3Q2hpbGQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0aW9uUG9pbnQiLCJuZXdDaGlsZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24iLCJpc0lkU2V0TWF0Y2giLCJpZFNldE1hdGNoIiwiZmluZElkU2V0TWF0Y2giLCJyZW1vdmVOb2Rlc0JldHdlZW4iLCJzb2Z0TWF0Y2giLCJmaW5kU29mdE1hdGNoIiwiaW5zZXJ0QmVmb3JlIiwidGVtcE5vZGUiLCJyZW1vdmVOb2RlIiwiaWdub3JlQXR0cmlidXRlIiwiYXR0ciIsInRvIiwidXBkYXRlVHlwZSIsIm5vZGVUeXBlIiwiZnJvbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVzIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXJyIiwidG9BdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImlnbm9yZVVwZGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJuZXdIZWFkVGFnIiwiY3VycmVudEhlYWQiLCJhZGRlZCIsInJlbW92ZWQiLCJwcmVzZXJ2ZWQiLCJub2Rlc1RvQXBwZW5kIiwiaGVhZE1lcmdlU3R5bGUiLCJzcmNUb05ld0hlYWROb2RlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJuZXdIZWFkQ2hpbGQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiY3VycmVudEhlYWRFbHQiLCJpbk5ld0NvbnRlbnQiLCJpc1JlQXBwZW5kZWQiLCJpc1ByZXNlcnZlZCIsIl9sb29wIiwibmV3Tm9kZSIsIl9ub2Rlc1RvQXBwZW5kIiwiX2kyIiwibmV3RWx0IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJocmVmIiwic3JjIiwicHJvbWlzZSIsIl9yZXNvbHZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pMyIsIl9yZW1vdmVkIiwicmVtb3ZlZEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImtlcHQiLCJtZXJnZURlZmF1bHRzIiwiZmluYWxDb25maWciLCJ0YXJnZXQiLCJpZE1hcCIsImNyZWF0ZUlkTWFwIiwiZGVhZElkcyIsIm5vZGUxIiwibm9kZTIiLCJ0YWdOYW1lIiwiaWQiLCJnZXRJZEludGVyc2VjdGlvbkNvdW50Iiwic3RhcnRJbmNsdXNpdmUiLCJlbmRFeGNsdXNpdmUiLCJuZXdDaGlsZFBvdGVudGlhbElkQ291bnQiLCJwb3RlbnRpYWxNYXRjaCIsIm90aGVyTWF0Y2hDb3VudCIsInBvdGVudGlhbFNvZnRNYXRjaCIsInNpYmxpbmdTb2Z0TWF0Y2hDb3VudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImNvbnRlbnRXaXRoU3Znc1JlbW92ZWQiLCJtYXRjaCIsInBhcnNlRnJvbVN0cmluZyIsImdlbmVyYXRlZEJ5SWRpb21vcnBoIiwiaHRtbEVsZW1lbnQiLCJyZXNwb25zZURvYyIsImJvZHkiLCJkdW1teVBhcmVudCIsIk5vZGUiLCJhcHBlbmQiLCJfaTQiLCJfYXJyIiwic3RhY2siLCJub2RlIiwiY3VycmVudEVsZW1lbnQiLCJiZXN0RWxlbWVudCIsInNjb3JlIiwibmV3U2NvcmUiLCJzY29yZUVsZW1lbnQiLCJpc0lkSW5Db25zaWRlcmF0aW9uIiwiaWRJc1dpdGhpbk5vZGUiLCJ0YXJnZXROb2RlIiwiaWRTZXQiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiYWRkIiwic291cmNlU2V0IiwibWF0Y2hDb3VudCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJwb3B1bGF0ZUlkTWFwRm9yTm9kZSIsIm5vZGVQYXJlbnQiLCJpZEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJjdXJyZW50Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194Iiwid2luZG93IiwiQWxwaW5lIiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwic2V0SXRlbSIsIml0ZW1OYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJyZW1vdmVJdGVtIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJfcmVmMyIsIl9yZWY0IiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNsYXNzTGlzdCIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsInN0YXJ0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImRpc2Nvbm5lY3QiLCJnZXRBZGRlZEVsZW1lbnRzIiwiaGFuZGxlUGVuZGluZ0NoYW5nZXMiLCJ0YWtlUmVjb3JkcyIsIm11dGF0aW9ucyIsImhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwibXV0YXRpb24iLCJpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24iLCJpc0NoYW5nZUluQWRkZWRFbGVtZW50IiwiX2l0ZXJhdG9yOCIsIl9zdGVwOCIsImFkZGVkRWxlbWVudCIsImhhbmRsZUNoaWxkTGlzdE11dGF0aW9uIiwiaGFuZGxlQXR0cmlidXRlTXV0YXRpb24iLCJfdGhpczUiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsIm9sZFZhbHVlIiwicHJldmlvdXNWYWx1ZXMiLCJuZXdWYWx1ZXMiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInByb3BlcnR5IiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJfdGhpczYiLCJmaW5nZXJwcmludCIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX3RoaXM2JGxpc3RlbmVycyRnZXQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJmaWxlcyIsImlucHV0IiwicmVuZGVyIiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZW1pdCIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZW1pdFVwIiwiZW1pdFNlbGYiLCJkb0VtaXQiLCJtYXRjaGluZ05hbWUiLCJfdGhpczciLCJhY3Rpb25zIiwiaXNUdXJib0VuYWJsZWQiLCJUdXJibyIsInBlcmZvcm1SZXF1ZXN0IiwiX3RoaXM4IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsImZpbGVzVG9TZW5kIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJyZXF1ZXN0Q29uZmlnIiwidXBkYXRlZCIsIm1ha2VSZXF1ZXN0IiwiX3JlZjUiLCJfY2FsbGVlMiIsIl9oZWFkZXJzJGdldCIsImJhY2tlbmRSZXNwb25zZSIsIl9pNiIsIl9PYmplY3QkdmFsdWVzIiwiaGVhZGVycyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJsaXZlQ3NyZlZhbHVlIiwidXBkYXRlQ3NyZlRva2VuIiwiX3giLCJfdGhpczkiLCJzaG91bGRSZW5kZXIiLCJ2aXNpdCIsImxvY2F0aW9uIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJuZXdQcm9wcyIsImdldENvbXBvbmVudFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsIl9yZWY2IiwiX3JlZjciLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXMxMCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsIl90aGlzMTEiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTIiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJidWlsZFJlcXVlc3QiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJfaTciLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIkJhY2tlbmQiLCJyZXF1ZXN0QnVpbGRlciIsIl90aGlzJHJlcXVlc3RCdWlsZGVyJCIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsIlN0aW11bHVzRWxlbWVudERyaXZlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZSIsInByb3BzVmFsdWUiLCJldmVudHNUb0VtaXRWYWx1ZSIsImV2ZW50c1RvRGlzcGF0Y2hWYWx1ZSIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczEzIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTQiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjgiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxNSIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJfdmFsaWRNb2RpZmllcnMkZ2V0IiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIm1hdGNoaW5nRWxlbWVudHMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QzIiwiX2VsZW1lbnQkY2xhc3NMaXN0NCIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTYiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTciLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxOCIsIl9yZWY5Iiwic3RvcEFsbFBvbGxpbmciLCJjbGVhclBvbGxpbmciLCJfdGhpczE5IiwidGltZXIiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMyMCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsImlubmVyTW9kZWxOYW1lIiwiaXNWYWx1ZUVtcHR5IiwiX2k4IiwiX09iamVjdCRrZXlzIiwidG9RdWVyeVN0cmluZyIsImJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzIiwiYmFzZUtleSIsIl9yZWYxMCIsIl9yZWYxMSIsImlLZXkiLCJpVmFsdWUiLCJfcmVmMTIiLCJfcmVmMTMiLCJmcm9tUXVlcnlTdHJpbmciLCJzZWFyY2giLCJpbnNlcnREb3ROb3RhdGVkVmFsdWVJbnRvRGF0YSIsIl9rZXkkc3BsaXQiLCJfa2V5JHNwbGl0MiIsIl90b0FycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJyZXN0IiwiX3JlZjE0IiwiX3JlZjE1IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG90Tm90YXRlZEtleSIsIlVybFV0aWxzIiwiX1VSTCIsInNldERhdGEiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiVVJMIiwiSGlzdG9yeVN0cmF0ZWd5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlF1ZXJ5U3RyaW5nUGx1Z2luIiwibWFwcGluZyIsIl90aGlzMjMiLCJ1cmxVdGlscyIsImN1cnJlbnRVcmwiLCJfcmVmMTYiLCJfcmVmMTciLCJDaGlsZENvbXBvbmVudFBsdWdpbiIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJtb2RlbERpcmVjdGl2ZXMiLCJfdGhpczI0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsIkxhenlQbHVnaW4iLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMjUiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMjUkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiX3RoaXMyNiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJpbml0aWFsaXplIiwiY3JlYXRlQ29tcG9uZW50IiwiY29ubmVjdENvbXBvbmVudCIsImRpc2Nvbm5lY3RDb21wb25lbnQiLCJ1cGRhdGUiLCJjdXJyZW50VGFyZ2V0IiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50IiwiX3RoaXMyNyIsInJhd0FjdGlvbiIsImFjdGlvbkFyZ3MiLCJzdG9wUHJvcGFnYXRpb24iLCJfdmFsaWRNb2RpZmllcnMkZ2V0MiIsIl9pOSIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwiJHJlbmRlciIsIl90aGlzMjgiLCJnZXRFbWl0RGlyZWN0aXZlcyIsIl9yZWYxOCIsIm5hbWVNYXRjaCIsIl90aGlzMjkiLCJfcmVmMTkiLCJfdGhpczMwIiwiX3JlZjIwIiwiJHVwZGF0ZU1vZGVsIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlQ2hhbmdlZCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZSIsImZpbmdlcnByaW50VmFsdWVDaGFuZ2VkIiwiZmluZ2VycHJpbnRWYWx1ZSIsImV2ZW50SW5mbyIsImV2ZW50QXJncyIsImVtaXRzIiwiX3RoaXMzMSIsIm5hbWVWYWx1ZSIsImxpc3RlbmVyc1ZhbHVlIiwiYmFja2VuZEZhY3RvcnkiLCJwcm94aWVkQ29tcG9uZW50IiwiX19jb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsInBsdWdpbnMiLCJxdWVyeU1hcHBpbmdWYWx1ZSIsIl90aGlzMzIiLCJfcmVmMjEiLCJfdGhpczMzIiwiX3JlZjIyIiwiZXZlbnROYW1lIiwiX2VsZW1lbnQkZmlsZXMiLCJmaW5hbFZhbHVlIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoIiwicHJlZml4IiwiX3RoaXMzNCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnQiLCJjc3JmIiwiZXZlbnRzVG9EaXNwYXRjaCIsInJlcXVlc3RNZXRob2QiLCJxdWVyeU1hcHBpbmciLCJ1cmxWYWx1ZSIsInJlcXVlc3RNZXRob2RWYWx1ZSIsImNzcmZWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=