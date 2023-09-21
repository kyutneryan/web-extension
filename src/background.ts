import { IMESSAGE } from './models/message';

chrome.runtime.onMessage.addListener(({ type, payload }: IMESSAGE, _, sendResponse) => {
  if (type === 'HELLO') {
    sendResponse(`${payload.text} ${chrome.i18n.getMessage('appName')}`);
  }
});
