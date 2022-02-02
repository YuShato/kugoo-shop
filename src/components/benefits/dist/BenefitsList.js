"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var BenefitsItem_tsx_1 = require("./BenefitsItem.tsx");
var Rating_tsx_1 = require("./Rating.tsx");
var BenefitsList = function (_a) {
    var benefitsList = _a.benefitsList;
    return (react_1["default"].createElement(BenefitsWrapper, null,
        react_1["default"].createElement("ul", null, benefitsList.map(function (benefit, index) { return (react_1["default"].createElement(BenefitsItem_tsx_1["default"], __assign({ key: index }, benefit))); })),
        react_1["default"].createElement(Rating_tsx_1["default"], null)));
};
var BenefitsWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 60px;\n\n  ul {\n    display: grid;\n    gap: 30px;\n    grid-template-columns: repeat(3, 1fr);\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 60px;\n\n  ul {\n    display: grid;\n    gap: 30px;\n    grid-template-columns: repeat(3, 1fr);\n    width: 100%;\n  }\n"])));
exports["default"] = BenefitsList;
var templateObject_1;
