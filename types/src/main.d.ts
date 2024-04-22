import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/icon/icon.ts';
import './services/fetch.service.ts';
declare global {
    interface Window {
        hlx: {
            RUM_MASK_URL: string;
            codeBasePath: string;
            lighthouse: boolean;
        };
    }
}
