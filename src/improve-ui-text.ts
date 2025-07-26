import { AI, Clipboard, showHUD, showToast, Toast, environment } from "@raycast/api";
import { runAppleScript, showFailureToast } from "@raycast/utils";

export default async function Command() {
    if (environment.canAccess(AI)) {
  try {
    const selectedText = await getSelectedText();
    
    if (selectedText) {
      await showHUD("Improving UI Text");
      const improvedCopy = await generateImprovedCopy(selectedText);
      await Clipboard.paste(improvedCopy);
      await showToast({
        style: Toast.Style.Success,
        title: "Text Enhanced",
      });
    } else {
      await showToast({
        style: Toast.Style.Failure,
        title: "No text selected, or unable to retrieve text",
      });
    }
  } catch (error) {
    showFailureToast(error, { title: "An error occurred" });
  }
} else {
    await showHUD("Requires a Raycast PRO account / AI access :(");
  }
  
}

async function getSelectedText(): Promise<string | null> {
  try {
    const script = `
      tell application "System Events"
        keystroke "c" using command down
      end tell
      delay 0.1
      return the clipboard
    `;
    return await runAppleScript(script);
  } catch {
    return null;
  }
}

async function generateImprovedCopy(text: string): Promise<string> {
  try {
    const prompt = `Revise this UX copy to be clearer and more concise, using New Zealand English spelling. Focus on:
- Simplifying complex language
- Removing redundancies
- Favouring concise accurate language
- Maintaining a friendly, approachable tone
- Ensuring proper NZ spelling conventions

Return only the improved copy without explanations or notes.

Original text: ${text}`;
    return await AI.ask(prompt);
  } catch (error) {
    showFailureToast(error, { title: "Failed to generate new copy" });
    throw error;
  }
}


