"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/organisms/PostView.tsx":
/*!***********************************************!*\
  !*** ./src/components/organisms/PostView.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostView\": function() { return /* binding */ PostView; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGetAuthor */ \"./src/hooks/useGetAuthor.ts\");\n/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLike */ \"./src/hooks/useLike.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useToggleFollow */ \"./src/hooks/useToggleFollow.tsx\");\n/* harmony import */ var _atoms_LikeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/LikeButton */ \"./src/components/atoms/LikeButton.tsx\");\n/* harmony import */ var _molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../molecules/FollowToggleButton */ \"./src/components/molecules/FollowToggleButton.tsx\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/PostView.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PostView = props => {\n  _s();\n\n  const {\n    post\n  } = props;\n  const {\n    unFollowUser,\n    followUser\n  } = (0,_hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_6__.useToggleFollow)();\n  const {\n    getAuthorByPostId,\n    user,\n    isLoadingAuthor\n  } = (0,_hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__.useGetAuthor)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  const {\n    user: loginUser,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);\n  const {\n    toggleLike,\n    isGood\n  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_4__.useLike)(post, loginUser);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (!loginUser && !loading) {\n      router.push('/login');\n    }\n  }, [loading, loginUser, router]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getAuthorByPostId(post);\n  }, [post]);\n\n  if (!loginUser) {\n    return null;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PostBorder, {\n    children: [post.img && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SImg, {\n      src: post.img,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 20\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SBg, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: `profile/${user?.username}`,\n          children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            circle: true,\n            height: \"52px\",\n            width: \"52px\",\n            containerClassName: \"avatar-skeleton\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SUserIconImg, {\n            src: user?.profileImg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Box, {\n          children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            circle: true,\n            height: \"52px\",\n            width: \"52px\",\n            containerClassName: \"avatar-skeleton\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SUserName, {\n            children: user?.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_8__.FollowToggleButton, {\n          loginUser: loginUser,\n          otherUserId: post.userId,\n          onClickFollow: () => followUser(post.userId, loginUser?._id),\n          onClickUnFollow: () => unFollowUser(post.userId, loginUser?._id)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SDescContainer, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostArticle, {\n          post: post.img,\n          children: post.desc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SAside, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_atoms_LikeButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        size: '25',\n        isGood: isGood,\n        toggleLike: toggleLike\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(HeartCount, {\n        children: post.likes.length\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(PostView, \"PHk+FQmAsFycH7JEKxR02KRI91g=\", false, function () {\n  return [_hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_6__.useToggleFollow, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__.useGetAuthor, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useLike__WEBPACK_IMPORTED_MODULE_4__.useLike];\n});\n\n_c = PostView;\nconst SPostContent = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SPostContent\",\n  componentId: \"sc-mp07b1-0\"\n})([\"position:absolute;top:55px;left:38px;width:87%;height:70%;\"]);\n_c2 = SPostContent;\nconst SPostHeader = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].header.withConfig({\n  displayName: \"PostView__SPostHeader\",\n  componentId: \"sc-mp07b1-1\"\n})([\"display:flex;align-items:center;position:relative;justify-content:space-between;height:72px;\"]);\n_c3 = SPostHeader;\nconst SDescContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SDescContainer\",\n  componentId: \"sc-mp07b1-2\"\n})([\"height:90%;display:flex;flex-direction:column;justify-content:center;text-align:left;\"]);\n_c4 = SDescContainer;\nconst SPostArticle = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].p.withConfig({\n  displayName: \"PostView__SPostArticle\",\n  componentId: \"sc-mp07b1-3\"\n})([\"font-size:26px;width:fit-content;color:#000;font-weight:normal;line-height:1.9;letter-spacing:0.1em;\"]);\n_c5 = SPostArticle;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__Box\",\n  componentId: \"sc-mp07b1-4\"\n})([\"margin-left:20px;flex:1;\"]);\n_c6 = Box;\nconst SUserIconImg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].img.withConfig({\n  displayName: \"PostView__SUserIconImg\",\n  componentId: \"sc-mp07b1-5\"\n})([\"object-fit:cover;border-radius:100%;max-width:none;width:52px;height:52px;background-color:#fff;cursor:pointer;\"]);\n_c7 = SUserIconImg;\nconst SUserName = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].h1.withConfig({\n  displayName: \"PostView__SUserName\",\n  componentId: \"sc-mp07b1-6\"\n})([\"color:#000;font-size:16px;font-weight:bold;\"]);\n_c8 = SUserName;\nconst SAside = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SAside\",\n  componentId: \"sc-mp07b1-7\"\n})([\"position:absolute;display:flex;flex-direction:column;top:75%;align-items:center;right:10px;padding:20px;text-align:center;\"]);\n_c9 = SAside;\nconst HeartCount = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].span.withConfig({\n  displayName: \"PostView__HeartCount\",\n  componentId: \"sc-mp07b1-8\"\n})([\"margin-bottom:18px;color:#3d3d3d;\"]);\n_c10 = HeartCount;\nconst PostBorder = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__PostBorder\",\n  componentId: \"sc-mp07b1-9\"\n})([\"position:relative;width:100%;height:100%;scroll-snap-align:start;scroll-snap-stop:always;\"]);\n_c11 = PostBorder;\nconst SBg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SBg\",\n  componentId: \"sc-mp07b1-10\"\n})([\"position:relative;width:100%;height:100vh;object-fit:cover;background-color:#ffffff;\"]);\n_c12 = SBg;\nconst SImg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].img.withConfig({\n  displayName: \"PostView__SImg\",\n  componentId: \"sc-mp07b1-11\"\n})([\"height:100vh;object-fit:cover;\"]);\n_c13 = SImg;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;\n\n$RefreshReg$(_c, \"PostView\");\n$RefreshReg$(_c2, \"SPostContent\");\n$RefreshReg$(_c3, \"SPostHeader\");\n$RefreshReg$(_c4, \"SDescContainer\");\n$RefreshReg$(_c5, \"SPostArticle\");\n$RefreshReg$(_c6, \"Box\");\n$RefreshReg$(_c7, \"SUserIconImg\");\n$RefreshReg$(_c8, \"SUserName\");\n$RefreshReg$(_c9, \"SAside\");\n$RefreshReg$(_c10, \"HeartCount\");\n$RefreshReg$(_c11, \"PostBorder\");\n$RefreshReg$(_c12, \"SBg\");\n$RefreshReg$(_c13, \"SImg\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUG9zdFZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTVcsUUFBNEIsR0FBSUMsS0FBRCxJQUFXO0VBQUE7O0VBQ3JELE1BQU07SUFBRUM7RUFBRixJQUFXRCxLQUFqQjtFQUVBLE1BQU07SUFBRUUsWUFBRjtJQUFnQkM7RUFBaEIsSUFBK0JSLHVFQUFlLEVBQXBEO0VBQ0EsTUFBTTtJQUFFUyxpQkFBRjtJQUFxQkMsSUFBckI7SUFBMkJDO0VBQTNCLElBQStDZCxpRUFBWSxFQUFqRTtFQUNBLE1BQU1lLE1BQU0sR0FBR2Isc0RBQVMsRUFBeEI7RUFDQSxNQUFNO0lBQUVXLElBQUksRUFBRUcsU0FBUjtJQUFtQkM7RUFBbkIsSUFBK0JsQix5REFBVyxDQUFFbUIsS0FBRCxJQUFXQSxLQUFLLENBQUNMLElBQWxCLENBQWhEO0VBRUEsTUFBTTtJQUFFTSxVQUFGO0lBQWNDO0VBQWQsSUFBeUJuQix1REFBTyxDQUFDUSxJQUFELEVBQU9PLFNBQVAsQ0FBdEM7RUFFQW5CLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUksQ0FBQ21CLFNBQUQsSUFBYyxDQUFDQyxPQUFuQixFQUE0QjtNQUMxQkYsTUFBTSxDQUFDTSxJQUFQLENBQVksUUFBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNKLE9BQUQsRUFBVUQsU0FBVixFQUFxQkQsTUFBckIsQ0FKTSxDQUFUO0VBTUFsQixnREFBUyxDQUFDLE1BQU07SUFDZGUsaUJBQWlCLENBQUNILElBQUQsQ0FBakI7RUFDRCxDQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7O0VBSUEsSUFBSSxDQUFDTyxTQUFMLEVBQWdCO0lBQ2QsT0FBTyxJQUFQO0VBQ0Q7O0VBQ0Qsb0JBQ0UsK0RBQUMsVUFBRDtJQUFBLFdBQ0dQ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R0FBRyxHQUFHdkMseUVBQUg7RUFBQTtFQUFBO0FBQUEsZ0NBQVQ7TUFBTXVDO0FBS04sTUFBTUMsWUFBWSxHQUFHeEMseUVBQUg7RUFBQTtFQUFBO0FBQUEsdUhBQWxCO01BQU13QztBQVNOLE1BQU1DLFNBQVMsR0FBR3pDLHdFQUFIO0VBQUE7RUFBQTtBQUFBLG1EQUFmO01BQU15QztBQU1OLE1BQU1FLE1BQU0sR0FBRzNDLHlFQUFIO0VBQUE7RUFBQTtBQUFBLGtJQUFaO01BQU0yQztBQVdOLE1BQU1DLFVBQVUsR0FBRzVDLDBFQUFIO0VBQUE7RUFBQTtBQUFBLHlDQUFoQjtPQUFNNEM7QUFLTixNQUFNRSxVQUFVLEdBQUc5Qyx5RUFBSDtFQUFBO0VBQUE7QUFBQSxpR0FBaEI7T0FBTThDO0FBU04sTUFBTUMsR0FBRyxHQUFHL0MseUVBQUg7RUFBQTtFQUFBO0FBQUEsNEZBQVQ7T0FBTStDO0FBT04sTUFBTUMsSUFBSSxHQUFHaEQseUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQVY7T0FBTWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Qb3N0Vmlldy50c3g/MDQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcblxuaW1wb3J0IHsgdXNlR2V0QXV0aG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlR2V0QXV0aG9yJztcbmltcG9ydCB7IHVzZUxpa2UgfSBmcm9tICcuLi8uLi9ob29rcy91c2VMaWtlJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlVG9nZ2xlRm9sbG93IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVG9nZ2xlRm9sbG93JztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuLi9hdG9tcy9MaWtlQnV0dG9uJztcbmltcG9ydCB7IEZvbGxvd1RvZ2dsZUJ1dHRvbiB9IGZyb20gJy4uL21vbGVjdWxlcy9Gb2xsb3dUb2dnbGVCdXR0b24nO1xuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcblxuZXhwb3J0IGNvbnN0IFBvc3RWaWV3OiBGQzx7IHBvc3Q6IFBvc3QgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcblxuICBjb25zdCB7IHVuRm9sbG93VXNlciwgZm9sbG93VXNlciB9ID0gdXNlVG9nZ2xlRm9sbG93KCk7XG4gIGNvbnN0IHsgZ2V0QXV0aG9yQnlQb3N0SWQsIHVzZXIsIGlzTG9hZGluZ0F1dGhvciB9ID0gdXNlR2V0QXV0aG9yKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHVzZXI6IGxvZ2luVXNlciwgbG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBjb25zdCB7IHRvZ2dsZUxpa2UsIGlzR29vZCB9ID0gdXNlTGlrZShwb3N0LCBsb2dpblVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2dpblVzZXIgJiYgIWxvYWRpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFtsb2FkaW5nLCBsb2dpblVzZXIsIHJvdXRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXV0aG9yQnlQb3N0SWQocG9zdCk7XG4gIH0sIFtwb3N0XSk7XG5cbiAgaWYgKCFsb2dpblVzZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxQb3N0Qm9yZGVyPlxuICAgICAge3Bvc3QuaW1nICYmIDxTSW1nIHNyYz17cG9zdC5pbWd9IGFsdD1cIlwiIC8+fVxuXG4gICAgICA8U0JnIC8+XG4gICAgICA8U1Bvc3RDb250ZW50PlxuICAgICAgICA8U1Bvc3RIZWFkZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YHByb2ZpbGUvJHt1c2VyPy51c2VybmFtZX1gfT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmdBdXRob3IgPyAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgIGNpcmNsZVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUycHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTJweFwiXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwiYXZhdGFyLXNrZWxldG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxTVXNlckljb25JbWcgc3JjPXt1c2VyPy5wcm9maWxlSW1nfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtpc0xvYWRpbmdBdXRob3IgPyAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvblxuICAgICAgICAgICAgICAgIGNpcmNsZVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUycHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTJweFwiXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwiYXZhdGFyLXNrZWxldG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxTVXNlck5hbWU+e3VzZXI/LnVzZXJuYW1lfTwvU1VzZXJOYW1lPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxGb2xsb3dUb2dnbGVCdXR0b25cbiAgICAgICAgICAgIGxvZ2luVXNlcj17bG9naW5Vc2VyfVxuICAgICAgICAgICAgb3RoZXJVc2VySWQ9e3Bvc3QudXNlcklkfVxuICAgICAgICAgICAgb25DbGlja0ZvbGxvdz17KCkgPT4gZm9sbG93VXNlcihwb3N0LnVzZXJJZCwgbG9naW5Vc2VyPy5faWQpfVxuICAgICAgICAgICAgb25DbGlja1VuRm9sbG93PXsoKSA9PiB1bkZvbGxvd1VzZXIocG9zdC51c2VySWQsIGxvZ2luVXNlcj8uX2lkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NQb3N0SGVhZGVyPlxuICAgICAgICA8U0Rlc2NDb250YWluZXI+XG4gICAgICAgICAgPFNQb3N0QXJ0aWNsZSBwb3N0PXtwb3N0LmltZ30+e3Bvc3QuZGVzY308L1NQb3N0QXJ0aWNsZT5cbiAgICAgICAgPC9TRGVzY0NvbnRhaW5lcj5cbiAgICAgIDwvU1Bvc3RDb250ZW50PlxuICAgICAgPFNBc2lkZT5cbiAgICAgICAgPExpa2VCdXR0b24gc2l6ZT17JzI1J30gaXNHb29kPXtpc0dvb2R9IHRvZ2dsZUxpa2U9e3RvZ2dsZUxpa2V9IC8+XG4gICAgICAgIDxIZWFydENvdW50Pntwb3N0Lmxpa2VzLmxlbmd0aH08L0hlYXJ0Q291bnQ+XG4gICAgICA8L1NBc2lkZT5cbiAgICA8L1Bvc3RCb3JkZXI+XG4gICk7XG59O1xuXG5jb25zdCBTUG9zdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMzhweDtcbiAgd2lkdGg6IDg3JTtcbiAgaGVpZ2h0OiA3MCU7XG5gO1xuY29uc3QgU1Bvc3RIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLy8g5bem56uv44Go5Y+z56uv44Gr6KaB57Sg44KS6YWN572uXG4gIGhlaWdodDogNzJweDtcbmA7XG5cbmNvbnN0IFNEZXNjQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYDtcbmNvbnN0IFNQb3N0QXJ0aWNsZSA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDI2cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgY29sb3I6ICMwMDA7XG5cbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuOTsgLyogMS4z5YCN44GM5Z+65rqW44Gn44GZ44GM44CBNTAl44Gu5YCk44Gr5Z+644Gl44GE44Gm6YGp5YiH44Gr6Kit5a6a44GX44G+44GZICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbmA7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmbGV4OiAxO1xuYDtcblxuY29uc3QgU1VzZXJJY29uSW1nID0gc3R5bGVkLmltZ2BcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcbmNvbnN0IFNVc2VyTmFtZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBTQXNpZGUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRvcDogNzUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgSGVhcnRDb3VudCA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzNkM2QzZDtcbmA7XG5cbmNvbnN0IFBvc3RCb3JkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbmA7XG5jb25zdCBTQmcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbmA7XG5jb25zdCBTSW1nID0gc3R5bGVkLmltZ2BcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInN0eWxlZCIsInVzZVNlbGVjdG9yIiwidXNlR2V0QXV0aG9yIiwidXNlTGlrZSIsInVzZVJvdXRlciIsInVzZVRvZ2dsZUZvbGxvdyIsIkxpa2VCdXR0b24iLCJGb2xsb3dUb2dnbGVCdXR0b24iLCJTa2VsZXRvbiIsIlBvc3RWaWV3IiwicHJvcHMiLCJwb3N0IiwidW5Gb2xsb3dVc2VyIiwiZm9sbG93VXNlciIsImdldEF1dGhvckJ5UG9zdElkIiwidXNlciIsImlzTG9hZGluZ0F1dGhvciIsInJvdXRlciIsImxvZ2luVXNlciIsImxvYWRpbmciLCJzdGF0ZSIsInRvZ2dsZUxpa2UiLCJpc0dvb2QiLCJwdXNoIiwiaW1nIiwidXNlcm5hbWUiLCJwcm9maWxlSW1nIiwidXNlcklkIiwiX2lkIiwiZGVzYyIsImxpa2VzIiwibGVuZ3RoIiwiU1Bvc3RDb250ZW50IiwiZGl2IiwiU1Bvc3RIZWFkZXIiLCJoZWFkZXIiLCJTRGVzY0NvbnRhaW5lciIsIlNQb3N0QXJ0aWNsZSIsInAiLCJCb3giLCJTVXNlckljb25JbWciLCJTVXNlck5hbWUiLCJoMSIsIlNBc2lkZSIsIkhlYXJ0Q291bnQiLCJzcGFuIiwiUG9zdEJvcmRlciIsIlNCZyIsIlNJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/PostView.tsx\n"));

/***/ })

});