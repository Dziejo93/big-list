## Available Scripts

First install the scripts:

```bash
yarn install
```

To run the app:
```bash
yarn start
```

To run the tests:
* jest: `yarn test:jest`
* cypress: `yarn test:cypress` or `yarn cypress:open`
    - both commands run `yarn start` so there is no need to run app by yourself
    - if you have app already running, you don't need to do anything as command just waits for specified port in `cypress:start:wait` script


If you want to run the app on different port change `PORT`, and `CYPRESS_BASE_URL` in `.env` file. 
