"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/hooks/useLogin.ts":
/*!*******************************!*\
  !*** ./src/hooks/useLogin.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLogin\": function() { return /* binding */ useLogin; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst useLogin = () => {\n  _s();\n\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const {\n    0: isError,\n    1: setIsError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: loginLoading,\n    1: setLoginLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const loginSubmit = async data => {\n    const {\n      email,\n      password\n    } = data;\n    setIsError(false);\n    setLoginLoading(true);\n\n    try {\n      await dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_2__.login)({\n        email,\n        password\n      })).unwrap();\n      setLoginLoading(false);\n    } catch (error) {\n      console.log(error);\n      setIsError(true);\n      setLoginLoading(false);\n    }\n  };\n\n  return {\n    loginSubmit,\n    isError\n  };\n};\n\n_s(useLogin, \"GhupqYLTVxLkl1cZVtmtwWFgOlg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlPLE1BQU1HLFFBQVEsR0FBRyxNQUFNO0VBQUE7O0VBQzVCLE1BQU1DLFFBQXFCLEdBQUdILHdEQUFXLEVBQXpDO0VBQ0EsTUFBTTtJQUFBLEdBQUNJLE9BQUQ7SUFBQSxHQUFVQztFQUFWLElBQXdCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7RUFDQSxNQUFNO0lBQUEsR0FBQ08sWUFBRDtJQUFBLEdBQWVDO0VBQWYsSUFBa0NSLCtDQUFRLENBQUMsS0FBRCxDQUFoRDs7RUFFQSxNQUFNUyxXQUFXLEdBQUcsTUFBT0MsSUFBUCxJQUFzQztJQUN4RCxNQUFNO01BQUVDLEtBQUY7TUFBU0M7SUFBVCxJQUFzQkYsSUFBNUI7SUFDQUosVUFBVSxDQUFDLEtBQUQsQ0FBVjtJQUNBRSxlQUFlLENBQUMsSUFBRCxDQUFmOztJQUNBLElBQUk7TUFDRixNQUFNSixRQUFRLENBQUNGLDBEQUFLLENBQUM7UUFBRVMsS0FBRjtRQUFTQztNQUFULENBQUQsQ0FBTixDQUFSLENBQXFDQyxNQUFyQyxFQUFOO01BQ0FMLGVBQWUsQ0FBQyxLQUFELENBQWY7SUFDRCxDQUhELENBR0UsT0FBT00sS0FBUCxFQUFjO01BQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO01BQ0FSLFVBQVUsQ0FBQyxJQUFELENBQVY7TUFDQUUsZUFBZSxDQUFDLEtBQUQsQ0FBZjtJQUNEO0VBQ0YsQ0FaRDs7RUFhQSxPQUFPO0lBQ0xDLFdBREs7SUFFTEo7RUFGSyxDQUFQO0FBSUQsQ0F0Qk07O0dBQU1GO1VBQ21CRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlTG9naW4udHM/NTczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBTaWduSW5EYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdXNlTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2luTG9hZGluZywgc2V0TG9naW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsb2dpblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBSZWFkb25seTxTaWduSW5EYXRhPikgPT4ge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuICAgIHNldElzRXJyb3IoZmFsc2UpO1xuICAgIHNldExvZ2luTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfSkpLnVud3JhcCgpO1xuICAgICAgc2V0TG9naW5Mb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgIHNldExvZ2luTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGxvZ2luU3VibWl0LFxuICAgIGlzRXJyb3IsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJsb2dpbiIsInVzZUxvZ2luIiwiZGlzcGF0Y2giLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImxvZ2luTG9hZGluZyIsInNldExvZ2luTG9hZGluZyIsImxvZ2luU3VibWl0IiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1bndyYXAiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useLogin.ts\n"));

/***/ })

});