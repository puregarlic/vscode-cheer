// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const { getMessage } = require('./messages')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate() {
  const { emoji } = vscode.workspace.getConfiguration('cheer')
  console.log('"vscode-cheer" standing by!')

  // Make a space for supportive messages
  vscode.window.createStatusBarItem('left', 5)

  // On save —
  vscode.workspace.onWillSaveTextDocument(function() {
    // Display a message for a little bit
    vscode.window.setStatusBarMessage(getMessage(emoji), 2500)
  })
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate
