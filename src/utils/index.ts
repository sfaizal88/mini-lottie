/**
 * Utils
 * @author - Faizal
 * @date - 12th June 2024
 */

// CONVERT RGB TO HEX COLOR CODE
export const rgbToHex = (data: number[]) => {
    const [r, g, b] = data;
    // Convert RGB values from range 0-1 to 0-255
    const normalizedR = Math.round(r * 255);
    const normalizedG = Math.round(g * 255);
    const normalizedB = Math.round(b * 255);

    // Convert into actual hex code for RGB No
    const hexR = normalizedR.toString(16).padStart(2, '0');
    const hexG = normalizedG.toString(16).padStart(2, '0');
    const hexB = normalizedB.toString(16).padStart(2, '0');

    // Combine all Hex code
    const hexColor = `#${hexR}${hexG}${hexB}`;
    return hexColor.toUpperCase();
};

// CONVERT HEX CODE TO RGB
export const hexToRgb = (hex: string) => {
    // Remove '#' if it exists
    hex = hex.replace(/^#/, '');
  
    // Parse the hex values into separate R, G, B values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Convert RGB values to be in the range of 0 to 1
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;
  
    // Return the normalized RGB values as an array
    return [normalizedR, normalizedG, normalizedB];
};