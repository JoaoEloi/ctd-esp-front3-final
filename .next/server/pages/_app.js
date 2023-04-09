"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app_page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dist/styled-jsx/style.js
var style = __webpack_require__(536);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layouts/header/general-header.component.tsx








const Header = ({ variant  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            disableGutters: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Link, {
                        variant: "h6",
                        sx: {
                            mr: 2,
                            flexGrow: 1,
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: [
                            " ",
                            "DH-Marvel"
                        ]
                    })
                }),
                variant == "general" && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            variant: "body2",
                            sx: {
                                color: "white",
                                fontSize: 18,
                                fontWeight: 600
                            },
                            children: "FAQ"
                        })
                    })
                })
            ]
        })
    });
};
const GeneralHeader = ({ variant  })=>{
    return variant == "general" ? /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            variant: variant
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx(Header, {
        variant: variant
    });
};
GeneralHeader.defaultProps = {
    variant: "general"
};
/* harmony default export */ const general_header_component = (GeneralHeader);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/layouts/footer/general-footer.component.tsx





const GeneralFooter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        display: "flex",
        p: "1rem 0",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid #eaeaea",
        sx: {
            backgroundColor: "#000"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Link, {
            href: "https://www.digitalhouse.com",
            target: "_blank",
            rel: "noopener noreferrer",
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            sx: {
                textDecoration: "none"
            },
            children: [
                "Powered by",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    ml: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "https://dh-frontend.cdn.prismic.io/dh-frontend/f197059f-7cf3-4a35-a182-314ea08cb560_LogoHeader.svg",
                        alt: "Digital House Logo",
                        width: 168,
                        height: 13
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const general_footer_component = (GeneralFooter);

;// CONCATENATED MODULE: ./components/layouts/layout-general.tsx






const LayoutGeneral = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
            direction: "column",
            height: "100%",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(general_header_component, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(general_footer_component, {})
            ]
        })
    });
};
/* harmony default export */ const layout_general = (LayoutGeneral);

;// CONCATENATED MODULE: ./styles/material-theme.ts

const theme = (0,material_.createTheme)({
    typography: {
        fontFamily: "Roboto, sans-serif"
    }
});

;// CONCATENATED MODULE: ./pages/_app.page.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_general, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: "jsx-18e166ef6ed0a31b" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "18e166ef6ed0a31b",
                children: "#__next{height:100%}"
            })
        ]
    });
}
/* harmony default export */ const _app_page = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1892:
/***/ ((module) => {

module.exports = require("next/dist/styled-jsx/dist/index/index.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,41], () => (__webpack_exec__(2184)));
module.exports = __webpack_exports__;

})();