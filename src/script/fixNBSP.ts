export function fixPolishText(text: string): string {
	return text.replace(/\b([iwaozu])\s+(?=\S)/g, '$1&nbsp;');
}
