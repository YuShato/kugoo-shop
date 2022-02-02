"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Connect_tsx_1 = require("./Connect.tsx");
var HeaderCenter_tsx_1 = require("./HeaderCenter.tsx");
var Navbar_tsx_1 = require("./Navbar.tsx");
var Sidebar_1 = require("./Sidebar");
var consts_1 = require("../../consts/consts");
var catalog_1 = require("../../consts/catalog");
var userBlock_1 = require("../../consts/userBlock");
var Header = function () {
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Connect_tsx_1["default"], { phoneNumberArray: consts_1.PhoneNumberArray, connectLinkArray: consts_1.ConnectLinkArray, socialLinkArray: consts_1.SocialLinkArray }),
        react_1["default"].createElement(HeaderCenter_tsx_1["default"], { catalogInfoArray: catalog_1.CatalogInfoArray, catalogSelectOptions: catalog_1.CatalogSelectOptions, userBlockData: userBlock_1.UserBlockData }),
        react_1["default"].createElement(Navbar_tsx_1["default"], { menuLinkArray: consts_1.MenuLinkArray }),
        react_1["default"].createElement(Sidebar_1["default"], null)));
};
var Wrapper = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"])));
exports["default"] = Header;
var templateObject_1;
