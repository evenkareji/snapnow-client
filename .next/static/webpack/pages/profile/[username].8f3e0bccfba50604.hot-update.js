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

/***/ "./src/pages/profile/[username]/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/profile/[username]/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/molecules/ProfileCount */ \"./src/components/molecules/ProfileCount.jsx\");\n/* harmony import */ var _components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/organisms/UserPostList */ \"./src/components/organisms/UserPostList.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/molecules/UserIconWithName */ \"./src/components/molecules/UserIconWithName.tsx\");\n/* harmony import */ var _components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/organisms/FollowTab */ \"./src/components/organisms/FollowTab.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/templates/Layout */ \"./src/components/templates/Layout/index.tsx\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-spinners/RingLoader */ \"./node_modules/react-spinners/RingLoader.js\");\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_molecules_UserMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/molecules/UserMenu */ \"./src/components/molecules/UserMenu.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/profile/[username]/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProfilePage = _ref => {\n  _s();\n\n  let {\n    profileUser\n  } = _ref;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const {\n    0: isToPage,\n    1: setIsToPage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: isPointer,\n    1: setIsPointer\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const {\n    user,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)(state => state.user);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_8__.fetchInitialUser)());\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!user && !loading) {\n      router.push('/login');\n    }\n  }, [user]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setIsToPage(false);\n  }, [isPointer]);\n  const {\n    username\n  } = router.query;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setIsPointer(user?.username === username);\n  }, [user, username]);\n\n  const toFollowsPage = () => {\n    if (user?.username !== username) return;\n    setIsToPage(prev => !prev);\n  };\n\n  const followings = profileUser?.followings || [];\n  const followers = profileUser?.followers || [];\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"loader-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12___default()), {\n        color: \"#ed6103\",\n        loading: true,\n        size: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileBox, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"header\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_UserMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SFollowTab, {\n      isToPage: isToPage,\n      toFollowsPage: toFollowsPage,\n      style: {\n        position: 'absolute'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileInfo, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_3__.UserIconWithName, {\n        profileUser: profileUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileFlex, {\n        isPointer: isPointer,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__.ProfileCount, {\n          toFollowsPage: toFollowsPage,\n          name: \"\\u30D5\\u30A9\\u30ED\\u30FC\",\n          count: followings.length\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__.ProfileCount, {\n          toFollowsPage: toFollowsPage,\n          name: \"\\u30D5\\u30A9\\u30ED\\u30EF\\u30FC\",\n          count: followers.length\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIntroduction, {\n        children: profileUser.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIconButtons, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIconButton, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileOption, {\n          children: \"\\u6295\\u7A3F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPadding, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_2__.UserPostList, {\n        username: username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(ProfilePage, \"pLFpv+7VXazCb2qovT3H7kVt8GI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, _redux_store__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c = ProfilePage;\nconst SFollowTab = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_4__.FollowTab).withConfig({\n  displayName: \"username__SFollowTab\",\n  componentId: \"sc-n5usun-0\"\n})([\"\"]);\n_c2 = SFollowTab;\nconst SProfileBox = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileBox\",\n  componentId: \"sc-n5usun-1\"\n})([\"position:relative;width:100vw;@media (min-width:468px){margin-left:20vw;width:80vw;}@media (min-width:768px){margin-left:20vw;}@media (min-width:1264px){}background-color:#fafafa;height:100%;width:100%;overflow:hidden;\"]);\n_c3 = SProfileBox;\nconst SIntroduction = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SIntroduction\",\n  componentId: \"sc-n5usun-2\"\n})([\"padding:30px 0px 0px;margin:0 auto;width:50%;max-width:600px;text-align:center;font-size:16px;\"]);\n_c4 = SIntroduction;\nconst SIconButtons = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SIconButtons\",\n  componentId: \"sc-n5usun-3\"\n})([\"width:100%;border-top:1px solid #dfdfdf;background-color:#fafafa;\"]);\n_c5 = SIconButtons;\nconst SProfileOption = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileOption\",\n  componentId: \"sc-n5usun-4\"\n})([\"font-size:18px;color:#ed6103;font-weight:bold;\"]);\n_c6 = SProfileOption;\nconst SIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_14__.IconButton).withConfig({\n  displayName: \"username__SIconButton\",\n  componentId: \"sc-n5usun-5\"\n})([\"padding:8px;text-decoration:none;font-size:inherit !important;color:#fff;display:flex;align-items:center;flex-direction:column;color:inherit !important;border-radius:0px !important;@media (min-width:425px){width:120px;}\"]);\n_c7 = SIconButton;\nconst SProfileFlex = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileFlex\",\n  componentId: \"sc-n5usun-6\"\n})([\"width:55%;margin:0 auto;display:flex;justify-content:space-between;cursor:\", \";\"], _ref2 => {\n  let {\n    isPointer\n  } = _ref2;\n  return isPointer ? 'pointer' : 'not-allowed';\n});\n_c8 = SProfileFlex;\nconst SProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileInfo\",\n  componentId: \"sc-n5usun-7\"\n})([\"width:100%;max-width:432px;margin:0 auto;padding:43px 0;\"]);\n_c9 = SProfileInfo;\nconst SPadding = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SPadding\",\n  componentId: \"sc-n5usun-8\"\n})([\"padding-left:3px;padding-right:3px;width:100%;\"]);\n_c10 = SPadding;\n\nProfilePage.getLayout = function getLayout(page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 182,\n    columnNumber: 10\n  }, this);\n};\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c2, \"SFollowTab\");\n$RefreshReg$(_c3, \"SProfileBox\");\n$RefreshReg$(_c4, \"SIntroduction\");\n$RefreshReg$(_c5, \"SIconButtons\");\n$RefreshReg$(_c6, \"SProfileOption\");\n$RefreshReg$(_c7, \"SIconButton\");\n$RefreshReg$(_c8, \"SProfileFlex\");\n$RefreshReg$(_c9, \"SProfileInfo\");\n$RefreshReg$(_c10, \"SPadding\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWFBLE1BQU1nQixXQUFXLEdBQUcsUUFBcUI7RUFBQTs7RUFBQSxJQUFwQjtJQUFFQztFQUFGLENBQW9CO0VBQ3ZDLE1BQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBeEI7RUFDQSxNQUFNO0lBQUEsR0FBQ1MsUUFBRDtJQUFBLEdBQVdDO0VBQVgsSUFBMEJsQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEM7RUFDQSxNQUFNO0lBQUEsR0FBQ21CLFNBQUQ7SUFBQSxHQUFZQztFQUFaLElBQTRCcEIsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0VBRUEsTUFBTXFCLFFBQXFCLEdBQUdkLHdEQUFXLEVBQXpDO0VBQ0EsTUFBTTtJQUFFZSxJQUFGO0lBQVFDO0VBQVIsSUFBb0JaLHlEQUFXLENBQUVhLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixJQUFsQixDQUFyQztFQUVBdkIsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RzQixRQUFRLENBQUNYLHFFQUFnQixFQUFqQixDQUFSO0VBQ0QsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtFQUlBWCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUN1QixJQUFELElBQVMsQ0FBQ0MsT0FBZCxFQUF1QjtNQUNyQlAsTUFBTSxDQUFDUyxJQUFQLENBQVksUUFBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNILElBQUQsQ0FKTSxDQUFUO0VBTUF2QixnREFBUyxDQUFDLE1BQU07SUFDZG1CLFdBQVcsQ0FBQyxLQUFELENBQVg7RUFDRCxDQUZRLEVBRU4sQ0FBQ0MsU0FBRCxDQUZNLENBQVQ7RUFHQSxNQUFNO0lBQUVPO0VBQUYsSUFBZVYsTUFBTSxDQUFDVyxLQUE1QjtFQUVBNUIs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QUFNcUM7QUFRTixNQUFNQyxZQUFZLEdBQUd0Qyx5RUFBSDtFQUFBO0VBQUE7QUFBQSx5RUFBbEI7TUFBTXNDO0FBS04sTUFBTUMsY0FBYyxHQUFHdkMseUVBQUg7RUFBQTtFQUFBO0FBQUEsc0RBQXBCO01BQU11QztBQUtOLE1BQU1DLFdBQVcsR0FBR3hDLDhEQUFNLENBQUNHLHNEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsbU9BQWpCO01BQU1xQztBQWVOLE1BQU1DLFlBQVksR0FBR3pDLHlFQUFIO0VBQUE7RUFBQTtBQUFBLHdGQUtOO0VBQUEsSUFBQztJQUFFa0I7RUFBRixDQUFEO0VBQUEsT0FBb0JBLFNBQVMsR0FBRyxTQUFILEdBQWUsYUFBNUM7QUFBQSxDQUxNLENBQWxCO01BQU11QjtBQU9OLE1BQU1DLFlBQVksR0FBRzFDLHlFQUFIO0VBQUE7RUFBQTtBQUFBLGdFQUFsQjtNQUFNMEM7QUFRTixNQUFNQyxRQUFRLEdBQUczQyx5RUFBSDtFQUFBO0VBQUE7QUFBQSxzREFBZDtPQUFNMkM7O0FBS045QixXQUFXLENBQUMrQixTQUFaLEdBQXdCLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXVDO0VBQzdELG9CQUFPLCtEQUFDLG9FQUFEO0lBQUEsVUFBU0E7RUFBVDtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7QUFDRCxDQUZEOzs7QUFHQSwrREFBZWhDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS9pbmRleC50c3g/YjJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcm9maWxlQ291bnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9maWxlQ291bnQnO1xuaW1wb3J0IHsgVXNlclBvc3RMaXN0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvVXNlclBvc3RMaXN0JztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFVzZXJJY29uV2l0aE5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9Vc2VySWNvbldpdGhOYW1lJztcbmltcG9ydCB7IEZvbGxvd1RhYiB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0ZvbGxvd1RhYic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0JztcbmltcG9ydCB7IGZldGNoSW5pdGlhbFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IFJpbmdMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvUmluZ0xvYWRlcic7XG5pbXBvcnQgVXNlck1lbnUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvVXNlck1lbnUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZmlsZVVzZXI6IHJlc3BvbnNlLmRhdGEgfSxcbiAgfTtcbn1cblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoeyBwcm9maWxlVXNlciB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNUb1BhZ2UsIHNldElzVG9QYWdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUG9pbnRlciwgc2V0SXNQb2ludGVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEluaXRpYWxVc2VyKCkpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIWxvYWRpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1RvUGFnZShmYWxzZSk7XG4gIH0sIFtpc1BvaW50ZXJdKTtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNQb2ludGVyKHVzZXI/LnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG4gIH0sIFt1c2VyLCB1c2VybmFtZV0pO1xuXG4gIGNvbnN0IHRvRm9sbG93c1BhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXI/LnVzZXJuYW1lICE9PSB1c2VybmFtZSkgcmV0dXJuO1xuICAgIHNldElzVG9QYWdlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGZvbGxvd2luZ3MgPSBwcm9maWxlVXNlcj8uZm9sbG93aW5ncyB8fCBbXTtcbiAgY29uc3QgZm9sbG93ZXJzID0gcHJvZmlsZVVzZXI/LmZvbGxvd2VycyB8fCBbXTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPFJpbmdMb2FkZXIgY29sb3I9XCIjZWQ2MTAzXCIgbG9hZGluZz17dHJ1ZX0gc2l6ZT17NTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U1Byb2ZpbGVCb3g+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8VXNlck1lbnUgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPFNGb2xsb3dUYWJcbiAgICAgICAgaXNUb1BhZ2U9e2lzVG9QYWdlfVxuICAgICAgICB0b0ZvbGxvd3NQYWdlPXt0b0ZvbGxvd3NQYWdlfVxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fVxuICAgICAgLz5cbiAgICAgIDxTUHJvZmlsZUluZm8+XG4gICAgICAgIDxVc2VySWNvbldpdGhOYW1lIHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0gLz5cbiAgICAgICAgPFNQcm9maWxlRmxleCBpc1BvaW50ZXI9e2lzUG9pbnRlcn0+XG4gICAgICAgICAgPFByb2ZpbGVDb3VudFxuICAgICAgICAgICAgdG9Gb2xsb3dzUGFnZT17dG9Gb2xsb3dzUGFnZX1cbiAgICAgICAgICAgIG5hbWU9XCLjg5Xjgqnjg63jg7xcIlxuICAgICAgICAgICAgY291bnQ9e2ZvbGxvd2luZ3MubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByb2ZpbGVDb3VudFxuICAgICAgICAgICAgdG9Gb2xsb3dzUGFnZT17dG9Gb2xsb3dzUGFnZX1cbiAgICAgICAgICAgIG5hbWU9XCLjg5Xjgqnjg63jg6/jg7xcIlxuICAgICAgICAgICAgY291bnQ9e2ZvbGxvd2Vycy5sZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TUHJvZmlsZUZsZXg+XG4gICAgICAgIDxTSW50cm9kdWN0aW9uPntwcm9maWxlVXNlci5kZXNjfTwvU0ludHJvZHVjdGlvbj5cbiAgICAgIDwvU1Byb2ZpbGVJbmZvPlxuICAgICAgPFNJY29uQnV0dG9ucz5cbiAgICAgICAgPFNJY29uQnV0dG9uPlxuICAgICAgICAgIDxTUHJvZmlsZU9wdGlvbj7mipXnqL88L1NQcm9maWxlT3B0aW9uPlxuICAgICAgICA8L1NJY29uQnV0dG9uPlxuICAgICAgPC9TSWNvbkJ1dHRvbnM+XG4gICAgICA8U1BhZGRpbmc+XG4gICAgICAgIDxVc2VyUG9zdExpc3QgdXNlcm5hbWU9e3VzZXJuYW1lfSAvPlxuICAgICAgPC9TUGFkZGluZz5cbiAgICA8L1NQcm9maWxlQm94PlxuICApO1xufTtcbmNvbnN0IFNGb2xsb3dUYWIgPSBzdHlsZWQoRm9sbG93VGFiKWBgO1xuY29uc3QgU1Byb2ZpbGVCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLyogZmxleDogMC45OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjY0cHgpIHtcbiAgfVxuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgU0ludHJvZHVjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMwcHggMHB4IDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcbmNvbnN0IFNJY29uQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmZGZkZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbmA7XG5jb25zdCBTUHJvZmlsZU9wdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNlZDYxMDM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmNvbnN0IFNJY29uQnV0dG9uID0gc3R5bGVkKEljb25CdXR0b24pYFxuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyNXB4KSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTUHJvZmlsZUZsZXggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6ICR7KHsgaXNQb2ludGVyIH0pID0+IChpc1BvaW50ZXIgPyAncG9pbnRlcicgOiAnbm90LWFsbG93ZWQnKX07XG5gO1xuY29uc3QgU1Byb2ZpbGVJbmZvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA0M3B4IDA7XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAqL1xuYDtcblxuY29uc3QgU1BhZGRpbmcgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5Qcm9maWxlUGFnZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZTogUmVhY3RFbGVtZW50KSB7XG4gIHJldHVybiA8TGF5b3V0PntwYWdlfTwvTGF5b3V0Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUHJvZmlsZUNvdW50IiwiVXNlclBvc3RMaXN0IiwiSWNvbkJ1dHRvbiIsIlVzZXJJY29uV2l0aE5hbWUiLCJGb2xsb3dUYWIiLCJ1c2VEaXNwYXRjaCIsInVzZVJvdXRlciIsIkxheW91dCIsImZldGNoSW5pdGlhbFVzZXIiLCJ1c2VTZWxlY3RvciIsIlJpbmdMb2FkZXIiLCJVc2VyTWVudSIsIlByb2ZpbGVQYWdlIiwicHJvZmlsZVVzZXIiLCJyb3V0ZXIiLCJpc1RvUGFnZSIsInNldElzVG9QYWdlIiwiaXNQb2ludGVyIiwic2V0SXNQb2ludGVyIiwiZGlzcGF0Y2giLCJ1c2VyIiwibG9hZGluZyIsInN0YXRlIiwicHVzaCIsInVzZXJuYW1lIiwicXVlcnkiLCJ0b0ZvbGxvd3NQYWdlIiwicHJldiIsImZvbGxvd2luZ3MiLCJmb2xsb3dlcnMiLCJwb3NpdGlvbiIsImxlbmd0aCIsImRlc2MiLCJTRm9sbG93VGFiIiwiU1Byb2ZpbGVCb3giLCJkaXYiLCJTSW50cm9kdWN0aW9uIiwiU0ljb25CdXR0b25zIiwiU1Byb2ZpbGVPcHRpb24iLCJTSWNvbkJ1dHRvbiIsIlNQcm9maWxlRmxleCIsIlNQcm9maWxlSW5mbyIsIlNQYWRkaW5nIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/[username]/index.tsx\n"));

/***/ })

});