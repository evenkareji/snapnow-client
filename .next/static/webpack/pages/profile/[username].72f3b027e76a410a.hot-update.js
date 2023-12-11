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

/***/ "./src/components/molecules/UserMenu.tsx":
/*!***********************************************!*\
  !*** ./src/components/molecules/UserMenu.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ \"./node_modules/@mui/icons-material/PersonOutline.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _atoms_Hr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Hr */ \"./src/components/atoms/Hr.tsx\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/molecules/UserMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst menuItems = {\n  account: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined),\n    label: 'プロフィール編集',\n    href: '/edit'\n  }],\n  aboutSnapNow: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined),\n    label: '利用規約',\n    href: '/'\n  }, {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined),\n    label: 'プライバシーポリシー',\n    href: '/'\n  }],\n  logout: {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }, undefined),\n    label: 'ログアウト',\n    href: '/logout'\n  }\n};\n\nconst UserMenu = _ref => {\n  _s();\n\n  let {\n    username\n  } = _ref;\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const {\n    0: isMenuVisible,\n    1: setMenuVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const toggleMenu = () => {\n    setMenuVisible(!isMenuVisible);\n  };\n\n  const logoutEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    try {\n      dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.logout)());\n    } catch (err) {\n      console.log(err);\n    }\n  }, [dispatch, router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '999',\n        // Make sure it's below the menu (1000)\n        background: 'rgba(0, 0, 0, 0.5)',\n        position: 'fixed',\n        top: '0',\n        left: '0',\n        width: '100%',\n        height: '100%',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, undefined), isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '1000',\n        background: '#ffffff',\n        width: '275px',\n        top: '0',\n        right: '0',\n        bottom: '0',\n        position: 'fixed',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          width: '93%',\n          marginRight: 'auto',\n          marginLeft: 'auto'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, undefined), menuItems.account.map((_ref2, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref2;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n                children: [icon, label]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Snap Now\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 15\n          }, undefined), menuItems.aboutSnapNow.map((_ref3, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref3;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n                children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  children: label\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          onClick: logoutEvent,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.icon\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMoreHorizIcon, {\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(UserMenu, \"IP984wx6gv3JLxcjVi91ot+gVHI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = UserMenu;\nconst SMenuContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  margin-right: 16px;\n`;\n_c2 = SMenuContainer;\nconst SMoreHorizIcon = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_10__[\"default\"])`\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n`;\n_c3 = SMoreHorizIcon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"UserMenu\");\n$RefreshReg$(_c2, \"SMenuContainer\");\n$RefreshReg$(_c3, \"SMoreHorizIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTVksU0FBUyxHQUFHO0VBQ2hCQyxPQUFPLEVBQUUsQ0FDUDtJQUNFQyxJQUFJLGVBQ0YsOERBQUMseUVBQUQ7TUFBbUIsS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRSxNQUFmO1FBQXVCQyxLQUFLLEVBQUU7TUFBOUI7SUFBMUI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZKO0lBSUVDLEtBQUssRUFBRSxVQUpUO0lBS0VDLElBQUksRUFBRTtFQUxSLENBRE8sQ0FETztFQVVoQkMsWUFBWSxFQUFFLENBQ1o7SUFDRUwsSUFBSSxlQUFFLDhEQUFDLGtFQUFEO01BQVksS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRSxNQUFmO1FBQXVCQyxLQUFLLEVBQUU7TUFBOUI7SUFBbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURSO0lBRUVDLEtBQUssRUFBRSxNQUZUO0lBR0VDLElBQUksRUFBRTtFQUhSLENBRFksRUFNWjtJQUNFSixJQUFJLGVBQUUsOERBQUMsa0VBQUQ7TUFBWSxLQUFLLEVBQUU7UUFBRUMsV0FBVyxFQUFFLE1BQWY7UUFBdUJDLEtBQUssRUFBRTtNQUE5QjtJQUFuQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRFI7SUFFRUMsS0FBSyxFQUFFLFlBRlQ7SUFHRUMsSUFBSSxFQUFFO0VBSFIsQ0FOWSxDQVZFO0VBc0JoQlQsTUFBTSxFQUFFO0lBQ05LLElBQUksZUFBRSw4REFBQyxrRUFBRDtNQUFZLEtBQUssRUFBRTtRQUFFQyxXQUFXLEVBQUUsTUFBZjtRQUF1QkMsS0FBSyxFQUFFO01BQTlCO0lBQW5CO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFEQTtJQUVOQyxLQUFLLEVBQUUsT0FGRDtJQUdOQyxJQUFJLEVBQUU7RUFI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LGFBRkY7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO1lBREYsR0FBdUIwQixLQUF2QjtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBRDBCO1VBQUEsQ0FBM0IsQ0FGSCxlQVVFLDhEQUFDLHlDQUFEO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFWRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFuQkYsZUErQkU7VUFBSyxPQUFPLEVBQUVoQixXQUFkO1VBQUEsdUJBQ0UsOERBQUMsY0FBRDtZQUFBLHdCQUNFO2NBQUEsVUFBTWYsU0FBUyxDQUFDSCxNQUFWLENBQWlCSztZQUF2QjtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBREYsZUFFRTtjQUFBLFVBQU1GLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQlE7WUFBdkI7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQUZGO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUEvQkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBWkY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQXBCSixlQXlFRSw4REFBQyxjQUFEO01BQWdCLE9BQU8sRUFBRVM7SUFBekI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQXpFRjtFQUFBLGdCQURGO0FBNkVELENBN0ZEOztHQUFNTjtVQUMwQlYsc0RBRWZDOzs7S0FIWFM7QUErRk4sTUFBTXdCLGNBQWMsR0FBR3JDLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQSxDQUhBO01BQU1xQztBQUtOLE1BQU1FLGNBQWMsR0FBR3ZDLDJEQUFNLENBQUNGLHNFQUFELENBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtNQUFNeUM7QUFPTiwrREFBZTFCLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1VzZXJNZW51LnRzeD9iODczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nb3V0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XG5pbXBvcnQgUGVyc29uT3V0bGluZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb25PdXRsaW5lJztcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZUhvcml6JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBIciB9IGZyb20gJy4uL2F0b21zL0hyJztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL3VzZXJTbGljZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgbWVudUl0ZW1zID0ge1xuICBhY2NvdW50OiBbXG4gICAge1xuICAgICAgaWNvbjogKFxuICAgICAgICA8UGVyc29uT3V0bGluZUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JywgY29sb3I6ICcjOTY5NzlCJyB9fSAvPlxuICAgICAgKSxcbiAgICAgIGxhYmVsOiAn44OX44Ot44OV44Kj44O844Or57eo6ZuGJyxcbiAgICAgIGhyZWY6ICcvZWRpdCcsXG4gICAgfSxcbiAgXSxcbiAgYWJvdXRTbmFwTm93OiBbXG4gICAge1xuICAgICAgaWNvbjogPExvZ291dEljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JywgY29sb3I6ICcjOTY5NzlCJyB9fSAvPixcbiAgICAgIGxhYmVsOiAn5Yip55So6KaP57SEJyxcbiAgICAgIGhyZWY6ICcvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxMb2dvdXRJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz4sXG4gICAgICBsYWJlbDogJ+ODl+ODqeOCpOODkOOCt+ODvOODneODquOCt+ODvCcsXG4gICAgICBocmVmOiAnLycsXG4gICAgfSxcbiAgXSxcbiAgbG9nb3V0OiB7XG4gICAgaWNvbjogPExvZ291dEljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JywgY29sb3I6ICcjOTY5NzlCJyB9fSAvPixcbiAgICBsYWJlbDogJ+ODreOCsOOCouOCpuODiCcsXG4gICAgaHJlZjogJy9sb2dvdXQnLFxuICB9LFxufTtcblxuY29uc3QgVXNlck1lbnUgPSAoeyB1c2VybmFtZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc01lbnVWaXNpYmxlLCBzZXRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNZW51VmlzaWJsZSghaXNNZW51VmlzaWJsZSk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEV2ZW50ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkaXNwYXRjaChsb2dvdXQoKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCByb3V0ZXJdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIE92ZXJsYXkgYmFja2dyb3VuZCAqL31cbiAgICAgIHtpc01lbnVWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6ICc5OTknLCAvLyBNYWtlIHN1cmUgaXQncyBiZWxvdyB0aGUgbWVudSAoMTAwMClcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIC8vIFRvZ2dsZSB0aGlzIGJhc2VkIG9uIG1lbnUgdmlzaWJpbGl0eVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBVc2VyTWVudSAqL31cbiAgICAgIHtpc01lbnVWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6ICcxMDAwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMjc1cHgnLFxuICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIC8vIFRvZ2dsZSB0aGlzIGJhc2VkIG9uIG1lbnUgdmlzaWJpbGl0eVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzkzJScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPuOCouOCq+OCpuODs+ODiOOBq+OBpOOBhOOBpjwvaDI+XG4gICAgICAgICAgICAgIHttZW51SXRlbXMuYWNjb3VudC5tYXAoKHsgaWNvbiwgbGFiZWwsIGhyZWYgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxTTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvU01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5TbmFwIE5vd+OBq+OBpOOBhOOBpjwvaDI+XG4gICAgICAgICAgICAgIHttZW51SXRlbXMuYWJvdXRTbmFwTm93Lm1hcCgoeyBpY29uLCBsYWJlbCwgaHJlZiB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFNNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1NNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2xvZ291dEV2ZW50fT5cbiAgICAgICAgICAgICAgPFNNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXY+e21lbnVJdGVtcy5sb2dvdXQuaWNvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PnttZW51SXRlbXMubG9nb3V0LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICA8L1NNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPFNNb3JlSG9yaXpJY29uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBTTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbmA7XG5cbmNvbnN0IFNNb3JlSG9yaXpJY29uID0gc3R5bGVkKE1vcmVIb3Jpekljb24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJMb2dvdXRJY29uIiwiUGVyc29uT3V0bGluZUljb24iLCJNb3JlSG9yaXpJY29uIiwiTGluayIsInN0eWxlZCIsIkhyIiwibG9nb3V0IiwidXNlRGlzcGF0Y2giLCJ1c2VSb3V0ZXIiLCJtZW51SXRlbXMiLCJhY2NvdW50IiwiaWNvbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJsYWJlbCIsImhyZWYiLCJhYm91dFNuYXBOb3ciLCJVc2VyTWVudSIsInVzZXJuYW1lIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJpc01lbnVWaXNpYmxlIiwic2V0TWVudVZpc2libGUiLCJ0b2dnbGVNZW51IiwibG9nb3V0RXZlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiekluZGV4IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcCIsImluZGV4IiwiU01lbnVDb250YWluZXIiLCJkaXYiLCJTTW9yZUhvcml6SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/UserMenu.tsx\n"));

/***/ })

});