"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var BenefitsItem = function (_a) {
    var benefit = __rest(_a, []);
    var title = benefit.title, subtitle = benefit.subtitle;
    return (React.createElement(Wrapper, null,
        React.createElement("h4", null, title),
        React.createElement("p", null, subtitle)));
};
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  h4 {\n    font-weight: 600;\n    font-size: 25px;\n    line-height: 36px;\n    text-transform: uppercase;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 23px;\n  }\n  "], ["\n  h4 {\n    font-weight: 600;\n    font-size: 25px;\n    line-height: 36px;\n    text-transform: uppercase;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 23px;\n  }\n  "])));
exports["default"] = BenefitsItem;
var templateObject_1;
