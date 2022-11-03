import type { RouteRecordRaw } from "vue-router";
import type { UserMenu } from "~/stores/modules/type";

// eslint-disable-next-line import/no-mutable-exports
export let indexMenu: UserMenu;

function mapMenusToRoutes(userMenus: UserMenu[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const rotesFiles = import.meta.glob("~/router/main/**/*.ts", {
    eager: true,
  });
  Object.values(rotesFiles).forEach((RouteComponent: any) => {
    allRoutes.push(RouteComponent.default as RouteRecordRaw);
  });
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
        if (!indexMenu && route) indexMenu = menu;
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}

function mapPathToMenu(path: string, userMenus: UserMenu[]) {
  for (const menus of userMenus) {
    for (const menu of menus.children) {
      if (path === menu.url) return menu;
    }
  }
}

export { mapMenusToRoutes, mapPathToMenu };
