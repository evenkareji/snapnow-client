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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ \"./node_modules/@mui/icons-material/PersonOutline.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _atoms_Hr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Hr */ \"./src/components/atoms/Hr.tsx\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/molecules/UserMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst menuItems = {\n  account: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined),\n    label: 'プロフィール編集',\n    href: '/edit'\n  }],\n  aboutSnapNow: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined),\n    label: '利用規約',\n    href: '/'\n  }, {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined),\n    label: 'プライバシーポリシー',\n    href: '/'\n  }],\n  logout: {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }, undefined),\n    label: 'ログアウト',\n    href: '/logout'\n  }\n};\n\nconst UserMenu = () => {\n  _s();\n\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const {\n    0: isMenuVisible,\n    1: setMenuVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const toggleMenu = () => {\n    setMenuVisible(!isMenuVisible);\n  };\n\n  const logoutEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    try {\n      dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.logout)());\n    } catch (err) {\n      console.log(err);\n    }\n  }, [dispatch, router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '999',\n        // Make sure it's below the menu (1000)\n        background: 'rgba(0, 0, 0, 0.5)',\n        position: 'fixed',\n        top: '0',\n        left: '0',\n        width: '100%',\n        height: '100%',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, undefined), isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '1000',\n        background: '#ffffff',\n        width: '275px',\n        top: '0',\n        right: '0',\n        bottom: '0',\n        position: 'fixed',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          width: '93%',\n          marginRight: 'auto',\n          marginLeft: 'auto'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, undefined), menuItems.account.map((_ref, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n                children: [icon, label]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n            children: \"Snap Now\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 15\n          }, undefined), menuItems.aboutSnapNow.map((_ref2, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref2;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n                children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  children: label\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          onClick: logoutEvent,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMenuContainer, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.icon\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SMoreHorizIcon, {\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(UserMenu, \"IP984wx6gv3JLxcjVi91ot+gVHI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = UserMenu;\nconst SMenuContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  margin-right: 16px;\n`;\n_c2 = SMenuContainer;\nconst SMoreHorizIcon = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_10__[\"default\"])`\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n`;\n_c3 = SMoreHorizIcon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"UserMenu\");\n$RefreshReg$(_c2, \"SMenuContainer\");\n$RefreshReg$(_c3, \"SMoreHorizIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTVksU0FBUyxHQUFHO0VBQ2hCQyxPQUFPLEVBQUUsQ0FDUDtJQUNFQyxJQUFJLGVBQ0YsOERBQUMseUVBQUQ7TUFBbUIsS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRSxNQUFmO1FBQXVCQyxLQUFLLEVBQUU7TUFBOUI7SUFBMUI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZKO0lBSUVDLEtBQUssRUFBRSxVQUpUO0lBS0VDLElBQUksRUFBRTtFQUxSLENBRE8sQ0FETztFQVVoQkMsWUFBWSxFQUFFLENBQ1o7SUFDRUwsSUFBSSxlQUFFLDhEQUFDLGtFQUFEO01BQVksS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRSxNQUFmO1FBQXVCQyxLQUFLLEVBQUU7TUFBOUI7SUFBbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURSO0lBRUVDLEtBQUssRUFBRSxNQUZUO0lBR0VDLElBQUksRUFBRTtFQUhSLENBRFksRUFNWjtJQUNFSixJQUFJLGVBQUUsOERBQUMsa0VBQUQ7TUFBWSxLQUFLLEVBQUU7UUFBRUMsV0FBVyxFQUFFLE1BQWY7UUFBdUJDLEtBQUssRUFBRTtNQUE5QjtJQUFuQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRFI7SUFFRUMsS0FBSyxFQUFFLFlBRlQ7SUFHRUMsSUFBSSxFQUFFO0VBSFIsQ0FOWSxDQVZFO0VBc0JoQlQsTUFBTSxFQUFFO0lBQ05LLElBQUksZUFBRSw4REFBQyxrRUFBRDtNQUFZLEtBQUssRUFBRTtRQUFFQyxXQUFXLEVBQUUsTUFBZjtRQUF1QkMsS0FBSyxFQUFFO01BQTlCO0lBQW5CO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFEQTtJQUVOQyxLQUFLLEVBQUUsT0FGRDtJQUdOQyxJQUFJLEVBQUU7RUFI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Y0FBQTtZQURGLEdBQXVCeUIsS0FBdkI7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQUQwQjtVQUFBLENBQTNCLENBRkgsZUFVRSw4REFBQyx5Q0FBRDtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBVkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBbkJGLGVBK0JFO1VBQUssT0FBTyxFQUFFaEIsV0FBZDtVQUFBLHVCQUNFLDhEQUFDLGNBQUQ7WUFBQSx3QkFDRTtjQUFBLFVBQU1kLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQks7WUFBdkI7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQURGLGVBRUU7Y0FBQSxVQUFNRixTQUFTLENBQUNILE1BQVYsQ0FBaUJRO1lBQXZCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFGRjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBL0JGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQVpGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFwQkosZUF5RUUsOERBQUMsY0FBRDtNQUFnQixPQUFPLEVBQUVRO0lBQXpCO01BQUE7TUFBQTtNQUFBO0lBQUEsYUF6RUY7RUFBQSxnQkFERjtBQTZFRCxDQTVGRDs7R0FBTUw7VUFDMEJWLHNEQUNmQzs7O0tBRlhTO0FBOEZOLE1BQU11QixjQUFjLEdBQUdwQywyREFBVztBQUNsQztBQUNBO0FBQ0EsQ0FIQTtNQUFNb0M7QUFLTixNQUFNRSxjQUFjLEdBQUd0QywyREFBTSxDQUFDRixzRUFBRCxDQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7TUFBTXdDO0FBT04sK0RBQWV6QixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Vc2VyTWVudS50c3g/Yjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ291dEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xuaW1wb3J0IFBlcnNvbk91dGxpbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uT3V0bGluZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVIb3Jpeic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgSHIgfSBmcm9tICcuLi9hdG9tcy9Icic7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgYWNjb3VudDogW1xuICAgIHtcbiAgICAgIGljb246IChcbiAgICAgICAgPFBlcnNvbk91dGxpbmVJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz5cbiAgICAgICksXG4gICAgICBsYWJlbDogJ+ODl+ODreODleOCo+ODvOODq+e3qOmbhicsXG4gICAgICBocmVmOiAnL2VkaXQnLFxuICAgIH0sXG4gIF0sXG4gIGFib3V0U25hcE5vdzogW1xuICAgIHtcbiAgICAgIGljb246IDxMb2dvdXRJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz4sXG4gICAgICBsYWJlbDogJ+WIqeeUqOimj+e0hCcsXG4gICAgICBocmVmOiAnLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8TG9nb3V0SWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzE2cHgnLCBjb2xvcjogJyM5Njk3OUInIH19IC8+LFxuICAgICAgbGFiZWw6ICfjg5fjg6njgqTjg5Djgrfjg7zjg53jg6rjgrfjg7wnLFxuICAgICAgaHJlZjogJy8nLFxuICAgIH0sXG4gIF0sXG4gIGxvZ291dDoge1xuICAgIGljb246IDxMb2dvdXRJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz4sXG4gICAgbGFiZWw6ICfjg63jgrDjgqLjgqbjg4gnLFxuICAgIGhyZWY6ICcvbG9nb3V0JyxcbiAgfSxcbn07XG5cbmNvbnN0IFVzZXJNZW51ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKTtcbiAgfTtcbiAgY29uc3QgbG9nb3V0RXZlbnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlcl0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogT3ZlcmxheSBiYWNrZ3JvdW5kICovfVxuICAgICAge2lzTWVudVZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogJzk5OScsIC8vIE1ha2Ugc3VyZSBpdCdzIGJlbG93IHRoZSBtZW51ICgxMDAwKVxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJywgLy8gVG9nZ2xlIHRoaXMgYmFzZWQgb24gbWVudSB2aXNpYmlsaXR5XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgey8qIFVzZXJNZW51ICovfVxuICAgICAge2lzTWVudVZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogJzEwMDAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgd2lkdGg6ICcyNzVweCcsXG4gICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJywgLy8gVG9nZ2xlIHRoaXMgYmFzZWQgb24gbWVudSB2aXNpYmlsaXR5XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnOTMlJyxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+44Ki44Kr44Km44Oz44OI44Gr44Gk44GE44GmPC9oMj5cbiAgICAgICAgICAgICAge21lbnVJdGVtcy5hY2NvdW50Lm1hcCgoeyBpY29uLCBsYWJlbCwgaHJlZiB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFNNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9TTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPlNuYXAgTm9344Gr44Gk44GE44GmPC9oMj5cbiAgICAgICAgICAgICAge21lbnVJdGVtcy5hYm91dFNuYXBOb3cubWFwKCh7IGljb24sIGxhYmVsLCBocmVmIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8U01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvU01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17bG9nb3V0RXZlbnR9PlxuICAgICAgICAgICAgICA8U01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdj57bWVudUl0ZW1zLmxvZ291dC5pY29ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e21lbnVJdGVtcy5sb2dvdXQubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgIDwvU01lbnVDb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8U01vcmVIb3Jpekljb24gb25DbGljaz17dG9nZ2xlTWVudX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFNNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuYDtcblxuY29uc3QgU01vcmVIb3Jpekljb24gPSBzdHlsZWQoTW9yZUhvcml6SWNvbilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkxvZ291dEljb24iLCJQZXJzb25PdXRsaW5lSWNvbiIsIk1vcmVIb3Jpekljb24iLCJMaW5rIiwic3R5bGVkIiwiSHIiLCJsb2dvdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVJvdXRlciIsIm1lbnVJdGVtcyIsImFjY291bnQiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsImxhYmVsIiwiaHJlZiIsImFib3V0U25hcE5vdyIsIlVzZXJNZW51IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJpc01lbnVWaXNpYmxlIiwic2V0TWVudVZpc2libGUiLCJ0b2dnbGVNZW51IiwibG9nb3V0RXZlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiekluZGV4IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcCIsImluZGV4IiwiU01lbnVDb250YWluZXIiLCJkaXYiLCJTTW9yZUhvcml6SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/UserMenu.tsx\n"));

/***/ })

});