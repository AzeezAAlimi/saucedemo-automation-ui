"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("../../../fixtures/fixtures");
fixtures_1.test.describe('Load Testing', () => {
    fixtures_1.test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ homePage }) {
        yield homePage.goTo();
    }));
    (0, fixtures_1.test)('Accessibility keyboard navigation', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        yield page.getByRole('textbox', { name: 'username' }).click();
        yield page.getByRole('textbox', { name: 'password' }).click();
        yield page.pause();
    }));
});
