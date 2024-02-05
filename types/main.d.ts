import './components/sidebar/sidebar.ts';
declare global {
    interface Window {
        hlx: {
            RUM_MASK_URL: string;
            codeBasePath: string;
            lighthouse: boolean;
        };
    }
}
