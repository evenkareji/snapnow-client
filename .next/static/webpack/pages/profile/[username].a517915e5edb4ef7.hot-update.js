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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLike */ \"./src/hooks/useLike.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/LikeButton */ \"./src/components/atoms/LikeButton.tsx\");\n/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/UserIconImg */ \"./src/components/atoms/UserIconImg.tsx\");\n/* harmony import */ var _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useGetAuthor */ \"./src/hooks/useGetAuthor.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _atoms_FormattedTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/FormattedTime */ \"./src/components/atoms/FormattedTime.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _PostPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostPopup */ \"./src/components/organisms/PostPopup.tsx\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/ProfilePost.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProfilePost = _ref => {\n  _s();\n\n  let {\n    post,\n    onDelete\n  } = _ref;\n  const {\n    user: loginUser\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);\n  const {\n    getAuthorByPostId,\n    user,\n    isLoadingAuthor\n  } = (0,_hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__.useGetAuthor)();\n  const {\n    toggleLike,\n    isGood\n  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike)(post, loginUser);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    getAuthorByPostId(post);\n  }, [post]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SArticle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SLeftContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n        href: `/profile/${user?.username}`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"a\", {\n          children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            circle: true,\n            height: \"40px\",\n            width: \"40px\",\n            containerClassName: \"avatar-skeleton\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SUserIconImg, {\n            src: user?.profileImg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SRightContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostUsername, {\n            children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 34\n            }, undefined) : user?.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_FormattedTime__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            dateString: post.createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), user?.username === loginUser?.username && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_PostPopup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          post: post,\n          onDelete: onDelete\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostContent, {\n        children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 30\n        }, undefined) : post.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostFooter, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isGood: isGood,\n          toggleLike: toggleLike\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(ProfilePost, \"lpfzkK0h03LB5FvrWlDKUreqVgA=\", false, function () {\n  return [_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__.useGetAuthor, _hooks_useLike__WEBPACK_IMPORTED_MODULE_1__.useLike];\n});\n\n_c = ProfilePost;\nconst SArticle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].article`\n  position: relative;\n  display: flex;\n  padding: 16px 16px 0px 16px;\n  border-bottom: 1px solid #f2f2f2;\n  width: 100%;\n  background-color: #fff;\n  box-sizing: border-box;\n  align-items: start;\n`;\n_c2 = SArticle;\nconst SLeftContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  margin-right: 12px;\n  width: 60px;\n  color: #000;\n`;\n_c3 = SLeftContent;\nconst SRightContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  padding-bottom: 12px;\n  width: 100%;\n`;\n_c4 = SRightContent;\nconst SPostHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`;\n_c5 = SPostHeader;\nconst SPostFooter = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  margin-top: 12px;\n`;\n_c6 = SPostFooter;\nconst SPostUsername = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n  font-weight: bold;\n  font-size: 16px;\n`;\n_c7 = SPostUsername;\nconst SUserIconImg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_4__.UserIconImg)`\n  position: relative;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n\n  @media (min-width: 425px) {\n    & {\n      width: 45px;\n      height: 45px;\n    }\n  }\n`;\n_c8 = SUserIconImg;\nconst SPostContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-size: 16px;\n`;\n_c9 = SPostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePost);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"ProfilePost\");\n$RefreshReg$(_c2, \"SArticle\");\n$RefreshReg$(_c3, \"SLeftContent\");\n$RefreshReg$(_c4, \"SRightContent\");\n$RefreshReg$(_c5, \"SPostHeader\");\n$RefreshReg$(_c6, \"SPostFooter\");\n$RefreshReg$(_c7, \"SPostUsername\");\n$RefreshReg$(_c8, \"SUserIconImg\");\n$RefreshReg$(_c9, \"SPostContent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUHJvZmlsZVBvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTVcsV0FBVyxHQUFHLFFBQXdCO0VBQUE7O0VBQUEsSUFBdkI7SUFBRUMsSUFBRjtJQUFRQztFQUFSLENBQXVCO0VBQzFDLE1BQU07SUFBRUMsSUFBSSxFQUFFQztFQUFSLElBQXNCYix5REFBVyxDQUFFYyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsSUFBbEIsQ0FBdkM7RUFDQSxNQUFNO0lBQUVHLGlCQUFGO0lBQXFCSCxJQUFyQjtJQUEyQkk7RUFBM0IsSUFBK0NiLGlFQUFZLEVBQWpFO0VBQ0EsTUFBTTtJQUFFYyxVQUFGO0lBQWNDO0VBQWQsSUFBeUJuQix1REFBTyxDQUFDVyxJQUFELEVBQU9HLFNBQVAsQ0FBdEM7RUFDQVQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RXLGlCQUFpQixDQUFDTCxJQUFELENBQWpCO0VBQ0QsQ0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0VBSUEsb0JBQ0UsK0RBQUMsUUFBRDtJQUFBLHdCQUNFLCtEQUFDLFlBQUQ7TUFBQSx1QkFDRSwrREFBQyxrREFBRDtRQUFNLElBQUksRUFBRyxZQUFXRSxJQUFJLEVBQUVPLFFBQVMsRUFBdkM7UUFBQSx1QkFDRTtVQUFBLFVBQ0dILGVBQWUsZ0JBQ2QsK0RBQUMsK0RBQUQ7WUFDRSxNQUFNLE1BRFI7WUFFRSxNQUFNLEVBQUMsTUFGVDtZQUdFLEtBQUssRUFBQyxNQUhSO1lBSUUsa0JBQWtCLEVBQUM7VUFKckI7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQURjLGdCQVFkLCtEQUFDLFlBQUQ7WUFBYyxHQUFHLEVBQUVKLElBQUksRUFBRVE7VUFBekI7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQVRKO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBaUJFLCtEQUFDLGFBQUQ7TUFBQSx3QkFDRSwrREFBQyxXQUFEO1FBQUEsd0JBQ0U7VUFBQSx3QkFDRSwrREFBQyxhQUFEO1lBQUEsVUFDR0osZUFBZSxnQkFBRywrREFBQywrREFBRDtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBQUgsR0FBa0JKLElBQUksRUFBRU87VUFEMUM7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQURGLGVBS0UsK0RBQUMsNERBQUQ7WUFBZSxVQUFVLEVBQUVULElBQUksQ0FBQ1c7VUFBaEM7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQUxGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQURGLEVBUUdULElBQUksRUFBRU8sUUFBTixLQUFtQk4sU0FBUyxFQUFFTSxRQUE5QixpQkFDQywrREFBQyxrREFBRDtVQUFXLElBQUksRUFBRVQsSUFBakI7VUFBdUIsUUFBUSxFQUFFQztRQUFqQztVQUFBO1VBQUE7VUFBQTtRQUFBLGFBVEo7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsZUFhRSwrREFBQyxZQUFEO1FBQUEsVUFDR0ssZUFBZSxnQkFBRywrREFBQywrREFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBQUgsR0FBa0JOLElBQUksQ0FBQ1k7TUFEekM7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQWJGLGVBZ0JFLCtEQUFDLFdBQUQ7UUFBQSx1QkFDRSwrREFBQyx5REFBRDtVQUFZLE1BQU0sRUFBRUosTUFBcEI7VUFBNEIsVUFBVSxFQUFFRDtRQUF4QztVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQWhCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFqQkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUF3Q0QsQ0FoREQ7O0dBQU1SO1VBQ3dCVCx1REFDeUJHLCtEQUN0Qko7OztLQUgzQlU7QUFrRE4sTUFBTWMsUUFBUSxHQUFHekIsK0RBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7TUFBTXlCO0FBVU4sTUFBTUUsWUFBWSxHQUFHM0IsMkRBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtNQUFNMkI7QUFLTixNQUFNRSxhQUFhLEdBQUc3QiwyREFBVztBQUNqQztBQUNBO0FBQ0EsQ0FIQTtNQUFNNkI7QUFJTixNQUFNQyxXQUFXLEdBQUc5QiwyREFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxDQUpBO01BQU04QjtBQUtOLE1BQU1DLFdBQVcsR0FBRy9CLDJEQUFXO0FBQy9CO0FBQ0EsQ0FGQTtNQUFNK0I7QUFHTixNQUFNQyxhQUFhLEdBQUdoQyw0REFBWTtBQUNsQztBQUNBO0FBQ0EsQ0FIQTtNQUFNZ0M7QUFJTixNQUFNRSxZQUFZLEdBQUdsQywyREFBTSxDQUFDSSwyREFBRCxDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYkE7TUFBTThCO0FBY04sTUFBTUMsWUFBWSxHQUFHbkMsMkRBQVc7QUFDaEM7QUFDQSxDQUZBO01BQU1tQztBQUdOLCtEQUFleEIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUHJvZmlsZVBvc3QudHN4PzM3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgeyB1c2VMaWtlIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTGlrZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBMaWtlQnV0dG9uIGZyb20gJy4uL2F0b21zL0xpa2VCdXR0b24nO1xuaW1wb3J0IHsgVXNlckljb25JbWcgfSBmcm9tICcuLi9hdG9tcy9Vc2VySWNvbkltZyc7XG5pbXBvcnQgeyB1c2VHZXRBdXRob3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZXRBdXRob3InO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1hdHRlZFRpbWUgZnJvbSAnLi4vYXRvbXMvRm9ybWF0dGVkVGltZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFBvc3RQb3B1cCBmcm9tICcuL1Bvc3RQb3B1cCc7XG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuY29uc3QgUHJvZmlsZVBvc3QgPSAoeyBwb3N0LCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdXNlcjogbG9naW5Vc2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IGdldEF1dGhvckJ5UG9zdElkLCB1c2VyLCBpc0xvYWRpbmdBdXRob3IgfSA9IHVzZUdldEF1dGhvcigpO1xuICBjb25zdCB7IHRvZ2dsZUxpa2UsIGlzR29vZCB9ID0gdXNlTGlrZShwb3N0LCBsb2dpblVzZXIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEF1dGhvckJ5UG9zdElkKHBvc3QpO1xuICB9LCBbcG9zdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNBcnRpY2xlPlxuICAgICAgPFNMZWZ0Q29udGVudD5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlcj8udXNlcm5hbWV9YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICB7aXNMb2FkaW5nQXV0aG9yID8gKFxuICAgICAgICAgICAgICA8U2tlbGV0b25cbiAgICAgICAgICAgICAgICBjaXJjbGVcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQwcHhcIlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImF2YXRhci1za2VsZXRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U1VzZXJJY29uSW1nIHNyYz17dXNlcj8ucHJvZmlsZUltZ30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1NMZWZ0Q29udGVudD5cbiAgICAgIDxTUmlnaHRDb250ZW50PlxuICAgICAgICA8U1Bvc3RIZWFkZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTUG9zdFVzZXJuYW1lPlxuICAgICAgICAgICAgICB7aXNMb2FkaW5nQXV0aG9yID8gPFNrZWxldG9uIC8+IDogdXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgICA8L1NQb3N0VXNlcm5hbWU+XG5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRUaW1lIGRhdGVTdHJpbmc9e3Bvc3QuY3JlYXRlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt1c2VyPy51c2VybmFtZSA9PT0gbG9naW5Vc2VyPy51c2VybmFtZSAmJiAoXG4gICAgICAgICAgICA8UG9zdFBvcHVwIHBvc3Q9e3Bvc3R9IG9uRGVsZXRlPXtvbkRlbGV0ZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1NQb3N0SGVhZGVyPlxuICAgICAgICA8U1Bvc3RDb250ZW50PlxuICAgICAgICAgIHtpc0xvYWRpbmdBdXRob3IgPyA8U2tlbGV0b24gLz4gOiBwb3N0LmRlc2N9XG4gICAgICAgIDwvU1Bvc3RDb250ZW50PlxuICAgICAgICA8U1Bvc3RGb290ZXI+XG4gICAgICAgICAgPExpa2VCdXR0b24gaXNHb29kPXtpc0dvb2R9IHRvZ2dsZUxpa2U9e3RvZ2dsZUxpa2V9IC8+XG4gICAgICAgIDwvU1Bvc3RGb290ZXI+XG4gICAgICA8L1NSaWdodENvbnRlbnQ+XG4gICAgPC9TQXJ0aWNsZT5cbiAgKTtcbn07XG5cbmNvbnN0IFNBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbmA7XG5jb25zdCBTTGVmdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogIzAwMDtcbmA7XG5jb25zdCBTUmlnaHRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFNQb3N0SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcbmNvbnN0IFNQb3N0Rm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5jb25zdCBTUG9zdFVzZXJuYW1lID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuY29uc3QgU1VzZXJJY29uSW1nID0gc3R5bGVkKFVzZXJJY29uSW1nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyNXB4KSB7XG4gICAgJiB7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBTUG9zdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE2cHg7XG5gO1xuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBvc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlTGlrZSIsInVzZVNlbGVjdG9yIiwiTGlrZUJ1dHRvbiIsIlVzZXJJY29uSW1nIiwidXNlR2V0QXV0aG9yIiwidXNlRWZmZWN0IiwiRm9ybWF0dGVkVGltZSIsIkxpbmsiLCJQb3N0UG9wdXAiLCJTa2VsZXRvbiIsIlByb2ZpbGVQb3N0IiwicG9zdCIsIm9uRGVsZXRlIiwidXNlciIsImxvZ2luVXNlciIsInN0YXRlIiwiZ2V0QXV0aG9yQnlQb3N0SWQiLCJpc0xvYWRpbmdBdXRob3IiLCJ0b2dnbGVMaWtlIiwiaXNHb29kIiwidXNlcm5hbWUiLCJwcm9maWxlSW1nIiwiY3JlYXRlZEF0IiwiZGVzYyIsIlNBcnRpY2xlIiwiYXJ0aWNsZSIsIlNMZWZ0Q29udGVudCIsImRpdiIsIlNSaWdodENvbnRlbnQiLCJTUG9zdEhlYWRlciIsIlNQb3N0Rm9vdGVyIiwiU1Bvc3RVc2VybmFtZSIsInNwYW4iLCJTVXNlckljb25JbWciLCJTUG9zdENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/ProfilePost.tsx\n"));

/***/ })

});