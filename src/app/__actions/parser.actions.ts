export function stripHTMLTags(str: string) {
  const strippedString = str.replace(/(<([^>]+)>)/gi, "");
  return strippedString;
}
