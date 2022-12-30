#!/bin/bash
curl 'https://node-api.flipsidecrypto.com/' \
  -H 'authority: node-api.flipsidecrypto.com' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7' \
  -H 'authorization;' \
  -H 'content-type: application/json' \
  -H 'origin: https://app.flipsidecrypto.com' \
  -H 'referer: https://app.flipsidecrypto.com/' \
  -H 'sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' \
  --data-raw $'{"query":"query VisualizationWithDataQueries($visualizationId: ID\u0021) {\\n  visualization(id: $visualizationId) {\\n    ...VisualizationFields\\n    queries {\\n      id\\n      statement\\n      lastSuccessfulRun {\\n        id\\n        columnLabels\\n        columnTypes\\n        queryId\\n        results\\n        createdAt\\n        updatedAt\\n        __typename\\n      }\\n      parameters {\\n        id\\n        name\\n        value\\n        type\\n        restrictedValues\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment VisualizationFields on Visualization {\\n  __typename\\n  id\\n  type\\n  description\\n  title\\n  version\\n  organizationId\\n  canUpdate\\n  canDelete\\n  createdAt\\n  updatedAt\\n  createdBy {\\n    id\\n    username\\n    __typename\\n  }\\n  updatedBy {\\n    id\\n    username\\n    __typename\\n  }\\n  options\\n}\\n","operationName":"VisualizationWithDataQueries","variables":{"visualizationId":"9e90c8b3-cbdc-4d1d-971f-522b5c15459d"}}' \
  --compressed