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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MicNone */ \"./node_modules/@mui/icons-material/MicNone.js\");\n/* harmony import */ var _mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/StopCircle */ \"./node_modules/@mui/icons-material/StopCircle.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/Recorder.tsx\";\n// Recorder.js\n\n\n\n\n\n\n\nconst Recorder = _ref => {\n  let {\n    audioRef,\n    file\n  } = _ref;\n\n  // 録音開始\n  const handleStart = () => {\n    audioRef.current.start();\n  }; // 録音停止\n\n\n  const handleStop = () => {\n    audioRef.current.stop();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n      onClick: () => handleStart(),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n      onClick: () => handleStop(),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: {\n          width: '90px',\n          height: '90px'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), file.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: URL.createObjectURL(new Blob(file)),\n      controls: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Recorder;\nconst SButtonBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button`\n  all: unset; /* ブラウザのデフォルトスタイルを全て解除 */\n  cursor: pointer; /* ホバー時のカーソルをポインターに設定 */\n  width: 105px;\n  height: 105px;\n  border-radius: 100%;\n  display: inline-block; /* ブロック要素として表示 */\n  border: 1px solid #b7b5b2;\n  display: flex;\n  justify-content: center; // 水平方向の中央揃え\n  align-items: center;\n`;\n_c2 = SButtonBorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recorder);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Recorder\");\n$RefreshReg$(_c2, \"SButtonBorder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjb3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsUUFBd0I7RUFBQSxJQUF2QjtJQUFFQyxRQUFGO0lBQVlDO0VBQVosQ0FBdUI7O0VBQ3ZDO0VBQ0EsTUFBTUMsV0FBVyxHQUFHLE1BQU07SUFDeEJGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakI7RUFDRCxDQUZELENBRnVDLENBTXZDOzs7RUFDQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtJQUN2QkwsUUFBUSxDQUFDRyxPQUFULENBQWlCRyxJQUFqQjtFQUNELENBRkQ7O0VBSUEsb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxhQUFEO01BQWUsT0FBTyxFQUFFLE1BQU1KLFdBQVcsRUFBekM7TUFBQSx1QkFDRSw4REFBQyxtRUFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBSUUsOERBQUMsYUFBRDtNQUFlLE9BQU8sRUFBRSxNQUFNRyxVQUFVLEVBQXhDO01BQUEsdUJBQ0UsOERBQUMsc0VBQUQ7UUFBZ0IsS0FBSyxFQUFFO1VBQUVFLEtBQUssRUFBRSxNQUFUO1VBQWlCQyxNQUFNLEVBQUU7UUFBekI7TUFBdkI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFKRixFQU9HUCxJQUFJLENBQUNRLE1BQUwsR0FBYyxDQUFkLGlCQUNDLDhEQUFDLDJEQUFEO01BQWtCLEdBQUcsRUFBRUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CLElBQUlDLElBQUosQ0FBU1gsSUFBVCxDQUFwQixDQUF2QjtNQUE0RCxRQUFRO0lBQXBFO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFSSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQWFELENBeEJEOztLQUFNRjtBQXlCTixNQUFNYyxhQUFhLEdBQUdmLDhEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtNQUFNZTtBQWFOLCtEQUFlZCxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9SZWNvcmRlci50c3g/MmQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWNvcmRlci5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gJ3JlYWN0LWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgTWljTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NaWNOb25lJztcbmltcG9ydCBTdG9wQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N0b3BDaXJjbGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuY29uc3QgUmVjb3JkZXIgPSAoeyBhdWRpb1JlZiwgZmlsZSB9KSA9PiB7XG4gIC8vIOmMsumfs+mWi+Wni1xuICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnN0YXJ0KCk7XG4gIH07XG5cbiAgLy8g6Yyy6Z+z5YGc5q2iXG4gIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNCdXR0b25Cb3JkZXIgb25DbGljaz17KCkgPT4gaGFuZGxlU3RhcnQoKX0+XG4gICAgICAgIDxNaWNOb25lSWNvbiAvPlxuICAgICAgPC9TQnV0dG9uQm9yZGVyPlxuICAgICAgPFNCdXR0b25Cb3JkZXIgb25DbGljaz17KCkgPT4gaGFuZGxlU3RvcCgpfT5cbiAgICAgICAgPFN0b3BDaXJjbGVJY29uIHN0eWxlPXt7IHdpZHRoOiAnOTBweCcsIGhlaWdodDogJzkwcHgnIH19IC8+XG4gICAgICA8L1NCdXR0b25Cb3JkZXI+XG4gICAgICB7ZmlsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKGZpbGUpKX0gY29udHJvbHMgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgU0J1dHRvbkJvcmRlciA9IHN0eWxlZC5idXR0b25gXG4gIGFsbDogdW5zZXQ7IC8qIOODluODqeOCpuOCtuOBruODh+ODleOCqeODq+ODiOOCueOCv+OCpOODq+OCkuWFqOOBpuino+mZpCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIOODm+ODkOODvOaZguOBruOCq+ODvOOCveODq+OCkuODneOCpOODs+OCv+ODvOOBq+ioreWumiAqL1xuICB3aWR0aDogMTA1cHg7XG4gIGhlaWdodDogMTA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyog44OW44Ot44OD44Kv6KaB57Sg44Go44GX44Gm6KGo56S6ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I1YjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvLyDmsLTlubPmlrnlkJHjga7kuK3lpK7mj4PjgYhcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RBdWRpb1BsYXllciIsIk1pY05vbmVJY29uIiwiU3RvcENpcmNsZUljb24iLCJzdHlsZWQiLCJSZWNvcmRlciIsImF1ZGlvUmVmIiwiZmlsZSIsImhhbmRsZVN0YXJ0IiwiY3VycmVudCIsInN0YXJ0IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJTQnV0dG9uQm9yZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/Recorder.tsx\n"));

/***/ })

});