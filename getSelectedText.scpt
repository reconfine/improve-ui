try
  tell application "System Events"
    set frontApp to name of first application process whose frontmost is true
  end tell
  tell application frontApp
    set selectedText to (the clipboard as text)
  end tell
on error
  set selectedText to ""
end try
return selectedText