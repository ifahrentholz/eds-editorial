import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/table.ts';
import './blocks/form/form.ts';
declare global {
    interface Window {
        hlx: {
            RUM_MASK_URL: string;
            codeBasePath: string;
            lighthouse: boolean;
        };
    }
}
