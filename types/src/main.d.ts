import './components/sidebar/sidebar.init.ts';
import './components/innerContainer/innerContainer.init.ts';
import './components/header.ts';
import './components/icon/icon.ts';
declare global {
    interface Window {
        hlx: {
            RUM_MASK_URL: string;
            codeBasePath: string;
            lighthouse: boolean;
        };
    }
}
