declare module '../lib/wp-api' {
    export function getPages(): Promise<WordPressPage[]>;
    export function getBlocks(pageId: string): Promise<WordPressBlock[]>;
}

export {}; 