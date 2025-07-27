import { AI, Clipboard, showHUD, showToast, Toast, environment } from "@raycast/api";
import { runAppleScript, showFailureToast } from "@raycast/utils";

export default async function Command() {
  if (environment.canAccess(AI)) {
    try {
      const selectedText = await getSelectedText();
      
      if (selectedText) {
        const toast = await showToast({
          style: Toast.Style.Animated,
          title: "Enhancing LLM Prompt...",
        });
        const enhancedPrompt = await generateEnhancedPrompt(selectedText);
        await Clipboard.paste(enhancedPrompt);
        await toast.hide();
        await showToast({
          style: Toast.Style.Success,
          title: "Prompt Enhanced",
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

async function generateEnhancedPrompt(text: string): Promise<string> {
  try {
    const prompt = `Enhance this request: "${text}"

Make my request more effective by:
1. Clarifying the main goal and specific outcome desired
2. Adding relevant context and background information
3. Specifying preferred output format (bullet points, paragraphs, code blocks, etc.)
4. Including any constraints or limitations to consider
5. Requesting specific examples that illustrate the desired output
6. Asking for step-by-step explanations where appropriate
7. Defining key terms that might be ambiguous
8. Specifying the level of detail needed (brief overview vs comprehensive analysis)
9. Indicating any sources or references that should be considered
10. Requesting alternative approaches or perspectives if relevant

Return only the enhanced request without explanations or meta-commentary.

Enhanced request:`;
    
    return await AI.ask(prompt);
  } catch (error) {
    showFailureToast(error, { title: "Failed to enhance prompt" });
    throw error;
  }
} 