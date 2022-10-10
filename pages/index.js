exports.ids = [2];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8b125420", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d41d014_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d41d014_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d41d014_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d41d014_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d41d014_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-2d41d014]{height:160px;-o-object-fit:contain;object-fit:contain}h4[data-v-2d41d014]{text-align:right;color:#dc3545}@media (max-width:576px){.number[data-v-2d41d014]{display:none}}details[data-v-2d41d014]{border-radius:4px;padding:.5em .5em 0;width:220px;z-index:10;background:#fff}details ul[data-v-2d41d014]{margin-bottom:0}details li[data-v-2d41d014]{height:2rem;padding-left:.5rem;color:#fff}details button[data-v-2d41d014]{width:100%;border:0;background:transparent}details button[data-v-2d41d014]:hover{cursor:pointer;background:#e7f3ee}summary[data-v-2d41d014]{font-weight:700;margin:-.5em -.5em 0;padding:.5em 0}details[open][data-v-2d41d014]{padding:.5em;box-shadow:0 3px 8px rgba(0,0,0,.24)}details[open] summary[data-v-2d41d014]{border-bottom:1px solid #aaa;margin-bottom:.5em;padding:.5em}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2d41d014&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<h1 class=\"text-uppercase bg-warning bg-gradient mb-4\" data-v-2d41d014>Welcome to NUXT STORE!</h1> <form role=\"search\" class=\"w-100 mb-3 mb-lg-0 me-lg-3 d-flex text-end\" data-v-2d41d014><input type=\"search\" placeholder=\"Search...\" aria-label=\"Search\"" + _vm._ssrAttr("value", _vm.search) + " class=\"form-control\" data-v-2d41d014> <button type=\"submit\" class=\"btn btn-primary\" data-v-2d41d014>Search!</button></form> <nav data-v-2d41d014><ul class=\"pagination justify-content-end\" data-v-2d41d014><li class=\"page-item\" data-v-2d41d014><a href=\"#\" class=\"page-link\" data-v-2d41d014>\n                    Prev\n                </a></li> " + _vm._ssrList(_vm.pages, function (item, idx) {
    return "<li class=\"page-item col-0\" data-v-2d41d014><a href=\"#\" class=\"page-link number\" data-v-2d41d014>" + _vm._ssrEscape("\n                    " + _vm._s(idx + 1) + "\n                ") + "</a></li>";
  }) + " <li class=\"page-item\" data-v-2d41d014><a href=\"#\" class=\"page-link\" data-v-2d41d014>\n                    Next\n                </a></li></ul></nav> <div class=\"album pb-3 bg-light rounded\" data-v-2d41d014><div class=\"container position-relative pt-5\" data-v-2d41d014><details id=\"categories\" class=\"mb-3 position-absolute top-0 end-0 rounded\" data-v-2d41d014><summary class=\"bg-success bg-gradient text-white text-center rounded\" data-v-2d41d014>\n                    Categories\n                </summary> <ul class=\"list-unstyled\" data-v-2d41d014><button data-v-2d41d014><strong data-v-2d41d014>All categories</strong></button> " + _vm._ssrList(_vm.categories, function (item) {
    return "<button data-v-2d41d014>" + _vm._ssrEscape("\n                        " + _vm._s(item) + "\n                    ") + "</button>";
  }) + "</ul></details> <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\" data-v-2d41d014>" + _vm._ssrList(_vm.products, function (product, idx) {
    return "<div class=\"col\" data-v-2d41d014><div class=\"card\" data-v-2d41d014><img" + _vm._ssrAttr("src", product.images[0]) + _vm._ssrAttr("alt", product.title) + " class=\"card-img-top pt-2\" data-v-2d41d014> <div class=\"card-body\" data-v-2d41d014><h5 class=\"card-title\" data-v-2d41d014>" + _vm._ssrEscape(_vm._s(product.title)) + "</h5> <p class=\"card-text\" data-v-2d41d014>" + _vm._ssrEscape(_vm._s(product.description)) + "</p> <h4 data-v-2d41d014>" + _vm._ssrEscape("PRICE: " + _vm._s(product.price) + " $") + "</h4> <button class=\"btn btn-primary\" data-v-2d41d014>Read more</button></div></div></div>";
  }) + "</div></div></div> <nav data-v-2d41d014><ul class=\"pagination justify-content-end\" data-v-2d41d014><li class=\"page-item\" data-v-2d41d014><a href=\"#\" class=\"page-link\" data-v-2d41d014>\n                    Prev\n                </a></li> " + _vm._ssrList(_vm.pages, function (item, idx) {
    return "<li class=\"page-item col-0\" data-v-2d41d014><a href=\"#\" class=\"page-link number\" data-v-2d41d014>" + _vm._ssrEscape(_vm._s(idx + 1)) + "</a></li>";
  }) + " <li class=\"page-item\" data-v-2d41d014><a href=\"#\" class=\"page-link\" data-v-2d41d014>\n                    Next\n                </a></li></ul></nav>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2d41d014&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  // Создал стейт для работы с изменяющимися данными.
  data() {
    return {
      page: 0,
      // Номер отображаемой страницы для пагинации
      pages: 9,
      // Количество страниц для пагинации
      amount: 12,
      // Количество карточек на странице
      products: [],
      // Массив с карточками
      url: `https://dummyjson.com/products?limit=12&skip=0`,
      total: 100,
      // Общее количество карточек
      categories: [],
      // массив категорий
      search: '' // строка для поиска

    };
  },

  async fetch() {
    // Получаем массив с карточками товаров через fetch
    this.products = await fetch(this.url).then(res => res.json()) // парсим объект
    .then(res => res.products); // указываем на нужный массив в объекте
    // Получаем количество карточек на сервере

    this.total = await fetch(this.url).then(res => res.json()).then(res => res.total) // считаем количество страниц для пагинации
    .then(this.pages = Math.ceil(this.total / this.amount)); // Получаем массив с категориями товаров.

    this.categories = await fetch('https://dummyjson.com/products/categories').then(res => res.json()); // .then(res => console.log(res))
  },

  methods: {
    nextPage() {
      console.log(this.total);

      if (this.page <= this.total - this.amount) {
        this.page += this.amount;
        this.url = `https://dummyjson.com/products?limit=12&skip=${this.page}`;
        this.$fetch();
      }
    },

    previousPage() {
      if (this.page > 0) {
        this.page -= this.amount;
        this.url = `https://dummyjson.com/products?limit=12&skip=${this.page}`;
        this.$fetch();
      }
    },

    gotoPage(idx) {
      this.page = this.amount * idx;
      this.url = `https://dummyjson.com/products?limit=12&skip=${this.page}`;
      this.$fetch();
    },

    gotoCategory(item) {
      this.url = `https://dummyjson.com/products/category/${item}`;
      document.getElementById('categories').removeAttribute('open');
      this.$fetch();
    },

    gotoAllCategories() {
      this.url = `https://dummyjson.com/products?limit=12&skip=0`;
      document.getElementById('categories').removeAttribute('open');
      this.$fetch();
    },

    searchProduct() {
      this.url = `https://dummyjson.com/products/search?q=${this.search}`;
      console.log(this.url);
      this.$fetch();
    },

    openProduct(idx) {
      idx += 1;
      this.$router.push('/products/' + idx);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d41d014",
  "0b648c44"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map