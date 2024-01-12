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

/***/ "./src/components/organisms/ProfilePost.tsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/ProfilePost.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLike */ \"./src/hooks/useLike.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/LikeButton */ \"./src/components/atoms/LikeButton.tsx\");\n/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/UserIconImg */ \"./src/components/atoms/UserIconImg.tsx\");\n/* harmony import */ var _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useGetAuthor */ \"./src/hooks/useGetAuthor.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/ProfilePost.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ProfilePost = _ref => {\n  _s();\n\n  let {\n    post,\n    onDelete\n  } = _ref;\n  const {\n    user: loginUser\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);\n  const {\n    getAuthorByPostId,\n    user\n  } = (0,_hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__.useGetAuthor)();\n  const {\n    toggleLike,\n    isGood\n  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike)(post, loginUser);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    getAuthorByPostId(post);\n  }, [post]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SArticle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SLeftContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SUserIconImg, {\n        src: user?.profileImg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SRightContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SPostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SPostUsername, {\n          children: user?.username\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SPostContent, {\n        children: post.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SPostFooter, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isGood: isGood,\n          toggleLike: toggleLike\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(ProfilePost, \"C3EDymAYBJPW5k23yaM472vxhTk=\", false, function () {\n  return [_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__.useGetAuthor, _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike];\n});\n\n_c = ProfilePost;\nconst SArticle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].article`\n  position: relative;\n  display: flex;\n  padding: 16px 16px 0px 16px;\n  border-bottom: 1px solid #f2f2f2;\n  width: 100%;\n  background-color: #fff;\n  box-sizing: border-box;\n  align-items: start;\n`;\n_c2 = SArticle;\nconst SLeftContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  margin-right: 12px;\n  width: 60px;\n  color: #000;\n`;\n_c3 = SLeftContent;\nconst SRightContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  padding-bottom: 12px;\n  width: 100%;\n`;\n_c4 = SRightContent;\nconst SPostHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`;\n_c5 = SPostHeader;\nconst SPostFooter = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  margin-top: 12px;\n`;\n_c6 = SPostFooter;\nconst SPostUsername = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n  font-weight: bold;\n  font-size: 16px;\n`;\n_c7 = SPostUsername;\nconst SUserIconImg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__.UserIconImg)`\n  width: 40px;\n  height: 40px;\n\n  @media (min-width: 425px) {\n    & {\n      width: 45px;\n      height: 45px;\n    }\n  }\n`;\n_c8 = SUserIconImg;\nconst SPostContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-size: 16px;\n`;\n_c9 = SPostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePost);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"ProfilePost\");\n$RefreshReg$(_c2, \"SArticle\");\n$RefreshReg$(_c3, \"SLeftContent\");\n$RefreshReg$(_c4, \"SRightContent\");\n$RefreshReg$(_c5, \"SPostHeader\");\n$RefreshReg$(_c6, \"SPostFooter\");\n$RefreshReg$(_c7, \"SPostUsername\");\n$RefreshReg$(_c8, \"SUserIconImg\");\n$RefreshReg$(_c9, \"SPostContent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUHJvZmlsZVBvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1RLFdBQVcsR0FBRyxRQUF3QjtFQUFBOztFQUFBLElBQXZCO0lBQUVDLElBQUY7SUFBUUM7RUFBUixDQUF1QjtFQUMxQyxNQUFNO0lBQUVDLElBQUksRUFBRUM7RUFBUixJQUFzQlQseURBQVcsQ0FBRVUsS0FBRCxJQUFXQSxLQUFLLENBQUNGLElBQWxCLENBQXZDO0VBQ0EsTUFBTTtJQUFFRyxpQkFBRjtJQUFxQkg7RUFBckIsSUFBOEJMLGlFQUFZLEVBQWhEO0VBQ0EsTUFBTTtJQUFFUyxVQUFGO0lBQWNDO0VBQWQsSUFBeUJkLHVEQUFPLENBQUNPLElBQUQsRUFBT0csU0FBUCxDQUF0QztFQUNBTCxnREFBUyxDQUFDLE1BQU07SUFDZE8saUJBQWlCLENBQUNMLElBQUQsQ0FBakI7RUFDRCxDQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7RUFJQSxvQkFDRSw4REFBQyxRQUFEO0lBQUEsd0JBQ0UsOERBQUMsWUFBRDtNQUFBLHVCQUNFLDhEQUFDLFlBQUQ7UUFBYyxHQUFHLEVBQUVFLElBQUksRUFBRU07TUFBekI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUlFLDhEQUFDLGFBQUQ7TUFBQSx3QkFDRSw4REFBQyxXQUFEO1FBQUEsd0JBQ0UsOERBQUMsYUFBRDtVQUFBLFVBQWdCTixJQUFJLEVBQUVPO1FBQXRCO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFERixlQUVFLDhEQUFDLHFFQUFEO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFERixlQUtFLDhEQUFDLFlBQUQ7UUFBQSxVQUFlVCxJQUFJLENBQUNVO01BQXBCO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFMRixlQU1FLDhEQUFDLFdBQUQ7UUFBQSx1QkFDRSw4REFBQyx5REFBRDtVQUFZLE1BQU0sRUFBRUgsTUFBcEI7VUFBNEIsVUFBVSxFQUFFRDtRQUF4QztVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQU5GO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBaUJELENBekJEOztHQUFNUDtVQUN3QkwsdURBQ1FHLCtEQUNMSjs7O0tBSDNCTTtBQTJCTixNQUFNWSxRQUFRLEdBQUdwQiwrREFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtNQUFNb0I7QUFVTixNQUFNRSxZQUFZLEdBQUd0QiwyREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQSxDQUpBO01BQU1zQjtBQUtOLE1BQU1FLGFBQWEsR0FBR3hCLDJEQUFXO0FBQ2pDO0FBQ0E7QUFDQSxDQUhBO01BQU13QjtBQUlOLE1BQU1DLFdBQVcsR0FBR3pCLDJEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBSkE7TUFBTXlCO0FBS04sTUFBTUMsV0FBVyxHQUFHMUIsMkRBQVc7QUFDL0I7QUFDQSxDQUZBO01BQU0wQjtBQUdOLE1BQU1DLGFBQWEsR0FBRzNCLDREQUFZO0FBQ2xDO0FBQ0E7QUFDQSxDQUhBO01BQU0yQjtBQUlOLE1BQU1FLFlBQVksR0FBRzdCLDJEQUFNLENBQUNLLDJEQUFELENBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQTtNQUFNd0I7QUFXTixNQUFNQyxZQUFZLEdBQUc5QiwyREFBVztBQUNoQztBQUNBLENBRkE7TUFBTThCO0FBR04sK0RBQWV0QixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Qcm9maWxlUG9zdC50c3g/Mzc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVIb3Jpeic7XG5pbXBvcnQgeyB1c2VMaWtlIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTGlrZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBMaWtlQnV0dG9uIGZyb20gJy4uL2F0b21zL0xpa2VCdXR0b24nO1xuaW1wb3J0IHsgVXNlckljb25JbWcgfSBmcm9tICcuLi9hdG9tcy9Vc2VySWNvbkltZyc7XG5pbXBvcnQgeyB1c2VHZXRBdXRob3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZXRBdXRob3InO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuY29uc3QgUHJvZmlsZVBvc3QgPSAoeyBwb3N0LCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdXNlcjogbG9naW5Vc2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IGdldEF1dGhvckJ5UG9zdElkLCB1c2VyIH0gPSB1c2VHZXRBdXRob3IoKTtcbiAgY29uc3QgeyB0b2dnbGVMaWtlLCBpc0dvb2QgfSA9IHVzZUxpa2UocG9zdCwgbG9naW5Vc2VyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBdXRob3JCeVBvc3RJZChwb3N0KTtcbiAgfSwgW3Bvc3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxTQXJ0aWNsZT5cbiAgICAgIDxTTGVmdENvbnRlbnQ+XG4gICAgICAgIDxTVXNlckljb25JbWcgc3JjPXt1c2VyPy5wcm9maWxlSW1nfSAvPlxuICAgICAgPC9TTGVmdENvbnRlbnQ+XG4gICAgICA8U1JpZ2h0Q29udGVudD5cbiAgICAgICAgPFNQb3N0SGVhZGVyPlxuICAgICAgICAgIDxTUG9zdFVzZXJuYW1lPnt1c2VyPy51c2VybmFtZX08L1NQb3N0VXNlcm5hbWU+XG4gICAgICAgICAgPE1vcmVIb3Jpekljb24gLz5cbiAgICAgICAgPC9TUG9zdEhlYWRlcj5cbiAgICAgICAgPFNQb3N0Q29udGVudD57cG9zdC5kZXNjfTwvU1Bvc3RDb250ZW50PlxuICAgICAgICA8U1Bvc3RGb290ZXI+XG4gICAgICAgICAgPExpa2VCdXR0b24gaXNHb29kPXtpc0dvb2R9IHRvZ2dsZUxpa2U9e3RvZ2dsZUxpa2V9IC8+XG4gICAgICAgIDwvU1Bvc3RGb290ZXI+XG4gICAgICA8L1NSaWdodENvbnRlbnQ+XG4gICAgPC9TQXJ0aWNsZT5cbiAgKTtcbn07XG5cbmNvbnN0IFNBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbmA7XG5jb25zdCBTTGVmdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogIzAwMDtcbmA7XG5jb25zdCBTUmlnaHRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFNQb3N0SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcbmNvbnN0IFNQb3N0Rm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5jb25zdCBTUG9zdFVzZXJuYW1lID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuY29uc3QgU1VzZXJJY29uSW1nID0gc3R5bGVkKFVzZXJJY29uSW1nKWBcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIHtcbiAgICAmIHtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFNQb3N0Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUG9zdDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNb3JlSG9yaXpJY29uIiwidXNlTGlrZSIsInVzZVNlbGVjdG9yIiwiTGlrZUJ1dHRvbiIsIlVzZXJJY29uSW1nIiwidXNlR2V0QXV0aG9yIiwidXNlRWZmZWN0IiwiUHJvZmlsZVBvc3QiLCJwb3N0Iiwib25EZWxldGUiLCJ1c2VyIiwibG9naW5Vc2VyIiwic3RhdGUiLCJnZXRBdXRob3JCeVBvc3RJZCIsInRvZ2dsZUxpa2UiLCJpc0dvb2QiLCJwcm9maWxlSW1nIiwidXNlcm5hbWUiLCJkZXNjIiwiU0FydGljbGUiLCJhcnRpY2xlIiwiU0xlZnRDb250ZW50IiwiZGl2IiwiU1JpZ2h0Q29udGVudCIsIlNQb3N0SGVhZGVyIiwiU1Bvc3RGb290ZXIiLCJTUG9zdFVzZXJuYW1lIiwic3BhbiIsIlNVc2VySWNvbkltZyIsIlNQb3N0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/ProfilePost.tsx\n"));

/***/ }),

/***/ "./src/hooks/useGetAuthor.ts":
/*!***********************************!*\
  !*** ./src/hooks/useGetAuthor.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetAuthor\": function() { return /* binding */ useGetAuthor; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nconst useGetAuthor = () => {\n  _s();\n\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n\n  const getAuthorByPostId = async post => {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`/api/users/${post.userId}`);\n    setUser(response.data);\n  };\n\n  return {\n    getAuthorByPostId,\n    user\n  };\n};\n\n_s(useGetAuthor, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR2V0QXV0aG9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxNQUFNRSxZQUFZLEdBQUcsTUFBTTtFQUFBOztFQUNoQyxNQUFNO0lBQUEsR0FBQ0MsSUFBRDtJQUFBLEdBQU9DO0VBQVAsSUFBa0JILCtDQUFRLEVBQWhDOztFQUNBLE1BQU1JLGlCQUFpQixHQUFHLE1BQU9DLElBQVAsSUFBc0I7SUFDOUMsTUFBTUMsUUFBUSxHQUFHLE1BQU1QLGlEQUFBLENBQVcsY0FBYU0sSUFBSSxDQUFDRyxNQUFPLEVBQXBDLENBQXZCO0lBRUFMLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRyxJQUFWLENBQVA7RUFDRCxDQUpEOztFQUtBLE9BQU87SUFBRUwsaUJBQUY7SUFBcUJGO0VBQXJCLENBQVA7QUFDRCxDQVJNOztHQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlR2V0QXV0aG9yLnRzP2RhOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlciwgUG9zdCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZUdldEF1dGhvciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgY29uc3QgZ2V0QXV0aG9yQnlQb3N0SWQgPSBhc3luYyAocG9zdDogUG9zdCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXJzLyR7cG9zdC51c2VySWR9YCk7XG5cbiAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICB9O1xuICByZXR1cm4geyBnZXRBdXRob3JCeVBvc3RJZCwgdXNlciB9O1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlR2V0QXV0aG9yIiwidXNlciIsInNldFVzZXIiLCJnZXRBdXRob3JCeVBvc3RJZCIsInBvc3QiLCJyZXNwb25zZSIsImdldCIsInVzZXJJZCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useGetAuthor.ts\n"));

/***/ })

});