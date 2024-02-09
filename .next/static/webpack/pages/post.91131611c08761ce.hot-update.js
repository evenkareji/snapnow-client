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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MicNone */ \"./node_modules/@mui/icons-material/MicNone.js\");\n/* harmony import */ var _mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/StopCircle */ \"./node_modules/@mui/icons-material/StopCircle.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/Recorder.tsx\",\n    _s = $RefreshSig$();\n\n// Recorder.js\n\n\n\n\n\n\n\n\nconst Recorder = _ref => {\n  _s();\n\n  let {\n    audioRef,\n    file,\n    setIsRecoded\n  } = _ref;\n  const {\n    0: isRecoding,\n    1: setIsRecoding\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 録音開始\n\n  const handleStart = () => {\n    audioRef.current.start();\n    setIsRecoding(true);\n  }; // 録音停止\n\n\n  const handleStop = () => {\n    audioRef.current.stop();\n    setIsRecoding(false);\n    setIsRecoded(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SMicContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SButtonBorder, {\n        onClick: isRecoding ? () => handleStop() : () => handleStart(),\n        children: isRecoding ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_StopCircle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          style: {\n            width: '105px',\n            height: '105px',\n            padding: '10px',\n            background: 'white',\n            color: 'var(--accent-color)',\n            borderRadius: '100%'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_MicNone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          style: {\n            width: '90px',\n            height: '90px',\n            padding: '10px',\n            background: 'var(--accent-color)',\n            color: 'white',\n            borderRadius: '100%',\n            boxSizing: 'border-box',\n            border: '2px solid #fff'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), file.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: URL.createObjectURL(new Blob(file)),\n        controls: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(Recorder, \"SvQB7U8uKlvl2+e5bkpt0qaRntI=\");\n\n_c = Recorder;\nconst SMicContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n`;\n_c2 = SMicContainer;\nconst SButtonBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button`\n  all: unset; /* ブラウザのデフォルトスタイルを全て解除 */\n  cursor: pointer; /* ホバー時のカーソルをポインターに設定 */\n  width: 105px;\n  height: 105px;\n  border-radius: 100%;\n  display: inline-block; /* ブロック要素として表示 */\n  border: 1px solid #b7b5b2;\n  display: flex;\n  justify-content: center; // 水平方向の中央揃え\n  align-items: center;\n  background-color: #fff;\n`;\n_c3 = SButtonBorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recorder);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Recorder\");\n$RefreshReg$(_c2, \"SMicContainer\");\n$RefreshReg$(_c3, \"SButtonBorder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUmVjb3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsUUFBc0M7RUFBQTs7RUFBQSxJQUFyQztJQUFFQyxRQUFGO0lBQVlDLElBQVo7SUFBa0JDO0VBQWxCLENBQXFDO0VBQ3JELE1BQU07SUFBQSxHQUFDQyxVQUFEO0lBQUEsR0FBYUM7RUFBYixJQUE4QlYsK0NBQVEsQ0FBQyxLQUFELENBQTVDLENBRHFELENBRXJEOztFQUNBLE1BQU1XLFdBQVcsR0FBRyxNQUFNO0lBQ3hCTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLEtBQWpCO0lBQ0FILGFBQWEsQ0FBQyxJQUFELENBQWI7RUFDRCxDQUhELENBSHFELENBUXJEOzs7RUFDQSxNQUFNSSxVQUFVLEdBQUcsTUFBTTtJQUN2QlIsUUFBUSxDQUFDTSxPQUFULENBQWlCRyxJQUFqQjtJQUNBTCxhQUFhLENBQUMsS0FBRCxDQUFiO0lBQ0FGLFlBQVksQ0FBQyxJQUFELENBQVo7RUFDRCxDQUpEOztFQU1BLG9CQUNFO0lBQUEsdUJBQ0UsOERBQUMsYUFBRDtNQUFBLHdCQUNFLDhEQUFDLGFBQUQ7UUFDRSxPQUFPLEVBQUVDLFVBQVUsR0FBRyxNQUFNSyxVQUFVLEVBQW5CLEdBQXdCLE1BQU1ILFdBQVcsRUFEOUQ7UUFBQSxVQUdHRixVQUFVLGdCQUNULDhEQUFDLHNFQUFEO1VBQ0UsS0FBSyxFQUFFO1lBQ0xPLEtBQUssRUFBRSxPQURGO1lBRUxDLE1BQU0sRUFBRSxPQUZIO1lBR0xDLE9BQU8sRUFBRSxNQUhKO1lBSUxDLFVBQVUsRUFBRSxPQUpQO1lBS0xDLEtBQUssRUFBRSxxQkFMRjtZQU1MQyxZQUFZLEVBQUU7VUFOVDtRQURUO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFEUyxnQkFZVCw4REFBQyxtRUFBRDtVQUNFLEtBQUssRUFBRTtZQUNMTCxLQUFLLEVBQUUsTUFERjtZQUVMQyxNQUFNLEVBQUUsTUFGSDtZQUdMQyxPQUFPLEVBQUUsTUFISjtZQUlMQyxVQUFVLEVBQUUscUJBSlA7WUFLTEMsS0FBSyxFQUFFLE9BTEY7WUFNTEMsWUFBWSxFQUFFLE1BTlQ7WUFPTEMsU0FBUyxFQUFFLFlBUE47WUFRTEMsTUFBTSxFQUFFO1VBUkg7UUFEVDtVQUFBO1VBQUE7VUFBQTtRQUFBO01BZko7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLEVBOEJHaEIsSUFBSSxDQUFDaUIsTUFBTCxHQUFjLENBQWQsaUJBQ0MsOERBQUMsMkRBQUQ7UUFDRSxHQUFHLEVBQUVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQixJQUFJQyxJQUFKLENBQVNwQixJQUFULENBQXBCLENBRFA7UUFFRSxRQUFRO01BRlY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQS9CSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQXlDRCxDQXhERDs7R0FBTUY7O0tBQUFBO0FBeUROLE1BQU11QixhQUFhLEdBQUd4QiwyREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNd0I7QUFPTixNQUFNRSxhQUFhLEdBQUcxQiw4REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtNQUFNMEI7QUFjTiwrREFBZXpCLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1JlY29yZGVyLnRzeD8yZDAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlY29yZGVyLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tICdyZWFjdC1hdWRpby1wbGF5ZXInO1xuaW1wb3J0IE1pY05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWljTm9uZSc7XG5pbXBvcnQgU3RvcENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TdG9wQ2lyY2xlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmNvbnN0IFJlY29yZGVyID0gKHsgYXVkaW9SZWYsIGZpbGUsIHNldElzUmVjb2RlZCB9KSA9PiB7XG4gIGNvbnN0IFtpc1JlY29kaW5nLCBzZXRJc1JlY29kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8g6Yyy6Z+z6ZaL5aeLXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3RhcnQoKTtcbiAgICBzZXRJc1JlY29kaW5nKHRydWUpO1xuICB9O1xuXG4gIC8vIOmMsumfs+WBnOatolxuICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgIHNldElzUmVjb2RpbmcoZmFsc2UpO1xuICAgIHNldElzUmVjb2RlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U01pY0NvbnRhaW5lcj5cbiAgICAgICAgPFNCdXR0b25Cb3JkZXJcbiAgICAgICAgICBvbkNsaWNrPXtpc1JlY29kaW5nID8gKCkgPT4gaGFuZGxlU3RvcCgpIDogKCkgPT4gaGFuZGxlU3RhcnQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc1JlY29kaW5nID8gKFxuICAgICAgICAgICAgPFN0b3BDaXJjbGVJY29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDVweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTA1cHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWljTm9uZUljb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzkwcHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzkwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tYWNjZW50LWNvbG9yKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNmZmYnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1NCdXR0b25Cb3JkZXI+XG4gICAgICAgIHtmaWxlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyXG4gICAgICAgICAgICBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoZmlsZSkpfVxuICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9TTWljQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcbmNvbnN0IFNNaWNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuYDtcbmNvbnN0IFNCdXR0b25Cb3JkZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBhbGw6IHVuc2V0OyAvKiDjg5bjg6njgqbjgrbjga7jg4fjg5Xjgqnjg6vjg4jjgrnjgr/jgqTjg6vjgpLlhajjgabop6PpmaQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiDjg5vjg5Djg7zmmYLjga7jgqvjg7zjgr3jg6vjgpLjg53jgqTjg7Pjgr/jg7zjgavoqK3lrpogKi9cbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIOODluODreODg+OCr+imgee0oOOBqOOBl+OBpuihqOekuiAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiNWIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLy8g5rC05bmz5pa55ZCR44Gu5Lit5aSu5o+D44GIXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBdWRpb1BsYXllciIsIk1pY05vbmVJY29uIiwiU3RvcENpcmNsZUljb24iLCJzdHlsZWQiLCJSZWNvcmRlciIsImF1ZGlvUmVmIiwiZmlsZSIsInNldElzUmVjb2RlZCIsImlzUmVjb2RpbmciLCJzZXRJc1JlY29kaW5nIiwiaGFuZGxlU3RhcnQiLCJjdXJyZW50Iiwic3RhcnQiLCJoYW5kbGVTdG9wIiwic3RvcCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNpemluZyIsImJvcmRlciIsImxlbmd0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJTTWljQ29udGFpbmVyIiwiZGl2IiwiU0J1dHRvbkJvcmRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/Recorder.tsx\n"));

/***/ })

});