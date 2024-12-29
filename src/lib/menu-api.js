const apiKey = import.meta.env.VITE_WP_KEY;
const API_BASE = "https://admin.janvanerkel.nl/wp-json/wp/v2";

export async function getMenu(menuId) {
    try {
        const response = await fetch(`${API_BASE}/menus/${menuId}/items`, {
            headers: {
                "X-API-KEY": apiKey, // Voeg de API key toe in de headers
            },
        });

        // Controleer of de response succesvol is
        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van menu-items: ${response.status}`);
        }

        // Wacht op de JSON-antwoord
        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}