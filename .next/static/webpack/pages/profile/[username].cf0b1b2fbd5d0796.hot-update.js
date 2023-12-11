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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/molecules/ProfileCount */ \"./src/components/molecules/ProfileCount.jsx\");\n/* harmony import */ var _components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/organisms/UserPostList */ \"./src/components/organisms/UserPostList.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/molecules/UserIconWithName */ \"./src/components/molecules/UserIconWithName.tsx\");\n/* harmony import */ var _components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/organisms/FollowTab */ \"./src/components/organisms/FollowTab.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/templates/Layout */ \"./src/components/templates/Layout/index.tsx\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-spinners/RingLoader */ \"./node_modules/react-spinners/RingLoader.js\");\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_molecules_UserMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/molecules/UserMenu */ \"./src/components/molecules/UserMenu.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/pages/profile/[username]/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProfilePage = _ref => {\n  _s();\n\n  let {\n    profileUser\n  } = _ref;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const {\n    0: isToPage,\n    1: setIsToPage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: isPointer,\n    1: setIsPointer\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const {\n    user,\n    loading\n  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)(state => state.user);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_8__.fetchInitialUser)());\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!user && !loading) {\n      router.push('/login');\n    }\n  }, [user]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setIsToPage(false);\n  }, [isPointer]);\n  const {\n    username\n  } = router.query;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setIsPointer(user?.username === username);\n  }, [user, username]);\n\n  const toFollowsPage = () => {\n    if (user?.username !== username) return;\n    setIsToPage(prev => !prev);\n  };\n\n  const followings = profileUser?.followings || [];\n  const followers = profileUser?.followers || [];\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"loader-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_12___default()), {\n        color: \"#ed6103\",\n        loading: true,\n        size: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileBox, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_UserMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SFollowTab, {\n      isToPage: isToPage,\n      toFollowsPage: toFollowsPage,\n      style: {\n        position: 'absolute'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileInfo, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_3__.UserIconWithName, {\n        profileUser: profileUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileFlex, {\n        isPointer: isPointer,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__.ProfileCount, {\n          toFollowsPage: toFollowsPage,\n          name: \"\\u30D5\\u30A9\\u30ED\\u30FC\",\n          count: followings.length\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_1__.ProfileCount, {\n          toFollowsPage: toFollowsPage,\n          name: \"\\u30D5\\u30A9\\u30ED\\u30EF\\u30FC\",\n          count: followers.length\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIntroduction, {\n        children: profileUser.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIconButtons, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SIconButton, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SProfileOption, {\n          children: \"\\u6295\\u7A3F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SPadding, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_2__.UserPostList, {\n        username: username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(ProfilePage, \"pLFpv+7VXazCb2qovT3H7kVt8GI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, _redux_store__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c = ProfilePage;\nconst SFollowTab = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_4__.FollowTab).withConfig({\n  displayName: \"username__SFollowTab\",\n  componentId: \"sc-n5usun-0\"\n})([\"\"]);\n_c2 = SFollowTab;\nconst SProfileBox = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileBox\",\n  componentId: \"sc-n5usun-1\"\n})([\"position:relative;width:100vw;@media (min-width:468px){margin-left:20vw;width:80vw;}@media (min-width:768px){margin-left:20vw;}@media (min-width:1264px){}background-color:#fafafa;height:100%;width:100%;overflow:hidden;\"]);\n_c3 = SProfileBox;\nconst SIntroduction = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SIntroduction\",\n  componentId: \"sc-n5usun-2\"\n})([\"padding:30px 0px 0px;margin:0 auto;width:50%;max-width:600px;text-align:center;font-size:16px;\"]);\n_c4 = SIntroduction;\nconst SIconButtons = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SIconButtons\",\n  componentId: \"sc-n5usun-3\"\n})([\"width:100%;border-top:1px solid #dfdfdf;background-color:#fafafa;\"]);\n_c5 = SIconButtons;\nconst SProfileOption = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileOption\",\n  componentId: \"sc-n5usun-4\"\n})([\"font-size:18px;color:#ed6103;font-weight:bold;\"]);\n_c6 = SProfileOption;\nconst SIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_14__.IconButton).withConfig({\n  displayName: \"username__SIconButton\",\n  componentId: \"sc-n5usun-5\"\n})([\"padding:8px;text-decoration:none;font-size:inherit !important;color:#fff;display:flex;align-items:center;flex-direction:column;color:inherit !important;border-radius:0px !important;@media (min-width:425px){width:120px;}\"]);\n_c7 = SIconButton;\nconst SProfileFlex = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileFlex\",\n  componentId: \"sc-n5usun-6\"\n})([\"width:55%;margin:0 auto;display:flex;justify-content:space-between;cursor:\", \";\"], _ref2 => {\n  let {\n    isPointer\n  } = _ref2;\n  return isPointer ? 'pointer' : 'not-allowed';\n});\n_c8 = SProfileFlex;\nconst SProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SProfileInfo\",\n  componentId: \"sc-n5usun-7\"\n})([\"width:100%;max-width:432px;margin:0 auto;padding:43px 0;\"]);\n_c9 = SProfileInfo;\nconst SPadding = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div.withConfig({\n  displayName: \"username__SPadding\",\n  componentId: \"sc-n5usun-8\"\n})([\"padding-left:3px;padding-right:3px;width:100%;\"]);\n_c10 = SPadding;\n\nProfilePage.getLayout = function getLayout(page) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: page\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 180,\n    columnNumber: 10\n  }, this);\n};\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c2, \"SFollowTab\");\n$RefreshReg$(_c3, \"SProfileBox\");\n$RefreshReg$(_c4, \"SIntroduction\");\n$RefreshReg$(_c5, \"SIconButtons\");\n$RefreshReg$(_c6, \"SProfileOption\");\n$RefreshReg$(_c7, \"SIconButton\");\n$RefreshReg$(_c8, \"SProfileFlex\");\n$RefreshReg$(_c9, \"SProfileInfo\");\n$RefreshReg$(_c10, \"SPadding\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWFBLE1BQU1nQixXQUFXLEdBQUcsUUFBcUI7RUFBQTs7RUFBQSxJQUFwQjtJQUFFQztFQUFGLENBQW9CO0VBQ3ZDLE1BQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBeEI7RUFDQSxNQUFNO0lBQUEsR0FBQ1MsUUFBRDtJQUFBLEdBQVdDO0VBQVgsSUFBMEJsQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEM7RUFDQSxNQUFNO0lBQUEsR0FBQ21CLFNBQUQ7SUFBQSxHQUFZQztFQUFaLElBQTRCcEIsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0VBRUEsTUFBTXFCLFFBQXFCLEdBQUdkLHdEQUFXLEVBQXpDO0VBQ0EsTUFBTTtJQUFFZSxJQUFGO0lBQVFDO0VBQVIsSUFBb0JaLHlEQUFXLENBQUVhLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixJQUFsQixDQUFyQztFQUVBdkIsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RzQixRQUFRLENBQUNYLHFFQUFnQixFQUFqQixDQUFSO0VBQ0QsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtFQUlBWCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUN1QixJQUFELElBQVMsQ0FBQ0MsT0FBZCxFQUF1QjtNQUNyQlAsTUFBTSxDQUFDUyxJQUFQLENBQVksUUFBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNILElBQUQsQ0FKTSxDQUFUO0VBTUF2QixnREFBUyxDQUFDLE1BQU07SUFDZG1CLFdBQVcsQ0FBQyxLQUFELENBQVg7RUFDRCxDQUZRLEVBRU4sQ0FBQ0MsU0FBRCxDQUZNLENBQVQ7RUFHQSxNQUFNO0lBQUVPO0VBQUYsSUFBZVYsTUFBTSxDQUFDVyxLQUE1QjtFQUVBNUIs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QUFBO0VBQUE7QUFBQSx5RUFBbEI7TUFBTXNDO0FBS04sTUFBTUMsY0FBYyxHQUFHdkMseUVBQUg7RUFBQTtFQUFBO0FBQUEsc0RBQXBCO01BQU11QztBQUtOLE1BQU1DLFdBQVcsR0FBR3hDLDhEQUFNLENBQUNHLHNEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsbU9BQWpCO01BQU1xQztBQWVOLE1BQU1DLFlBQVksR0FBR3pDLHlFQUFIO0VBQUE7RUFBQTtBQUFBLHdGQUtOO0VBQUEsSUFBQztJQUFFa0I7RUFBRixDQUFEO0VBQUEsT0FBb0JBLFNBQVMsR0FBRyxTQUFILEdBQWUsYUFBNUM7QUFBQSxDQUxNLENBQWxCO01BQU11QjtBQU9OLE1BQU1DLFlBQVksR0FBRzFDLHlFQUFIO0VBQUE7RUFBQTtBQUFBLGdFQUFsQjtNQUFNMEM7QUFRTixNQUFNQyxRQUFRLEdBQUczQyx5RUFBSDtFQUFBO0VBQUE7QUFBQSxzREFBZDtPQUFNMkM7O0FBS045QixXQUFXLENBQUMrQixTQUFaLEdBQXdCLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXVDO0VBQzdELG9CQUFPLCtEQUFDLG9FQUFEO0lBQUEsVUFBU0E7RUFBVDtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7QUFDRCxDQUZEOzs7QUFHQSwrREFBZWhDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS9pbmRleC50c3g/YjJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcm9maWxlQ291bnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9maWxlQ291bnQnO1xuaW1wb3J0IHsgVXNlclBvc3RMaXN0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvVXNlclBvc3RMaXN0JztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFVzZXJJY29uV2l0aE5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9Vc2VySWNvbldpdGhOYW1lJztcbmltcG9ydCB7IEZvbGxvd1RhYiB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0ZvbGxvd1RhYic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0JztcbmltcG9ydCB7IGZldGNoSW5pdGlhbFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IFJpbmdMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvUmluZ0xvYWRlcic7XG5pbXBvcnQgVXNlck1lbnUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvVXNlck1lbnUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZmlsZVVzZXI6IHJlc3BvbnNlLmRhdGEgfSxcbiAgfTtcbn1cblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoeyBwcm9maWxlVXNlciB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNUb1BhZ2UsIHNldElzVG9QYWdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzUG9pbnRlciwgc2V0SXNQb2ludGVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEluaXRpYWxVc2VyKCkpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIWxvYWRpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1RvUGFnZShmYWxzZSk7XG4gIH0sIFtpc1BvaW50ZXJdKTtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNQb2ludGVyKHVzZXI/LnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG4gIH0sIFt1c2VyLCB1c2VybmFtZV0pO1xuXG4gIGNvbnN0IHRvRm9sbG93c1BhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXI/LnVzZXJuYW1lICE9PSB1c2VybmFtZSkgcmV0dXJuO1xuICAgIHNldElzVG9QYWdlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGZvbGxvd2luZ3MgPSBwcm9maWxlVXNlcj8uZm9sbG93aW5ncyB8fCBbXTtcbiAgY29uc3QgZm9sbG93ZXJzID0gcHJvZmlsZVVzZXI/LmZvbGxvd2VycyB8fCBbXTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPFJpbmdMb2FkZXIgY29sb3I9XCIjZWQ2MTAzXCIgbG9hZGluZz17dHJ1ZX0gc2l6ZT17NTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U1Byb2ZpbGVCb3g+XG4gICAgICA8VXNlck1lbnUgLz5cbiAgICAgIDxTRm9sbG93VGFiXG4gICAgICAgIGlzVG9QYWdlPXtpc1RvUGFnZX1cbiAgICAgICAgdG9Gb2xsb3dzUGFnZT17dG9Gb2xsb3dzUGFnZX1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScgfX1cbiAgICAgIC8+XG4gICAgICA8U1Byb2ZpbGVJbmZvPlxuICAgICAgICA8VXNlckljb25XaXRoTmFtZSBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9IC8+XG4gICAgICAgIDxTUHJvZmlsZUZsZXggaXNQb2ludGVyPXtpc1BvaW50ZXJ9PlxuICAgICAgICAgIDxQcm9maWxlQ291bnRcbiAgICAgICAgICAgIHRvRm9sbG93c1BhZ2U9e3RvRm9sbG93c1BhZ2V9XG4gICAgICAgICAgICBuYW1lPVwi44OV44Kp44Ot44O8XCJcbiAgICAgICAgICAgIGNvdW50PXtmb2xsb3dpbmdzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9maWxlQ291bnRcbiAgICAgICAgICAgIHRvRm9sbG93c1BhZ2U9e3RvRm9sbG93c1BhZ2V9XG4gICAgICAgICAgICBuYW1lPVwi44OV44Kp44Ot44Ov44O8XCJcbiAgICAgICAgICAgIGNvdW50PXtmb2xsb3dlcnMubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU1Byb2ZpbGVGbGV4PlxuICAgICAgICA8U0ludHJvZHVjdGlvbj57cHJvZmlsZVVzZXIuZGVzY308L1NJbnRyb2R1Y3Rpb24+XG4gICAgICA8L1NQcm9maWxlSW5mbz5cbiAgICAgIDxTSWNvbkJ1dHRvbnM+XG4gICAgICAgIDxTSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U1Byb2ZpbGVPcHRpb24+5oqV56i/PC9TUHJvZmlsZU9wdGlvbj5cbiAgICAgICAgPC9TSWNvbkJ1dHRvbj5cbiAgICAgIDwvU0ljb25CdXR0b25zPlxuICAgICAgPFNQYWRkaW5nPlxuICAgICAgICA8VXNlclBvc3RMaXN0IHVzZXJuYW1lPXt1c2VybmFtZX0gLz5cbiAgICAgIDwvU1BhZGRpbmc+XG4gICAgPC9TUHJvZmlsZUJveD5cbiAgKTtcbn07XG5jb25zdCBTRm9sbG93VGFiID0gc3R5bGVkKEZvbGxvd1RhYilgYDtcbmNvbnN0IFNQcm9maWxlQm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NjhweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC8qIGZsZXg6IDAuOTsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI2NHB4KSB7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcbmNvbnN0IFNJbnRyb2R1Y3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMHB4IDBweCAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5jb25zdCBTSWNvbkJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5gO1xuY29uc3QgU1Byb2ZpbGVPcHRpb24gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZWQ2MTAzO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5jb25zdCBTSWNvbkJ1dHRvbiA9IHN0eWxlZChJY29uQnV0dG9uKWBcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjVweCkge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxuYDtcblxuY29uc3QgU1Byb2ZpbGVGbGV4ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDU1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiAkeyh7IGlzUG9pbnRlciB9KSA9PiAoaXNQb2ludGVyID8gJ3BvaW50ZXInIDogJ25vdC1hbGxvd2VkJyl9O1xuYDtcbmNvbnN0IFNQcm9maWxlSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQzMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDNweCAwO1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgKi9cbmA7XG5cbmNvbnN0IFNQYWRkaW5nID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuUHJvZmlsZVBhZ2UuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KHBhZ2U6IFJlYWN0RWxlbWVudCkge1xuICByZXR1cm4gPExheW91dD57cGFnZX08L0xheW91dD47XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlByb2ZpbGVDb3VudCIsIlVzZXJQb3N0TGlzdCIsIkljb25CdXR0b24iLCJVc2VySWNvbldpdGhOYW1lIiwiRm9sbG93VGFiIiwidXNlRGlzcGF0Y2giLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJmZXRjaEluaXRpYWxVc2VyIiwidXNlU2VsZWN0b3IiLCJSaW5nTG9hZGVyIiwiVXNlck1lbnUiLCJQcm9maWxlUGFnZSIsInByb2ZpbGVVc2VyIiwicm91dGVyIiwiaXNUb1BhZ2UiLCJzZXRJc1RvUGFnZSIsImlzUG9pbnRlciIsInNldElzUG9pbnRlciIsImRpc3BhdGNoIiwidXNlciIsImxvYWRpbmciLCJzdGF0ZSIsInB1c2giLCJ1c2VybmFtZSIsInF1ZXJ5IiwidG9Gb2xsb3dzUGFnZSIsInByZXYiLCJmb2xsb3dpbmdzIiwiZm9sbG93ZXJzIiwicG9zaXRpb24iLCJsZW5ndGgiLCJkZXNjIiwiU0ZvbGxvd1RhYiIsIlNQcm9maWxlQm94IiwiZGl2IiwiU0ludHJvZHVjdGlvbiIsIlNJY29uQnV0dG9ucyIsIlNQcm9maWxlT3B0aW9uIiwiU0ljb25CdXR0b24iLCJTUHJvZmlsZUZsZXgiLCJTUHJvZmlsZUluZm8iLCJTUGFkZGluZyIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile/[username]/index.tsx\n"));

/***/ })

});