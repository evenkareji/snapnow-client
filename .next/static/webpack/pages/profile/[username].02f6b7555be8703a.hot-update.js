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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLike */ \"./src/hooks/useLike.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/LikeButton */ \"./src/components/atoms/LikeButton.tsx\");\n/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/UserIconImg */ \"./src/components/atoms/UserIconImg.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/ProfilePost.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProfilePost = _ref => {\n  _s();\n\n  let {\n    post,\n    onDelete\n  } = _ref;\n  const {\n    user: loginUser\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);\n  const {\n    toggleLike,\n    isGood\n  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike)(post, loginUser);\n  const {\n    getAuthorByPostId,\n    user\n  } = useGetAuthor(); // onClick={() => onDelete(post._id)}>\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SArticle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SLeftContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SUserIconImg, {\n        src: loginUser?.profileImg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SRightContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SPostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: \"name time\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: post.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        isGood: isGood,\n        toggleLike: toggleLike\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(ProfilePost, \"oZciX8tcUjEetQxlSpmnLA/g5mA=\", true, function () {\n  return [_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike];\n});\n\n_c = ProfilePost;\nconst SArticle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].article`\n  position: relative;\n  display: flex;\n  padding: 16px 16px 0px 16px;\n  border-bottom: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  border-left: 1px solid #f2f2f2;\n  width: 100%;\n\n  box-sizing: border-box;\n  align-items: start;\n`;\n_c2 = SArticle;\nconst SLeftContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  margin-right: 12px;\n  width: 60px;\n`;\n_c3 = SLeftContent;\nconst SRightContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  padding-bottom: 12px;\n  width: 100%;\n`;\n_c4 = SRightContent;\nconst SPostHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`;\n_c5 = SPostHeader;\nconst SUserIconImg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__.UserIconImg)`\n  width: 40px;\n  height: 40px;\n\n  @media (min-width: 425px) {\n    & {\n      width: 45px;\n      height: 45px;\n    }\n  }\n`;\n_c6 = SUserIconImg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePost);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"ProfilePost\");\n$RefreshReg$(_c2, \"SArticle\");\n$RefreshReg$(_c3, \"SLeftContent\");\n$RefreshReg$(_c4, \"SRightContent\");\n$RefreshReg$(_c5, \"SPostHeader\");\n$RefreshReg$(_c6, \"SUserIconImg\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUHJvZmlsZVBvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU0sV0FBVyxHQUFHLFFBQXdCO0VBQUE7O0VBQUEsSUFBdkI7SUFBRUMsSUFBRjtJQUFRQztFQUFSLENBQXVCO0VBQzFDLE1BQU07SUFBRUMsSUFBSSxFQUFFQztFQUFSLElBQXNCUCx5REFBVyxDQUFFUSxLQUFELElBQVdBLEtBQUssQ0FBQ0YsSUFBbEIsQ0FBdkM7RUFFQSxNQUFNO0lBQUVHLFVBQUY7SUFBY0M7RUFBZCxJQUF5QlgsdURBQU8sQ0FBQ0ssSUFBRCxFQUFPRyxTQUFQLENBQXRDO0VBQ0EsTUFBTTtJQUFFSSxpQkFBRjtJQUFxQkw7RUFBckIsSUFBOEJNLFlBQVksRUFBaEQsQ0FKMEMsQ0FLMUM7O0VBQ0Esb0JBQ0UsOERBQUMsUUFBRDtJQUFBLHdCQUNFLDhEQUFDLFlBQUQ7TUFBQSx1QkFDRSw4REFBQyxZQUFEO1FBQWMsR0FBRyxFQUFFTCxTQUFTLEVBQUVNO01BQTlCO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsZUFJRSw4REFBQyxhQUFEO01BQUEsd0JBQ0UsOERBQUMsV0FBRDtRQUFBLHdCQUNFO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFFRSw4REFBQyxxRUFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsZUFLRTtRQUFBLFVBQU1ULElBQUksQ0FBQ1U7TUFBWDtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBTEYsZUFPRSw4REFBQyx5REFBRDtRQUFZLE1BQU0sRUFBRUosTUFBcEI7UUFBNEIsVUFBVSxFQUFFRDtNQUF4QztRQUFBO1FBQUE7UUFBQTtNQUFBLGFBUEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFnQkQsQ0F0QkQ7O0dBQU1OO1VBQ3dCSCx1REFFR0Q7OztLQUgzQkk7QUF3Qk4sTUFBTVksUUFBUSxHQUFHbEIsK0RBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBO01BQU1rQjtBQVlOLE1BQU1FLFlBQVksR0FBR3BCLDJEQUFXO0FBQ2hDO0FBQ0E7QUFDQSxDQUhBO01BQU1vQjtBQUlOLE1BQU1FLGFBQWEsR0FBR3RCLDJEQUFXO0FBQ2pDO0FBQ0E7QUFDQSxDQUhBO01BQU1zQjtBQUlOLE1BQU1DLFdBQVcsR0FBR3ZCLDJEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBSkE7TUFBTXVCO0FBS04sTUFBTUMsWUFBWSxHQUFHeEIsMkRBQU0sQ0FBQ0ssMkRBQUQsQ0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZBO01BQU1tQjtBQVlOLCtEQUFlbEIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUHJvZmlsZVBvc3QudHN4PzM3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IE1vcmVIb3Jpekljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlSG9yaXonO1xuaW1wb3J0IHsgdXNlTGlrZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUxpa2UnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuLi9hdG9tcy9MaWtlQnV0dG9uJztcbmltcG9ydCB7IFVzZXJJY29uSW1nIH0gZnJvbSAnLi4vYXRvbXMvVXNlckljb25JbWcnO1xuY29uc3QgUHJvZmlsZVBvc3QgPSAoeyBwb3N0LCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdXNlcjogbG9naW5Vc2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IHsgdG9nZ2xlTGlrZSwgaXNHb29kIH0gPSB1c2VMaWtlKHBvc3QsIGxvZ2luVXNlcik7XG4gIGNvbnN0IHsgZ2V0QXV0aG9yQnlQb3N0SWQsIHVzZXIgfSA9IHVzZUdldEF1dGhvcigpO1xuICAvLyBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShwb3N0Ll9pZCl9PlxuICByZXR1cm4gKFxuICAgIDxTQXJ0aWNsZT5cbiAgICAgIDxTTGVmdENvbnRlbnQ+XG4gICAgICAgIDxTVXNlckljb25JbWcgc3JjPXtsb2dpblVzZXI/LnByb2ZpbGVJbWd9IC8+XG4gICAgICA8L1NMZWZ0Q29udGVudD5cbiAgICAgIDxTUmlnaHRDb250ZW50PlxuICAgICAgICA8U1Bvc3RIZWFkZXI+XG4gICAgICAgICAgPGRpdj5uYW1lIHRpbWU8L2Rpdj5cbiAgICAgICAgICA8TW9yZUhvcml6SWNvbiAvPlxuICAgICAgICA8L1NQb3N0SGVhZGVyPlxuICAgICAgICA8ZGl2Pntwb3N0LmRlc2N9PC9kaXY+XG5cbiAgICAgICAgPExpa2VCdXR0b24gaXNHb29kPXtpc0dvb2R9IHRvZ2dsZUxpa2U9e3RvZ2dsZUxpa2V9IC8+XG4gICAgICA8L1NSaWdodENvbnRlbnQ+XG4gICAgPC9TQXJ0aWNsZT5cbiAgKTtcbn07XG5cbmNvbnN0IFNBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICB3aWR0aDogMTAwJTtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG5gO1xuY29uc3QgU0xlZnRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB3aWR0aDogNjBweDtcbmA7XG5jb25zdCBTUmlnaHRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFNQb3N0SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcbmNvbnN0IFNVc2VySWNvbkltZyA9IHN0eWxlZChVc2VySWNvbkltZylgXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyNXB4KSB7XG4gICAgJiB7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQb3N0O1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk1vcmVIb3Jpekljb24iLCJ1c2VMaWtlIiwidXNlU2VsZWN0b3IiLCJMaWtlQnV0dG9uIiwiVXNlckljb25JbWciLCJQcm9maWxlUG9zdCIsInBvc3QiLCJvbkRlbGV0ZSIsInVzZXIiLCJsb2dpblVzZXIiLCJzdGF0ZSIsInRvZ2dsZUxpa2UiLCJpc0dvb2QiLCJnZXRBdXRob3JCeVBvc3RJZCIsInVzZUdldEF1dGhvciIsInByb2ZpbGVJbWciLCJkZXNjIiwiU0FydGljbGUiLCJhcnRpY2xlIiwiU0xlZnRDb250ZW50IiwiZGl2IiwiU1JpZ2h0Q29udGVudCIsIlNQb3N0SGVhZGVyIiwiU1VzZXJJY29uSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/ProfilePost.tsx\n"));

/***/ })

});