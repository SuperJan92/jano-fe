declare global {
    interface WordPressPage {
        id: string;
        slug: string;
        title: {
            rendered: string;
        };
    }

    interface WordPressBlock {
        blockName: string;
        attributes: {
            data: Record<string, any>;
        };
    }

    type Pages = WordPressPage[];
    type Blocks = WordPressBlock[];
}

export {}; 