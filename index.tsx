
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("App initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Failed to find root element");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log("App rendered successfully");
} catch (error) {
  console.error("Render error:", error);
}
