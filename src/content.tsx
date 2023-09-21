chrome.runtime.sendMessage({ type: 'HELLO', payload: { text: 'Hello' } }, console.log);
