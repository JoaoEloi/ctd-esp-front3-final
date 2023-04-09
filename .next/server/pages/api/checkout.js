"use strict";
(() => {
var exports = {};
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "invalidAddress": () => (/* binding */ invalidAddress),
  "validCard": () => (/* binding */ validCard),
  "withoutAuthorizationCard": () => (/* binding */ withoutAuthorizationCard),
  "withoutFundsCard": () => (/* binding */ withoutFundsCard)
});

;// CONCATENATED MODULE: ./services/checkout/checkout.errors.ts
const ERROR_METHOD_NOT_ALLOWED = {
    error: "METHOD_NOT_ALLOWED",
    message: "Method not allowed"
};
const ERROR_CARD_WITHOUT_FUNDS = {
    error: "CARD_WITHOUT_FUNDS",
    message: "The card doesn't have the require amount to do the transfer"
};
const ERROR_CARD_WITHOUT_AUTHORIZATION = {
    error: "CARD_WITHOUT_AUTHORIZATION",
    message: "The card cannot authorize the payment. Please call your bank before try again"
};
const ERROR_CARD_DATA_INCORRECT = {
    error: "CARD_DATA_INCORRECT",
    message: "The card data is not valid. Please review your data and submit it again"
};
const ERROR_INCORRECT_ADDRESS = {
    error: "INCORRECT_ADDRESS",
    message: "The address data is invalid. Please review your data and submit it again"
};
const ERROR_SERVER = {
    error: "SERVER_ERROR",
    message: "Server error. Please try again in a few seconds"
};

;// CONCATENATED MODULE: ./pages/api/checkout.route.ts

const serverError = "error";
const invalidAddress = "invalid";
const validCard = "4242 4242 4242 4242".replace(" ", "");
const withoutFundsCard = "4111 4111 4111 4111".replace(" ", "");
const withoutAuthorizationCard = "4000 4000 4000 4000".replace(" ", "");
function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
        return;
    }
    try {
        const body = req.body;
        if (body.customer.address.address2 === invalidAddress) {
            res.status(400).json(ERROR_INCORRECT_ADDRESS);
            return;
        }
        if (body.card.number === withoutFundsCard) {
            res.status(400).json(ERROR_CARD_WITHOUT_FUNDS);
            return;
        }
        if (body.card.number === withoutAuthorizationCard) {
            res.status(400).json(ERROR_CARD_WITHOUT_AUTHORIZATION);
            return;
        }
        if (body.card.number === validCard) {
            res.status(200).json({
                data: body
            });
            return;
        }
        res.status(400).json(ERROR_CARD_DATA_INCORRECT);
    } catch (err) {
        console.log(err);
        res.status(500).json(ERROR_SERVER);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8188));
module.exports = __webpack_exports__;

})();