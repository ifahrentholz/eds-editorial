# Boilerplate for AEM Edge Delivery Services
Your project's description...

## Environments
- Preview: [https://main--eds-editorial--ifahrentholz.hlx.page/](https://main--eds-editorial--ifahrentholz.hlx.page/)
- Live: [https://main--eds-editorial--ifahrentholz.hlx.live/](https://main--eds-editorial--ifahrentholz.hlx.live/)

## Getting started

### Prerequisites

- GitHub account
- Google or Microsoft account
- npm
  ```sh
  npm i
  ```

### Installation

1. Create your repository using the Boilerplate GitHub repository as a template:
    https://github.com/divae/boilerplate

2. Install the AEM Code Sync GitHub App on your repository: 
    https://github.com/apps/aem-code-sync/installations/new

    - Select `Only select Repositories` (not `All Repositories`).

3. Link content source (Google Drive or Microsoft Sharepoint)
    - Create a folder in Google Drive/Sharepoint and share the folder with the Adobe Experience Manager user (`helix@adobe.com`).
    - Change the reference in `fstab.yaml` in your GitHub repo to the Google Drive/Sharepoint folder URL and commit the changes.

4. Install the Sidekick Chrome extension:
    https://chromewebstore.google.com/detail/aem-sidekick/ccfggkjabjahcjoljmgmklhpaccedipo?pli=1

    - Go to the Google Drive/Sharepoint folder, click on the extension icon in the browser toolbar and select `Add this project`.
    - To preview and publish content, select a file in Google Drive/Sharepoint, click on the extension icon to open the new Sidekick Toolbar and click `preview` or `publish`.

5. Start development
    - Install the AEM Command Line Interface (CLI) and clone your repo locally.
    ```
      npm install -g @adobe/aem-cli
      git clone https://github.com/<owner>/<repo>
    ```
    - Change into project folder and start your local dev environment.
    ```
      cd <repo>
      npm start
    ```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
