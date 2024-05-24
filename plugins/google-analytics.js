export default defineNuxtPlugin((app) => {
  const GA_MEASUREMENT_ID = "G-4S4ZT9C790"; // Directly assign the a measurement ID
  if (GA_MEASUREMENT_ID) {
    if (typeof window !== "undefined") {
      // Check for window object (client-side)
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
        console.log("Google Analytics Event:", arguments); // Log events to console
      }
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);
    }
  }
});
