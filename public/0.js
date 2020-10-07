(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminProducts */ "./resources/js/components/admin/AdminProducts.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminProducts: _AdminProducts__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      search: "",
      headers: [{
        text: "Order ID",
        align: "start",
        value: "name"
      }, {
        text: "Price",
        value: "price"
      }, {
        text: "Brand (g)",
        value: "brand"
      }, {
        text: "Stocks (g)",
        value: "stocks"
      }, {
        text: "Unit",
        value: "unit"
      }, {
        text: "Actions",
        align: "center",
        value: "actions",
        sortable: false
      }],
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        unit: ""
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        unit: ""
      }
    };
  },
  methods: {
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") && this.desserts.splice(index, 1);
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "admin-products",
    [
      _c("v-data-table", {
        staticClass: "elevation-8 rounded",
        attrs: {
          headers: _vm.headers,
          items: _vm.$store.getters.products,
          search: _vm.search,
          "sort-by": "calories"
        },
        scopedSlots: _vm._u(
          [
            {
              key: "top",
              fn: function() {
                return [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", color: "red--text", rounded: "" } },
                    [
                      _c("v-toolbar-title", { staticClass: "primary--text" }, [
                        _vm._v("Orders")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "mdi-magnify",
                          label: "Search",
                          "single-line": "",
                          "hide-details": "",
                          color: "text-white",
                          rounded: "",
                          dense: "",
                          clearable: "",
                          outlined: ""
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-2",
                      attrs: { small: "" },
                      on: {
                        click: function($event) {
                          return _vm.editItem(item)
                        }
                      }
                    },
                    [_vm._v("mdi-eye")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-2",
                      attrs: { small: "" },
                      on: {
                        click: function($event) {
                          return _vm.editItem(item)
                        }
                      }
                    },
                    [_vm._v("mdi-pencil")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      attrs: { small: "" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item)
                        }
                      }
                    },
                    [_vm._v("mdi-delete")]
                  )
                ]
              }
            },
            {
              key: "no-data",
              fn: function() {
                return [
                  _c("v-btn", { attrs: { color: "primary" } }, [
                    _vm._v("Refresh the page")
                  ])
                ]
              },
              proxy: true
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/products/Orders.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/products/Orders.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=315d83d6& */ "./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=315d83d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Orders.vue?vue&type=template&id=315d83d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_315d83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);