exports.ids = [3];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("df96dd68", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_05182f0b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_05182f0b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_05182f0b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_05182f0b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_05182f0b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-05182f0b]{max-height:40vh;max-width:100%;-o-object-fit:contain;object-fit:contain}h2[data-v-05182f0b]{margin-bottom:1rem}.card-body[data-v-05182f0b]{max-width:576px;margin:2rem auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=template&id=05182f0b&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"card-body\" data-v-05182f0b>", "</div>", [_vm._ssrNode("<h1 data-v-05182f0b>" + _vm._ssrEscape("\n            " + _vm._s(_vm.product.title) + "\n        ") + "</h1> <p data-v-05182f0b><img" + _vm._ssrAttr("src", _vm.product.thumbnail) + _vm._ssrAttr("alt", _vm.product.title) + " class=\"card-img-top\" data-v-05182f0b></p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Brand:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.brand) + "\n        ") + "</p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Category:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.category) + "\n        ") + "</p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Descriptions:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.description) + "\n        ") + "</p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Rating:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.rating) + "\n        ") + "</p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Stock:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.stock) + " items\n        ") + "</p> <p class=\"card-text\" data-v-05182f0b><strong data-v-05182f0b>Discount:</strong>" + _vm._ssrEscape("  " + _vm._s(_vm.product.discountPercentage) + " %\n        ") + "</p> <h2 data-v-05182f0b>" + _vm._ssrEscape("\n            Price: " + _vm._s(_vm.product.price) + " $\n        ") + "</h2> "), _vm._ssrNode("<p class=\"text-end px-4\" data-v-05182f0b>", "</p>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n                Go back\n            ")])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=template&id=05182f0b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  validate({
    params
  }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },

  data: () => ({
    product: []
  }),

  async asyncData({
    $axios,
    params
  }) {
    const product = await $axios.$get('https://dummyjson.com/products/' + params.id);
    return {
      product
    };
  }

});
// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/products/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05182f0b",
  "4cc2ce8d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map