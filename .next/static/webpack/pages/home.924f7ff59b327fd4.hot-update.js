"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-tabs */ \"./node_modules/react-tabs/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ \"./node_modules/react-tabs/style/react-tabs.css\");\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms/PostView */ \"./src/components/organisms/PostView.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/templates/Layout */ \"./src/components/templates/Layout/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/home.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // 必要に応じてスタイルを上書き\n\n\n\n\n\n\n\n\n\n // カスタムスタイルの TabList\n\n\nconst StyledTabList = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.TabList).withConfig({\n  displayName: \"home__StyledTabList\",\n  componentId: \"sc-wvns5h-0\"\n})([\"display:flex;justify-content:center;margin:0;padding:0;list-style-type:none;\"]); // カスタムスタイルの Tab\n\n_c = StyledTabList;\nconst StyledTab = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.Tab).withConfig({\n  displayName: \"home__StyledTab\",\n  componentId: \"sc-wvns5h-1\"\n})([\"padding:8px 12px;user-select:none;cursor:pointer;border:none;background-color:transparent;color:white;margin-right:4px;outline:none;&.react-tabs__tab--selected{border-bottom:2px solid #ff8d06;color:#ff8d06;}&:not(.react-tabs__tab--selected){border-bottom:none;color:#c9c9c9;&:hover{color:#ff8d06;opacity:0.5;}}\"]); // TabPanel にもスタイルを適用する場合\n\n_c2 = StyledTab;\nconst StyledTabPanel = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(react_tabs__WEBPACK_IMPORTED_MODULE_0__.TabPanel).withConfig({\n  displayName: \"home__StyledTabPanel\",\n  componentId: \"sc-wvns5h-2\"\n})([\"display:none;&.react-tabs__tab-panel--selected{display:block;}\"]);\n_c3 = StyledTabPanel;\n\nconst Time = _ref => {\n  _s();\n\n  let {\n    posts: initialPosts\n  } = _ref;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n  const {\n    user,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);\n  const {\n    0: posts,\n    1: setPosts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialPosts); // 投稿の状態を管理\n\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_7__.fetchInitialUser)());\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (!user && !loading) {\n      router.push('/login');\n    }\n  }, [user]); // タブが選択されたときのハンドラ\n\n  const fetchPosts = async () => {\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(`/api/posts/timeline/all/${user?._id}`);\n      setPosts(response.data);\n    } catch (error) {\n      console.error('APIの取得に失敗しました。', error);\n    }\n  }; // タブが選択されたときのハンドラ\n\n\n  const handleTabSelect = index => {\n    if (index === 0) {\n      // \"フォロー中\" タブが選択されたとき\n      fetchPosts(); // 非同期関数を呼び出す\n    } // onSelectイベントは戻り値を必要としないため、ここでは何も返さない\n\n  };\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: \"loader-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_12__.ClipLoader, {\n        color: \"#ed6103\",\n        loading: true,\n        size: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_0__.Tabs, {\n    onSelect: handleTabSelect,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledTabList, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledTab, {\n        children: \"\\u30D5\\u30A9\\u30ED\\u30FC\\u4E2D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledTab, {\n        children: \"\\u4ECA\\u4F55\\u3057\\u3066\\u308B\\uFF1F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledTabPanel, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SPostMain, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(PostBg, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(PostSlide, {\n            children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__.PostView, {\n              post: post\n            }, post['_id'], false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 17\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledTabPanel, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SPostMain, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(PostBg, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(PostSlide, {\n            children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__.PostView, {\n              post: post\n            }, post['_id'], false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 17\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 113,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Time, \"9hqJzf7b18vh3AtKp03uwxrtETk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _redux_store__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];\n});\n\n_c4 = Time;\nconst SPostMain = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"home__SPostMain\",\n  componentId: \"sc-wvns5h-3\"\n})([\"position:relative;width:100vw;@media (min-width:468px){margin-left:20vw;width:80vw;}@media (min-width:768px){margin-left:20vw;}@media (min-width:1264px){}\"]);\n_c5 = SPostMain;\nconst PostBg = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"home__PostBg\",\n  componentId: \"sc-wvns5h-4\"\n})([\"color:white;background-color:#000;height:100vh;display:grid;place-items:center;\"]);\n_c6 = PostBg;\nconst PostSlide = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"home__PostSlide\",\n  componentId: \"sc-wvns5h-5\"\n})([\"width:100%;height:100%;max-width:100%;border-radius:0;&::-webkit-scrollbar{display:none;}@media (min-width:466px){&{max-width:400px;width:100%;height:100vh;border-radius:0px;}}display:flex;flex:1;align-items:center;flex-direction:column;overflow:scroll;overflow-y:auto;scroll-snap-type:y mandatory;\"]);\n_c7 = PostSlide;\n\nTime.getLayout = function getLayout(page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 194,\n    columnNumber: 10\n  }, this);\n};\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Time);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"StyledTabList\");\n$RefreshReg$(_c2, \"StyledTab\");\n$RefreshReg$(_c3, \"StyledTabPanel\");\n$RefreshReg$(_c4, \"Time\");\n$RefreshReg$(_c5, \"SPostMain\");\n$RefreshReg$(_c6, \"PostBg\");\n$RefreshReg$(_c7, \"PostSlide\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUMwQzs7QUFJMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzs7QUFDQSxNQUFNZSxhQUFhLEdBQUdYLDhEQUFNLENBQUNGLCtDQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsb0ZBQW5CLEVBUUE7O0tBUk1hO0FBU04sTUFBTUMsU0FBUyxHQUFHWiw4REFBTSxDQUFDSiwyQ0FBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDhUQUFmLEVBMEJBOztNQTFCTWdCO0FBMkJOLE1BQU1DLGNBQWMsR0FBR2IsOERBQU0sQ0FBQ0QsZ0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxzRUFBcEI7TUFBTWM7O0FBZU4sTUFBTUMsSUFBSSxHQUFHLFFBRWlEO0VBQUE7O0VBQUEsSUFGaEQ7SUFDWkMsS0FBSyxFQUFFQztFQURLLENBRWdEO0VBQzVELE1BQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBeEI7RUFDQSxNQUFNO0lBQUVTLElBQUY7SUFBUUM7RUFBUixJQUFvQmIseURBQVcsQ0FBRWMsS0FBRCxJQUFXQSxLQUFLLENBQUNGLElBQWxCLENBQXJDO0VBQ0EsTUFBTTtJQUFBLEdBQUNILEtBQUQ7SUFBQSxHQUFRTTtFQUFSLElBQW9CbEIsK0NBQVEsQ0FBQ2EsWUFBRCxDQUFsQyxDQUg0RCxDQUdWOztFQUVsRCxNQUFNTSxRQUFxQixHQUFHakIsd0RBQVcsRUFBekM7RUFFQUgsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RvQixRQUFRLENBQUNmLHFFQUFnQixFQUFqQixDQUFSO0VBQ0QsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtFQUdBTCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUNnQixJQUFELElBQVMsQ0FBQ0MsT0FBZCxFQUF1QjtNQUNyQkYsTUFBTSxDQUFDTSxJQUFQLENBQVksUUFBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNMLElBQUQsQ0FKTSxDQUFULENBVjRELENBZ0I1RDs7RUFDQSxNQUFNTSxVQUFVLEdBQUcsWUFBWTtJQUM3QixJQUFJO01BQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1mLGtEQUFBLENBQVcsMkJBQTBCUSxJQUFJLEVBQUVTLEdBQUksRUFBL0MsQ0FBdkI7TUFDQU4sUUFBUSxDQUFDSSxRQUFRLENBQUNHLElBQVYsQ0FBUjtJQUNELENBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7TUFDZEMsT0FBTyxDQUFDRCxLQUFSLENBQWMsZ0JBQWQsRUFBZ0NBLEtBQWhDO0lBQ0Q7RUFDRixDQVBELENBakI0RCxDQTBCNUQ7OztFQUNBLE1BQU1FLGVBQWUsR0FBSUMsS0FBRCxJQUFtQjtJQUN6QyxJQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtNQUNmO01BQ0FSLFVBQVUsR0FGSyxDQUVEO0lBQ2YsQ0FKd0MsQ0FLekM7O0VBQ0QsQ0FORDs7RUFPQSxJQUFJTCxPQUFKLEVBQWE7SUFDWCxvQkFDRTtNQUFLLFNBQVMsRUFBQyxrQkFBZjtNQUFBLHVCQUNFLDhEQUFDLHVEQUFEO1FBQVksS0FBSyxFQUFDLFNBQWxCO1FBQTRCLE9BQU8sRUFBRSxJQUFyQztRQUEyQyxJQUFJLEVBQUU7TUFBakQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERjtFQUtEOztFQUNELG9CQUNFLDhEQUFDLDRDQUFEO0lBQU0sUUFBUSxFQUFFWSxlQUFoQjtJQUFBLHdCQUNFLDhEQUFDLGFBQUQ7TUFBQSx3QkFDRSw4REFBQyxTQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsZUFFRSw4REFBQyxTQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsZUFNRSw4REFBQyxjQUFEO01BQUEsdUJBQ0UsOERBQUMsU0FBRDtRQUFBLHVCQUNFLDhEQUFDLE1BQUQ7VUFBQSx1QkFDRSw4REFBQyxTQUFEO1lBQUEsVUFDR2hCLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxvRUFBRDtjQUFVLElBQUksRUFBRUE7WUFBaEIsR0FBMkJBLElBQUksQ0FBQyxLQUFELENBQS9CO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFERDtVQURIO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFORixlQWlCRSw4REFBQyxjQUFEO01BQUEsdUJBQ0UsOERBQUMsU0FBRDtRQUFBLHVCQUNFLDhEQUFDLE1BQUQ7VUFBQSx1QkFDRSw4REFBQyxTQUFEO1lBQUEsVUFDR25CLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxvRUFBRDtjQUFVLElBQUksRUFBRUE7WUFBaEIsR0FBMkJBLElBQUksQ0FBQyxLQUFELENBQS9CO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFERDtVQURIO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFqQkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUErQkQsQ0ExRUQ7O0dBQU1wQjtVQUdXTCxvREFDV0gsdURBR0lEOzs7TUFQMUJTO0FBNEVOLE1BQU1xQixTQUFTLEdBQUduQyx5RUFBSDtFQUFBO0VBQUE7QUFBQSxrS0FBZjtNQUFNbUM7QUFjTixNQUFNRSxNQUFNLEdBQUdyQyx5RUFBSDtFQUFBO0VBQUE7QUFBQSx1RkFBWjtNQUFNcUM7QUFRTixNQUFNQyxTQUFTLEdBQUd0Qyx5RUFBSDtFQUFBO0VBQUE7QUFBQSxrVEFBZjtNQUFNc0M7O0FBMEJOeEIsSUFBSSxDQUFDeUIsU0FBTCxHQUFpQixTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF1QztFQUN0RCxvQkFBTyw4REFBQyxvRUFBRDtJQUFBLFVBQVNBO0VBQVQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUFQO0FBQ0QsQ0FGRDs7O0FBR0EsK0RBQWUxQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLnRzeD85MmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICdyZWFjdC10YWJzL3N0eWxlL3JlYWN0LXRhYnMuY3NzJzsgLy8g5b+F6KaB44Gr5b+c44GY44Gm44K544K/44Kk44Or44KS5LiK5pu444GNXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi4vYXBpL2dldFBvc3RzJztcbmltcG9ydCB7IFBvc3RWaWV3IH0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvUG9zdFZpZXcnO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBmZXRjaEluaXRpYWxVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXNlclNsaWNlJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyDjgqvjgrnjgr/jg6Djgrnjgr/jgqTjg6vjga4gVGFiTGlzdFxuY29uc3QgU3R5bGVkVGFiTGlzdCA9IHN0eWxlZChUYWJMaXN0KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIOOCouOCpOODhuODoOOCkuS4reWkruOBq+mFjee9rlxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgLy8g44Oq44K544OI44Ki44Kk44OG44Og44Gu54K544KS5YmK6ZmkXG5gO1xuXG4vLyDjgqvjgrnjgr/jg6Djgrnjgr/jgqTjg6vjga4gVGFiXG5jb25zdCBTdHlsZWRUYWIgPSBzdHlsZWQoVGFiKWBcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTsgLy8g44OG44Kt44K544OI44Kr44Op44O844KS55m944GrXG4gIG1hcmdpbi1yaWdodDogNHB4OyAvLyDjgr/jg5bplpPjga7jg57jg7zjgrjjg7PjgpLoqK3lrppcbiAgb3V0bGluZTogbm9uZTsgLy9cbiAgLy8g44Ki44Kv44OG44Kj44OW44Gq44K/44OW44Gu44K544K/44Kk44OrXG4gICYucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjhkMDY7IC8vIOS4i+e3muOCkueZveOBq+OBl+OBpueUu+WDj+OBq+WQiOOCj+OBm+OCi1xuICAgIGNvbG9yOiAjZmY4ZDA2OyAvLyDjgqLjgq/jg4bjgqPjg5bjgarjgr/jg5bjga7jg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLnmb3jgatcbiAgfVxuXG4gIC8vIOOCouOCr+ODhuOCo+ODluOBp+OBquOBhOOCv+ODluOBruOCueOCv+OCpOODq1xuICAmOm5vdCgucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCkge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8vIOmdnuOCouOCr+ODhuOCo+ODluOBquOCv+ODluOBruS4i+e3muOCkuWJiumZpFxuICAgIGNvbG9yOiAjYzljOWM5OyAvLyDpnZ7jgqLjgq/jg4bjgqPjg5bjgarjgr/jg5bjga7jg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLoloTjgYToibLjgatcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmY4ZDA2OyAvLyDjg5vjg5Djg7zmmYLjgavjg4bjgq3jgrnjg4jjgqvjg6njg7zjgpLnmb3jgatcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIFRhYlBhbmVsIOOBq+OCguOCueOCv+OCpOODq+OCkumBqeeUqOOBmeOCi+WgtOWQiFxuY29uc3QgU3R5bGVkVGFiUGFuZWwgPSBzdHlsZWQoVGFiUGFuZWwpYFxuICBkaXNwbGF5OiBub25lO1xuICAmLnJlYWN0LXRhYnNfX3RhYi1wYW5lbC0tc2VsZWN0ZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICBwb3N0czogUG9zdFtdO1xufT4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcblxuICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH07XG59O1xuXG5jb25zdCBUaW1lID0gKHtcbiAgcG9zdHM6IGluaXRpYWxQb3N0cyxcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKGluaXRpYWxQb3N0cyk7IC8vIOaKleeov+OBrueKtuaFi+OCkueuoeeQhlxuXG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEluaXRpYWxVc2VyKCkpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmICFsb2FkaW5nKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfVxuICB9LCBbdXNlcl0pO1xuXG4gIC8vIOOCv+ODluOBjOmBuOaKnuOBleOCjOOBn+OBqOOBjeOBruODj+ODs+ODieODqVxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy90aW1lbGluZS9hbGwvJHt1c2VyPy5faWR9YCk7XG4gICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQVBJ44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCJywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyDjgr/jg5bjgYzpgbjmip7jgZXjgozjgZ/jgajjgY3jga7jg4/jg7Pjg4njg6lcbiAgY29uc3QgaGFuZGxlVGFiU2VsZWN0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIC8vIFwi44OV44Kp44Ot44O85LitXCIg44K/44OW44GM6YG45oqe44GV44KM44Gf44Go44GNXG4gICAgICBmZXRjaFBvc3RzKCk7IC8vIOmdnuWQjOacn+mWouaVsOOCkuWRvOOBs+WHuuOBmVxuICAgIH1cbiAgICAvLyBvblNlbGVjdOOCpOODmeODs+ODiOOBr+aIu+OCiuWApOOCkuW/heimgeOBqOOBl+OBquOBhOOBn+OCgeOAgeOBk+OBk+OBp+OBr+S9leOCgui/lOOBleOBquOBhFxuICB9O1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPENsaXBMb2FkZXIgY29sb3I9XCIjZWQ2MTAzXCIgbG9hZGluZz17dHJ1ZX0gc2l6ZT17NTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFRhYnMgb25TZWxlY3Q9e2hhbmRsZVRhYlNlbGVjdH0+XG4gICAgICA8U3R5bGVkVGFiTGlzdD5cbiAgICAgICAgPFN0eWxlZFRhYj7jg5Xjgqnjg63jg7zkuK08L1N0eWxlZFRhYj5cbiAgICAgICAgPFN0eWxlZFRhYj7ku4rkvZXjgZfjgabjgovvvJ88L1N0eWxlZFRhYj5cbiAgICAgIDwvU3R5bGVkVGFiTGlzdD5cblxuICAgICAgPFN0eWxlZFRhYlBhbmVsPlxuICAgICAgICA8U1Bvc3RNYWluPlxuICAgICAgICAgIDxQb3N0Qmc+XG4gICAgICAgICAgICA8UG9zdFNsaWRlPlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvc3RWaWV3IHBvc3Q9e3Bvc3R9IGtleT17cG9zdFsnX2lkJ119IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Qb3N0U2xpZGU+XG4gICAgICAgICAgPC9Qb3N0Qmc+XG4gICAgICAgIDwvU1Bvc3RNYWluPlxuICAgICAgPC9TdHlsZWRUYWJQYW5lbD5cbiAgICAgIDxTdHlsZWRUYWJQYW5lbD5cbiAgICAgICAgPFNQb3N0TWFpbj5cbiAgICAgICAgICA8UG9zdEJnPlxuICAgICAgICAgICAgPFBvc3RTbGlkZT5cbiAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3N0VmlldyBwb3N0PXtwb3N0fSBrZXk9e3Bvc3RbJ19pZCddfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUG9zdFNsaWRlPlxuICAgICAgICAgIDwvUG9zdEJnPlxuICAgICAgICA8L1NQb3N0TWFpbj5cbiAgICAgIDwvU3R5bGVkVGFiUGFuZWw+XG4gICAgPC9UYWJzPlxuICApO1xufTtcblxuY29uc3QgU1Bvc3RNYWluID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NjhweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC8qIGZsZXg6IDAuOTsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI2NHB4KSB7XG4gIH1cbmA7XG5jb25zdCBQb3N0QmcgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQb3N0U2xpZGUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NjZweCkge1xuICAgICYge1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbmA7XG5cblRpbWUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KHBhZ2U6IFJlYWN0RWxlbWVudCkge1xuICByZXR1cm4gPExheW91dD57cGFnZX08L0xheW91dD47XG59O1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcbiJdLCJuYW1lcyI6WyJUYWIiLCJUYWJzIiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwic3R5bGVkIiwiUG9zdFZpZXciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaEluaXRpYWxVc2VyIiwiQ2xpcExvYWRlciIsInVzZVJvdXRlciIsImF4aW9zIiwiU3R5bGVkVGFiTGlzdCIsIlN0eWxlZFRhYiIsIlN0eWxlZFRhYlBhbmVsIiwiVGltZSIsInBvc3RzIiwiaW5pdGlhbFBvc3RzIiwicm91dGVyIiwidXNlciIsImxvYWRpbmciLCJzdGF0ZSIsInNldFBvc3RzIiwiZGlzcGF0Y2giLCJwdXNoIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZ2V0IiwiX2lkIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRhYlNlbGVjdCIsImluZGV4IiwibWFwIiwicG9zdCIsIlNQb3N0TWFpbiIsImRpdiIsIlBvc3RCZyIsIlBvc3RTbGlkZSIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});