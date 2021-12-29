// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('confirmetc.pragProg', function () {
		vscode.window.showInformationMessage('Pragmatic Programmer Enabled.');
		vscode.workspace.onWillSaveTextDocument(() => {
			vscode.window.showWarningMessage('P.P: Make sure your changes is ETC!');
		})
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {
	vscode.window.showInformationMessage('Pragmatic Programmer Enabled.');
}

module.exports = {
	activate,
	deactivate
}
