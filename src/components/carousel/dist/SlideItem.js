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
var BannerBtn_tsx_1 = require("./BannerBtn.tsx");
var SliderBtn_tsx_1 = require("./SliderBtn.tsx");
var styled_components_1 = require("styled-components");
var SliderTitle_tsx_1 = require("./SliderTitle.tsx");
var SliderFreeBtn_tsx_1 = require("./SliderFreeBtn.tsx");
var SliderImage_1 = require("./SliderImage");
var SlideItem = function (_a) {
    var image = __rest(_a, []);
    var id = image.id, isSpecial = image.isSpecial;
    return isSpecial ? (react_1["default"].createElement(Slide, { className: "keen-slider__slide number-slide" + id + " slide" },
        react_1["default"].createElement(SliderTitle_tsx_1["default"], __assign({}, image)),
        react_1["default"].createElement(BannerBtn_tsx_1["default"], __assign({}, image)),
        react_1["default"].createElement(SliderBtn_tsx_1["default"], __assign({}, image)),
        react_1["default"].createElement(SliderFreeBtn_tsx_1["default"], null),
        react_1["default"].createElement(SliderImage_1["default"], __assign({}, image)))) : (react_1["default"].createElement(Slide, { className: "keen-slider__slide number-slide" + id + " slide" },
        react_1["default"].createElement(SliderImage_1["default"], __assign({}, image))));
};
var Slide = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  [class^='number-slide'],\n  [class*=' number-slide'] {\n    background: grey;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n    color: #fff;\n    font-weight: 500;\n    height: 420px;\n    max-height: 100vh;\n  }\n\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n  background: rgb(24, 29, 95);\n  background: linear-gradient(\n    128deg,\n    rgba(64, 76, 255, 0.8) 0%,\n    rgba(174, 63, 255, 0.8) 100%\n  );\n\n  & + .number-slide2 {\n    background: rgb(83, 24, 21);\n    background: linear-gradient(\n      128deg,\n      rgba(255, 154, 63, 0.8) 0%,\n      rgba(255, 75, 64, 0.8) 100%\n    );\n  }\n\n  & + .number-slide3 {\n    background: rgb(56, 78, 19);\n    background: linear-gradient(\n      128deg,\n      rgba(182, 255, 64, 0.8) 0%,\n      rgba(63, 255, 71, 0.8) 100%\n    );\n    background: linear-gradient(\n      128deg,\n      rgba(189, 255, 83, 0.8) 0%,\n      rgba(43, 250, 82, 0.8) 100%\n    );\n  }\n\n  & + .number-slide4 {\n    background: rgb(23, 88, 84);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 255, 242, 0.8) 0%,\n      rgba(63, 188, 255, 0.8) 100%\n    );\n  }\n\n  & + .number-slide5 {\n    background: rgb(78, 19, 48);\n    background: linear-gradient(\n      128deg,\n      rgba(255, 64, 156, 0.8) 0%,\n      rgba(255, 63, 63, 0.8) 100%\n    );\n  }\n  & + .number-slide6 {\n    background: rgb(24, 29, 95);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 76, 255, 0.8) 0%,\n      rgba(174, 63, 255, 0.8) 100%\n    );\n  }\n  & + .number-slide1 {\n    background: rgb(24, 29, 95);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 76, 255, 0.8) 0%,\n      rgba(174, 63, 255, 0.8) 100%\n    );\n  }\n"], ["\n  position: relative;\n\n  [class^='number-slide'],\n  [class*=' number-slide'] {\n    background: grey;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n    color: #fff;\n    font-weight: 500;\n    height: 420px;\n    max-height: 100vh;\n  }\n\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n  background: rgb(24, 29, 95);\n  background: linear-gradient(\n    128deg,\n    rgba(64, 76, 255, 0.8) 0%,\n    rgba(174, 63, 255, 0.8) 100%\n  );\n\n  & + .number-slide2 {\n    background: rgb(83, 24, 21);\n    background: linear-gradient(\n      128deg,\n      rgba(255, 154, 63, 0.8) 0%,\n      rgba(255, 75, 64, 0.8) 100%\n    );\n  }\n\n  & + .number-slide3 {\n    background: rgb(56, 78, 19);\n    background: linear-gradient(\n      128deg,\n      rgba(182, 255, 64, 0.8) 0%,\n      rgba(63, 255, 71, 0.8) 100%\n    );\n    background: linear-gradient(\n      128deg,\n      rgba(189, 255, 83, 0.8) 0%,\n      rgba(43, 250, 82, 0.8) 100%\n    );\n  }\n\n  & + .number-slide4 {\n    background: rgb(23, 88, 84);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 255, 242, 0.8) 0%,\n      rgba(63, 188, 255, 0.8) 100%\n    );\n  }\n\n  & + .number-slide5 {\n    background: rgb(78, 19, 48);\n    background: linear-gradient(\n      128deg,\n      rgba(255, 64, 156, 0.8) 0%,\n      rgba(255, 63, 63, 0.8) 100%\n    );\n  }\n  & + .number-slide6 {\n    background: rgb(24, 29, 95);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 76, 255, 0.8) 0%,\n      rgba(174, 63, 255, 0.8) 100%\n    );\n  }\n  & + .number-slide1 {\n    background: rgb(24, 29, 95);\n    background: linear-gradient(\n      128deg,\n      rgba(64, 76, 255, 0.8) 0%,\n      rgba(174, 63, 255, 0.8) 100%\n    );\n  }\n"])));
exports["default"] = SlideItem;
var templateObject_1;
