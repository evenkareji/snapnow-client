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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MicNone */ \"./node_modules/@mui/icons-material/MicNone.js\");\n/* harmony import */ var _mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/StopCircle */ \"./node_modules/@mui/icons-material/StopCircle.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/Recorder.tsx\",\n    _s = $RefreshSig$();\n\n// Recorder.js\n\n\n\n\n\n\n\nconst Recorder = _ref => {\n  _s();\n\n  let {\n    audioRef,\n    file\n  } = _ref;\n  const {\n    0: isRecoding,\n    1: setIsRecoding\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 録音開始\n\n  const handleStart = () => {\n    audioRef.current.start();\n    setIsRecoding(true);\n  }; // 録音停止\n\n\n  const handleStop = () => {\n    audioRef.current.stop();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n      onClick: () => handleStart()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n      onClick: () => handleStop(),\n      children: isRecoding ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: {\n          width: '105px',\n          height: '105px',\n          padding: '10px',\n          background: 'white',\n          color: 'var(--accent-color)',\n          borderRadius: '100%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: {\n          width: '90px',\n          height: '90px',\n          padding: '10px',\n          background: 'var(--accent-color)',\n          color: 'white',\n          borderRadius: '100%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), file.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: URL.createObjectURL(new Blob(file)),\n      controls: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Recorder, \"SvQB7U8uKlvl2+e5bkpt0qaRntI=\");\n\n_c = Recorder;\nconst SButtonBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button`\n  all: unset; /* ブラウザのデフォルトスタイルを全て解除 */\n  cursor: pointer; /* ホバー時のカーソルをポインターに設定 */\n  width: 105px;\n  height: 105px;\n  border-radius: 100%;\n  display: inline-block; /* ブロック要素として表示 */\n  border: 1px solid #b7b5b2;\n  display: flex;\n  justify-content: center; // 水平方向の中央揃え\n  align-items: center;\n  background-color: #fff;\n`;\n_c2 = SButtonBorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recorder);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Recorder\");\n$RefreshReg$(_c2, \"SButtonBorder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjb3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLFFBQVEsR0FBRyxRQUF3QjtFQUFBOztFQUFBLElBQXZCO0lBQUVDLFFBQUY7SUFBWUM7RUFBWixDQUF1QjtFQUN2QyxNQUFNO0lBQUEsR0FBQ0MsVUFBRDtJQUFBLEdBQWFDO0VBQWIsSUFBOEJULCtDQUFRLENBQUMsS0FBRCxDQUE1QyxDQUR1QyxDQUV2Qzs7RUFDQSxNQUFNVSxXQUFXLEdBQUcsTUFBTTtJQUN4QkosUUFBUSxDQUFDSyxPQUFULENBQWlCQyxLQUFqQjtJQUNBSCxhQUFhLENBQUMsSUFBRCxDQUFiO0VBQ0QsQ0FIRCxDQUh1QyxDQVF2Qzs7O0VBQ0EsTUFBTUksVUFBVSxHQUFHLE1BQU07SUFDdkJQLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkcsSUFBakI7RUFDRCxDQUZEOztFQUlBLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsYUFBRDtNQUFlLE9BQU8sRUFBRSxNQUFNSixXQUFXO0lBQXpDO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUVFLDhEQUFDLGFBQUQ7TUFBZSxPQUFPLEVBQUUsTUFBTUcsVUFBVSxFQUF4QztNQUFBLFVBQ0dMLFVBQVUsZ0JBQ1QsOERBQUMsc0VBQUQ7UUFDRSxLQUFLLEVBQUU7VUFDTE8sS0FBSyxFQUFFLE9BREY7VUFFTEMsTUFBTSxFQUFFLE9BRkg7VUFHTEMsT0FBTyxFQUFFLE1BSEo7VUFJTEMsVUFBVSxFQUFFLE9BSlA7VUFLTEMsS0FBSyxFQUFFLHFCQUxGO1VBTUxDLFlBQVksRUFBRTtRQU5UO01BRFQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURTLGdCQVlULDhEQUFDLG1FQUFEO1FBQ0UsS0FBSyxFQUFFO1VBQ0xMLEtBQUssRUFBRSxNQURGO1VBRUxDLE1BQU0sRUFBRSxNQUZIO1VBR0xDLE9BQU8sRUFBRSxNQUhKO1VBSUxDLFVBQVUsRUFBRSxxQkFKUDtVQUtMQyxLQUFLLEVBQUUsT0FMRjtVQU1MQyxZQUFZLEVBQUU7UUFOVDtNQURUO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFiSjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkYsRUEyQkdiLElBQUksQ0FBQ2MsTUFBTCxHQUFjLENBQWQsaUJBQ0MsOERBQUMsMkRBQUQ7TUFBa0IsR0FBRyxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0IsSUFBSUMsSUFBSixDQUFTakIsSUFBVCxDQUFwQixDQUF2QjtNQUE0RCxRQUFRO0lBQXBFO01BQUE7TUFBQTtNQUFBO0lBQUEsYUE1Qko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFpQ0QsQ0E5Q0Q7O0dBQU1GOztLQUFBQTtBQStDTixNQUFNb0IsYUFBYSxHQUFHckIsOERBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWkE7TUFBTXFCO0FBY04sK0RBQWVwQixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9SZWNvcmRlci50c3g/MmQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWNvcmRlci5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcbmltcG9ydCBNaWNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01pY05vbmUnO1xuaW1wb3J0IFN0b3BDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU3RvcENpcmNsZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5jb25zdCBSZWNvcmRlciA9ICh7IGF1ZGlvUmVmLCBmaWxlIH0pID0+IHtcbiAgY29uc3QgW2lzUmVjb2RpbmcsIHNldElzUmVjb2RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyDpjLLpn7Pplovlp4tcbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5zdGFydCgpO1xuICAgIHNldElzUmVjb2RpbmcodHJ1ZSk7XG4gIH07XG5cbiAgLy8g6Yyy6Z+z5YGc5q2iXG4gIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNCdXR0b25Cb3JkZXIgb25DbGljaz17KCkgPT4gaGFuZGxlU3RhcnQoKX0+PC9TQnV0dG9uQm9yZGVyPlxuICAgICAgPFNCdXR0b25Cb3JkZXIgb25DbGljaz17KCkgPT4gaGFuZGxlU3RvcCgpfT5cbiAgICAgICAge2lzUmVjb2RpbmcgPyAoXG4gICAgICAgICAgPFN0b3BDaXJjbGVJY29uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzEwNXB4JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTA1cHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yKScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNaWNOb25lSWNvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICc5MHB4JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnOTBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWFjY2VudC1jb2xvciknLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1NCdXR0b25Cb3JkZXI+XG4gICAgICB7ZmlsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXIgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKGZpbGUpKX0gY29udHJvbHMgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgU0J1dHRvbkJvcmRlciA9IHN0eWxlZC5idXR0b25gXG4gIGFsbDogdW5zZXQ7IC8qIOODluODqeOCpuOCtuOBruODh+ODleOCqeODq+ODiOOCueOCv+OCpOODq+OCkuWFqOOBpuino+mZpCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIOODm+ODkOODvOaZguOBruOCq+ODvOOCveODq+OCkuODneOCpOODs+OCv+ODvOOBq+ioreWumiAqL1xuICB3aWR0aDogMTA1cHg7XG4gIGhlaWdodDogMTA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyog44OW44Ot44OD44Kv6KaB57Sg44Go44GX44Gm6KGo56S6ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I1YjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvLyDmsLTlubPmlrnlkJHjga7kuK3lpK7mj4PjgYhcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEF1ZGlvUGxheWVyIiwiTWljTm9uZUljb24iLCJTdG9wQ2lyY2xlSWNvbiIsInN0eWxlZCIsIlJlY29yZGVyIiwiYXVkaW9SZWYiLCJmaWxlIiwiaXNSZWNvZGluZyIsInNldElzUmVjb2RpbmciLCJoYW5kbGVTdGFydCIsImN1cnJlbnQiLCJzdGFydCIsImhhbmRsZVN0b3AiLCJzdG9wIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGVuZ3RoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsIlNCdXR0b25Cb3JkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/Recorder.tsx\n"));

/***/ })

});