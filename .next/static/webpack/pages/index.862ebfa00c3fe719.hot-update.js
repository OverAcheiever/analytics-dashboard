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

/***/ "./components/dashboard/Leaderboard.jsx":
/*!**********************************************!*\
  !*** ./components/dashboard/Leaderboard.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leaderboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Leaderboard(param) {\n    var leaderboard = param.leaderboard;\n    var _this = this;\n    leaderboard = [\n        {\n            name: \"USDT/DAI\",\n            apy: \"\"\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-72 bg-white rounded-lg p-3 space-regular\",\n        children: leaderboard.map(function(item, index) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-10 flex items-center justify-between bg-gray-50 rounded px-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                index + 1,\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Leaderboard.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Leaderboard.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Leaderboard.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, _this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Leaderboard.jsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Leaderboard.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n_c = Leaderboard;\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9MZWFkZXJib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUVWLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLEtBQWUsRUFBRSxDQUFDO1FBQWhCQyxXQUFXLEdBQWIsS0FBZSxDQUFiQSxXQUFXOztJQUMvQ0EsV0FBVyxHQUFHLENBQUM7UUFDYixDQUFDO1lBQ0NDLElBQUksRUFBRSxDQUFVO1lBQ2hCQyxHQUFHLEVBQUUsQ0FBRTtRQUNULENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNEM7a0JBQ3hESixXQUFXLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUM7WUFDakMsTUFBTSw2RUFDSEosQ0FBRztnQkFBYUMsU0FBUyxFQUFDLENBQWdFO3NHQUN4RkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWM7O29HQUMxQkQsQ0FBRzs7Z0NBQUVJLEtBQUssR0FBRyxDQUFDO2dDQUFDLENBQUM7Ozs7Ozs7b0dBQ2hCSixDQUFHO3NDQUFFRyxJQUFJLENBQUNMLElBQUk7Ozs7Ozs7Ozs7OztlQUhUTSxLQUFLOzs7OztRQU9uQixDQUFDOzs7Ozs7QUFHUCxDQUFDO0tBdEJ1QlIsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9MZWFkZXJib2FyZC5qc3g/OTljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJib2FyZCh7IGxlYWRlcmJvYXJkIH0pIHtcclxuICBsZWFkZXJib2FyZCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJVU0RUL0RBSVwiLFxyXG4gICAgICBhcHk6IFwiXCJcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBiZy13aGl0ZSByb3VuZGVkLWxnIHAtMyBzcGFjZS1yZWd1bGFyXCI+XHJcbiAgICAgIHtsZWFkZXJib2FyZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctZ3JheS01MCByb3VuZGVkIHB4LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2PntpbmRleCArIDF9LjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGVhZGVyYm9hcmQiLCJsZWFkZXJib2FyZCIsIm5hbWUiLCJhcHkiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dashboard/Leaderboard.jsx\n");

/***/ })

});