export const rgbToHex = (data: number[]) => {
    const [r, g, b] = data;
    // Normalize RGB values from range 0-1 to 0-255
    const normalizedR = Math.round(r * 255);
    const normalizedG = Math.round(g * 255);
    const normalizedB = Math.round(b * 255);

    // Convert each component to hexadecimal and pad with zeros if necessary
    const hexR = normalizedR.toString(16).padStart(2, '0');
    const hexG = normalizedG.toString(16).padStart(2, '0');
    const hexB = normalizedB.toString(16).padStart(2, '0');

    // Concatenate the hexadecimal components to form the color code
    const hexColor = `#${hexR}${hexG}${hexB}`;

    return hexColor.toUpperCase(); // Optionally convert to uppercase
};

// Function to convert hexadecimal color to RGB
export const hexToRgb = (hex: string) => {
    // Remove '#' if it exists
    hex = hex.replace(/^#/, '');
  
    // Parse the hex values into separate R, G, B values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Normalize RGB values to be in the range of 0 to 1
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;
  
    // Return the normalized RGB values as an array
    return [normalizedR, normalizedG, normalizedB];
};

export const convertGoogleDriveUrl = (url: string) => {
    const fileId = url.match(/d\/([a-zA-Z0-9_-]+)/)?.[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
};