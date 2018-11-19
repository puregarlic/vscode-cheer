const vscode = require('vscode')
const { getMessage } = require('./messages')

function activate() {
  // Pull the extension configuration
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
