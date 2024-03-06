import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/icon/icon.ts';
import HLX from './app/index.ts';
export declare const App: HLX;
declare global {
    interface Window {
        hlx: {
            RUM_MASK_URL: string;
            codeBasePath: string;
            lighthouse: boolean;
        };
    }
}
