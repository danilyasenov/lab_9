export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function fetchFromStorage(key) {
  await delay(400); а
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export async function saveToStorage(key, data) {
  await delay(400);
  localStorage.setItem(key, JSON.stringify(data));
}
