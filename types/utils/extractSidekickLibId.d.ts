export type ConstructedElement = {
    id: string | undefined;
    text: string;
    href?: string;
};
export declare const extractSidekickLibId: (element: any) => ConstructedElement;
