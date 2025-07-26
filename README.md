# UI Text Improver

A Raycast extension that automatically enhances UI microcopy and LLM prompts by leveraging AI to generate clearer, more concise, and user-friendly text alternatives.

## What it does

This extension takes your selected text and uses AI to improve it for better user experience. It includes two powerful commands:

### Improve UI Text
Enhances UI microcopy for better user experience. Particularly useful for:

- **Figma designs** - Quickly improve microcopy in your design mockups
- **Web applications** - Enhance button text, form labels, and interface copy
- **Mobile apps** - Optimize app interface text for clarity and brevity
- **Marketing copy** - Refine promotional text for better engagement

### Enhance LLM Prompt
Transforms basic prompts into highly effective AI prompts for better outputs. Perfect for:

- **AI development** - Improve prompt engineering for more accurate responses
- **Content creation** - Get better structured and detailed AI outputs
- **Research** - Create prompts that generate more comprehensive results
- **Code generation** - Enhance prompts for better code suggestions

## Features

- **Smart text selection** - Automatically captures your currently selected text
- **AI-powered improvements** - Uses Raycast AI to generate better alternatives
- **New Zealand English** - Optimized for NZ spelling conventions (UI Text command)
- **Prompt enhancement** - Transforms basic prompts into detailed, effective LLM prompts
- **Instant replacement** - Automatically pastes the improved text back to your clipboard
- **Friendly tone** - Maintains approachable, user-friendly language
- **No-view mode** - Works seamlessly in the background

## Requirements

- **Raycast PRO account** - Required for AI access
- **macOS** - Uses AppleScript for text selection
- **Selected text** - Must have text selected in any application

## How to use

### Improve UI Text
1. **Select text** in any application (Figma, browser, text editor, etc.)
2. **Trigger the command** using your assigned hotkey
3. **Wait for processing** - The extension will show "Improving UI Text"
4. **Get improved copy** - The enhanced text is automatically pasted to your clipboard

### Enhance LLM Prompt
1. **Select a basic prompt** in any application
2. **Trigger the command** using your assigned hotkey
3. **Wait for processing** - The extension will show "Enhancing LLM Prompt"
4. **Get enhanced prompt** - The improved prompt is automatically pasted to your clipboard

## Installation

1. Clone this repository
2. Navigate to the `improve-ui` directory
3. Install dependencies: `pnpm install`
4. Build the extension: `pnpm run dev`
5. Add to Raycast Extensions

## Development

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm run dev
```

## Troubleshooting

- **"No text selected"** - Make sure you have text selected before running the command
- **"Requires Raycast PRO"** - You need a Raycast PRO account for AI features
- **"An error occurred"** - Check your internet connection and Raycast AI access
- **"Failed to enhance prompt"** - Ensure your selected text is a valid prompt that can be enhanced

## License

MIT License - see LICENSE file for details.

---

**Suggestion**: Bind both commands to hotkeys (like `Hyper+I` for UI text and `Hyper+P` for prompts) for instant access while working in design tools or AI development


