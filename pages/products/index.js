exports.ids = [4];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2b94bcd4", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bc40da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bc40da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bc40da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bc40da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bc40da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-13bc40da]{height:200px;-o-object-fit:contain;object-fit:contain}h4[data-v-13bc40da]{text-align:right;color:#dc3545}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=template&id=13bc40da&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<h1 class=\"text-uppercase bg-warning bg-gradient\" data-v-13bc40da>All products page</h1> <div class=\"album py-5 bg-light\" data-v-13bc40da><div class=\"container\" data-v-13bc40da><table class=\"table\" data-v-13bc40da><thead data-v-13bc40da><tr data-v-13bc40da><th scope=\"col\" data-v-13bc40da>#</th> <th scope=\"col\" data-v-13bc40da>Title</th> <th scope=\"col\" data-v-13bc40da>Price</th> <th scope=\"col\" data-v-13bc40da>Rating</th> <th scope=\"col\" data-v-13bc40da>Stock</th></tr></thead> " + _vm._ssrList(_vm.products, function (product, idx) {
    return "<tbody data-v-13bc40da><tr data-v-13bc40da><th scope=\"row\" data-v-13bc40da>" + _vm._ssrEscape(_vm._s(product.id)) + "</th> <td data-v-13bc40da><a href=\"#\" data-v-13bc40da>" + _vm._ssrEscape(" " + _vm._s(product.title) + " ") + "</a></td> <td data-v-13bc40da>" + _vm._ssrEscape(_vm._s(product.price)) + "</td> <td data-v-13bc40da>" + _vm._ssrEscape(_vm._s(product.rating)) + "</td> <td data-v-13bc40da>" + _vm._ssrEscape(_vm._s(product.stock)) + "</td></tr></tbody>";
  }) + "</table></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=template&id=13bc40da&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=script&lang=js&
/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  data() {
    return {
      products: []
    };
  },

  // async fetch() {
  //     this.products = await this.$http.$get('https://dummyjson.com/products')
  // },
  async asyncData({
    $axios
  }) {
    const response = await $axios.$get('https://dummyjson.com/products?limit=100');
    const products = await response.products;
    return {
      products
    };
  },

  methods: {
    openProduct(idx) {
      idx += 1;
      this.$router.push('/products/' + idx);
    }

  }
});
// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/products/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13bc40da",
  "573256e5"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map