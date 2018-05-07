export const App: any = {
  store           : 'vMall',  // change this with your app name
  ContactEmail    : 'info@vmallapp.com', // change this with your email contact
  url             : 'http://localhost/vmall', // change this with your URL (please use https, recommended)
  OneSignalAppID  : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // change this with your onesignal api key
  GCM             : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Google Project Number for Google Cloud Messaging


  paypalSandboxClientID: 'AZjyISbp1zmOhZ0o_iAG3W2IGjlz2hvEC-8cGoQ7fXcMFN9afaRuW0X1B1PVSgkSuTQWOKqM9N4NTkOP',
  paypalLiveClientID: '', // get this from paypal developer dashboard
  paypalState: 'PayPalEnvironmentSandbox', // change this to 'PayPalEnvironmentProduction' if you wanna live

  languages: [
    {id: 'en', title: 'English'}
  ],

  defaultLang: 'en'
};