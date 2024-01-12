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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserPostList\": function() { return /* binding */ UserPostList; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useDeletePost */ \"./src/hooks/useDeletePost.ts\");\n/* harmony import */ var _ProfilePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePost */ \"./src/components/organisms/ProfilePost.tsx\");\n/* harmony import */ var _hooks_useLikesPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLikesPosts */ \"./src/hooks/useLikesPosts.tsx\");\n/* harmony import */ var _hooks_useProfilePosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useProfilePosts */ \"./src/hooks/useProfilePosts.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/UserPostList.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst UserPostList = _ref => {\n  _s();\n\n  let {\n    tabIndex,\n    profileUser\n  } = _ref;\n  const {\n    0: posts,\n    1: setPosts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    handleDelete\n  } = (0,_hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(setPosts);\n  const {\n    getProfilePosts\n  } = (0,_hooks_useProfilePosts__WEBPACK_IMPORTED_MODULE_4__.useProfilePosts)();\n  const {\n    getLikesPosts\n  } = (0,_hooks_useLikesPosts__WEBPACK_IMPORTED_MODULE_3__.useLikesPosts)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchPosts = async () => {\n      if (!profileUser) {\n        return;\n      }\n\n      if (tabIndex === 0) {\n        const response = await getProfilePosts(profileUser.username);\n        setPosts(response);\n      } else if (tabIndex === 1) {\n        const response = await getLikesPosts(profileUser._id);\n        setPosts(response);\n      }\n    };\n\n    fetchPosts();\n  }, [profileUser]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SPersonalPost, {\n    children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ProfilePost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      post: post,\n      onDelete: handleDelete\n    }, post._id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(UserPostList, \"Ild+cpzNULDjrYitOfyRGYu0pi0=\", false, function () {\n  return [_hooks_useDeletePost__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _hooks_useProfilePosts__WEBPACK_IMPORTED_MODULE_4__.useProfilePosts, _hooks_useLikesPosts__WEBPACK_IMPORTED_MODULE_3__.useLikesPosts];\n});\n\n_c = UserPostList;\nconst SPersonalPost = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"UserPostList__SPersonalPost\",\n  componentId: \"sc-1hn5rem-0\"\n})([\"background-color:#fff;width:100%;padding-bottom:275px;width:100%;\"]);\n_c2 = SPersonalPost;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"UserPostList\");\n$RefreshReg$(_c2, \"SPersonalPost\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvVXNlclBvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1RLFlBQVksR0FBRyxRQUErQjtFQUFBOztFQUFBLElBQTlCO0lBQUVDLFFBQUY7SUFBWUM7RUFBWixDQUE4QjtFQUN6RCxNQUFNO0lBQUEsR0FBQ0MsS0FBRDtJQUFBLEdBQVFDO0VBQVIsSUFBb0JWLCtDQUFRLENBQWMsRUFBZCxDQUFsQztFQUNBLE1BQU07SUFBRVc7RUFBRixJQUFtQlQsZ0VBQWEsQ0FBQ1EsUUFBRCxDQUF0QztFQUVBLE1BQU07SUFBRUU7RUFBRixJQUFzQlAsdUVBQWUsRUFBM0M7RUFDQSxNQUFNO0lBQUVRO0VBQUYsSUFBb0JULG1FQUFhLEVBQXZDO0VBRUFMLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1lLFVBQVUsR0FBRyxZQUFZO01BQzdCLElBQUksQ0FBQ04sV0FBTCxFQUFrQjtRQUNoQjtNQUNEOztNQUNELElBQUlELFFBQVEsS0FBSyxDQUFqQixFQUFvQjtRQUNsQixNQUFNUSxRQUFRLEdBQUcsTUFBTUgsZUFBZSxDQUFDSixXQUFXLENBQUNRLFFBQWIsQ0FBdEM7UUFDQU4sUUFBUSxDQUFDSyxRQUFELENBQVI7TUFDRCxDQUhELE1BR08sSUFBSVIsUUFBUSxLQUFLLENBQWpCLEVBQW9CO1FBQ3pCLE1BQU1RLFFBQVEsR0FBRyxNQUFNRixhQUFhLENBQUNMLFdBQVcsQ0FBQ1MsR0FBYixDQUFwQztRQUNBUCxRQUFRLENBQUNLLFFBQUQsQ0FBUjtNQUNEO0lBQ0YsQ0FYRDs7SUFZQUQsVUFBVTtFQUNYLENBZFEsRUFjTixDQUFDTixXQUFELENBZE0sQ0FBVDtFQWdCQSxvQkFDRSw4REFBQyxhQUFEO0lBQUEsVUFDR0MsS0FBSyxDQUFDUyxHQUFOLENBQVdDLElBQUQsaUJBQ1QsOERBQUMsb0RBQUQ7TUFBYSxJQUFJLEVBQUVBLElBQW5CO01BQXdDLFFBQVEsRUFBRVI7SUFBbEQsR0FBOEJRLElBQUksQ0FBQ0YsR0FBbkM7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUREO0VBREg7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBT0QsQ0E5Qk07O0dBQU1YO1VBRWNKLDhEQUVHRyxxRUFDRkQ7OztLQUxmRTtBQWdDYixNQUFNYyxhQUFhLEdBQUduQix3RUFBSDtFQUFBO0VBQUE7QUFBQSx5RUFBbkI7TUFBTW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Vc2VyUG9zdExpc3QudHN4P2Y3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB1c2VEZWxldGVQb3N0IGZyb20gJy4uLy4uL2hvb2tzL3VzZURlbGV0ZVBvc3QnO1xuaW1wb3J0IFByb2ZpbGVQb3N0IGZyb20gJy4vUHJvZmlsZVBvc3QnO1xuaW1wb3J0IHsgdXNlTGlrZXNQb3N0cyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUxpa2VzUG9zdHMnO1xuaW1wb3J0IHsgdXNlUHJvZmlsZVBvc3RzIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlUHJvZmlsZVBvc3RzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJQb3N0TGlzdCA9ICh7IHRhYkluZGV4LCBwcm9maWxlVXNlciB9KSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8QXJyYXk8UG9zdD4+KFtdKTtcbiAgY29uc3QgeyBoYW5kbGVEZWxldGUgfSA9IHVzZURlbGV0ZVBvc3Qoc2V0UG9zdHMpO1xuXG4gIGNvbnN0IHsgZ2V0UHJvZmlsZVBvc3RzIH0gPSB1c2VQcm9maWxlUG9zdHMoKTtcbiAgY29uc3QgeyBnZXRMaWtlc1Bvc3RzIH0gPSB1c2VMaWtlc1Bvc3RzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFwcm9maWxlVXNlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGFiSW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9maWxlUG9zdHMocHJvZmlsZVVzZXIudXNlcm5hbWUpO1xuICAgICAgICBzZXRQb3N0cyhyZXNwb25zZSBhcyBhbnkpO1xuICAgICAgfSBlbHNlIGlmICh0YWJJbmRleCA9PT0gMSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldExpa2VzUG9zdHMocHJvZmlsZVVzZXIuX2lkKTtcbiAgICAgICAgc2V0UG9zdHMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbcHJvZmlsZVVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxTUGVyc29uYWxQb3N0PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UHJvZmlsZVBvc3QgcG9zdD17cG9zdH0ga2V5PXtwb3N0Ll9pZH0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cbiAgICAgICkpfVxuICAgIDwvU1BlcnNvbmFsUG9zdD5cbiAgKTtcbn07XG5cbmNvbnN0IFNQZXJzb25hbFBvc3QgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDI3NXB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsInVzZURlbGV0ZVBvc3QiLCJQcm9maWxlUG9zdCIsInVzZUxpa2VzUG9zdHMiLCJ1c2VQcm9maWxlUG9zdHMiLCJVc2VyUG9zdExpc3QiLCJ0YWJJbmRleCIsInByb2ZpbGVVc2VyIiwicG9zdHMiLCJzZXRQb3N0cyIsImhhbmRsZURlbGV0ZSIsImdldFByb2ZpbGVQb3N0cyIsImdldExpa2VzUG9zdHMiLCJmZXRjaFBvc3RzIiwicmVzcG9uc2UiLCJ1c2VybmFtZSIsIl9pZCIsIm1hcCIsInBvc3QiLCJTUGVyc29uYWxQb3N0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/UserPostList.tsx\n"));

/***/ })

});