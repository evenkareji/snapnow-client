"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[username]",{

/***/ "./src/components/molecules/ProfileHeader.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/ProfileHeader.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/molecules/ProfileHeader.tsx\";\n// ProfileHeader.tsx\n\n\n\nconst SHeaderInner = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header.withConfig({\n  displayName: \"ProfileHeader__SHeaderInner\",\n  componentId: \"sc-o5haz3-0\"\n})([\"text-align:center;position:relative;width:93%;margin-left:auto;margin-right:auto;\"]);\n_c = SHeaderInner;\n\nconst ProfileHeader = _ref => {\n  let {\n    title,\n    leftIcon,\n    rightIcon\n  } = _ref;\n  const renderedTitle = typeof title === 'string' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    style: {\n      fontSize: '16px'\n    },\n    children: title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }, undefined) : title;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SHeader, {\n    borderBottom: borderBottom,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SHeaderInner, {\n      children: [leftIcon, renderedTitle, rightIcon]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c2 = ProfileHeader;\nconst SHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header.withConfig({\n  displayName: \"ProfileHeader__SHeader\",\n  componentId: \"sc-o5haz3-1\"\n})([\"padding:22px 0px 11px 0px;align-items:center;box-sizing:border-box;border-bottom:\", \";\"], _ref2 => {\n  let {\n    borderBottom\n  } = _ref2;\n  return borderBottom || '1px solid #f2f2f2';\n});\n_c3 = SHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileHeader);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SHeaderInner\");\n$RefreshReg$(_c2, \"ProfileHeader\");\n$RefreshReg$(_c3, \"SHeader\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZmlsZUhlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNRSxZQUFZLEdBQUdELDJFQUFIO0VBQUE7RUFBQTtBQUFBLHlGQUFsQjtLQUFNQzs7QUFRTixNQUFNRSxhQUEyQyxHQUFHLFFBSTlDO0VBQUEsSUFKK0M7SUFDbkRDLEtBRG1EO0lBRW5EQyxRQUZtRDtJQUduREM7RUFIbUQsQ0FJL0M7RUFDSixNQUFNQyxhQUFhLEdBQ2pCLE9BQU9ILEtBQVAsS0FBaUIsUUFBakIsZ0JBQ0U7SUFBSSxLQUFLLEVBQUU7TUFBRUksUUFBUSxFQUFFO0lBQVosQ0FBWDtJQUFBLFVBQWtDSjtFQUFsQztJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREYsR0FHRUEsS0FKSjtFQU9BLG9CQUNFLDhEQUFDLE9BQUQ7SUFBUyxZQUFZLEVBQUVLLFlBQXZCO0lBQUEsdUJBQ0UsOERBQUMsWUFBRDtNQUFBLFdBQ0dKLFFBREgsRUFFR0UsYUFGSCxFQUdHRCxTQUhIO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQVNELENBckJEOztNQUFNSDtBQXNCTixNQUFNTyxPQUFPLEdBQUdWLDJFQUFIO0VBQUE7RUFBQTtBQUFBLCtGQUtNO0VBQUEsSUFBQztJQUFFUztFQUFGLENBQUQ7RUFBQSxPQUFzQkEsWUFBWSxJQUFJLG1CQUF0QztBQUFBLENBTE4sQ0FBYjtNQUFNQztBQU9OLCtEQUFlUCxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9maWxlSGVhZGVyLnRzeD9jMmVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFByb2ZpbGVIZWFkZXIudHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9maWxlSGVhZGVyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICBsZWZ0SWNvbjogUmVhY3QuUmVhY3ROb2RlO1xuICByaWdodEljb246IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgU0hlYWRlcklubmVyID0gc3R5bGVkLmhlYWRlcmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5gO1xuXG5jb25zdCBQcm9maWxlSGVhZGVyOiBSZWFjdC5GQzxQcm9maWxlSGVhZGVyUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGxlZnRJY29uLFxuICByaWdodEljb24sXG59KSA9PiB7XG4gIGNvbnN0IHJlbmRlcmVkVGl0bGUgPVxuICAgIHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyAoXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT57dGl0bGV9PC9oMT5cbiAgICApIDogKFxuICAgICAgdGl0bGVcbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNIZWFkZXIgYm9yZGVyQm90dG9tPXtib3JkZXJCb3R0b219PlxuICAgICAgPFNIZWFkZXJJbm5lcj5cbiAgICAgICAge2xlZnRJY29ufVxuICAgICAgICB7cmVuZGVyZWRUaXRsZX1cbiAgICAgICAge3JpZ2h0SWNvbn1cbiAgICAgIDwvU0hlYWRlcklubmVyPlxuICAgIDwvU0hlYWRlcj5cbiAgKTtcbn07XG5jb25zdCBTSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcGFkZGluZzogMjJweCAwcHggMTFweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgYm9yZGVyLWJvdHRvbTogJHsoeyBib3JkZXJCb3R0b20gfSkgPT4gYm9yZGVyQm90dG9tIHx8ICcxcHggc29saWQgI2YyZjJmMid9O1xuYDtcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJTSGVhZGVySW5uZXIiLCJoZWFkZXIiLCJQcm9maWxlSGVhZGVyIiwidGl0bGUiLCJsZWZ0SWNvbiIsInJpZ2h0SWNvbiIsInJlbmRlcmVkVGl0bGUiLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbSIsIlNIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/ProfileHeader.tsx\n"));

/***/ })

});