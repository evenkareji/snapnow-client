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

/***/ "./src/components/organisms/UserPostList.tsx":
/*!***************************************************!*\
  !*** ./src/components/organisms/UserPostList.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserPostList\": function() { return /* binding */ UserPostList; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useDeletePost */ \"./src/hooks/useDeletePost.ts\");\n/* harmony import */ var _ProfilePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePost */ \"./src/components/organisms/ProfilePost.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/UserPostList.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst UserPostList = _ref => {\n  _s();\n\n  let {\n    tabIndex,\n    profileUser\n  } = _ref;\n  console.log(profileUser);\n  const {\n    0: posts,\n    1: setPosts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    handleDelete\n  } = (0,_hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(setPosts);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchPosts = async () => {\n      if (!profileUser) {\n        return;\n      }\n\n      if (tabIndex === 0) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(`/api/posts/profile/${profileUser.username}`);\n        setPosts(response.data.sort((post1, post2) => {\n          return new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf();\n        }));\n      } else if (tabIndex === 1) {}\n    };\n\n    fetchPosts();\n  }, [profileUser]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SPersonalPost, {\n    children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ProfilePost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      profileUser: profileUser,\n      post: post,\n      onDelete: handleDelete\n    }, post._id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(UserPostList, \"FeWE+lRep43hrv5IdpDKvy/Bj8Y=\", false, function () {\n  return [_hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = UserPostList;\nconst SPersonalPost = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"UserPostList__SPersonalPost\",\n  componentId: \"sc-1hn5rem-0\"\n})([\"background-color:#fff;width:100%;padding-bottom:275px;width:100%;\"]);\n_c2 = SPersonalPost;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"UserPostList\");\n$RefreshReg$(_c2, \"SPersonalPost\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvVXNlclBvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVPLE1BQU1PLFlBQVksR0FBRyxRQUErQjtFQUFBOztFQUFBLElBQTlCO0lBQUVDLFFBQUY7SUFBWUM7RUFBWixDQUE4QjtFQUN6REMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7RUFFQSxNQUFNO0lBQUEsR0FBQ0csS0FBRDtJQUFBLEdBQVFDO0VBQVIsSUFBb0JYLCtDQUFRLENBQWMsRUFBZCxDQUFsQztFQUNBLE1BQU07SUFBRVk7RUFBRixJQUFtQlQsZ0VBQWEsQ0FBQ1EsUUFBRCxDQUF0QztFQUNBWixnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNYyxVQUFVLEdBQUcsWUFBWTtNQUM3QixJQUFJLENBQUNOLFdBQUwsRUFBa0I7UUFDaEI7TUFDRDs7TUFDRCxJQUFJRCxRQUFRLEtBQUssQ0FBakIsRUFBb0I7UUFDbEIsTUFBTVEsUUFBYSxHQUFHLE1BQU1aLGlEQUFBLENBQ3pCLHNCQUFxQkssV0FBVyxDQUFDUyxRQUFTLEVBRGpCLENBQTVCO1FBSUFMLFFBQVEsQ0FDTkcsUUFBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsQ0FBbUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO1VBQ25DLE9BQ0UsSUFBSUMsSUFBSixDQUFTRCxLQUFLLENBQUNFLFNBQWYsRUFBMEJDLE9BQTFCLEtBQ0EsSUFBSUYsSUFBSixDQUFTRixLQUFLLENBQUNHLFNBQWYsRUFBMEJDLE9BQTFCLEVBRkY7UUFJRCxDQUxELENBRE0sQ0FBUjtNQVFELENBYkQsTUFhTyxJQUFJakIsUUFBUSxLQUFLLENBQWpCLEVBQW9CLENBQzFCO0lBQ0YsQ0FuQkQ7O0lBb0JBTyxVQUFVO0VBQ1gsQ0F0QlEsRUFzQk4sQ0FBQ04sV0FBRCxDQXRCTSxDQUFUO0VBd0JBLG9CQUNFLDhEQUFDLGFBQUQ7SUFBQSxVQUNHRyxLQUFLLENBQUNjLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxvREFBRDtNQUNFLFdBQVcsRUFBRWxCLFdBRGY7TUFFRSxJQUFJLEVBQUVrQixJQUZSO01BSUUsUUFBUSxFQUFFYjtJQUpaLEdBR09hLElBQUksQ0FBQ0MsR0FIWjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREQ7RUFESDtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFZRCxDQXpDTTs7R0FBTXJCO1VBSWNGOzs7S0FKZEU7QUEyQ2IsTUFBTXNCLGFBQWEsR0FBRzFCLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHlFQUFuQjtNQUFNMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1VzZXJQb3N0TGlzdC50c3g/Zjc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB1c2VEZWxldGVQb3N0IGZyb20gJy4uLy4uL2hvb2tzL3VzZURlbGV0ZVBvc3QnO1xuaW1wb3J0IFByb2ZpbGVQb3N0IGZyb20gJy4vUHJvZmlsZVBvc3QnO1xuXG5leHBvcnQgY29uc3QgVXNlclBvc3RMaXN0ID0gKHsgdGFiSW5kZXgsIHByb2ZpbGVVc2VyIH0pID0+IHtcbiAgY29uc29sZS5sb2cocHJvZmlsZVVzZXIpO1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8QXJyYXk8UG9zdD4+KFtdKTtcbiAgY29uc3QgeyBoYW5kbGVEZWxldGUgfSA9IHVzZURlbGV0ZVBvc3Qoc2V0UG9zdHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXByb2ZpbGVVc2VyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0YWJJbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGAvYXBpL3Bvc3RzL3Byb2ZpbGUvJHtwcm9maWxlVXNlci51c2VybmFtZX1gLFxuICAgICAgICApO1xuXG4gICAgICAgIHNldFBvc3RzKFxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc29ydCgocG9zdDEsIHBvc3QyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBuZXcgRGF0ZShwb3N0Mi5jcmVhdGVkQXQpLnZhbHVlT2YoKSAtXG4gICAgICAgICAgICAgIG5ldyBEYXRlKHBvc3QxLmNyZWF0ZWRBdCkudmFsdWVPZigpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0YWJJbmRleCA9PT0gMSkge1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbcHJvZmlsZVVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxTUGVyc29uYWxQb3N0PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UHJvZmlsZVBvc3RcbiAgICAgICAgICBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9XG4gICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxuICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L1NQZXJzb25hbFBvc3Q+XG4gICk7XG59O1xuXG5jb25zdCBTUGVyc29uYWxQb3N0ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyNzVweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJheGlvcyIsInVzZURlbGV0ZVBvc3QiLCJQcm9maWxlUG9zdCIsIlVzZXJQb3N0TGlzdCIsInRhYkluZGV4IiwicHJvZmlsZVVzZXIiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJzZXRQb3N0cyIsImhhbmRsZURlbGV0ZSIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImdldCIsInVzZXJuYW1lIiwiZGF0YSIsInNvcnQiLCJwb3N0MSIsInBvc3QyIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInZhbHVlT2YiLCJtYXAiLCJwb3N0IiwiX2lkIiwiU1BlcnNvbmFsUG9zdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/UserPostList.tsx\n"));

/***/ })

});