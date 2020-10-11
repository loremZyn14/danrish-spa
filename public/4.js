(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Admin */ "./resources/js/components/admin/Admin.vue");
/* harmony import */ var _services_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/Products */ "./resources/js/services/Products.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_3__);
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
    Admin: _Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    ckeditor: _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_3___default.a.component
  },
  data: function data() {
    return {
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a,
      image: "/assets/img/default.png",
      message: "",
      imageFile: null,
      selected: {
        id: 1,
        name: "computer"
      },
      categories: []
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      Object(_services_Products__WEBPACK_IMPORTED_MODULE_1__["addProduct"])(this.product, this.imageFile).then(function (res) {
        _this.message = res.data;

        _this.$swal.fire(res.data, "", "success");
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getImage: function getImage(file) {
      console.log(file);
      this.imageFile = file; //   const file = e.target.files[0];

      if (file) {
        this.img = file;
        this.image = URL.createObjectURL(file);
      } else {
        this.image = "/assets/img/default.png ";
      }
    }
  },
  computed: {
    preview: function preview() {
      return this.image;
    },
    product: function product() {
      var _this2 = this;

      return this.$store.getters.products.find(function (product) {
        return product.id == _this2.$route.params.id;
      });
    }
  },
  mounted: function mounted() {
    this.categories = this.$store.getters.categories;
  },
  watch: {
    selected: {
      handler: function handler(newVal) {
        this.product.categoryId = newVal.id;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "admin",
    [
      _c(
        "v-container",
        [
          _c(
            "v-btn",
            {
              staticClass: "mb-4",
              attrs: {
                color: "primary",
                link: "",
                text: "",
                outlined: "",
                to: "/admin/products/list"
              }
            },
            [
              _c("v-icon", [_vm._v("mdi-arrow-left")]),
              _vm._v("\n      Show Products\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { lg: "3" } },
                [
                  _c(
                    "v-sheet",
                    { staticClass: "pa-8 pt-0 pb-4 border-1" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.preview,
                                  width: "100%",
                                  "max-height": "200px"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "blue", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-tabs",
                                { attrs: { vertical: "" } },
                                _vm._l(6, function(item, index) {
                                  return _c(
                                    "v-tab",
                                    { key: index },
                                    [
                                      _c(
                                        "v-avatar",
                                        {
                                          attrs: {
                                            size: "40",
                                            color: "grey lighten-3"
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: "/assets/img/logo.png",
                                              alt: "alt"
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-file-input", {
                    ref: "image",
                    attrs: {
                      value: _vm.imageFile,
                      "prepend-icon": "mdi-camera",
                      label: "Select Image",
                      accept: "image/*"
                    },
                    on: { change: _vm.getImage }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-4 py-6",
                      attrs: { color: "primary", block: "" }
                    },
                    [_vm._v("Add Image")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: " px-8 pt-12", attrs: { lg: "7", offset: "1" } },
                [
                  _c("v-text-field", {
                    attrs: { prefix: "Name : ", solo: "" },
                    model: {
                      value: _vm.product.name,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "name", $$v)
                      },
                      expression: "product.name"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { prefix: "Brand: ", solo: "" },
                            model: {
                              value: _vm.product.brand,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "brand", $$v)
                              },
                              expression: "product.brand"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              prefix: "Price:",
                              suffix: ".00",
                              solo: ""
                            },
                            model: {
                              value: _vm.product.price,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "price", $$v)
                              },
                              expression: "product.price"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { prefix: "Unit: ", solo: "" },
                            model: {
                              value: _vm.product.unit,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "unit", $$v)
                              },
                              expression: "product.unit"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { prefix: "Stocks: ", solo: "" },
                            model: {
                              value: _vm.product.stocks,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "stocks", $$v)
                              },
                              expression: "product.stocks"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.$store.getters.categories,
                              prefix: "Category: ",
                              "item-text": "name",
                              "item-value": "id",
                              solo: ""
                            },
                            model: {
                              value: _vm.product.category.id,
                              callback: function($$v) {
                                _vm.$set(_vm.product.category, "id", $$v)
                              },
                              expression: "product.category.id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("h1", { staticClass: "title" }, [
                            _vm._v("Description")
                          ]),
                          _vm._v(" "),
                          _c("ckeditor", {
                            attrs: { editor: _vm.editor },
                            model: {
                              value: _vm.product.description,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "description", $$v)
                              },
                              expression: "product.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.addProduct()
                        }
                      }
                    },
                    [_vm._v("Edit Product")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/products/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/products/Edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5769d68c& */ "./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5769d68c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/Edit.vue?vue&type=template&id=5769d68c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5769d68c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);