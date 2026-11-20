export type CopyResult = "copied" | "failed";
type TextClipboard = { writeText: (text: string) => Promise<void> };

export async function copyText(
  text: string,
  clipboard?: TextClipboard,
): Promise<CopyResult> {
  if (!clipboard) return "failed";
  try {
    await clipboard.writeText(text);
    return "copied";
  } catch {
    return "failed";
  }
}
