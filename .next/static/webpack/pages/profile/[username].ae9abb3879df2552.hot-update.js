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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ \"./node_modules/@mui/icons-material/PersonOutline.js\");\n/* harmony import */ var _mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/MoreHoriz */ \"./node_modules/@mui/icons-material/MoreHoriz.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _atoms_Hr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Hr */ \"./src/components/atoms/Hr.tsx\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/molecules/UserMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst menuItems = {\n  account: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined),\n    label: 'プロフィール編集',\n    href: '/edit'\n  }],\n  aboutSnapNow: [{\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined),\n    label: '利用規約',\n    href: '/'\n  }, {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, undefined),\n    label: 'プライバシーポリシー',\n    href: '/'\n  }],\n  logout: {\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        marginRight: '16px',\n        color: '#96979B'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }, undefined),\n    label: 'ログアウト',\n    href: '/logout'\n  }\n};\n\nconst UserMenu = () => {\n  _s();\n\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const {\n    0: isMenuVisible,\n    1: setMenuVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const toggleMenu = () => {\n    setMenuVisible(!isMenuVisible);\n  };\n\n  const logoutEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    try {\n      dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.logout)());\n    } catch (err) {\n      console.log(err);\n    }\n  }, [dispatch, router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '999',\n        // Make sure it's below the menu (1000)\n        background: 'rgba(0, 0, 0, 0.5)',\n        position: 'fixed',\n        top: '0',\n        left: '0',\n        width: '100%',\n        height: '100%',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, undefined), isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '1000',\n        background: '#ffffff',\n        width: '275px',\n        top: '0',\n        right: '0',\n        bottom: '0',\n        position: 'fixed',\n        display: 'block' // Toggle this based on menu visibility\n\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        style: {\n          width: '93%',\n          marginRight: 'auto',\n          marginLeft: 'auto'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n            children: \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, undefined), menuItems.account.map((_ref, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SMenuContainer, {\n                children: [icon, label]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n            children: \"Snap Now\\u306B\\u3064\\u3044\\u3066\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 15\n          }, undefined), menuItems.aboutSnapNow.map((_ref2, index) => {\n            let {\n              icon,\n              label,\n              href\n            } = _ref2;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SMenuContainer, {\n                children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                  children: label\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 112,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 19\n              }, undefined)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 17\n            }, undefined);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Hr__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: menuItems.logout.href,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SMenuContainer, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                children: menuItems.logout.icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 19\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                children: menuItems.logout.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 19\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SMoreHorizIcon, {\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(UserMenu, \"Sych8Pz+HjsbShH2tIizR6QPUP4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];\n});\n\n_c = UserMenu;\nconst SMenuContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  margin-right: 16px;\n`;\n_c2 = SMenuContainer;\nconst SMoreHorizIcon = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_icons_material_MoreHoriz__WEBPACK_IMPORTED_MODULE_9__[\"default\"])`\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n`;\n_c3 = SMoreHorizIcon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"UserMenu\");\n$RefreshReg$(_c2, \"SMenuContainer\");\n$RefreshReg$(_c3, \"SMoreHorizIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNVyxTQUFTLEdBQUc7RUFDaEJDLE9BQU8sRUFBRSxDQUNQO0lBQ0VDLElBQUksZUFDRiw4REFBQyx5RUFBRDtNQUFtQixLQUFLLEVBQUU7UUFBRUMsV0FBVyxFQUFFLE1BQWY7UUFBdUJDLEtBQUssRUFBRTtNQUE5QjtJQUExQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRko7SUFJRUMsS0FBSyxFQUFFLFVBSlQ7SUFLRUMsSUFBSSxFQUFFO0VBTFIsQ0FETyxDQURPO0VBVWhCQyxZQUFZLEVBQUUsQ0FDWjtJQUNFTCxJQUFJLGVBQUUsOERBQUMsa0VBQUQ7TUFBWSxLQUFLLEVBQUU7UUFBRUMsV0FBVyxFQUFFLE1BQWY7UUFBdUJDLEtBQUssRUFBRTtNQUE5QjtJQUFuQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRFI7SUFFRUMsS0FBSyxFQUFFLE1BRlQ7SUFHRUMsSUFBSSxFQUFFO0VBSFIsQ0FEWSxFQU1aO0lBQ0VKLElBQUksZUFBRSw4REFBQyxrRUFBRDtNQUFZLEtBQUssRUFBRTtRQUFFQyxXQUFXLEVBQUUsTUFBZjtRQUF1QkMsS0FBSyxFQUFFO01BQTlCO0lBQW5CO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFEUjtJQUVFQyxLQUFLLEVBQUUsWUFGVDtJQUdFQyxJQUFJLEVBQUU7RUFIUixDQU5ZLENBVkU7RUFzQmhCUixNQUFNLEVBQUU7SUFDTkksSUFBSSxlQUFFLDhEQUFDLGtFQUFEO01BQVksS0FBSyxFQUFFO1FBQUVDLFdBQVcsRUFBRSxNQUFmO1FBQXVCQyxLQUFLLEVBQUU7TUFBOUI7SUFBbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURBO0lBRU5DLEtBQUssRUFBRSxPQUZEO0lBR05DLElBQUksRUFBRTtFQUhBO0FBdEJR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QUEsYUFEMEI7VUFBQSxDQUEzQixDQUZILGVBVUUsOERBQUMseUNBQUQ7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQVZGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQW5CRixlQStCRTtVQUFBLHVCQUNFLDhEQUFDLGtEQUFEO1lBQU0sSUFBSSxFQUFFOUIsU0FBUyxDQUFDRixNQUFWLENBQWlCUSxJQUE3QjtZQUFBLHVCQUNFLDhEQUFDLGNBQUQ7Y0FBQSx3QkFDRTtnQkFBQSxVQUFNTixTQUFTLENBQUNGLE1BQVYsQ0FBaUJJO2NBQXZCO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsYUFERixlQUVFO2dCQUFBLFVBQU1GLFNBQVMsQ0FBQ0YsTUFBVixDQUFpQk87Y0FBdkI7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxhQUZGO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBL0JGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQVpGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFwQkosZUEyRUUsOERBQUMsY0FBRDtNQUFnQixPQUFPLEVBQUVPO0lBQXpCO01BQUE7TUFBQTtNQUFBO0lBQUEsYUEzRUY7RUFBQSxnQkFERjtBQStFRCxDQTdGRDs7R0FBTUo7VUFDMEJUOzs7S0FEMUJTO0FBK0ZOLE1BQU11QixjQUFjLEdBQUduQywyREFBVztBQUNsQztBQUNBO0FBQ0EsQ0FIQTtNQUFNbUM7QUFLTixNQUFNRSxjQUFjLEdBQUdyQywyREFBTSxDQUFDRixxRUFBRCxDQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7TUFBTXVDO0FBT04sK0RBQWV6QixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Vc2VyTWVudS50c3g/Yjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ291dEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xuaW1wb3J0IFBlcnNvbk91dGxpbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uT3V0bGluZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVIb3Jpeic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgSHIgfSBmcm9tICcuLi9hdG9tcy9Icic7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgYWNjb3VudDogW1xuICAgIHtcbiAgICAgIGljb246IChcbiAgICAgICAgPFBlcnNvbk91dGxpbmVJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz5cbiAgICAgICksXG4gICAgICBsYWJlbDogJ+ODl+ODreODleOCo+ODvOODq+e3qOmbhicsXG4gICAgICBocmVmOiAnL2VkaXQnLFxuICAgIH0sXG4gIF0sXG4gIGFib3V0U25hcE5vdzogW1xuICAgIHtcbiAgICAgIGljb246IDxMb2dvdXRJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz4sXG4gICAgICBsYWJlbDogJ+WIqeeUqOimj+e0hCcsXG4gICAgICBocmVmOiAnLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8TG9nb3V0SWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzE2cHgnLCBjb2xvcjogJyM5Njk3OUInIH19IC8+LFxuICAgICAgbGFiZWw6ICfjg5fjg6njgqTjg5Djgrfjg7zjg53jg6rjgrfjg7wnLFxuICAgICAgaHJlZjogJy8nLFxuICAgIH0sXG4gIF0sXG4gIGxvZ291dDoge1xuICAgIGljb246IDxMb2dvdXRJY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz4sXG4gICAgbGFiZWw6ICfjg63jgrDjgqLjgqbjg4gnLFxuICAgIGhyZWY6ICcvbG9nb3V0JyxcbiAgfSxcbn07XG5cbmNvbnN0IFVzZXJNZW51ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaXNNZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudVZpc2libGUoIWlzTWVudVZpc2libGUpO1xuICB9O1xuICBjb25zdCBsb2dvdXRFdmVudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgcm91dGVyXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBPdmVybGF5IGJhY2tncm91bmQgKi99XG4gICAgICB7aXNNZW51VmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAnOTk5JywgLy8gTWFrZSBzdXJlIGl0J3MgYmVsb3cgdGhlIG1lbnUgKDEwMDApXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCAvLyBUb2dnbGUgdGhpcyBiYXNlZCBvbiBtZW51IHZpc2liaWxpdHlcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogVXNlck1lbnUgKi99XG4gICAgICB7aXNNZW51VmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICB3aWR0aDogJzI3NXB4JyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCAvLyBUb2dnbGUgdGhpcyBiYXNlZCBvbiBtZW51IHZpc2liaWxpdHlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICc5MyUnLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj7jgqLjgqvjgqbjg7Pjg4jjgavjgaTjgYTjgaY8L2gyPlxuICAgICAgICAgICAgICB7bWVudUl0ZW1zLmFjY291bnQubWFwKCh7IGljb24sIGxhYmVsLCBocmVmIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8U01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1NNZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+U25hcCBOb3fjgavjgaTjgYTjgaY8L2gyPlxuICAgICAgICAgICAgICB7bWVudUl0ZW1zLmFib3V0U25hcE5vdy5tYXAoKHsgaWNvbiwgbGFiZWwsIGhyZWYgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxTTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9TTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17bWVudUl0ZW1zLmxvZ291dC5ocmVmfT5cbiAgICAgICAgICAgICAgICA8U01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnttZW51SXRlbXMubG9nb3V0Lmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnttZW51SXRlbXMubG9nb3V0LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU01lbnVDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxTTW9yZUhvcml6SWNvbiBvbkNsaWNrPXt0b2dnbGVNZW51fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgU01lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5gO1xuXG5jb25zdCBTTW9yZUhvcml6SWNvbiA9IHN0eWxlZChNb3JlSG9yaXpJY29uKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgVXNlck1lbnU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiTG9nb3V0SWNvbiIsIlBlcnNvbk91dGxpbmVJY29uIiwiTW9yZUhvcml6SWNvbiIsIkxpbmsiLCJzdHlsZWQiLCJIciIsImxvZ291dCIsInVzZURpc3BhdGNoIiwibWVudUl0ZW1zIiwiYWNjb3VudCIsImljb24iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibGFiZWwiLCJocmVmIiwiYWJvdXRTbmFwTm93IiwiVXNlck1lbnUiLCJkaXNwYXRjaCIsImlzTWVudVZpc2libGUiLCJzZXRNZW51VmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJsb2dvdXRFdmVudCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW5MZWZ0IiwibWFwIiwiaW5kZXgiLCJTTWVudUNvbnRhaW5lciIsImRpdiIsIlNNb3JlSG9yaXpJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/molecules/UserMenu.tsx\n"));

/***/ })

});