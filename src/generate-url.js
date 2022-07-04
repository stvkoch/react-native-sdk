import generateQueryString from 'query-string';

const TRANSAK_URLS = {
  STAGING: 'https://staging-global.transak.com/',
  PRODUCTION: 'https://global.transak.com/',
};

function generateUrl(config) {
  let queryParams = {};
  let queryString = '';

  if (config && config.apiKey) {
    queryParams.apiKey = config.apiKey;
    if (config.cryptoCurrencyCode) queryParams.cryptoCurrencyCode = config.cryptoCurrencyCode;
    if (config.defaultCryptoCurrency) queryParams.defaultCryptoCurrency = config.defaultCryptoCurrency;
    if (config.walletAddress) queryParams.walletAddress = config.walletAddress;
    if (config.themeColor) queryParams.themeColor = config.themeColor.replace('#', '');
    if (config.walletAddress) queryParams.walletAddress = config.walletAddress;
    if (config.fiatAmount) queryParams.fiatAmount = config.fiatAmount;
    if (config.defaultFiatAmount) queryParams.defaultFiatAmount = config.defaultFiatAmount;
    if (config.defaultCryptoAmount) queryParams.defaultCryptoAmount = config.defaultCryptoAmount;
    if (config.walletAddressesData && (config.walletAddressesData.networks || config.walletAddressesData.coins)) {
      queryParams.walletAddressesData = {};
      if (config.walletAddressesData.networks) queryParams.walletAddressesData.networks = config.walletAddressesData.networks;
      if (config.walletAddressesData.coins) queryParams.walletAddressesData.coins = config.walletAddressesData.coins;
      queryParams.walletAddressesData = JSON.stringify(queryParams.walletAddressesData);
    }
    if (config.fiatCurrency) queryParams.fiatCurrency = config.fiatCurrency;
    if (config.countryCode) queryParams.countryCode = config.countryCode;
    if (config.paymentMethod) queryParams.paymentMethod = config.paymentMethod;
    if (config.defaultPaymentMethod) queryParams.defaultPaymentMethod = config.defaultPaymentMethod;
    if (config.isAutoFillUserData) queryParams.isAutoFillUserData = config.isAutoFillUserData;
    if (config.isFeeCalculationHidden) queryParams.isFeeCalculationHidden = config.isFeeCalculationHidden;
    if (config.disablePaymentMethods) queryParams.disablePaymentMethods = config.disablePaymentMethods;
    if (config.email) queryParams.email = config.email;
    if (config.userData) queryParams.userData = JSON.stringify(config.userData)
    if (config.partnerOrderId) queryParams.partnerOrderId = config.partnerOrderId;
    if (config.partnerCustomerId) queryParams.partnerCustomerId = config.partnerCustomerId;
    if (config.exchangeScreenTitle) queryParams.exchangeScreenTitle = config.exchangeScreenTitle;
    if (config.hideMenu) queryParams.hideMenu = config.hideMenu;
    if (config.accessToken) queryParams.accessToken = config.accessToken;
    if (config.hideExchangeScreen) queryParams.hideExchangeScreen = config.hideExchangeScreen;
    if (config.isDisableCrypto) queryParams.isDisableCrypto = config.isDisableCrypto;
    if (config.redirectURL) queryParams.redirectURL = config.redirectURL;
    if (config.hostURL) queryParams.hostURL = (config.hostURL ? config.hostURL : window.location.origin);
    if (config.disableWalletAddressForm) queryParams.disableWalletAddressForm = config.disableWalletAddressForm;
    if (config.cryptoCurrencyList) queryParams.cryptoCurrencyList = config.cryptoCurrencyList.split(',');
    if (config.networks) queryParams.networks = config.networks.split(',');
    if (config.defaultNetwork) queryParams.defaultNetwork = config.defaultNetwork;
    if (config.network) queryParams.network = config.network;

    queryString = generateQueryString.stringify(queryParams, { arrayFormat: 'comma' });
  } else throw('[Transak SDK] => Please enter your API Key');

  return `${TRANSAK_URLS[config.environment || 'PRODUCTION']}?${queryString}`;
}

export { generateUrl };
