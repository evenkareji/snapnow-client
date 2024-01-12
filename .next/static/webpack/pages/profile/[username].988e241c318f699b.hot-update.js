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

/***/ "./src/components/organisms/UserMenu.tsx":
/*!***********************************************!*\
  !*** ./src/components/organisms/UserMenu.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Description */ \"./node_modules/@mui/icons-material/Description.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PersonOutline */ \"./node_modules/@mui/icons-material/PersonOutline.js\");\n/* harmony import */ var _mui_icons_material_TextSnippet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/TextSnippet */ \"./node_modules/@mui/icons-material/TextSnippet.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/userSlice */ \"./src/features/userSlice.ts\");\n/* harmony import */ var _atoms_MenuContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/MenuContainer */ \"./src/components/atoms/MenuContainer.tsx\");\n/* harmony import */ var _atoms_MoreHorizIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/MoreHorizIcon */ \"./src/components/atoms/MoreHorizIcon.tsx\");\n/* harmony import */ var _organisms_MenuSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/MenuSection */ \"./src/components/organisms/MenuSection.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/client/src/components/organisms/UserMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserMenu = _ref => {\n  _s();\n\n  let {\n    username\n  } = _ref;\n  const menuItems = {\n    account: [{\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_PersonOutline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        style: {\n          marginRight: '16px',\n          color: '#96979B'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, undefined),\n      label: 'プロフィール編集',\n      href: `/profile/${username}/edit`\n    }],\n    aboutSnapNow: [{\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        style: {\n          marginRight: '16px',\n          color: '#96979B'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, undefined),\n      label: '利用規約',\n      href: '/'\n    }, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_TextSnippet__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        style: {\n          marginRight: '16px',\n          color: '#96979B'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, undefined),\n      label: 'プライバシーポリシー',\n      href: '/'\n    }],\n    logout: {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        style: {\n          marginRight: '16px',\n          color: '#96979B'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, undefined),\n      label: 'ログアウト',\n      href: '/logout'\n    }\n  };\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  const {\n    0: isMenuVisible,\n    1: setMenuVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const toggleMenu = () => {\n    setMenuVisible(!isMenuVisible);\n  };\n\n  const logoutEvent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {\n    try {\n      dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_3__.logout)());\n    } catch (err) {\n      console.log(err);\n    }\n  }, [dispatch, router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '999',\n        background: 'rgba(0, 0, 0, 0.5)',\n        position: 'fixed',\n        top: '0',\n        left: '0',\n        width: '100%',\n        height: '100%',\n        display: 'block'\n      },\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, undefined), isMenuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      style: {\n        zIndex: '1000',\n        background: '#ffffff',\n        width: '275px',\n        height: '700px',\n        top: '0',\n        right: '0',\n        position: 'fixed',\n        overflowY: 'scroll',\n        display: 'block'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          width: '86%',\n          marginRight: 'auto',\n          marginLeft: 'auto',\n          paddingTop: '24px'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n          style: {\n            textAlign: 'left',\n            marginBottom: '24px',\n            fontSize: '20px'\n          },\n          children: \"\\u30D7\\u30E9\\u30A4\\u30D0\\u30B7\\u30FC\\u3068\\u8A2D\\u5B9A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_organisms_MenuSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          heading: \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u306B\\u3064\\u3044\\u3066\",\n          items: menuItems.account\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_organisms_MenuSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          heading: \"Snap Now\\u306B\\u3064\\u3044\\u3066\",\n          items: menuItems.aboutSnapNow\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          onClick: logoutEvent,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_MenuContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.icon\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: menuItems.logout.label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_MoreHorizIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(UserMenu, \"IP984wx6gv3JLxcjVi91ot+gVHI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserMenu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTVksUUFBUSxHQUFHLFFBQWtCO0VBQUE7O0VBQUEsSUFBakI7SUFBRUM7RUFBRixDQUFpQjtFQUNqQyxNQUFNQyxTQUFTLEdBQUc7SUFDaEJDLE9BQU8sRUFBRSxDQUNQO01BQ0VDLElBQUksZUFDRiw4REFBQyx5RUFBRDtRQUNFLEtBQUssRUFBRTtVQUFFQyxXQUFXLEVBQUUsTUFBZjtVQUF1QkMsS0FBSyxFQUFFO1FBQTlCO01BRFQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZKO01BTUVDLEtBQUssRUFBRSxVQU5UO01BT0VDLElBQUksRUFBRyxZQUFXUCxRQUFTO0lBUDdCLENBRE8sQ0FETztJQVloQlEsWUFBWSxFQUFFLENBQ1o7TUFDRUwsSUFBSSxlQUNGLDhEQUFDLHVFQUFEO1FBQWlCLEtBQUssRUFBRTtVQUFFQyxXQUFXLEVBQUUsTUFBZjtVQUF1QkMsS0FBSyxFQUFFO1FBQTlCO01BQXhCO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFGSjtNQUlFQyxLQUFLLEVBQUUsTUFKVDtNQUtFQyxJQUFJLEVBQUU7SUFMUixDQURZLEVBUVo7TUFDRUosSUFBSSxlQUNGLDhEQUFDLHdFQUFEO1FBQWlCLEtBQUssRUFBRTtVQUFFQyxXQUFXLEVBQUUsTUFBZjtVQUF1QkMsS0FBSyxFQUFFO1FBQTlCO01BQXhCO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFGSjtNQUlFQyxLQUFLLEVBQUUsWUFKVDtNQUtFQyxJQUFJLEVBQUU7SUFMUixDQVJZLENBWkU7SUE0QmhCWixNQUFNLEVBQUU7TUFDTlEsSUFBSSxlQUFFLDhEQUFDLG1FQUFEO1FBQVksS0FBSyxFQUFFO1VBQUVDLFdBQVcsRUFBRSxNQUFmO1VBQXVCQyxLQUFLLEVB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QUE5QjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBbkVGO0VBQUEsZ0JBREY7QUF1RUQsQ0F6SEQ7O0dBQU1kO1VBbUMwQkwsc0RBRWZIOzs7S0FyQ1hRO0FBMkhOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Vc2VyTWVudS50c3g/ZDQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xuaW1wb3J0IExvZ291dEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xuaW1wb3J0IFBlcnNvbk91dGxpbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uT3V0bGluZSc7XG5pbXBvcnQgVGV4dFNuaXBwZXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVGV4dFNuaXBwZXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgTWVudUNvbnRhaW5lciBmcm9tICcuLi9hdG9tcy9NZW51Q29udGFpbmVyJztcbmltcG9ydCBNb3JlSG9yaXpJY29uU3R5bGVkIGZyb20gJy4uL2F0b21zL01vcmVIb3Jpekljb24nO1xuaW1wb3J0IE1lbnVTZWN0aW9uIGZyb20gJy4uL29yZ2FuaXNtcy9NZW51U2VjdGlvbic7XG5cbmNvbnN0IFVzZXJNZW51ID0gKHsgdXNlcm5hbWUgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgYWNjb3VudDogW1xuICAgICAge1xuICAgICAgICBpY29uOiAoXG4gICAgICAgICAgPFBlcnNvbk91dGxpbmVJY29uXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzE2cHgnLCBjb2xvcjogJyM5Njk3OUInIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWw6ICfjg5fjg63jg5XjgqPjg7zjg6vnt6jpm4YnLFxuICAgICAgICBocmVmOiBgL3Byb2ZpbGUvJHt1c2VybmFtZX0vZWRpdGAsXG4gICAgICB9LFxuICAgIF0sXG4gICAgYWJvdXRTbmFwTm93OiBbXG4gICAgICB7XG4gICAgICAgIGljb246IChcbiAgICAgICAgICA8RGVzY3JpcHRpb25JY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcsIGNvbG9yOiAnIzk2OTc5QicgfX0gLz5cbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWw6ICfliKnnlKjopo/ntIQnLFxuICAgICAgICBocmVmOiAnLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAoXG4gICAgICAgICAgPFRleHRTbmlwcGV0SWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzE2cHgnLCBjb2xvcjogJyM5Njk3OUInIH19IC8+XG4gICAgICAgICksXG4gICAgICAgIGxhYmVsOiAn44OX44Op44Kk44OQ44K344O844Od44Oq44K344O8JyxcbiAgICAgICAgaHJlZjogJy8nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxvZ291dDoge1xuICAgICAgaWNvbjogPExvZ291dEljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JywgY29sb3I6ICcjOTY5NzlCJyB9fSAvPixcbiAgICAgIGxhYmVsOiAn44Ot44Kw44Ki44Km44OIJyxcbiAgICAgIGhyZWY6ICcvbG9nb3V0JyxcbiAgICB9LFxuICB9O1xuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNNZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudVZpc2libGUoIWlzTWVudVZpc2libGUpO1xuICB9O1xuICBjb25zdCBsb2dvdXRFdmVudCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgcm91dGVyXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc01lbnVWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6ICc5OTknLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7aXNNZW51VmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICB3aWR0aDogJzI3NXB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzcwMHB4JyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnODYlJyxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMjRweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzI0cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOODl+ODqeOCpOODkOOCt+ODvOOBqOioreWumlxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPE1lbnVTZWN0aW9uXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCLjgqLjgqvjgqbjg7Pjg4jjgavjgaTjgYTjgaZcIlxuICAgICAgICAgICAgICBpdGVtcz17bWVudUl0ZW1zLmFjY291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVTZWN0aW9uXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCJTbmFwIE5vd+OBq+OBpOOBhOOBplwiXG4gICAgICAgICAgICAgIGl0ZW1zPXttZW51SXRlbXMuYWJvdXRTbmFwTm93fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17bG9nb3V0RXZlbnR9PlxuICAgICAgICAgICAgICA8TWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2PnttZW51SXRlbXMubG9nb3V0Lmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57bWVudUl0ZW1zLmxvZ291dC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZW51Q29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPE1vcmVIb3Jpekljb25TdHlsZWQgb25DbGljaz17dG9nZ2xlTWVudX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNZW51O1xuIl0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uSWNvbiIsIkxvZ291dEljb24iLCJQZXJzb25PdXRsaW5lSWNvbiIsIlRleHRTbmlwcGV0SWNvbiIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsImxvZ291dCIsIk1lbnVDb250YWluZXIiLCJNb3JlSG9yaXpJY29uU3R5bGVkIiwiTWVudVNlY3Rpb24iLCJVc2VyTWVudSIsInVzZXJuYW1lIiwibWVudUl0ZW1zIiwiYWNjb3VudCIsImljb24iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibGFiZWwiLCJocmVmIiwiYWJvdXRTbmFwTm93IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJpc01lbnVWaXNpYmxlIiwic2V0TWVudVZpc2libGUiLCJ0b2dnbGVNZW51IiwibG9nb3V0RXZlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiekluZGV4IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInJpZ2h0Iiwib3ZlcmZsb3dZIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/UserMenu.tsx\n"));

/***/ })

});