"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Sidebar() {\n    var _this = this;\n    var nav = [\n        {\n            name: \"Dashboard\",\n            icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.HomeIcon\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-64 h-screen p-4 flex flex-col gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: nav.map(function(item, key) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center gap-x-2 h-12 rounded pl-3 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                className: \"h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this),\n                            item.name\n                        ]\n                    }, key, true, {\n                        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBRWxDLFFBQVEsQ0FBQ0UsT0FBTyxHQUFHLENBQUM7O0lBQ2pDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQUM7UUFDWCxDQUFDO1lBQ0NDLElBQUksRUFBRSxDQUFXO1lBQ2pCQyxJQUFJLEVBQUVKLDREQUFRO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSEssQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUM7O3dGQUNyREQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozt3RkFFM0JELENBQUc7MEJBQ0RILEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxHQUFHO2tDQUNqQixNQUFNLCtEQUFMSixDQUFHO3dCQUFXQyxTQUFTLEVBQUMsQ0FBeUQ7O3dHQUM3RUUsSUFBSSxDQUFDSixJQUFJO2dDQUFDRSxTQUFTLEVBQUMsQ0FBUTs7Ozs7OzRCQUM1QkUsSUFBSSxDQUFDTCxJQUFJOzt1QkFGSk0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztLQXRCdUJSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzeD80Y2I0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBuYXYgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgIGljb246IEhvbWVJY29uLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtc2NyZWVuIHAtNCBmbGV4IGZsZXgtY29sIGdhcC15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yMFwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bmF2Lm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBoLTEyIHJvdW5kZWQgcGwtMyBweS0yXCI+XHJcbiAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lSWNvbiIsIlNpZGViYXIiLCJuYXYiLCJuYW1lIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n");

/***/ })

});