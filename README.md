# Transak React Native SDK

An SDK for react native integration of Transak widget.
Wrapped over webview(`react-native-webview`), it provides option to listen to order events.
Using this you get Google Pay integrated by default.

## Installation

```sh
# Using yarn
$ yarn add @transak/react-native-sdk

# Using npm
$ npm install @transak/react-native-sdk
```

Install these required peer dependencies to facilitate auto-linking (If not already part of your app)

```
yarn add react-native-webview react-native-inappbrowser-reborn @react-native-community/netinfo
```

## Example usage

```js
import TransakWebView from '@transak/react-native-sdk';

function TransakReactNativeSdkIntegration() {
  return (
    <TransakWebView
      config={{
        apiKey: '<your-api-key>',
        environment: '<environment: STAGING/PRODUCTION>',
      }}
      onTransakEventHandler={(event, data) => console.log(event, data)}
    />
  );
};
```

### Props

The component accepts all the valid props for react-native-webview except the following: injectJavaScript, sharedCookiesEnabled, injectedJavaScript, injectedJavaScriptBeforeContentLoaded

| Prop                  | Description                                                                                                                             |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| config                 | Refer [here](https://www.notion.so/transak/Query-Parameters-9ec523df3b874ec58cef4fa3a906f238) for a full list of valid options          |
| onTransakEventHandler | Accepts callback function to listen to order related [events](https://www.notion.so/transak/WebSocket-6beaa769ec7d4ca0aa0e2b7dc5b0c43d) |

## License

ISC Licensed. Copyright (c) 2022 Transak Inc..
