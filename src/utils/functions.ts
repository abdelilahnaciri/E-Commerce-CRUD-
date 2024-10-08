/**
 * Slices a given text to a specified maximum length and adds an ellipsis ("...") if the text exceeds the limit.
 *
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=80] - The maximum number of characters to keep before slicing. Default is 80.
 * @returns {string} The sliced text with an ellipsis if it exceeds the maximum length, or the original text if within the limit.
 */
export function txtSlicer(txt: string, max: number = 80) {
  if (txt.length >= max) return `${txt.slice(0, max).trim()}...`;
  return txt;
}

/**
 *
 * @param {string} x - The numeric string to be formatted.
 * @returns {string} A formatted version of the input numeric string with commas as thousand separators.
 *
 */
export function numberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
