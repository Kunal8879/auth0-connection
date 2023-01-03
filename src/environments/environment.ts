// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const config = {
  "domain": "dev-offsa7x1.us.auth0.com",
  "clientId": "GkgtyKu8Z85nPsyzjUNBH2Qh8dXlruF0",
  "audience": "http://localhost:8443",
  "apiUri": "http://localhost:8443",
  "appUri": "http://localhost:4200",
  "errorPath": "/error"

}

const { domain, clientId, audience, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: false,
  // apiUrl4: './assets/segmentannee2.json',
  // apiUrlProduits: './assets/data_produits.json',
  // listScann: './assets/listScann.json',
  // fetchedProduct: './assets/fetchedProduct.json',
  auth: {
    domain,
    clientId,
    ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
  api: {
    serverUrl: config.apiUri,
  },
};
