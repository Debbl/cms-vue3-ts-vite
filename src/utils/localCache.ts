class LocalCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
  }
  removeCache(key: string) {
    const value = localStorage.getItem(key);
    localStorage.removeItem(key);
    return value;
  }
  clearCache() {
    localStorage.clear();
  }
}

export default new LocalCache();
