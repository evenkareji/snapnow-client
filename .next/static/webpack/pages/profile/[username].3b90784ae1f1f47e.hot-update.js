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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Share */ \"./node_modules/@mui/icons-material/Share.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareButtons */ \"./src/components/atoms/ShareButtons.tsx\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/atoms/Share.tsx\",\n    _s = $RefreshSig$();\n\n// Share.js\n\n\n\n\n\n\n\n\nconst Share = () => {\n  _s();\n\n  const {\n    0: showShareButtons,\n    1: setShowShareButtons\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const URL = 'https://example.com';\n  const QUOTE = 'この人をみてくれ！';\n\n  const handleShareClick = () => {\n    setShowShareButtons(!showShareButtons);\n  };\n\n  const handleCloseShareButtons = () => {\n    setShowShareButtons(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShareIconStyled, {\n      onClick: handleShareClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Overlay, {\n      show: showShareButtons,\n      onClick: handleCloseShareButtons\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShareButtonsContainer, {\n      show: showShareButtons,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SharedContentWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SharedContent, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShareHeader, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              children: \"\\u5171\\u6709\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CloseIconStyled, {\n              style: {\n                color: 'rgba(0, 0, 0, 0.7)'\n              },\n              onClick: handleCloseShareButtons\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ShareButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            url: URL,\n            quote: QUOTE\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Share, \"n4NL7K7Jp5O4+FxWs8jRNnho2ZY=\");\n\n_c = Share;\nconst ShareIconStyled = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_4__[\"default\"])`\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n`;\n_c2 = ShareIconStyled;\nconst fadeIn = keyframes`\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n`;\nconst Overlay = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: ${_ref => {\n  let {\n    show\n  } = _ref;\n  return show ? '100%' : '0';\n}};\n  background: rgba(0, 0, 0, 0.5);\n  display: ${_ref2 => {\n  let {\n    show\n  } = _ref2;\n  return show ? 'block' : 'none';\n}};\n  z-index: 1;\n  opacity: ${_ref3 => {\n  let {\n    show\n  } = _ref3;\n  return show ? '1' : '0';\n}};\n  animation: ${fadeIn} 0.3s ease-in-out; /* Add fade-in animation */\n`;\n_c3 = Overlay;\nconst ShareButtonsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  position: fixed;\n  bottom: ${_ref4 => {\n  let {\n    show\n  } = _ref4;\n  return show ? '0' : '-100%';\n}};\n  left: 0;\n  width: 100%;\n  height: 30vh;\n  background-color: #fff;\n  transition: bottom 0.2s ease-in-out;\n  z-index: 2000000; /* Ensure it's above the overlay */\n  border-radius: 8px;\n`;\n_c4 = ShareButtonsContainer;\nconst SharedContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 80%;\n  margin: 0 auto;\n  text-align: left;\n`;\n_c5 = SharedContentWrapper;\nconst SharedContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  padding: 20px;\n`;\n_c6 = SharedContent;\nconst ShareHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n`;\n_c7 = ShareHeader;\nconst CloseIconStyled = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__[\"default\"])`\n  cursor: pointer;\n`;\n_c8 = CloseIconStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Share\");\n$RefreshReg$(_c2, \"ShareIconStyled\");\n$RefreshReg$(_c3, \"Overlay\");\n$RefreshReg$(_c4, \"ShareButtonsContainer\");\n$RefreshReg$(_c5, \"SharedContentWrapper\");\n$RefreshReg$(_c6, \"SharedContent\");\n$RefreshReg$(_c7, \"ShareHeader\");\n$RefreshReg$(_c8, \"CloseIconStyled\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLENBSkE7TUFBTW9CO0FBTU4sTUFBTUMsYUFBYSxHQUFHckIsMkRBQVc7QUFDakM7QUFDQSxDQUZBO01BQU1xQjtBQUlOLE1BQU1DLFdBQVcsR0FBR3RCLDJEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtNQUFNc0I7QUFPTixNQUFNQyxlQUFlLEdBQUd2QiwyREFBTSxDQUFDSSxpRUFBRCxDQUFZO0FBQzFDO0FBQ0EsQ0FGQTtNQUFNbUI7QUFJTiwrREFBZWxCLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvU2hhcmUudHN4PzcwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2hhcmUuanNcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaGFyZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hhcmVCdXR0b25zIGZyb20gJy4vU2hhcmVCdXR0b25zJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5cbmNvbnN0IFNoYXJlID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd1NoYXJlQnV0dG9ucywgc2V0U2hvd1NoYXJlQnV0dG9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFVSTCA9ICdodHRwczovL2V4YW1wbGUuY29tJztcbiAgY29uc3QgUVVPVEUgPSAn44GT44Gu5Lq644KS44G/44Gm44GP44KM77yBJztcblxuICBjb25zdCBoYW5kbGVTaGFyZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dTaGFyZUJ1dHRvbnMoIXNob3dTaGFyZUJ1dHRvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlU2hhcmVCdXR0b25zID0gKCkgPT4ge1xuICAgIHNldFNob3dTaGFyZUJ1dHRvbnMoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaGFyZUljb25TdHlsZWQgb25DbGljaz17aGFuZGxlU2hhcmVDbGlja30gLz5cbiAgICAgIDxPdmVybGF5IHNob3c9e3Nob3dTaGFyZUJ1dHRvbnN9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hhcmVCdXR0b25zfSAvPlxuICAgICAgPFNoYXJlQnV0dG9uc0NvbnRhaW5lciBzaG93PXtzaG93U2hhcmVCdXR0b25zfT5cbiAgICAgICAgPFNoYXJlZENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgIDxTaGFyZWRDb250ZW50PlxuICAgICAgICAgICAgPFNoYXJlSGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2PuWFseaciTwvZGl2PlxuICAgICAgICAgICAgICA8Q2xvc2VJY29uU3R5bGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNyknIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VTaGFyZUJ1dHRvbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NoYXJlSGVhZGVyPlxuICAgICAgICAgICAgPFNoYXJlQnV0dG9ucyB1cmw9e1VSTH0gcXVvdGU9e1FVT1RFfSAvPlxuICAgICAgICAgIDwvU2hhcmVkQ29udGVudD5cbiAgICAgICAgPC9TaGFyZWRDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvU2hhcmVCdXR0b25zQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgU2hhcmVJY29uU3R5bGVkID0gc3R5bGVkKFNoYXJlSWNvbilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdjx7IHNob3c6IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkeyh7IHNob3cgfSkgPT4gKHNob3cgPyAnMTAwJScgOiAnMCcpfTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiAkeyh7IHNob3cgfSkgPT4gKHNob3cgPyAnYmxvY2snIDogJ25vbmUnKX07XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICcxJyA6ICcwJyl9O1xuICBhbmltYXRpb246ICR7ZmFkZUlufSAwLjNzIGVhc2UtaW4tb3V0OyAvKiBBZGQgZmFkZS1pbiBhbmltYXRpb24gKi9cbmA7XG5jb25zdCBTaGFyZUJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgc2hvdzogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/ICcwJyA6ICctMTAwJScpfTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDIwMDAwMDA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIHRoZSBvdmVybGF5ICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbmA7XG5cbmNvbnN0IFNoYXJlZENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuXG5jb25zdCBTaGFyZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweDtcbmA7XG5cbmNvbnN0IFNoYXJlSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgQ2xvc2VJY29uU3R5bGVkID0gc3R5bGVkKENsb3NlSWNvbilgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlO1xuIl0sIm5hbWVzIjpbIlNoYXJlSWNvbiIsInN0eWxlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaGFyZUJ1dHRvbnMiLCJDbG9zZUljb24iLCJTaGFyZSIsInNob3dTaGFyZUJ1dHRvbnMiLCJzZXRTaG93U2hhcmVCdXR0b25zIiwiVVJMIiwiUVVPVEUiLCJoYW5kbGVTaGFyZUNsaWNrIiwiaGFuZGxlQ2xvc2VTaGFyZUJ1dHRvbnMiLCJjb2xvciIsIlNoYXJlSWNvblN0eWxlZCIsImZhZGVJbiIsImtleWZyYW1lcyIsIk92ZXJsYXkiLCJkaXYiLCJzaG93IiwiU2hhcmVCdXR0b25zQ29udGFpbmVyIiwiU2hhcmVkQ29udGVudFdyYXBwZXIiLCJTaGFyZWRDb250ZW50IiwiU2hhcmVIZWFkZXIiLCJDbG9zZUljb25TdHlsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Share.tsx\n"));

/***/ })

});