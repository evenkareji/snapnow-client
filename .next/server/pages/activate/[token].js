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
exports.id = "pages/activate/[token]";
exports.ids = ["pages/activate/[token]"];
exports.modules = {

/***/ "./src/pages/activate/[token].tsx":
/*!****************************************!*\
  !*** ./src/pages/activate/[token].tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getToken */ \"./src/utils/getToken.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_getToken__WEBPACK_IMPORTED_MODULE_2__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_getToken__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/activate/[token].tsx\";\n\n\n\n\nasync function getServerSideProps(context) {\n  // URLクエリからtokenを取得\n  const {\n    token\n  } = context.query; // tokenをコンソールにログ出力\n  // 必要に応じてtokenを使ってサーバーサイドで何か処理を行う\n  // propsとしてページコンポーネントに渡すデータを返す\n\n  return {\n    props: {\n      token\n    }\n  };\n}\n\nfunction Activate({\n  token\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const loginToken = (0,_utils_getToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  const activateAccount = async () => {\n    try {\n      await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/api/users/activate`, {\n        token\n      }, {\n        headers: {\n          Authorization: `Bearer ${loginToken}`\n        }\n      });\n      router.push('/');\n    } catch (error) {\n      console.log(error);\n    }\n  }; // tokenをページコンポーネントで使うか、何か表示に使うことができます\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: activateAccount,\n      children: \"\\u308F\\u304B\\u3063\\u305F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activate);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWN0aXZhdGUvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNPLGVBQWVHLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztFQUNoRDtFQUNBLE1BQU07SUFBRUM7RUFBRixJQUFZRCxPQUFPLENBQUNFLEtBQTFCLENBRmdELENBR2hEO0VBRUE7RUFFQTs7RUFDQSxPQUFPO0lBQUVDLEtBQUssRUFBRTtNQUFFRjtJQUFGO0VBQVQsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFFBQVQsQ0FBa0I7RUFBRUg7QUFBRixDQUFsQixFQUE2QjtFQUMzQixNQUFNSSxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCO0VBQ0EsTUFBTVMsVUFBVSxHQUFHUiwyREFBUSxFQUEzQjs7RUFFQSxNQUFNUyxlQUFlLEdBQUcsWUFBWTtJQUNsQyxJQUFJO01BQ0YsTUFBTVgsa0RBQUEsQ0FDSCxxQkFERyxFQUVKO1FBQ0VLO01BREYsQ0FGSSxFQUtKO1FBQUVRLE9BQU8sRUFBRTtVQUFFQyxhQUFhLEVBQUcsVUFBU0osVUFBVztRQUF0QztNQUFYLENBTEksQ0FBTjtNQVFBRCxNQUFNLENBQUNNLElBQVAsQ0FBWSxHQUFaO0lBQ0QsQ0FWRCxDQVVFLE9BQU9DLEtBQVAsRUFBYztNQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtJQUNEO0VBQ0YsQ0FkRCxDQUoyQixDQW9CM0I7OztFQUNBLG9CQUNFO0lBQUEsdUJBQ0U7TUFBUSxPQUFPLEVBQUVMLGVBQWpCO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBS0Q7O0FBRUQsaUVBQWVILFFBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvcGFnZXMvYWN0aXZhdGUvW3Rva2VuXS50c3g/YTVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGdldFRva2VuIGZyb20gJy4uLy4uL3V0aWxzL2dldFRva2VuJztcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyBVUkzjgq/jgqjjg6rjgYvjgol0b2tlbuOCkuWPluW+l1xuICBjb25zdCB7IHRva2VuIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAvLyB0b2tlbuOCkuOCs+ODs+OCveODvOODq+OBq+ODreOCsOWHuuWKm1xuXG4gIC8vIOW/heimgeOBq+W/nOOBmOOBpnRva2Vu44KS5L2/44Gj44Gm44K144O844OQ44O844K144Kk44OJ44Gn5L2V44GL5Yem55CG44KS6KGM44GGXG5cbiAgLy8gcHJvcHPjgajjgZfjgabjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavmuKHjgZnjg4fjg7zjgr/jgpLov5TjgZlcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW4gfSB9O1xufVxuXG5mdW5jdGlvbiBBY3RpdmF0ZSh7IHRva2VuIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxvZ2luVG9rZW4gPSBnZXRUb2tlbigpO1xuXG4gIGNvbnN0IGFjdGl2YXRlQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYC9hcGkvdXNlcnMvYWN0aXZhdGVgLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICAgIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9naW5Ub2tlbn1gIH0gfSxcbiAgICAgICk7XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdG9rZW7jgpLjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgafkvb/jgYbjgYvjgIHkvZXjgYvooajnpLrjgavkvb/jgYbjgZPjgajjgYzjgafjgY3jgb7jgZlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY3RpdmF0ZUFjY291bnR9PuOCj+OBi+OBo+OBnzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmF0ZTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsImdldFRva2VuIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRva2VuIiwicXVlcnkiLCJwcm9wcyIsIkFjdGl2YXRlIiwicm91dGVyIiwibG9naW5Ub2tlbiIsImFjdGl2YXRlQWNjb3VudCIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/activate/[token].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ "./src/utils/getToken.js":
/*!*******************************!*\
  !*** ./src/utils/getToken.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getToken = () => {\n  // クッキー、ローカルストレージ、またはセッションストレージからトークンを取得\n  const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token');\n  return token ? JSON.parse(token) : null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getToken);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ2V0VG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtFQUNyQjtFQUNBLE1BQU1DLEtBQUssR0FBR0YscURBQUEsQ0FBWSxPQUFaLENBQWQ7RUFDQSxPQUFPRSxLQUFLLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFYLENBQUgsR0FBdUIsSUFBbkM7QUFDRCxDQUpEOztBQUtBLGlFQUFlRCxRQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3V0aWxzL2dldFRva2VuLmpzPzMyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xuICAvLyDjgq/jg4Pjgq3jg7zjgIHjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgIHjgb7jgZ/jga/jgrvjg4Pjgrfjg6fjg7Pjgrnjg4jjg6zjg7zjgrjjgYvjgonjg4jjg7zjgq/jg7PjgpLlj5blvpdcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgcmV0dXJuIHRva2VuID8gSlNPTi5wYXJzZSh0b2tlbikgOiBudWxsO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuO1xuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJnZXRUb2tlbiIsInRva2VuIiwiZ2V0IiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/getToken.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/activate/[token].tsx"));
module.exports = __webpack_exports__;

})();