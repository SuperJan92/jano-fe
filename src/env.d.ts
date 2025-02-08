/// <reference types="astro/client" />

declare module '../layouts/Layout.astro' {
    const component: any;
    export default component;
}

declare module '../components/Block-about.astro' {
    const component: any;
    export default component;
}

declare module '../components/Block-hero.astro' {
    const component: any;
    export default component;
}

declare module '../components/Block-contact.astro' {
    const component: any;
    export default component;
}

declare module '../lib/wp-api' {
    export function getPages(): Promise<WordPressPage[]>;
    export function getBlocks(pageId: string): Promise<WordPressBlock[]>;
} 