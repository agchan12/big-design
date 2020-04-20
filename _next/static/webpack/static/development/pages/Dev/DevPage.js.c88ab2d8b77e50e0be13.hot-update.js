webpackHotUpdate("static/development/pages/Dev/DevPage.js",{

/***/ "./pages/Dev/DevPage.tsx":
/*!*******************************!*\
  !*** ./pages/Dev/DevPage.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/pages/Dev/DevPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["StatefulTable"], {
    columns: [{
      header: 'Sku',
      hash: 'sku',
      render: function render(_ref) {
        var sku = _ref.sku;
        return sku;
      }
    }, {
      header: 'Name',
      hash: 'name',
      sortKey: 'name',
      render: function render(_ref2) {
        var name = _ref2.name;
        return name;
      }
    }, {
      header: 'Stock',
      hash: 'stock',
      render: function render(_ref3) {
        var stock = _ref3.stock;
        return stock;
      },
      sortFn: function sortFn(a, b, direction) {
        return direction === 'ASC' ? a.stock - b.stock : b.stock - a.stock;
      }
    }],
    items: [{
      sku: 'SM13',
      name: '[Sample] Smith Journal 13',
      stock: 25
    }, {
      sku: 'DPB',
      name: '[Sample] Dustpan & Brush',
      stock: 34
    }, {
      sku: 'OFSUC',
      name: '[Sample] Utility Caddy',
      stock: 45
    }, {
      sku: 'CLC',
      name: '[Sample] Canvas Laundry Cart',
      stock: 2
    }, {
      sku: 'CGLD',
      name: '[Sample] Laundry Detergent',
      stock: 29
    }],
    pagination: true,
    selectable: true,
    stickyHeader: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), __jsx(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    description: "hello 2",
    label: "Hello",
    error:  true && 'Hello',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }));
});

/***/ })

})
//# sourceMappingURL=DevPage.js.c88ab2d8b77e50e0be13.hot-update.js.map