if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('Service worker registered successfully');
      })
      .catch(error => {
        console.log('Service worker registration failed:', error);
      });
  });
}