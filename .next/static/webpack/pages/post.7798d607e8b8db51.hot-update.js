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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MicNone */ \"./node_modules/@mui/icons-material/MicNone.js\");\n/* harmony import */ var _mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/StopCircle */ \"./node_modules/@mui/icons-material/StopCircle.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/Recorder.tsx\",\n    _s = $RefreshSig$();\n\n// Recorder.js\n\n\n\n\n\n\n\n\nconst Recorder = _ref => {\n  _s();\n\n  let {\n    audioRef,\n    file,\n    setIsRecoded\n  } = _ref;\n  const {\n    0: isRecoding,\n    1: setIsRecoding\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 録音開始\n\n  const handleStart = () => {\n    audioRef.current.start();\n    setIsRecoding(true);\n  }; // 録音停止\n\n\n  const handleStop = () => {\n    audioRef.current.stop();\n    setIsRecoding(false);\n    setIsRecoded(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SMicContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n        onClick: isRecoding ? () => handleStop() : () => handleStart(),\n        children: isRecoding ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          style: {\n            width: '105px',\n            height: '105px',\n            padding: '10px',\n            background: 'white',\n            color: 'var(--accent-color)',\n            borderRadius: '100%'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          style: {\n            width: '70px',\n            // サイズを小さく調整\n            height: '70px',\n            // サイズを小さく調整\n            padding: '10px',\n            background: 'var(--accent-color)',\n            color: 'white',\n            borderRadius: '100%'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), file.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: URL.createObjectURL(new Blob(file)),\n        controls: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(Recorder, \"SvQB7U8uKlvl2+e5bkpt0qaRntI=\");\n\n_c = Recorder;\nconst SMicContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n`;\n_c2 = SMicContainer;\nconst SButtonBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button`\n  all: unset; /* ブラウザのデフォルトスタイルを全て解除 */\n  cursor: pointer; /* ホバー時のカーソルをポインターに設定 */\n  width: 105px;\n  height: 105px;\n  border-radius: 100%;\n  display: inline-block; /* ブロック要素として表示 */\n  border: 1px solid #b7b5b2;\n  display: flex;\n  justify-content: center; // 水平方向の中央揃え\n  align-items: center;\n  background-color: #fff;\n`;\n_c3 = SButtonBorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recorder);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Recorder\");\n$RefreshReg$(_c2, \"SMicContainer\");\n$RefreshReg$(_c3, \"SButtonBorder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjb3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsUUFBc0M7RUFBQTs7RUFBQSxJQUFyQztJQUFFQyxRQUFGO0lBQVlDLElBQVo7SUFBa0JDO0VBQWxCLENBQXFDO0VBQ3JELE1BQU07SUFBQSxHQUFDQyxVQUFEO0lBQUEsR0FBYUM7RUFBYixJQUE4QlYsK0NBQVEsQ0FBQyxLQUFELENBQTVDLENBRHFELENBRXJEOztFQUNBLE1BQU1XLFdBQVcsR0FBRyxNQUFNO0lBQ3hCTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLEtBQWpCO0lBQ0FILGFBQWEsQ0FBQyxJQUFELENBQWI7RUFDRCxDQUhELENBSHFELENBUXJEOzs7RUFDQSxNQUFNSSxVQUFVLEdBQUcsTUFBTTtJQUN2QlIsUUFBUSxDQUFDTSxPQUFULENBQWlCRyxJQUFqQjtJQUNBTCxhQUFhLENBQUMsS0FBRCxDQUFiO0lBQ0FGLFlBQVksQ0FBQyxJQUFELENBQVo7RUFDRCxDQUpEOztFQU1BLG9CQUNFO0lBQUEsdUJBQ0UsOERBQUMsYUFBRDtNQUFBLHdCQUNFLDhEQUFDLGFBQUQ7UUFDRSxPQUFPLEVBQUVDLFVBQVUsR0FBRyxNQUFNSyxVQUFVLEVBQW5CLEdBQXdCLE1BQU1ILFdBQVcsRUFEOUQ7UUFBQSxVQUdHRixVQUFVLGdCQUNULDhEQUFDLHNFQUFEO1VBQ0UsS0FBSyxFQUFFO1lBQ0xPLEtBQUssRUFBRSxPQURGO1lBRUxDLE1BQU0sRUFBRSxPQUZIO1lBR0xDLE9BQU8sRUFBRSxNQUhKO1lBSUxDLFVBQVUsRUFBRSxPQUpQO1lBS0xDLEtBQUssRUFBRSxxQkFMRjtZQU1MQyxZQUFZLEVBQUU7VUFOVDtRQURUO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFEUyxnQkFZVCw4REFBQyxtRUFBRDtVQUNFLEtBQUssRUFBRTtZQUNMTCxLQUFLLEVBQUUsTUFERjtZQUNVO1lBQ2ZDLE1BQU0sRUFBRSxNQUZIO1lBRVc7WUFDaEJDLE9BQU8sRUFBRSxNQUhKO1lBSUxDLFVBQVUsRUFBRSxxQkFKUDtZQUtMQyxLQUFLLEVBQUUsT0FMRjtZQU1MQyxZQUFZLEVBQUU7VUFOVDtRQURUO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFmSjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsRUE0QkdkLElBQUksQ0FBQ2UsTUFBTCxHQUFjLENBQWQsaUJBQ0MsOERBQUMsMkRBQUQ7UUFDRSxHQUFHLEVBQUVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQixJQUFJQyxJQUFKLENBQVNsQixJQUFULENBQXBCLENBRFA7UUFFRSxRQUFRO01BRlY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQTdCSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQXVDRCxDQXRERDs7R0FBTUY7O0tBQUFBO0FBdUROLE1BQU1xQixhQUFhLEdBQUd0QiwyREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNc0I7QUFPTixNQUFNRSxhQUFhLEdBQUd4Qiw4REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtNQUFNd0I7QUFjTiwrREFBZXZCLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1JlY29yZGVyLnRzeD8yZDAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlY29yZGVyLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tICdyZWFjdC1hdWRpby1wbGF5ZXInO1xuaW1wb3J0IE1pY05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWljTm9uZSc7XG5pbXBvcnQgU3RvcENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TdG9wQ2lyY2xlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmNvbnN0IFJlY29yZGVyID0gKHsgYXVkaW9SZWYsIGZpbGUsIHNldElzUmVjb2RlZCB9KSA9PiB7XG4gIGNvbnN0IFtpc1JlY29kaW5nLCBzZXRJc1JlY29kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8g6Yyy6Z+z6ZaL5aeLXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3RhcnQoKTtcbiAgICBzZXRJc1JlY29kaW5nKHRydWUpO1xuICB9O1xuXG4gIC8vIOmMsumfs+WBnOatolxuICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgIHNldElzUmVjb2RpbmcoZmFsc2UpO1xuICAgIHNldElzUmVjb2RlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U01pY0NvbnRhaW5lcj5cbiAgICAgICAgPFNCdXR0b25Cb3JkZXJcbiAgICAgICAgICBvbkNsaWNrPXtpc1JlY29kaW5nID8gKCkgPT4gaGFuZGxlU3RvcCgpIDogKCkgPT4gaGFuZGxlU3RhcnQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc1JlY29kaW5nID8gKFxuICAgICAgICAgICAgPFN0b3BDaXJjbGVJY29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDVweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTA1cHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWljTm9uZUljb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzcwcHgnLCAvLyDjgrXjgqTjgrrjgpLlsI/jgZXjgY/oqr/mlbRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MHB4JywgLy8g44K144Kk44K644KS5bCP44GV44GP6Kq/5pW0XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1hY2NlbnQtY29sb3IpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TQnV0dG9uQm9yZGVyPlxuICAgICAgICB7ZmlsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllclxuICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKGZpbGUpKX1cbiAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU01pY0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5jb25zdCBTTWljQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbmA7XG5jb25zdCBTQnV0dG9uQm9yZGVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgYWxsOiB1bnNldDsgLyog44OW44Op44Km44K244Gu44OH44OV44Kp44Or44OI44K544K/44Kk44Or44KS5YWo44Gm6Kej6ZmkICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyog44Ob44OQ44O85pmC44Gu44Kr44O844K944Or44KS44Od44Kk44Oz44K/44O844Gr6Kit5a6aICovXG4gIHdpZHRoOiAxMDVweDtcbiAgaGVpZ2h0OiAxMDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiDjg5bjg63jg4Pjgq/opoHntKDjgajjgZfjgabooajnpLogKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YjViMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIOawtOW5s+aWueWQkeOBruS4reWkruaPg+OBiFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXVkaW9QbGF5ZXIiLCJNaWNOb25lSWNvbiIsIlN0b3BDaXJjbGVJY29uIiwic3R5bGVkIiwiUmVjb3JkZXIiLCJhdWRpb1JlZiIsImZpbGUiLCJzZXRJc1JlY29kZWQiLCJpc1JlY29kaW5nIiwic2V0SXNSZWNvZGluZyIsImhhbmRsZVN0YXJ0IiwiY3VycmVudCIsInN0YXJ0IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJsZW5ndGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwiU01pY0NvbnRhaW5lciIsImRpdiIsIlNCdXR0b25Cb3JkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/Recorder.tsx\n"));

/***/ })

});