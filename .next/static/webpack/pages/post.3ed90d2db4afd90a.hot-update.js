"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./src/components/organisms/Recorder.tsx":
/*!***********************************************!*\
  !*** ./src/components/organisms/Recorder.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/Recorder.tsx\";\n// Recorder.js\n\n\n\n\nconst Recorder = _ref => {\n  let {\n    onRecorded,\n    audioRef\n  } = _ref;\n\n  // 録音開始\n  const handleStart = () => {\n    audioRef.current.start();\n  }; // 録音停止\n\n\n  const handleStop = () => {\n    audioRef.current.stop();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: () => handleStart(),\n      children: \"Start Recording\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: () => handleStop(),\n      children: \"Stop Recording\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), audioBlob && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: URL.createObjectURL(audioBlob),\n      controls: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Recorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recorder);\n\nvar _c;\n\n$RefreshReg$(_c, \"Recorder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjb3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsUUFBOEI7RUFBQSxJQUE3QjtJQUFFQyxVQUFGO0lBQWNDO0VBQWQsQ0FBNkI7O0VBQzdDO0VBQ0EsTUFBTUMsV0FBVyxHQUFHLE1BQU07SUFDeEJELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsS0FBakI7RUFDRCxDQUZELENBRjZDLENBTTdDOzs7RUFDQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtJQUN2QkosUUFBUSxDQUFDRSxPQUFULENBQWlCRyxJQUFqQjtFQUNELENBRkQ7O0VBSUEsb0JBQ0U7SUFBQSx3QkFDRTtNQUFRLE9BQU8sRUFBRSxNQUFNSixXQUFXLEVBQWxDO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsZUFFRTtNQUFRLE9BQU8sRUFBRSxNQUFNRyxVQUFVLEVBQWpDO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkYsRUFHR0UsU0FBUyxpQkFDUiw4REFBQywyREFBRDtNQUFrQixHQUFHLEVBQUVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkYsU0FBcEIsQ0FBdkI7TUFBdUQsUUFBUTtJQUEvRDtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFTRCxDQXBCRDs7S0FBTVI7QUFzQk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1JlY29yZGVyLnRzeD8yZDAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlY29yZGVyLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcblxuY29uc3QgUmVjb3JkZXIgPSAoeyBvblJlY29yZGVkLCBhdWRpb1JlZiB9KSA9PiB7XG4gIC8vIOmMsumfs+mWi+Wni1xuICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnN0YXJ0KCk7XG4gIH07XG5cbiAgLy8g6Yyy6Z+z5YGc5q2iXG4gIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGFydCgpfT5TdGFydCBSZWNvcmRpbmc8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3RvcCgpfT5TdG9wIFJlY29yZGluZzwvYnV0dG9uPlxuICAgICAge2F1ZGlvQmxvYiAmJiAoXG4gICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpfSBjb250cm9scyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RBdWRpb1BsYXllciIsIlJlY29yZGVyIiwib25SZWNvcmRlZCIsImF1ZGlvUmVmIiwiaGFuZGxlU3RhcnQiLCJjdXJyZW50Iiwic3RhcnQiLCJoYW5kbGVTdG9wIiwic3RvcCIsImF1ZGlvQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/Recorder.tsx\n"));

/***/ })

});