class LocalCache<T extends Record<string, any>> {
  storage: Storage;
  constructor(storage: Storage) {
    this.storage = storage;
  }

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
  isKeepPassword: boolean;
  userInfo: any;
  userMenus: any;
}>(localStorage);
