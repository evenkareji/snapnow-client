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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostView\": function() { return /* binding */ PostView; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGetAuthor */ \"./src/hooks/useGetAuthor.ts\");\n/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLike */ \"./src/hooks/useLike.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useToggleFollow */ \"./src/hooks/useToggleFollow.tsx\");\n/* harmony import */ var _atoms_LikeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/LikeButton */ \"./src/components/atoms/LikeButton.tsx\");\n/* harmony import */ var _molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../molecules/FollowToggleButton */ \"./src/components/molecules/FollowToggleButton.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/PostView.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PostView = props => {\n  _s();\n\n  const {\n    post\n  } = props;\n  const {\n    unFollowUser,\n    followUser\n  } = (0,_hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_7__.useToggleFollow)();\n  const {\n    getAuthorByPostId,\n    user,\n    isLoadingAuthor\n  } = (0,_hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__.useGetAuthor)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  const postRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  const {\n    user: loginUser,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);\n  const {\n    toggleLike,\n    isGood\n  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_4__.useLike)(post, loginUser);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (!loginUser && !loading) {\n      router.push('/login');\n    }\n  }, [loading, loginUser, router]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getAuthorByPostId(post);\n  }, [post]);\n\n  if (!loginUser) {\n    return null;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const postElement = postRef.current;\n    const audioElement = audioRef.current;\n\n    if (postElement && audioElement) {\n      const observer = new IntersectionObserver(_ref => {\n        let [entry] = _ref;\n\n        if (entry.isIntersecting) {\n          audioElement.play();\n        } else {\n          audioElement.pause();\n        }\n      }, {\n        threshold: 0.5 // 50%の要素が見えた時にトリガー\n\n      });\n      observer.observe(postElement);\n      return () => {\n        observer.unobserve(postElement);\n      };\n    }\n\n    return () => {}; // Add this line\n  }, [postRef, audioRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PostBorder, {\n    ref: postRef,\n    id: `post-${post.id}`,\n    className: \"post-slide\",\n    children: [post.img && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SImg, {\n      src: post.img,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 20\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SBg, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: `profile/${user?.username}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"a\", {\n            children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              circle: true,\n              height: \"52px\",\n              width: \"52px\",\n              containerClassName: \"avatar-skeleton\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SUserIconImg, {\n              src: user?.profileImg\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Box, {\n          children: isLoadingAuthor ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            width: 100\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SUserName, {\n            children: user?.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_9__.FollowToggleButton, {\n          loginUser: loginUser,\n          otherUserId: post.userId,\n          onClickFollow: () => followUser(post.userId, loginUser?._id),\n          onClickUnFollow: () => unFollowUser(post.userId, loginUser?._id)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SDescContainer, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SPostArticle, {\n          post: post.img,\n          children: post.desc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"audio\", {\n        ref: audioRef,\n        controls: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"source\", {\n          src: post.audioUrl,\n          type: \"audio/webm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, undefined), \"\\u304A\\u4F7F\\u3044\\u306E\\u30D6\\u30E9\\u30A6\\u30B6\\u306F\\u30AA\\u30FC\\u30C7\\u30A3\\u30AA\\u8981\\u7D20\\u3092\\u30B5\\u30DD\\u30FC\\u30C8\\u3057\\u3066\\u3044\\u307E\\u305B\\u3093\\u3002\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(SAside, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_atoms_LikeButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        size: '25',\n        isGood: isGood,\n        toggleLike: toggleLike\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(HeartCount, {\n        isGood: isGood,\n        children: post.likes.length\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(PostView, \"8pckQ0YhK5nJApXgd4TpOaCmpRM=\", false, function () {\n  return [_hooks_useToggleFollow__WEBPACK_IMPORTED_MODULE_7__.useToggleFollow, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_3__.useGetAuthor, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _redux_store__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useLike__WEBPACK_IMPORTED_MODULE_4__.useLike];\n});\n\n_c = PostView;\nconst SPostContent = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SPostContent\",\n  componentId: \"sc-mp07b1-0\"\n})([\"position:absolute;top:55px;left:38px;width:87%;height:70%;\"]);\n_c2 = SPostContent;\nconst SPostHeader = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].header.withConfig({\n  displayName: \"PostView__SPostHeader\",\n  componentId: \"sc-mp07b1-1\"\n})([\"display:flex;align-items:center;position:relative;justify-content:space-between;height:72px;\"]);\n_c3 = SPostHeader;\nconst SDescContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SDescContainer\",\n  componentId: \"sc-mp07b1-2\"\n})([\"height:90%;display:flex;flex-direction:column;justify-content:center;text-align:left;\"]);\n_c4 = SDescContainer;\nconst SPostArticle = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].p.withConfig({\n  displayName: \"PostView__SPostArticle\",\n  componentId: \"sc-mp07b1-3\"\n})([\"font-size:26px;width:fit-content;color:#000;font-weight:normal;line-height:1.9;letter-spacing:0.1em;\"]);\n_c5 = SPostArticle;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__Box\",\n  componentId: \"sc-mp07b1-4\"\n})([\"margin-left:20px;flex:1;\"]);\n_c6 = Box;\nconst SUserIconImg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].img.withConfig({\n  displayName: \"PostView__SUserIconImg\",\n  componentId: \"sc-mp07b1-5\"\n})([\"object-fit:cover;border-radius:100%;max-width:none;width:52px;height:52px;background-color:#fff;cursor:pointer;\"]);\n_c7 = SUserIconImg;\nconst SUserName = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].h1.withConfig({\n  displayName: \"PostView__SUserName\",\n  componentId: \"sc-mp07b1-6\"\n})([\"color:#000;font-size:16px;font-weight:bold;\"]);\n_c8 = SUserName;\nconst SAside = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SAside\",\n  componentId: \"sc-mp07b1-7\"\n})([\"position:absolute;display:flex;flex-direction:column;top:75%;align-items:center;right:10px;padding:20px;text-align:center;\"]);\n_c9 = SAside;\nconst HeartCount = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].span.withConfig({\n  displayName: \"PostView__HeartCount\",\n  componentId: \"sc-mp07b1-8\"\n})([\"margin-bottom:18px;color:\", \";\"], _ref2 => {\n  let {\n    isGood\n  } = _ref2;\n  return isGood ? 'var(--accent-color)' : '#908f8f';\n});\n_c10 = HeartCount;\nconst PostBorder = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__PostBorder\",\n  componentId: \"sc-mp07b1-9\"\n})([\"position:relative;width:100%;height:100%;scroll-snap-align:start;scroll-snap-stop:always;\"]);\n_c11 = PostBorder;\nconst SBg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"PostView__SBg\",\n  componentId: \"sc-mp07b1-10\"\n})([\"position:relative;width:100%;height:100vh;object-fit:cover;background-color:#ffffff;\"]);\n_c12 = SBg;\nconst SImg = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].img.withConfig({\n  displayName: \"PostView__SImg\",\n  componentId: \"sc-mp07b1-11\"\n})([\"height:100vh;object-fit:cover;\"]);\n_c13 = SImg;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;\n\n$RefreshReg$(_c, \"PostView\");\n$RefreshReg$(_c2, \"SPostContent\");\n$RefreshReg$(_c3, \"SPostHeader\");\n$RefreshReg$(_c4, \"SDescContainer\");\n$RefreshReg$(_c5, \"SPostArticle\");\n$RefreshReg$(_c6, \"Box\");\n$RefreshReg$(_c7, \"SUserIconImg\");\n$RefreshReg$(_c8, \"SUserName\");\n$RefreshReg$(_c9, \"SAside\");\n$RefreshReg$(_c10, \"HeartCount\");\n$RefreshReg$(_c11, \"PostBorder\");\n$RefreshReg$(_c12, \"SBg\");\n$RefreshReg$(_c13, \"SImg\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUG9zdFZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRU8sTUFBTVksUUFBNEIsR0FBSUMsS0FBRCxJQUFXO0VBQUE7O0VBQ3JELE1BQU07SUFBRUM7RUFBRixJQUFnQkQsS0FBdEI7RUFFQSxNQUFNO0lBQUVFLFlBQUY7SUFBZ0JDO0VBQWhCLElBQStCUCx1RUFBZSxFQUFwRDtFQUNBLE1BQU07SUFBRVEsaUJBQUY7SUFBcUJDLElBQXJCO0lBQTJCQztFQUEzQixJQUErQ2QsaUVBQVksRUFBakU7RUFDQSxNQUFNZSxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCO0VBRUEsTUFBTWMsT0FBTyxHQUFHbkIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7RUFDQSxNQUFNb0IsUUFBUSxHQUFHcEIsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7RUFDQSxNQUFNO0lBQUVnQixJQUFJLEVBQUVLLFNBQVI7SUFBbUJDO0VBQW5CLElBQStCcEIseURBQVcsQ0FBRXFCLEtBQUQsSUFBV0EsS0FBSyxDQUFDUCxJQUFsQixDQUFoRDtFQUVBLE1BQU07SUFBRVEsVUFBRjtJQUFjQztFQUFkLElBQXlCckIsdURBQU8sQ0FBQ1EsSUFBRCxFQUFPUyxTQUFQLENBQXRDO0VBRUF0QixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUNzQixTQUFELElBQWMsQ0FBQ0MsT0FBbkIsRUFBNEI7TUFDMUJKLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFFBQVo7SUFDRDtFQUNGLENBSlEsRUFJTixDQUFDSixPQUFELEVBQVVELFNBQVYsRUFBcUJILE1BQXJCLENBSk0sQ0FBVDtFQU1BbkIsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RnQixpQkFBaUIsQ0FBQ0gsSUFBRCxDQUFqQjtFQUNELENBRlEsRUFFTixDQUFD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QTtBQUFBLDRHQUFsQjtNQUFNcUQ7QUFVTixNQUFNRSxHQUFHLEdBQUd2RCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxnQ0FBVDtNQUFNdUQ7QUFLTixNQUFNQyxZQUFZLEdBQUd4RCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx1SEFBbEI7TUFBTXdEO0FBU04sTUFBTUMsU0FBUyxHQUFHekQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsbURBQWY7TUFBTXlEO0FBTU4sTUFBTUUsTUFBTSxHQUFHM0QseUVBQUg7RUFBQTtFQUFBO0FBQUEsa0lBQVo7TUFBTTJEO0FBV04sTUFBTUMsVUFBVSxHQUFHNUQsMEVBQUg7RUFBQTtFQUFBO0FBQUEsdUNBRUw7RUFBQSxJQUFDO0lBQUV3QjtFQUFGLENBQUQ7RUFBQSxPQUFpQkEsTUFBTSxHQUFHLHFCQUFILEdBQTJCLFNBQWxEO0FBQUEsQ0FGSyxDQUFoQjtPQUFNb0M7QUFLTixNQUFNRSxVQUFVLEdBQUc5RCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxpR0FBaEI7T0FBTThEO0FBU04sTUFBTUMsR0FBRyxHQUFHL0QseUVBQUg7RUFBQTtFQUFBO0FBQUEsNEZBQVQ7T0FBTStEO0FBT04sTUFBTUMsSUFBSSxHQUFHaEUseUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQVY7T0FBTWdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Qb3N0Vmlldy50c3g/MDQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuXG5pbXBvcnQgeyB1c2VHZXRBdXRob3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZXRBdXRob3InO1xuaW1wb3J0IHsgdXNlTGlrZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUxpa2UnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnO1xuaW1wb3J0IHsgdXNlVG9nZ2xlRm9sbG93IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVG9nZ2xlRm9sbG93JztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuLi9hdG9tcy9MaWtlQnV0dG9uJztcbmltcG9ydCB7IEZvbGxvd1RvZ2dsZUJ1dHRvbiB9IGZyb20gJy4uL21vbGVjdWxlcy9Gb2xsb3dUb2dnbGVCdXR0b24nO1xuXG5leHBvcnQgY29uc3QgUG9zdFZpZXc6IEZDPHsgcG9zdDogUG9zdCB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QgfTogYW55ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB1bkZvbGxvd1VzZXIsIGZvbGxvd1VzZXIgfSA9IHVzZVRvZ2dsZUZvbGxvdygpO1xuICBjb25zdCB7IGdldEF1dGhvckJ5UG9zdElkLCB1c2VyLCBpc0xvYWRpbmdBdXRob3IgfSA9IHVzZUdldEF1dGhvcigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwb3N0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgdXNlcjogbG9naW5Vc2VyLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IHsgdG9nZ2xlTGlrZSwgaXNHb29kIH0gPSB1c2VMaWtlKHBvc3QsIGxvZ2luVXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvZ2luVXNlciAmJiAhbG9hZGluZykge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgfSwgW2xvYWRpbmcsIGxvZ2luVXNlciwgcm91dGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBdXRob3JCeVBvc3RJZChwb3N0KTtcbiAgfSwgW3Bvc3RdKTtcbiAgaWYgKCFsb2dpblVzZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RFbGVtZW50ID0gcG9zdFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGF1ZGlvUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAocG9zdEVsZW1lbnQgJiYgYXVkaW9FbGVtZW50KSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRocmVzaG9sZDogMC41LCAvLyA1MCXjga7opoHntKDjgYzopovjgYjjgZ/mmYLjgavjg4jjg6rjgqzjg7xcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIG9ic2VydmVyLm9ic2VydmUocG9zdEVsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocG9zdEVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHt9OyAvLyBBZGQgdGhpcyBsaW5lXG4gIH0sIFtwb3N0UmVmLCBhdWRpb1JlZl0pO1xuICByZXR1cm4gKFxuICAgIDxQb3N0Qm9yZGVyIHJlZj17cG9zdFJlZn0gaWQ9e2Bwb3N0LSR7cG9zdC5pZH1gfSBjbGFzc05hbWU9XCJwb3N0LXNsaWRlXCI+XG4gICAgICB7cG9zdC5pbWcgJiYgPFNJbWcgc3JjPXtwb3N0LmltZ30gYWx0PVwiXCIgLz59XG5cbiAgICAgIDxTQmcgLz5cbiAgICAgIDxTUG9zdENvbnRlbnQ+XG4gICAgICAgIDxTUG9zdEhlYWRlcj5cbiAgICAgICAgICA8TGluayBocmVmPXtgcHJvZmlsZS8ke3VzZXI/LnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmdBdXRob3IgPyAoXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uXG4gICAgICAgICAgICAgICAgICBjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUycHhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MnB4XCJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImF2YXRhci1za2VsZXRvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U1VzZXJJY29uSW1nIHNyYz17dXNlcj8ucHJvZmlsZUltZ30gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtpc0xvYWRpbmdBdXRob3IgPyAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD17MTAwfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNVc2VyTmFtZT57dXNlcj8udXNlcm5hbWV9PC9TVXNlck5hbWU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEZvbGxvd1RvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgbG9naW5Vc2VyPXtsb2dpblVzZXJ9XG4gICAgICAgICAgICBvdGhlclVzZXJJZD17cG9zdC51c2VySWR9XG4gICAgICAgICAgICBvbkNsaWNrRm9sbG93PXsoKSA9PiBmb2xsb3dVc2VyKHBvc3QudXNlcklkLCBsb2dpblVzZXI/Ll9pZCl9XG4gICAgICAgICAgICBvbkNsaWNrVW5Gb2xsb3c9eygpID0+IHVuRm9sbG93VXNlcihwb3N0LnVzZXJJZCwgbG9naW5Vc2VyPy5faWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU1Bvc3RIZWFkZXI+XG4gICAgICAgIDxTRGVzY0NvbnRhaW5lcj5cbiAgICAgICAgICA8U1Bvc3RBcnRpY2xlIHBvc3Q9e3Bvc3QuaW1nfT57cG9zdC5kZXNjfTwvU1Bvc3RBcnRpY2xlPlxuICAgICAgICA8L1NEZXNjQ29udGFpbmVyPlxuICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gY29udHJvbHM+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9e3Bvc3QuYXVkaW9Vcmx9IHR5cGU9XCJhdWRpby93ZWJtXCIgLz5cbiAgICAgICAgICDjgYrkvb/jgYTjga7jg5bjg6njgqbjgrbjga/jgqrjg7zjg4fjgqPjgqropoHntKDjgpLjgrXjg53jg7zjg4jjgZfjgabjgYTjgb7jgZvjgpPjgIJcbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIDwvU1Bvc3RDb250ZW50PlxuICAgICAgPFNBc2lkZT5cbiAgICAgICAgPExpa2VCdXR0b24gc2l6ZT17JzI1J30gaXNHb29kPXtpc0dvb2R9IHRvZ2dsZUxpa2U9e3RvZ2dsZUxpa2V9IC8+XG4gICAgICAgIDxIZWFydENvdW50IGlzR29vZD17aXNHb29kfT57cG9zdC5saWtlcy5sZW5ndGh9PC9IZWFydENvdW50PlxuICAgICAgPC9TQXNpZGU+XG4gICAgPC9Qb3N0Qm9yZGVyPlxuICApO1xufTtcblxuY29uc3QgU1Bvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IDM4cHg7XG4gIHdpZHRoOiA4NyU7XG4gIGhlaWdodDogNzAlO1xuYDtcbmNvbnN0IFNQb3N0SGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8vIOW3puerr+OBqOWPs+err+OBq+imgee0oOOCkumFjee9rlxuICBoZWlnaHQ6IDcycHg7XG5gO1xuXG5jb25zdCBTRGVzY0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbmA7XG5jb25zdCBTUG9zdEFydGljbGUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiAjMDAwO1xuXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjk7IC8qIDEuM+WAjeOBjOWfuua6luOBp+OBmeOBjOOAgTUwJeOBruWApOOBq+WfuuOBpeOBhOOBpumBqeWIh+OBq+ioreWumuOBl+OBvuOBmSAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG5gO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IFNVc2VySWNvbkltZyA9IHN0eWxlZC5pbWdgXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5jb25zdCBTVXNlck5hbWUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgU0FzaWRlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0b3A6IDc1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhlYXJ0Q291bnQgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICR7KHsgaXNHb29kIH0pID0+IChpc0dvb2QgPyAndmFyKC0tYWNjZW50LWNvbG9yKScgOiAnIzkwOGY4ZicpfTtcbmA7XG5cbmNvbnN0IFBvc3RCb3JkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbmA7XG5jb25zdCBTQmcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbmA7XG5jb25zdCBTSW1nID0gc3R5bGVkLmltZ2BcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlZCIsInVzZVNlbGVjdG9yIiwidXNlR2V0QXV0aG9yIiwidXNlTGlrZSIsInVzZVJvdXRlciIsIlNrZWxldG9uIiwidXNlVG9nZ2xlRm9sbG93IiwiTGlrZUJ1dHRvbiIsIkZvbGxvd1RvZ2dsZUJ1dHRvbiIsIlBvc3RWaWV3IiwicHJvcHMiLCJwb3N0IiwidW5Gb2xsb3dVc2VyIiwiZm9sbG93VXNlciIsImdldEF1dGhvckJ5UG9zdElkIiwidXNlciIsImlzTG9hZGluZ0F1dGhvciIsInJvdXRlciIsInBvc3RSZWYiLCJhdWRpb1JlZiIsImxvZ2luVXNlciIsImxvYWRpbmciLCJzdGF0ZSIsInRvZ2dsZUxpa2UiLCJpc0dvb2QiLCJwdXNoIiwicG9zdEVsZW1lbnQiLCJjdXJyZW50IiwiYXVkaW9FbGVtZW50Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJwbGF5IiwicGF1c2UiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiaWQiLCJpbWciLCJ1c2VybmFtZSIsInByb2ZpbGVJbWciLCJ1c2VySWQiLCJfaWQiLCJkZXNjIiwiYXVkaW9VcmwiLCJsaWtlcyIsImxlbmd0aCIsIlNQb3N0Q29udGVudCIsImRpdiIsIlNQb3N0SGVhZGVyIiwiaGVhZGVyIiwiU0Rlc2NDb250YWluZXIiLCJTUG9zdEFydGljbGUiLCJwIiwiQm94IiwiU1VzZXJJY29uSW1nIiwiU1VzZXJOYW1lIiwiaDEiLCJTQXNpZGUiLCJIZWFydENvdW50Iiwic3BhbiIsIlBvc3RCb3JkZXIiLCJTQmciLCJTSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/PostView.tsx\n"));

/***/ })

});