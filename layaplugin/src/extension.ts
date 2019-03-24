// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Utils, Debug } from './Utils';
import { CompletionTSJson, CompletionTSJson1 } from './CompletionTSJson';
var child_process = require("child_process")

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// let disposable = vscode.commands.registerCommand('pbb.update', () => {
	// 	child_process.execFile("update.exe",null,{cwd:Utils.GetProgramRoot()+'/tools'},function(error:any,stdout:any,stderr:any){
	// 		if(error !==null){
	// 			Debug.error("更新失败，查看tools/error.txt日志");
	// 		}
	// 		else{Debug.log("更新完毕")} 
	// 	})
	// });
	// context.subscriptions.push(disposable);
	child_process.execFile(Utils.GetProgramRoot()+"/tools/update.exe", null, { cwd: Utils.GetProgramRoot()}, function (error: any, stdout: any, stderr: any) {
		if(error !== null) {
			Debug.error("监控失败，查看tools/error.txt日志");
		}
		else { Debug.log("监控完毕");}
	})
}

// this method is called when your extension is deactivated
export function deactivate() { }
//vscode.languages.registerCompletionItemProvider('typescript', new CompletionTSJson(),".")
vscode.languages.registerDefinitionProvider("typescript", new CompletionTSJson1())
