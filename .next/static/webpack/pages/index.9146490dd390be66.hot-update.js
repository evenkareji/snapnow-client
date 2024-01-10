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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-tabs */ \"./node_modules/react-tabs/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ \"./node_modules/react-tabs/style/react-tabs.css\");\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms/PostView */ \"./src/components/organisms/PostView.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/templates/Layout */ \"./src/components/templates/Layout/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _hooks_useFollowingsPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useFollowingsPosts */ \"./src/hooks/useFollowingsPosts.tsx\");\n/* harmony import */ var _components_organisms_HamburgerMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/organisms/HamburgerMenu */ \"./src/components/organisms/HamburgerMenu.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // 必要に応じてスタイルを上書き\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Home = _ref => {\n  _s();\n\n  let {\n    posts: initialPosts\n  } = _ref;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n  const {\n    user,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);\n  const {\n    0: posts,\n    1: setPosts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialPosts); // 投稿の状態を管理\n\n  const {\n    getFollowingsPosts\n  } = (0,_hooks_useFollowingsPosts__WEBPACK_IMPORTED_MODULE_9__.useFollowingsPosts)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchInitialUser)());\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (!user && !loading) {\n      router.push('/login');\n    }\n  }, [user]);\n\n  const fetchPosts = async () => {\n    try {\n      const response = await getFollowingsPosts(user?._id);\n      setPosts(response);\n    } catch (error) {\n      console.error('APIの取得に失敗しました。', error);\n    }\n  };\n\n  const handleTabSelect = index => () => {\n    // タブの選択に応じて異なるアクションを実行\n    if (index === 0) {\n      fetchPosts();\n    } else if (index === 1) {\n      setPosts(initialPosts);\n    } // 他のタブがあればここに追加\n\n  };\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"loader-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_12__.ClipLoader, {\n        color: \"#ed6103\",\n        loading: true,\n        size: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_0__.Tabs, {\n    defaultIndex: 1,\n    onSelect: () => handleTabSelect(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledTabList, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_organisms_HamburgerMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        username: user?.username,\n        handleTabSelect: handleTabSelect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledTab, {\n        children: \"\\u30D5\\u30A9\\u30ED\\u30FC\\u4E2D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledTab, {\n        children: \"\\u4ECA\\u4F55\\u3057\\u3066\\u308B\\uFF1F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SSearchPostIcon, {\n        onClick: () => router.push('/search-post')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledTabPanel, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostMain, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PostBg, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PostSlide, {\n            children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__.PostView, {\n              post: post\n            }, post['_id'], false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledTabPanel, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPostMain, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PostBg, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(PostSlide, {\n            children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__.PostView, {\n              post: post\n            }, post['_id'], false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 17\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Home, \"tyf5/yFEwO+T3aeKwbOPfKpYSoM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _redux_store__WEBPACK_IMPORTED_MODULE_6__.useSelector, _hooks_useFollowingsPosts__WEBPACK_IMPORTED_MODULE_9__.useFollowingsPosts, react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];\n});\n\n_c = Home;\nconst SSearchPostIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_14__[\"default\"]).withConfig({\n  displayName: \"pages__SSearchPostIcon\",\n  componentId: \"sc-14p60n7-0\"\n})([\"cursor:pointer;\"]);\n_c2 = SSearchPostIcon;\nconst StyledTabList = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.TabList).withConfig({\n  displayName: \"pages__StyledTabList\",\n  componentId: \"sc-14p60n7-1\"\n})([\"display:flex;justify-content:space-between;padding:0;list-style-type:none;position:fixed;top:0;left:0;right:0;width:92%;margin:0 auto;z-index:1000;background-color:rgba(255,255,255,0.6);height:46px;align-items:center;\"]); // カスタムスタイルの Tab\n\n_c3 = StyledTabList;\nconst StyledTab = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.Tab).withConfig({\n  displayName: \"pages__StyledTab\",\n  componentId: \"sc-14p60n7-2\"\n})([\"font-weight:bold;font-size:16px;padding:8px 12px;user-select:none;cursor:pointer;border:none;background-color:transparent;color:white;margin-right:4px;outline:none;&.react-tabs__tab--selected{border-bottom:3px solid #ff8d06;color:#ff8d06;}&:not(.react-tabs__tab--selected){border-bottom:none;color:#c9c9c9;&:hover{color:#ff8d06;opacity:0.5;}}\"]); // TabPanel にもスタイルを適用する場合\n\n_c4 = StyledTab;\nconst StyledTabPanel = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.TabPanel).withConfig({\n  displayName: \"pages__StyledTabPanel\",\n  componentId: \"sc-14p60n7-3\"\n})([\"display:none;&.react-tabs__tab-panel--selected{display:block;}\"]);\n_c5 = StyledTabPanel;\nconst SPostMain = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"pages__SPostMain\",\n  componentId: \"sc-14p60n7-4\"\n})([\"position:relative;width:100vw;@media (min-width:468px){margin-left:20vw;width:80vw;}@media (min-width:768px){margin-left:20vw;}@media (min-width:1264px){}\"]);\n_c6 = SPostMain;\nconst PostBg = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"pages__PostBg\",\n  componentId: \"sc-14p60n7-5\"\n})([\"color:white;background-color:#000;height:100vh;display:grid;place-items:center;\"]);\n_c7 = PostBg;\nconst PostSlide = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"pages__PostSlide\",\n  componentId: \"sc-14p60n7-6\"\n})([\"width:100%;height:100%;max-width:100%;border-radius:0;&::-webkit-scrollbar{display:none;}@media (min-width:466px){&{max-width:400px;width:100%;height:100vh;border-radius:0px;}}display:flex;flex:1;align-items:center;flex-direction:column;overflow:scroll;overflow-y:auto;scroll-snap-type:y mandatory;\"]);\n_c8 = PostSlide;\n\nHome.getLayout = function getLayout(page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 217,\n    columnNumber: 10\n  }, this);\n};\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"SSearchPostIcon\");\n$RefreshReg$(_c3, \"StyledTabList\");\n$RefreshReg$(_c4, \"StyledTab\");\n$RefreshReg$(_c5, \"StyledTabPanel\");\n$RefreshReg$(_c6, \"SPostMain\");\n$RefreshReg$(_c7, \"PostBg\");\n$RefreshReg$(_c8, \"PostSlide\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVQ7RUFBQTtFQUFBO0FBQUEsOFZBQWYsRUE0QkE7O01BNUJNd0M7QUE2Qk4sTUFBTUMsY0FBYyxHQUFHckMsOERBQU0sQ0FBQ0QsZ0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxzRUFBcEI7TUFBTXNDO0FBT04sTUFBTUMsU0FBUyxHQUFHdEMseUVBQUg7RUFBQTtFQUFBO0FBQUEsa0tBQWY7TUFBTXNDO0FBY04sTUFBTUUsTUFBTSxHQUFHeEMseUVBQUg7RUFBQTtFQUFBO0FBQUEsdUZBQVo7TUFBTXdDO0FBUU4sTUFBTUMsU0FBUyxHQUFHekMseUVBQUg7RUFBQTtFQUFBO0FBQUEsa1RBQWY7TUFBTXlDOztBQTBCTjVCLElBQUksQ0FBQzZCLFNBQUwsR0FBaUIsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBdUM7RUFDdEQsb0JBQU8sK0RBQUMsb0VBQUQ7SUFBQSxVQUFTQTtFQUFUO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFBUDtBQUNELENBRkQ7OztBQUdBLCtEQUFlOUIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgJ3JlYWN0LXRhYnMvc3R5bGUvcmVhY3QtdGFicy5jc3MnOyAvLyDlv4XopoHjgavlv5zjgZjjgabjgrnjgr/jgqTjg6vjgpLkuIrmm7jjgY1cbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuLi9hcGkvZ2V0UG9zdHMnO1xuaW1wb3J0IHsgUG9zdFZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Qb3N0Vmlldyc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcERpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IGZldGNoSW5pdGlhbFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcblxuaW1wb3J0IHsgdXNlRm9sbG93aW5nc1Bvc3RzIH0gZnJvbSAnLi4vaG9va3MvdXNlRm9sbG93aW5nc1Bvc3RzJztcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0hhbWJ1cmdlck1lbnUnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICBwb3N0czogUG9zdFtdO1xufT4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcblxuICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH07XG59O1xuXG5jb25zdCBIb21lID0gKHtcbiAgcG9zdHM6IGluaXRpYWxQb3N0cyxcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKGluaXRpYWxQb3N0cyk7IC8vIOaKleeov+OBrueKtuaFi+OCkueuoeeQhlxuICBjb25zdCB7IGdldEZvbGxvd2luZ3NQb3N0cyB9ID0gdXNlRm9sbG93aW5nc1Bvc3RzKCk7XG5cbiAgY29uc3QgZGlzcGF0Y2g6IEFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoSW5pdGlhbFVzZXIoKSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIWxvYWRpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGb2xsb3dpbmdzUG9zdHModXNlcj8uX2lkKTtcblxuICAgICAgc2V0UG9zdHMocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBUEnjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIInLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhYlNlbGVjdCA9IChpbmRleCkgPT4gKCkgPT4ge1xuICAgIC8vIOOCv+ODluOBrumBuOaKnuOBq+W/nOOBmOOBpueVsOOBquOCi+OCouOCr+OCt+ODp+ODs+OCkuWun+ihjFxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgZmV0Y2hQb3N0cygpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIHNldFBvc3RzKGluaXRpYWxQb3N0cyk7XG4gICAgfVxuICAgIC8vIOS7luOBruOCv+ODluOBjOOBguOCjOOBsOOBk+OBk+OBq+i/veWKoFxuICB9O1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPENsaXBMb2FkZXIgY29sb3I9XCIjZWQ2MTAzXCIgbG9hZGluZz17dHJ1ZX0gc2l6ZT17NTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFRhYnMgZGVmYXVsdEluZGV4PXsxfSBvblNlbGVjdD17KCkgPT4gaGFuZGxlVGFiU2VsZWN0KCl9PlxuICAgICAgPFN0eWxlZFRhYkxpc3Q+XG4gICAgICAgIDxIYW1idXJnZXJNZW51XG4gICAgICAgICAgdXNlcm5hbWU9e3VzZXI/LnVzZXJuYW1lfVxuICAgICAgICAgIGhhbmRsZVRhYlNlbGVjdD17aGFuZGxlVGFiU2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgICA8U3R5bGVkVGFiPuODleOCqeODreODvOS4rTwvU3R5bGVkVGFiPlxuICAgICAgICA8U3R5bGVkVGFiPuS7iuS9leOBl+OBpuOCi++8nzwvU3R5bGVkVGFiPlxuICAgICAgICA8U1NlYXJjaFBvc3RJY29uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2VhcmNoLXBvc3QnKX0gLz5cbiAgICAgIDwvU3R5bGVkVGFiTGlzdD5cblxuICAgICAgPFN0eWxlZFRhYlBhbmVsPlxuICAgICAgICA8U1Bvc3RNYWluPlxuICAgICAgICAgIDxQb3N0Qmc+XG4gICAgICAgICAgICA8UG9zdFNsaWRlPlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvc3RWaWV3IHBvc3Q9e3Bvc3R9IGtleT17cG9zdFsnX2lkJ119IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Qb3N0U2xpZGU+XG4gICAgICAgICAgPC9Qb3N0Qmc+XG4gICAgICAgIDwvU1Bvc3RNYWluPlxuICAgICAgPC9TdHlsZWRUYWJQYW5lbD5cbiAgICAgIDxTdHlsZWRUYWJQYW5lbD5cbiAgICAgICAgPFNQb3N0TWFpbj5cbiAgICAgICAgICA8UG9zdEJnPlxuICAgICAgICAgICAgPFBvc3RTbGlkZT5cbiAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3N0VmlldyBwb3N0PXtwb3N0fSBrZXk9e3Bvc3RbJ19pZCddfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUG9zdFNsaWRlPlxuICAgICAgICAgIDwvUG9zdEJnPlxuICAgICAgICA8L1NQb3N0TWFpbj5cbiAgICAgIDwvU3R5bGVkVGFiUGFuZWw+XG4gICAgPC9UYWJzPlxuICApO1xufTtcblxuY29uc3QgU1NlYXJjaFBvc3RJY29uID0gc3R5bGVkKFNlYXJjaEljb24pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuY29uc3QgU3R5bGVkVGFiTGlzdCA9IHN0eWxlZChUYWJMaXN0KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLy8g5L2N572u44KS5Zu65a6aXG4gIHRvcDogMDsgLy8g5LiK6YOo44Gr6YWN572uXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG4vLyDjgqvjgrnjgr/jg6Djgrnjgr/jgqTjg6vjga4gVGFiXG5jb25zdCBTdHlsZWRUYWIgPSBzdHlsZWQoVGFiKWBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTsgLy8g44OG44Kt44K544OI44Kr44Op44O844KS55m944GrXG4gIG1hcmdpbi1yaWdodDogNHB4OyAvLyDjgr/jg5bplpPjga7jg57jg7zjgrjjg7PjgpLoqK3lrppcbiAgb3V0bGluZTogbm9uZTsgLy9cbiAgLy8g44Ki44Kv44OG44Kj44OW44Gq44K/44OW44Gu44K544K/44Kk44OrXG4gICYucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjhkMDY7IC8vIOS4i+e3muOCkueZveOBq+OBl+OBpueUu+WDj+OBq+WQiOOCj+OBm+OCi1xuICAgIGNvbG9yOiAjZmY4ZDA2OyAvLyDjgqLjgq/jg4bjgqPjg5bjgarjgr/jg5bjga7jg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLnmb3jgatcbiAgfVxuXG4gIC8vIOOCouOCr+ODhuOCo+ODluOBp+OBquOBhOOCv+ODluOBruOCueOCv+OCpOODq1xuICAmOm5vdCgucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCkge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8vIOmdnuOCouOCr+ODhuOCo+ODluOBquOCv+ODluOBruS4i+e3muOCkuWJiumZpFxuICAgIGNvbG9yOiAjYzljOWM5OyAvLyDpnZ7jgqLjgq/jg4bjgqPjg5bjgarjgr/jg5bjga7jg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLoloTjgYToibLjgatcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmY4ZDA2OyAvLyDjg5vjg5Djg7zmmYLjgavjg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLnmb3jgatcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIFRhYlBhbmVsIOOBq+OCguOCueOCv+OCpOODq+OCkumBqeeUqOOBmeOCi+WgtOWQiFxuY29uc3QgU3R5bGVkVGFiUGFuZWwgPSBzdHlsZWQoVGFiUGFuZWwpYFxuICBkaXNwbGF5OiBub25lO1xuICAmLnJlYWN0LXRhYnNfX3RhYi1wYW5lbC0tc2VsZWN0ZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBTUG9zdE1haW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLyogZmxleDogMC45OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjY0cHgpIHtcbiAgfVxuYDtcbmNvbnN0IFBvc3RCZyA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFBvc3RTbGlkZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ2NnB4KSB7XG4gICAgJiB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuYDtcblxuSG9tZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZTogUmVhY3RFbGVtZW50KSB7XG4gIHJldHVybiA8TGF5b3V0PntwYWdlfTwvTGF5b3V0Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlRhYiIsIlRhYnMiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJzdHlsZWQiLCJQb3N0VmlldyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoSW5pdGlhbFVzZXIiLCJDbGlwTG9hZGVyIiwidXNlUm91dGVyIiwiU2VhcmNoSWNvbiIsInVzZUZvbGxvd2luZ3NQb3N0cyIsIkhhbWJ1cmdlck1lbnUiLCJIb21lIiwicG9zdHMiLCJpbml0aWFsUG9zdHMiLCJyb3V0ZXIiLCJ1c2VyIiwibG9hZGluZyIsInN0YXRlIiwic2V0UG9zdHMiLCJnZXRGb2xsb3dpbmdzUG9zdHMiLCJkaXNwYXRjaCIsInB1c2giLCJmZXRjaFBvc3RzIiwicmVzcG9uc2UiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUYWJTZWxlY3QiLCJpbmRleCIsInVzZXJuYW1lIiwibWFwIiwicG9zdCIsIlNTZWFyY2hQb3N0SWNvbiIsIlN0eWxlZFRhYkxpc3QiLCJTdHlsZWRUYWIiLCJTdHlsZWRUYWJQYW5lbCIsIlNQb3N0TWFpbiIsImRpdiIsIlBvc3RCZyIsIlBvc3RTbGlkZSIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});