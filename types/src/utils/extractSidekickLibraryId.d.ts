export type ConstructedElement = {
    id: string | undefined;
    text: string;
    href?: string;
};
export declare const extractSidekickLibraryId: (element: any) => ConstructedElement;
