class LocalCache<T extends Record<string, any>> {
  setCache<P extends keyof T>(key: P, value: T[P]) {
    localStorage.setItem(key as string, JSON.stringify(value));
  }

  getCache<P extends keyof T>(key: P): T[P] | undefined {
    const value = localStorage.getItem(key as string);
    if (value) return JSON.parse(value);
  }

  removeCache<P extends keyof T>(key: P) {
    const value = localStorage.getItem(key as string);
    localStorage.removeItem(key as string);
    return value;
  }

  clearCache() {
    localStorage.clear();
  }
}

export default new LocalCache<{
  token: string;
  name: string;
  password: string;
  userInfo: any;
  userMenus: any;
}>();
