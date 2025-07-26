# UI Text Improver

A Raycast extension that automatically enhances UI microcopy by leveraging AI to generate clearer, more concise, and user-friendly text alternatives.

## What it does

This extension takes your selected text and uses AI to improve it for better user experience. It's particularly useful for:

- **Figma designs** - Quickly improve microcopy in your design mockups
- **Web applications** - Enhance button text, form labels, and interface copy
- **Mobile apps** - Optimize app interface text for clarity and brevity
- **Marketing copy** - Refine promotional text for better engagement

## Features

- **Smart text selection** - Automatically captures your currently selected text
- **AI-powered improvements** - Uses Raycast AI to generate better alternatives
- **New Zealand English** - Optimized for NZ spelling conventions
- **Instant replacement** - Automatically pastes the improved text back to your clipboard
- **Friendly tone** - Maintains approachable, user-friendly language
- **No-view mode** - Works seamlessly in the background

## Requirements

- **Raycast PRO account** - Required for AI access
- **macOS** - Uses AppleScript for text selection
- **Selected text** - Must have text selected in any application

## How to use

1. **Select text** in any application (Figma, browser, text editor, etc.)
2. **Trigger the extension** using your assigned hotkey (suggested: `Hyper+I`)
3. **Wait for processing** - The extension will show "Improving UI Text"
4. **Get improved copy** - The enhanced text is automatically pasted to your clipboard

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

- **"No text selected"** - Make sure you have text selected before running the extension
- **"Requires Raycast PRO"** - You need a Raycast PRO account for AI features
- **"An error occurred"** - Check your internet connection and Raycast AI access

## License

MIT License - see LICENSE file for details.

---

**Suggestion**: Bind this to a hotkey (like `Hyper+I`) for instant access while working in Figma or other design tools


