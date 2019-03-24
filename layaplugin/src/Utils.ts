import * as vscode from 'vscode';
export namespace Utils{
    export function GetProgramRoot():string{
        return (<any>vscode.workspace.workspaceFolders)[0].uri.fsPath;
    }
}
export namespace Debug{
    export function log(mes:string):void{
        vscode.window.showInformationMessage(mes);
    }
    export function warn(mes:string):void{
        vscode.window.showWarningMessage(mes);
    }
    export function error(mes:string):void{
        vscode.window.showErrorMessage(mes);
    }
    /**修改状态栏信息 */
    export function stat(mes:string):void{
        vscode.window.setStatusBarMessage(mes);
    }
}