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

/***/ "./src/components/organisms/PostPopup.tsx":
/*!************************************************!*\
  !*** ./src/components/organisms/PostPopup.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/PostPopup.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst PostPopup = _ref => {\n  _s();\n\n  let {\n    onDelete,\n    post\n  } = _ref;\n  const {\n    0: showShareButtons,\n    1: setShowShareButtons\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const handleShareClick = () => {\n    setShowShareButtons(!showShareButtons);\n  };\n\n  const handleCloseShareButtons = () => {\n    setShowShareButtons(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      style: {\n        cursor: 'pointer'\n      },\n      onClick: handleShareClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Overlay, {\n      show: showShareButtons,\n      onClick: handleCloseShareButtons\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ShareButtonsContainer, {\n      show: showShareButtons,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SharedContentWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SharedContent, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SPopupList, {\n            onClick: () => onDelete(post?._id),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n              children: \"\\u524A\\u9664\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(PostPopup, \"n4NL7K7Jp5O4+FxWs8jRNnho2ZY=\");\n\n_c = PostPopup;\nconst Overlay = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: ${_ref2 => {\n  let {\n    show\n  } = _ref2;\n  return show ? '100%' : '0';\n}};\n  background: rgba(0, 0, 0, 0.5);\n  display: ${_ref3 => {\n  let {\n    show\n  } = _ref3;\n  return show ? 'block' : 'none';\n}};\n  z-index: 100;\n`;\n_c2 = Overlay;\nconst ShareButtonsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n  bottom: ${_ref4 => {\n  let {\n    show\n  } = _ref4;\n  return show ? '0' : '-100%';\n}};\n  left: 0;\n  width: 100%;\n  height: 30vh;\n  background-color: #fff;\n  transition: bottom 0.2s ease-in-out;\n  z-index: 2000000; /* Ensure it's above the overlay */\n  border-radius: 8px;\n`;\n_c3 = ShareButtonsContainer;\nconst SPopupList = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 100%;\n  cursor: pointer;\n  color: red;\n  display: flex;\n  align-items: center;\n  hover: {\n    background-color: #dbdbdb;\n  }\n`;\n_c4 = SPopupList;\nconst SharedContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 92%;\n  margin: 0 auto;\n  text-align: left;\n`;\n_c5 = SharedContentWrapper;\nconst SharedContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  padding: 20px;\n`;\n_c6 = SharedContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPopup);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"PostPopup\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"ShareButtonsContainer\");\n$RefreshReg$(_c4, \"SPopupList\");\n$RefreshReg$(_c5, \"SharedContentWrapper\");\n$RefreshReg$(_c6, \"SharedContent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUG9zdFBvcHVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0EsTUFBTUksU0FBUyxHQUFHLFFBQXdCO0VBQUE7O0VBQUEsSUFBdkI7SUFBRUMsUUFBRjtJQUFZQztFQUFaLENBQXVCO0VBQ3hDLE1BQU07SUFBQSxHQUFDQyxnQkFBRDtJQUFBLEdBQW1CQztFQUFuQixJQUEwQ0wsK0NBQVEsQ0FBQyxLQUFELENBQXhEOztFQUVBLE1BQU1NLGdCQUFnQixHQUFHLE1BQU07SUFDN0JELG1CQUFtQixDQUFDLENBQUNELGdCQUFGLENBQW5CO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNRyx1QkFBdUIsR0FBRyxNQUFNO0lBQ3BDRixtQkFBbUIsQ0FBQyxLQUFELENBQW5CO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLHFFQUFEO01BQWUsS0FBSyxFQUFFO1FBQUVHLE1BQU0sRUFBRTtNQUFWLENBQXRCO01BQTZDLE9BQU8sRUFBRUY7SUFBdEQ7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBRUUsOERBQUMsT0FBRDtNQUFTLElBQUksRUFBRUYsZ0JBQWY7TUFBaUMsT0FBTyxFQUFFRztJQUExQztNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkYsZUFHRSw4REFBQyxxQkFBRDtNQUF1QixJQUFJLEVBQUVILGdCQUE3QjtNQUFBLHVCQUNFLDhEQUFDLG9CQUFEO1FBQUEsdUJBQ0UsOERBQUMsYUFBRDtVQUFBLHVCQUNFLDhEQUFDLFVBQUQ7WUFBWSxPQUFPLEVBQUUsTUFBTUYsUUFBUSxDQUFDQyxJQUFJLEVBQUVNLEdBQVAsQ0FBbkM7WUFBQSx3QkFDRSw4REFBQyxrRUFBRDtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBREYsZUFFRTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQUZGO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUhGO0VBQUEsZ0JBREY7QUFnQkQsQ0EzQkQ7O0dBQU1SOztLQUFBQTtBQTZCTixNQUFNUyxPQUFPLEdBQUdaLDJEQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtFQUFBLElBQUM7SUFBRWM7RUFBRixDQUFEO0VBQUEsT0FBZUEsSUFBSSxHQUFHLE1BQUgsR0FBWSxHQUEvQjtBQUFBLENBQW9DO0FBQ2hEO0FBQ0EsYUFBYTtFQUFBLElBQUM7SUFBRUE7RUFBRixDQUFEO0VBQUEsT0FBZUEsSUFBSSxHQUFHLE9BQUgsR0FBYSxNQUFoQztBQUFBLENBQXdDO0FBQ3JEO0FBQ0EsQ0FWQTtNQUFNRjtBQVlOLE1BQU1HLHFCQUFxQixHQUFHZiwyREFBOEI7QUFDNUQ7QUFDQSxZQUFZO0VBQUEsSUFBQztJQUFFYztFQUFGLENBQUQ7RUFBQSxPQUFlQSxJQUFJLEdBQUcsR0FBSCxHQUFTLE9BQTVCO0FBQUEsQ0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZBO01BQU1DO0FBV04sTUFBTUMsVUFBVSxHQUFHaEIsMkRBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7TUFBTWdCO0FBVU4sTUFBTUMsb0JBQW9CLEdBQUdqQiwyREFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQSxDQUpBO01BQU1pQjtBQU1OLE1BQU1DLGFBQWEsR0FBR2xCLDJEQUFXO0FBQ2pDO0FBQ0EsQ0FGQTtNQUFNa0I7QUFJTiwrREFBZWYsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUG9zdFBvcHVwLnRzeD9jYmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZUhvcml6JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBQb3N0UG9wdXAgPSAoeyBvbkRlbGV0ZSwgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IFtzaG93U2hhcmVCdXR0b25zLCBzZXRTaG93U2hhcmVCdXR0b25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTaGFyZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dTaGFyZUJ1dHRvbnMoIXNob3dTaGFyZUJ1dHRvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlU2hhcmVCdXR0b25zID0gKCkgPT4ge1xuICAgIHNldFNob3dTaGFyZUJ1dHRvbnMoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb3JlSG9yaXpJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e2hhbmRsZVNoYXJlQ2xpY2t9IC8+XG4gICAgICA8T3ZlcmxheSBzaG93PXtzaG93U2hhcmVCdXR0b25zfSBvbkNsaWNrPXtoYW5kbGVDbG9zZVNoYXJlQnV0dG9uc30gLz5cbiAgICAgIDxTaGFyZUJ1dHRvbnNDb250YWluZXIgc2hvdz17c2hvd1NoYXJlQnV0dG9uc30+XG4gICAgICAgIDxTaGFyZWRDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICA8U2hhcmVkQ29udGVudD5cbiAgICAgICAgICAgIDxTUG9wdXBMaXN0IG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHBvc3Q/Ll9pZCl9PlxuICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7liYrpmaQ8L3NwYW4+XG4gICAgICAgICAgICA8L1NQb3B1cExpc3Q+XG4gICAgICAgICAgPC9TaGFyZWRDb250ZW50PlxuICAgICAgICA8L1NoYXJlZENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9TaGFyZUJ1dHRvbnNDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdjx7IHNob3c6IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICcxMDAlJyA6ICcwJyl9O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICdibG9jaycgOiAnbm9uZScpfTtcbiAgei1pbmRleDogMTAwO1xuYDtcblxuY29uc3QgU2hhcmVCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IHNob3c6IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAkeyh7IHNob3cgfSkgPT4gKHNob3cgPyAnMCcgOiAnLTEwMCUnKX07XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjJzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyMDAwMDAwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSB0aGUgb3ZlcmxheSAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5gO1xuY29uc3QgU1BvcHVwTGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcbiAgfVxuYDtcbmNvbnN0IFNoYXJlZENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuXG5jb25zdCBTaGFyZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQb3B1cDtcbiJdLCJuYW1lcyI6WyJEZWxldGVJY29uIiwic3R5bGVkIiwiTW9yZUhvcml6SWNvbiIsInVzZVN0YXRlIiwiUG9zdFBvcHVwIiwib25EZWxldGUiLCJwb3N0Iiwic2hvd1NoYXJlQnV0dG9ucyIsInNldFNob3dTaGFyZUJ1dHRvbnMiLCJoYW5kbGVTaGFyZUNsaWNrIiwiaGFuZGxlQ2xvc2VTaGFyZUJ1dHRvbnMiLCJjdXJzb3IiLCJfaWQiLCJPdmVybGF5IiwiZGl2Iiwic2hvdyIsIlNoYXJlQnV0dG9uc0NvbnRhaW5lciIsIlNQb3B1cExpc3QiLCJTaGFyZWRDb250ZW50V3JhcHBlciIsIlNoYXJlZENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/PostPopup.tsx\n"));

/***/ })

});