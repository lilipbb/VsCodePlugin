"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
var Utils;
(function (Utils) {
    function GetProgramRoot() {
        return vscode.workspace.workspaceFolders[0].uri.fsPath;
    }
    Utils.GetProgramRoot = GetProgramRoot;
})(Utils = exports.Utils || (exports.Utils = {}));
var Debug;
(function (Debug) {
    function log(mes) {
        vscode.window.showInformationMessage(mes);
    }
    Debug.log = log;
    function warn(mes) {
        vscode.window.showWarningMessage(mes);
    }
    Debug.warn = warn;
    function error(mes) {
        vscode.window.showErrorMessage(mes);
    }
    Debug.error = error;
    /**修改状态栏信息 */
    function stat(mes) {
        vscode.window.setStatusBarMessage(mes);
    }
    Debug.stat = stat;
})(Debug = exports.Debug || (exports.Debug = {}));
//# sourceMappingURL=Utils.js.map