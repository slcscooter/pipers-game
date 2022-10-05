export function nonCritical(message: string) {
  return console.log(`[Non-Critical]: Cannot validate element: ${message}`);
}

export function critical(message: string) {
  return console.warn(`[Critical]: Cannot validate element: ${message}. Please validate manually.`);
}

export function error(message: string) {
  return console.error(
    `[Error]: Cannot validate element: ${message}. Issue requires immediate resolution`
  );
}
