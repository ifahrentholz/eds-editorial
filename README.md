# Boilerplate for AEM Edge Delivery Services
Your project's description...

## Environments
- Preview: [https://main--eds-editorial--ifahrentholz.hlx.page/](https://main--eds-editorial--ifahrentholz.hlx.page/)
- Live: [https://main--eds-editorial--ifahrentholz.hlx.live/](https://main--eds-editorial--ifahrentholz.hlx.live/)

## Getting started

### Prerequisites

- GitHub account
- Google or Sharepoint account

* npm
  ```sh
  npm i
  ```

### Installation

1. Create your repository using the Boilerplate GitHub repository as a template.
    https://github.com/divae/boilerplate

2. Install the AEM Code Sync GitHub App on your repository by visiting this link: 
    https://github.com/apps/aem-code-sync/installations/new

    Select `Only select Repositories` (not `All Repositories`).

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
