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

/***/ "./components/dashboard/Sidebar.jsx":
/*!******************************************!*\
  !*** ./components/dashboard/Sidebar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Sidebar() {\n    var _this = this;\n    var nav = [\n        {\n            name: \"Dashboard\",\n            icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.HomeIcon\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-64 h-screen p-4 flex flex-col gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-regular\",\n                children: nav.map(function(item, key) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center gap-x-3 h-10 rounded pl-2 py-2 bg-gray-50\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                className: \"h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this),\n                            item.name\n                        ]\n                    }, key, true, {\n                        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TaWRlYmFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUN3QjtBQUVsQyxRQUFRLENBQUNFLE9BQU8sR0FBRyxDQUFDOztJQUNqQyxHQUFLLENBQUNDLEdBQUcsR0FBRyxDQUFDO1FBQ1gsQ0FBQztZQUNDQyxJQUFJLEVBQUUsQ0FBVztZQUNqQkMsSUFBSSxFQUFFSiw0REFBUTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlDOzt3RkFDckRELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7d0ZBRTNCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZTswQkFDM0JKLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxHQUFHO2tDQUNqQixNQUFNLCtEQUFMSixDQUFHO3dCQUFXQyxTQUFTLEVBQUMsQ0FBb0U7O3dHQUN4RkUsSUFBSSxDQUFDSixJQUFJO2dDQUFDRSxTQUFTLEVBQUMsQ0FBUTs7Ozs7OzRCQUM1QkUsSUFBSSxDQUFDTCxJQUFJOzt1QkFGSk0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztLQXRCdUJSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvU2lkZWJhci5qc3g/MzcwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgbmF2ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICBpY29uOiBIb21lSWNvbixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLXNjcmVlbiBwLTQgZmxleCBmbGV4LWNvbCBnYXAteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMjBcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtcmVndWxhclwiPlxyXG4gICAgICAgIHtuYXYubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zIGgtMTAgcm91bmRlZCBwbC0yIHB5LTIgYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZUljb24iLCJTaWRlYmFyIiwibmF2IiwibmFtZSIsImljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/Sidebar.jsx\n");

/***/ })

});