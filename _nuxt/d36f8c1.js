(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{365:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("2b94bcd4",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r(365)},369:function(t,e,r){var c=r(83)(!1);c.push([t.i,"img[data-v-13bc40da]{height:200px;-o-object-fit:contain;object-fit:contain}h4[data-v-13bc40da]{text-align:right;color:#dc3545}",""]),t.exports=c},374:function(t,e,r){"use strict";r.r(e);var c=r(10),n=(r(62),{data:function(){return{products:[]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("https://dummyjson.com/products?limit=100");case 3:return c=e.sent,e.next=6,c.products;case 6:return n=e.sent,e.abrupt("return",{products:n});case 8:case"end":return e.stop()}}),e)})))()},methods:{openProduct:function(t){t+=1,this.$router.push("/products/"+t)}}}),o=n,l=(r(368),r(42)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",[e("h1",{staticClass:"text-uppercase bg-warning bg-gradient"},[t._v("All products page")]),t._v(" "),e("div",{staticClass:"album py-5 bg-light"},[e("div",{staticClass:"container"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.products,(function(r,c){return e("tbody",{key:c},[e("tr",[e("th",{attrs:{scope:"row"}},[t._v(t._s(r.id))]),t._v(" "),e("td",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openProduct(c)}}},[t._v(" "+t._s(r.title)+" ")])]),t._v(" "),e("td",[t._v(t._s(r.price))]),t._v(" "),e("td",[t._v(t._s(r.rating))]),t._v(" "),e("td",[t._v(t._s(r.stock))])])])}))],2)])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Title")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Price")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Rating")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Stock")])])])}],!1,null,"13bc40da",null);e.default=component.exports}}]);