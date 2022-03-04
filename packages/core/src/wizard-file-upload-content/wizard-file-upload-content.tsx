import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function wizardFileUploadContent() {
    return (
        <host shadowDom>
            <div class="flex flex-col justify-center">
                <seam-icon class="">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cake-slice" class="svg-inline--fa fa-cake-slice" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M571.8 238.8C574.5 228.9 576 218.6 576 208C576 146.1 525.9 96 464 96c-16.75 0-32.88 3.625-48 10.75C384.4 61.75 331.8 32 272 32C177.6 32 100.2 106.4 96.2 200.1C39.2 220.1 0 274.3 0 336C0 415.6 64.38 480 144 480H512c70.75 0 128-57.25 128-128C640 305 614.3 261.3 571.8 238.8zM507.5 448H149.5c-58.31 0-110.9-42.16-116.9-100.2C26.79 291.2 63.27 241.9 114.3 227.1c8.367-2.291 13.78-10.26 13.73-18.94C128 208.7 128 208.4 128 208C127.1 147.3 165.1 91.38 222.7 72.19c71.47-23.82 139.2 6.727 172.3 60.89c5.984 9.803 18.35 11.99 28.22 6.111c16.88-10.06 37.78-14.07 59.94-8.988c26.85 6.154 49.45 27 57.26 53.41c5.799 19.61 4.307 38.74-2.508 55.16c-4.137 9.969 2.061 20.75 11.98 24.1c37.34 15.97 62.42 55.06 57.5 99.25C601.9 412.3 557.1 448 507.5 448zM251.3 267.3L304 214.6V384c0 8.844 7.156 16 16 16s16-7.156 16-16V214.6l52.69 52.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62l-80-80C328.2 161.6 324.1 160 320 160S311.8 161.6 308.7 164.7l-80 80c-6.25 6.25-6.25 16.38 0 22.62S245.1 273.6 251.3 267.3z"></path></svg>
                </seam-icon>
                <div class="justify-items-center">
                    <p class="text-sm">Drag and drop to upload or browser to choose file</p>
                </div>
            </div>            
        </host>
    );
};

wizardFileUploadContent.props = {
    myProp: String
};

wizardFileUploadContent.styles = [tailwindcss];

export const WizardFileUploadContent = c(wizardFileUploadContent);

customElements.define("seam-wizard-file-upload-content", WizardFileUploadContent);