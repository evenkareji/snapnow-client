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

/***/ "./src/components/atoms/Share.tsx":
/*!****************************************!*\
  !*** ./src/components/atoms/Share.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Share */ \"./node_modules/@mui/icons-material/Share.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareButtons */ \"./src/components/atoms/ShareButtons.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/atoms/Share.tsx\",\n    _s = $RefreshSig$();\n\n// Share.js\n\n\n\n\n\n\nconst Share = () => {\n  _s();\n\n  const {\n    0: showShareButtons,\n    1: setShowShareButtons\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const URL = 'https://example.com';\n  const QUOTE = 'この人をみてくれ！';\n\n  const handleShareClick = () => {\n    setShowShareButtons(!showShareButtons);\n  };\n\n  const handleCloseShareButtons = () => {\n    setShowShareButtons(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShareIconStyled, {\n      onClick: handleShareClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Overlay, {\n      show: showShareButtons,\n      onClick: handleCloseShareButtons\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShareButtonsContainer, {\n      show: showShareButtons,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ShareButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        url: URL,\n        quote: QUOTE\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Share, \"n4NL7K7Jp5O4+FxWs8jRNnho2ZY=\");\n\n_c = Share;\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: relative;\n`;\n_c2 = Container;\nconst ShareIconStyled = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_4__[\"default\"])`\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n`;\n_c3 = ShareIconStyled;\nconst Overlay = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: ${_ref => {\n  let {\n    show\n  } = _ref;\n  return show ? '100%' : '0';\n}};\n  background: rgba(0, 0, 0, 0.5);\n  display: ${_ref2 => {\n  let {\n    show\n  } = _ref2;\n  return show ? 'block' : 'none';\n}};\n  z-index: 1;\n`;\n_c4 = Overlay;\nconst ShareButtonsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n  padding-top: 20px;\n  border-radius: 12px;\n  bottom: ${_ref3 => {\n  let {\n    show\n  } = _ref3;\n  return show ? '0' : '-100%';\n}};\n  left: 0;\n  width: 100%;\n  height: 40vh;\n  background-color: #fff;\n  transition: bottom 0.2s ease-in-out;\n  z-index: 2000000; /* Ensure it's above the overlay */\n`;\n_c5 = ShareButtonsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Share\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"ShareIconStyled\");\n$RefreshReg$(_c4, \"Overlay\");\n$RefreshReg$(_c5, \"ShareButtonsContainer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9TaGFyZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNSyxLQUFLLEdBQUcsTUFBTTtFQUFBOztFQUNsQixNQUFNO0lBQUEsR0FBQ0MsZ0JBQUQ7SUFBQSxHQUFtQkM7RUFBbkIsSUFBMENKLCtDQUFRLENBQUMsS0FBRCxDQUF4RDtFQUNBLE1BQU1LLEdBQUcsR0FBRyxxQkFBWjtFQUNBLE1BQU1DLEtBQUssR0FBRyxXQUFkOztFQUVBLE1BQU1DLGdCQUFnQixHQUFHLE1BQU07SUFDN0JILG1CQUFtQixDQUFDLENBQUNELGdCQUFGLENBQW5CO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNSyx1QkFBdUIsR0FBRyxNQUFNO0lBQ3BDSixtQkFBbUIsQ0FBQyxLQUFELENBQW5CO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSw4REFBQyxTQUFEO0lBQUEsd0JBQ0UsOERBQUMsZUFBRDtNQUFpQixPQUFPLEVBQUVHO0lBQTFCO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUVFLDhEQUFDLE9BQUQ7TUFBUyxJQUFJLEVBQUVKLGdCQUFmO01BQWlDLE9BQU8sRUFBRUs7SUFBMUM7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGLGVBR0UsOERBQUMscUJBQUQ7TUFBdUIsSUFBSSxFQUFFTCxnQkFBN0I7TUFBQSx1QkFDRSw4REFBQyxxREFBRDtRQUFjLEdBQUcsRUFBRUUsR0FBbkI7UUFBd0IsS0FBSyxFQUFFQztNQUEvQjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUhGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBU0QsQ0F0QkQ7O0dBQU1KOztLQUFBQTtBQXdCTixNQUFNTyxTQUFTLEdBQUdYLDJEQUFXO0FBQzdCO0FBQ0EsQ0FGQTtNQUFNVztBQUlOLE1BQU1FLGVBQWUsR0FBR2IsMkRBQU0sQ0FBQ0QsaUVBQUQsQ0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNYztBQVFOLE1BQU1DLE9BQU8sR0FBR2QsMkRBQThCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtFQUFBLElBQUM7SUFBRWU7RUFBRixDQUFEO0VBQUEsT0FBZUEsSUFBSSxHQUFHLE1BQUgsR0FBWSxHQUEvQjtBQUFBLENBQW9DO0FBQ2hEO0FBQ0EsYUFBYTtFQUFBLElBQUM7SUFBRUE7RUFBRixDQUFEO0VBQUEsT0FBZUEsSUFBSSxHQUFHLE9BQUgsR0FBYSxNQUFoQztBQUFBLENBQXdDO0FBQ3JEO0FBQ0EsQ0FUQTtNQUFNRDtBQVdOLE1BQU1FLHFCQUFxQixHQUFHaEIsMkRBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7RUFBQSxJQUFDO0lBQUVlO0VBQUYsQ0FBRDtFQUFBLE9BQWVBLElBQUksR0FBRyxHQUFILEdBQVMsT0FBNUI7QUFBQSxDQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBO01BQU1DO0FBYU4sK0RBQWVaLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvU2hhcmUudHN4PzcwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2hhcmUuanNcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaGFyZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hhcmVCdXR0b25zIGZyb20gJy4vU2hhcmVCdXR0b25zJztcblxuY29uc3QgU2hhcmUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93U2hhcmVCdXR0b25zLCBzZXRTaG93U2hhcmVCdXR0b25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgVVJMID0gJ2h0dHBzOi8vZXhhbXBsZS5jb20nO1xuICBjb25zdCBRVU9URSA9ICfjgZPjga7kurrjgpLjgb/jgabjgY/jgozvvIEnO1xuXG4gIGNvbnN0IGhhbmRsZVNoYXJlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1NoYXJlQnV0dG9ucyghc2hvd1NoYXJlQnV0dG9ucyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VTaGFyZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1NoYXJlQnV0dG9ucyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNoYXJlSWNvblN0eWxlZCBvbkNsaWNrPXtoYW5kbGVTaGFyZUNsaWNrfSAvPlxuICAgICAgPE92ZXJsYXkgc2hvdz17c2hvd1NoYXJlQnV0dG9uc30gb25DbGljaz17aGFuZGxlQ2xvc2VTaGFyZUJ1dHRvbnN9IC8+XG4gICAgICA8U2hhcmVCdXR0b25zQ29udGFpbmVyIHNob3c9e3Nob3dTaGFyZUJ1dHRvbnN9PlxuICAgICAgICA8U2hhcmVCdXR0b25zIHVybD17VVJMfSBxdW90ZT17UVVPVEV9IC8+XG4gICAgICA8L1NoYXJlQnV0dG9uc0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNoYXJlSWNvblN0eWxlZCA9IHN0eWxlZChTaGFyZUljb24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgc2hvdzogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICcxMDAlJyA6ICcwJyl9O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICdibG9jaycgOiAnbm9uZScpfTtcbiAgei1pbmRleDogMTtcbmA7XG5cbmNvbnN0IFNoYXJlQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBzaG93OiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3R0b206ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICcwJyA6ICctMTAwJScpfTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDIwMDAwMDA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIHRoZSBvdmVybGF5ICovXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaGFyZTtcbiJdLCJuYW1lcyI6WyJTaGFyZUljb24iLCJzdHlsZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2hhcmVCdXR0b25zIiwiU2hhcmUiLCJzaG93U2hhcmVCdXR0b25zIiwic2V0U2hvd1NoYXJlQnV0dG9ucyIsIlVSTCIsIlFVT1RFIiwiaGFuZGxlU2hhcmVDbGljayIsImhhbmRsZUNsb3NlU2hhcmVCdXR0b25zIiwiQ29udGFpbmVyIiwiZGl2IiwiU2hhcmVJY29uU3R5bGVkIiwiT3ZlcmxheSIsInNob3ciLCJTaGFyZUJ1dHRvbnNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Share.tsx\n"));

/***/ })

});