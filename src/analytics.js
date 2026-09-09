export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!import.meta.env.PROD || !/^G-[A-Z0-9]+$/.test(measurementId || '')) return;
  if (document.getElementById('google-analytics')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // config sends one page_view. Current navigation uses full page loads.
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.id = 'google-analytics';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}
