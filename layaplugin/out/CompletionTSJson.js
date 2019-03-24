"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const Utils_1 = require("./Utils");
const path = require('path');
const fs = require('fs');
//代码提示
class CompletionTSJson {
    provideCompletionItems(document, position, token) {
        // 获取当前输入的单词文本
        let wordAtPosition = document.getWordRangeAtPosition(position);
        var currentWord = '';
        if (wordAtPosition && wordAtPosition.start.character < position.character) {
            var word = document.getText(wordAtPosition);
            currentWord = word.substr(0, position.character - wordAtPosition.start.character);
        }
        // 猜测匹配结果，返回候选列表
        return new Promise(function (resolve, reject) {
            resolve([new vscode.CompletionItem("pbb")]);
        });
    }
    // 这里可以对刚刚返回的候选文本列表在做二次处理，例如：增加详细的文档描述信息
    resolveCompletionItem(item, token) {
        // 对每个候选文本增加文档描述
        return new Promise(function (resolve, reject) {
            item.detail = "string[]";
            resolve(item);
        });
    }
}
exports.CompletionTSJson = CompletionTSJson;
//代码跳转
class CompletionTSJson1 {
    provideDefinition(document, position, token) {
        const fileName = document.fileName;
        const workDir = path.dirname(fileName);
        const word = document.getText(document.getWordRangeAtPosition(position));
        const line = document.lineAt(position);
        const projectPath = Utils_1.Utils.GetProgramRoot();
        console.log('====== 进入 provideDefinition 方法 ======');
        console.log('fileName: ' + fileName); // 当前文件完整路径
        console.log('workDir: ' + workDir); // 当前文件所在目录
        console.log('word: ' + word); // 当前光标所在单词
        console.log('line: ' + line.text); // 当前光标所在行
        console.log('projectPath: ' + projectPath); // 当前工程目录
        return new vscode.Location(vscode.Uri.file(projectPath + "/bin/js/GameConfig.js"), new vscode.Position(0, 0));
        // 只处理package.json文件
        if (/\/package\.json$/.test(fileName)) {
            console.log(word, line.text);
            const json = document.getText();
            if (new RegExp(`"(dependencies|devDependencies)":\\s*?\\{[\\s\\S]*?${word.replace(/\//g, '\\/')}[\\s\\S]*?\\}`, 'gm').test(json)) {
                let destPath = `${workDir}/node_modules/${word.replace(/"/g, '')}/package.json`;
                if (fs.existsSync(destPath)) {
                    // new vscode.Position(0, 0) 表示跳转到某个文件的第一行第一列
                    return new vscode.Location(vscode.Uri.file(destPath), new vscode.Position(0, 0));
                }
            }
        }
    }
}
exports.CompletionTSJson1 = CompletionTSJson1;
//# sourceMappingURL=CompletionTSJson.js.map