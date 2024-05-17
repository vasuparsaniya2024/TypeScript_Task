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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const logs_1 = require("../logs");
function copyResources() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const srcDir:string = path.join(__dirname,"../public/assets");
            const srcDir = path_1.default.join(__dirname, "../../src/public/assets");
            const destDir = path_1.default.join(__dirname, "../../dist/public/assets");
            yield fs_extra_1.default.copy(`${srcDir}`, `${destDir}`);
            logs_1.logger.info("Copy");
        }
        catch (err) {
            (0, logs_1.logError)("Copy Folder Error " + err);
        }
    });
}
copyResources();
exports.default = copyResources;
