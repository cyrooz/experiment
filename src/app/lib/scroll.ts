let scrollTimeout: NodeJS.Timeout;

document.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scrollbar-opacity', '1');

  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(() => {
    document.documentElement.style.setProperty('--scrollbar-opacity', '0');
  }, 1000); // Adjust the timeout duration as needed
});
