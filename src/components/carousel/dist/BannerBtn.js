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
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var BannerBtn = function (_a) {
    var image = __rest(_a, []);
    var infoBtn = image.infoBtn;
    return react_1["default"].createElement(Wrapper, null, infoBtn);
};
var Wrapper = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: var(--clr-primary-5);\n  background-color: transparent;\n  position: absolute;\n  top: 10%;\n  left: 12%;\n  border: 1px solid var(--clr-primary-5);\n  border-radius: 5px;\n  padding: 3px 11px;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  color: var(--clr-primary-5);\n  background-color: transparent;\n  position: absolute;\n  top: 10%;\n  left: 12%;\n  border: 1px solid var(--clr-primary-5);\n  border-radius: 5px;\n  padding: 3px 11px;\n  font-size: 14px;\n  line-height: 20px;\n"])));
exports["default"] = BannerBtn;
var templateObject_1;
