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

/***/ "./src/hooks/useLikesPosts.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useLikesPosts.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLikesPosts\": function() { return /* binding */ useLikesPosts; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst useLikesPosts = () => {\n  const getLikesPosts = async userId => {\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/posts/likes/${userId}`);\n      return response.data.sort((post1, post2) => {\n        return new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf();\n      });\n    } catch (error) {\n      console.error('Error fetching likes posts:', error);\n      throw error;\n    }\n  };\n\n  return {\n    getLikesPosts\n  };\n};\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTGlrZXNQb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVPLE1BQU1DLGFBQWEsR0FBRyxNQUFNO0VBQ2pDLE1BQU1DLGFBQWEsR0FBRyxNQUFPQyxNQUFQLElBQWtCO0lBQ3RDLElBQUk7TUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUosaURBQUEsQ0FBVyxvQkFBbUJHLE1BQU8sRUFBckMsQ0FBdkI7TUFFQSxPQUFPQyxRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBZCxDQUFtQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FBa0I7UUFDMUMsT0FDRSxJQUFJQyxJQUFKLENBQVNELEtBQUssQ0FBQ0UsU0FBZixFQUEwQkMsT0FBMUIsS0FDQSxJQUFJRixJQUFKLENBQVNGLEtBQUssQ0FBQ0csU0FBZixFQUEwQkMsT0FBMUIsRUFGRjtNQUlELENBTE0sQ0FBUDtJQU1ELENBVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7TUFDZEMsT0FBTyxDQUFDRCxLQUFSLENBQWMsNkJBQWQsRUFBNkNBLEtBQTdDO01BQ0EsTUFBTUEsS0FBTjtJQUNEO0VBQ0YsQ0FkRDs7RUFlQSxPQUFPO0lBQUVYO0VBQUYsQ0FBUDtBQUNELENBakJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VMaWtlc1Bvc3RzLnRzeD9iMzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VMaWtlc1Bvc3RzID0gKCkgPT4ge1xuICBjb25zdCBnZXRMaWtlc1Bvc3RzID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy9saWtlcy8ke3VzZXJJZH1gKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc29ydCgocG9zdDEsIHBvc3QyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbmV3IERhdGUocG9zdDIuY3JlYXRlZEF0KS52YWx1ZU9mKCkgLVxuICAgICAgICAgIG5ldyBEYXRlKHBvc3QxLmNyZWF0ZWRBdCkudmFsdWVPZigpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbGlrZXMgcG9zdHM6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRMaWtlc1Bvc3RzIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlTGlrZXNQb3N0cyIsImdldExpa2VzUG9zdHMiLCJ1c2VySWQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ2YWx1ZU9mIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useLikesPosts.tsx\n"));

/***/ })

});