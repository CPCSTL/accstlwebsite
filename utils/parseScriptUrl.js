export const parseScriptUrl = (url) => {
    const params = {};
    const queryString = url.split('?')[1] || '';
    queryString.split('&').forEach((paramString) => {
        const [key, value] = paramString.split('=');
        try {
            params[key] = decodeURIComponent(value);
        } catch (e) {
            console.error(`Error decoding URI component '${value}':`, e);
            // Handle or log the error as appropriate
            params[key] = value; // Optionally keep the original value
        }
    });
    return params;
};
