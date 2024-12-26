const apiKey = "6I68qznpymku2JULToPsKs4UfRQ5UdT8tKqTuVSYWcXP0l3NV94tnvUTJtUuoM97";
const API_BASE = "https://admin.janvanerkel.nl/wp-json/wp/v2";

/** Haalt de pagina's op uit de WordPress API */
export async function getPages() {
    try {
        const response = await fetch(`${API_BASE}/pages`, {
            headers: {
                "X-API-KEY": apiKey, // Gebruik de juiste API-header
            },
        });

        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van pagina's: ${response.status}`);
        }

        return await response.json(); // Retourneer de opgehaalde pagina's
    } catch (e) {
        console.error(`Fout bij de fetch-aanroep: ${e.message}`);
        throw e;
    }
}