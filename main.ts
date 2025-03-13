/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Editor, MarkdownView, Notice, Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
	async onload() {
		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon(
			"dice",
			"Sample Plugin",
			(evt: MouseEvent) => {
				// Called when the user clicks the icon.
				new Notice("This is a notice!");
			}
		);
		// Perform additional things with the ribbon
		ribbonIconEl.addClass("my-plugin-ribbon-class");

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText("Status Bar Text");

		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
      id: 'move-caret-to-beginning-of-line',
      name: 'Move Caret to the Beginning of Line',
			icon: "chevrons-left",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				// Get the active element (where the cursor currently is)
				const activeElement = document.activeElement;

				// Create and dispatch the Home key event
				const event = new KeyboardEvent("keydown", {
					key: "Home",
					code: "Home",
					keyCode: 36,
					which: 36,
					bubbles: true,
				});

				// Dispatch the event to simulate pressing the Home key
				activeElement!.dispatchEvent(event);
			},
		});
	}

	onunload() {}
}
