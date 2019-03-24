"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
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
//# sourceMappingURL=CompletionTSJson.1.js.map