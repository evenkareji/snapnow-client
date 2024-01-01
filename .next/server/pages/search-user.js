"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search-user";
exports.ids = ["pages/search-user"];
exports.modules = {

/***/ "./src/pages/functions/user.tsx":
/*!**************************************!*\
  !*** ./src/pages/functions/user.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchUser\": () => (/* binding */ searchUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst searchUser = async searchTerm => {\n  try {\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`api/users/search/${searchTerm}`);\n    return data;\n  } catch (error) {\n    return error.response.data.message;\n  }\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZnVuY3Rpb25zL3VzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxVQUFVLEdBQUcsTUFBT0MsVUFBUCxJQUFzQjtFQUM5QyxJQUFJO0lBQ0YsTUFBTTtNQUFFQztJQUFGLElBQVcsTUFBTUgsa0RBQUEsQ0FBWSxvQkFBbUJFLFVBQVcsRUFBMUMsQ0FBdkI7SUFDQSxPQUFPQyxJQUFQO0VBQ0QsQ0FIRCxDQUdFLE9BQU9FLEtBQVAsRUFBYztJQUNkLE9BQU9BLEtBQUssQ0FBQ0MsUUFBTixDQUFlSCxJQUFmLENBQW9CSSxPQUEzQjtFQUNEO0FBQ0YsQ0FQTSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZpbS8uL3NyYy9wYWdlcy9mdW5jdGlvbnMvdXNlci50c3g/ZjEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoVXNlciA9IGFzeW5jIChzZWFyY2hUZXJtKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGBhcGkvdXNlcnMvc2VhcmNoLyR7c2VhcmNoVGVybX1gKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwic2VhcmNoVXNlciIsInNlYXJjaFRlcm0iLCJkYXRhIiwicG9zdCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/functions/user.tsx\n");

/***/ }),

/***/ "./src/pages/search-user.tsx":
/*!***********************************!*\
  !*** ./src/pages/search-user.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/user */ \"./src/pages/functions/user.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions_user__WEBPACK_IMPORTED_MODULE_1__]);\n_functions_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/search-user.tsx\";\n\n\n\n\n\nconst SerachUser = () => {\n  const {\n    0: searchTerm,\n    1: setSearchTerm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: searchResults,\n    1: setSearchResults\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const searchHandler = async () => {\n    if (searchTerm === '') {\n      setSearchResults([]);\n    } else {\n      const res = await (0,_functions_user__WEBPACK_IMPORTED_MODULE_1__.searchUser)(searchTerm);\n      setSearchResults(res);\n    }\n  };\n\n  console.log(searchResults);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"SerachUser\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      placeholder: \"user\\u691C\\u7D22\",\n      type: \"text\",\n      onKeyUp: searchHandler,\n      value: searchTerm,\n      onChange: e => {\n        setSearchTerm(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: searchResults && searchResults.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: user.profileImg,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: user.username\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SerachUser);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoLXVzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBRUEsTUFBTUcsVUFBVSxHQUFHLE1BQU07RUFDdkIsTUFBTTtJQUFBLEdBQUNDLFVBQUQ7SUFBQSxHQUFhQztFQUFiLElBQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7RUFDQSxNQUFNO0lBQUEsR0FBQ0ssYUFBRDtJQUFBLEdBQWdCQztFQUFoQixJQUFvQ04sK0NBQVEsQ0FBQyxFQUFELENBQWxEOztFQUNBLE1BQU1PLGFBQWEsR0FBRyxZQUFZO0lBQ2hDLElBQUlKLFVBQVUsS0FBSyxFQUFuQixFQUF1QjtNQUNyQkcsZ0JBQWdCLENBQUMsRUFBRCxDQUFoQjtJQUNELENBRkQsTUFFTztNQUNMLE1BQU1FLEdBQUcsR0FBRyxNQUFNUCwyREFBVSxDQUFDRSxVQUFELENBQTVCO01BQ0FHLGdCQUFnQixDQUFDRSxHQUFELENBQWhCO0lBQ0Q7RUFDRixDQVBEOztFQVNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBWjtFQUVBLG9CQUNFO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUVFO01BQ0UsV0FBVyxFQUFDLGtCQURkO01BRUUsSUFBSSxFQUFDLE1BRlA7TUFHRSxPQUFPLEVBQUVFLGFBSFg7TUFJRSxLQUFLLEVBQUVKLFVBSlQ7TUFLRSxRQUFRLEVBQUdRLENBQUQsSUFBNEM7UUFDcERQLGFBQWEsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtNQUNEO0lBUEg7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGLGVBWUU7TUFBQSxVQUNHUixhQUFhLElBQ1pBLGFBQWEsQ0FBQ1MsR0FBZCxDQUNHQyxJQUFELGlCQUNFO1FBQUEsd0JBQ0U7VUFBSyxHQUFHLEVBQUVBLElBQUksQ0FBQ0MsVUFBZjtVQUEyQixHQUFHLEVBQUM7UUFBL0I7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQURGLGVBRUU7VUFBQSxVQUFPRCxJQUFJLENBQUNFO1FBQVo7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUZGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZKO0lBRko7TUFBQTtNQUFBO01BQUE7SUFBQSxhQVpGO0VBQUEsZ0JBREY7QUEwQkQsQ0F4Q0Q7O0FBMENBLGlFQUFlZixVQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3BhZ2VzL3NlYXJjaC11c2VyLnRzeD9kMzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNlYXJjaFVzZXIgfSBmcm9tICcuL2Z1bmN0aW9ucy91c2VyJztcblxuY29uc3QgU2VyYWNoVXNlciA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VhcmNoVXNlcihzZWFyY2hUZXJtKTtcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5TZXJhY2hVc2VyPC9kaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2Vy5qSc57SiXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBvbktleVVwPXtzZWFyY2hIYW5kbGVyfVxuICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAge3NlYXJjaFJlc3VsdHMgJiZcbiAgICAgICAgICBzZWFyY2hSZXN1bHRzLm1hcChcbiAgICAgICAgICAgICh1c2VyOiB7IF9pZDogc3RyaW5nOyB1c2VybmFtZTogc3RyaW5nOyBwcm9maWxlSW1nOiBzdHJpbmcgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnByb2ZpbGVJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VyYWNoVXNlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2VhcmNoVXNlciIsIlNlcmFjaFVzZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2VhcmNoSGFuZGxlciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ1c2VyIiwicHJvZmlsZUltZyIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/search-user.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/search-user.tsx"));
module.exports = __webpack_exports__;

})();