"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const Utils_1 = require("./Utils");
const CompletionTSJson_1 = require("./CompletionTSJson");
var child_process = require("child_process");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // let disposable = vscode.commands.registerCommand('pbb.update', () => {
    // 	child_process.execFile("update.exe",null,{cwd:Utils.GetProgramRoot()+'/tools'},function(error:any,stdout:any,stderr:any){
    // 		if(error !==null){
    // 			Debug.error("更新失败，查看tools/error.txt日志");
    // 		}
    // 		else{Debug.log("更新完毕")} 
    // 	})
    // });
    // context.subscriptions.push(disposable);
    child_process.execFile(Utils_1.Utils.GetProgramRoot() + "/tools/update.exe", null, { cwd: Utils_1.Utils.GetProgramRoot() }, function (error, stdout, stderr) {
        if (error !== null) {
            Utils_1.Debug.error("监控失败，查看tools/error.txt日志");
        }
        else {
            Utils_1.Debug.log("监控完毕");
        }
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//vscode.languages.registerCompletionItemProvider('typescript', new CompletionTSJson(),".")
vscode.languages.registerDefinitionProvider("typescript", new CompletionTSJson_1.CompletionTSJson1());
//# sourceMappingURL=extension.js.map