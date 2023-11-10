import * as vscode from 'vscode';
import './assets/img/logo.png';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "region-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
  const addCodeRegionCommand = vscode.commands.registerTextEditorCommand('region-generator.addCodeRegion', async (textEditor, edit) => {
    const document = textEditor.document;
		const selection = textEditor.selection;

		const startPosition = selection.start;
		const endPosition = selection.end;
		const startLine = document.lineAt(startPosition.line);
    const startIndentation = startLine.text.match(/^\s*/)?.[0] ?? '';
    const endLine = document.lineAt(endPosition.line);
		const endIndentation = endLine.text.match(/^\s*/)?.[0] ?? '';

		const selectedRange = getMulLineRange(document, selection);
		const selectedText = textEditor.document.getText(selectedRange);

		await vscode.commands.executeCommand('editor.action.commentLine');

		const commentedRange = getMulLineRange(document, selection);
		const commentedText = document.getText(commentedRange);

		const maybeCommentType = getCommentType(selectedText,selectedText);
		const commentType = maybeCommentType === 'unknown' ? getCommentType(commentedText, selectedText) : maybeCommentType;

		const [insertTextBefore, insertTextAfter] = getInsertText(commentType, selectedText);

		await vscode.commands.executeCommand('undo');
		
		textEditor.edit(builder => {
			builder.replace(selectedRange, `${startIndentation}${insertTextBefore}\n${selectedText}\n${endIndentation}${insertTextAfter}`);
		});

    const config = vscode.workspace.getConfiguration('region-generator');
    const autoFold = config.get("autoFold.enabled");
		autoFold && vscode.commands.executeCommand('editor.fold');

		const character = getRegionDesIndex(commentType,startIndentation);
		const position:vscode.Position = startPosition.with(startPosition.line, character);
		const revealSelection = new vscode.Selection(position, position);
		textEditor.selection = revealSelection;
		textEditor.revealRange(revealSelection);
  });

  context.subscriptions.push(addCodeRegionCommand);
}

function getMulLineRange(document: vscode.TextDocument, selection: vscode.Selection) {
	const startPosition = selection.start;
	const endPosition = selection.end;
	return new vscode.Range(
		startPosition.with(startPosition.line, 0),
		endPosition.with(endPosition.line, document.lineAt(endPosition.line).text.length)
	);
}

function getCommentType(commentedText: string, selectedText: string) {
  if (commentedText.match(/^[\s]*\/\*[\s\S]*\*\//)) {
    return 'block';
  } else if (commentedText.match(/^[\s]*<!--[\s\S]*-->/)) {
    return 'html';
  } else if (commentedText.match(/^[\s]*\/\/.*/)) {
    return 'line';
  } else {
    return 'unknown';
  }
}

function getInsertText(commentType: string, selectedText: string): [string, string] {
  let insertTextBefore = '';
  let insertTextAfter = '';

  switch (commentType) {
    case 'block':
      insertTextBefore = '/* #region */';
      insertTextAfter = '/* #endregion */';
      break;
    case 'html':
      insertTextBefore = '<!-- #region -->';
      insertTextAfter = '<!-- #endregion -->';
      break;
    case 'line':
      insertTextBefore = '// #region ';
      insertTextAfter = '// #endregion';
      break;
  }

  return [insertTextBefore, insertTextAfter];
}

function getRegionDesIndex(commentType: string, startIndentation: string): number {
	const startIndentationLength = startIndentation.length;
	switch (commentType) {
    case 'block':
      return startIndentationLength + '/* #region '.length;
    case 'html':
      return startIndentationLength + '<!-- #region '.length;
    case 'line':
      return startIndentationLength + '// #region '.length;
    default:
      return startIndentationLength;
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}

