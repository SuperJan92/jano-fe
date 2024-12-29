const apiKey = "6I68qznpymku2JULToPsKs4UfRQ5UdT8tKqTuVSYWcXP0l3NV94tnvUTJtUuoM97";
const API_BASE = "https://admin.janvanerkel.nl/wp-json/wp/v2";
const CUSTOM_API_BASE = "https://admin.janvanerkel.nl/wp-json/custom/v1";

export async function getPages() {
    try {
        // Wacht op de fetch-aanroep
        const response = await fetch(`${API_BASE}/pages`, {
            headers: {
                "X-API-KEY": apiKey, // Voeg je API key toe in de headers
            },
        });

        // Controleer of de response succesvol is
        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van pagina's: ${response.status}`);
        }

        // Wacht op de JSON-antwoord
        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}

export async function getBlocks(pageId) {
    try {
        // Haal de blokken op via de aangepaste API
        const response = await fetch(`${CUSTOM_API_BASE}/blocks/${pageId}`, {
            headers: {
                "X-API-KEY": apiKey,
            },
        });

        // Controleer de response
        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van blokken: ${response.status}`);
        }

        // Parse de response als JSON
        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}