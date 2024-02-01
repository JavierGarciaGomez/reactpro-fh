import { LazyExoticComponent, lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { NoLazy } from "../pages/NoLazy";

type JSXComponent = () => JSX.Element;
type Route = {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
};

const Lazy1 = lazy(() => import("../pages/LazyPage1"));
const Lazy2 = lazy(() => import("../pages/LazyPage2"));
const Lazy3 = lazy(() => import("../pages/LazyPage3"));

const LazyLayout = lazy(() => import("../layout/LazyLayout"));

export const routes: Route[] = [
  // {
  //   to: "/lazy1",
  //   path: "/lazy1/*",
  //   Component: LazyPage1,
  //   name: "lazy1",
  // },
  // {
  //   to: "/lazy2",
  //   path: "/lazy2/*",
  //   Component: LazyPage2,
  //   name: "lazy2",
  // },
  // {
  //   to: "/lazy3",
  //   path: "/lazy3/*",
  //   Component: LazyPage3,
  //   name: "lazy3",
  // },
  {
    to: "/lazy1",
    path: "/lazy1/*",
    Component: Lazy1,
    name: "lazy1",
  },
  {
    to: "/lazy2",
    path: "/lazy2/*",
    Component: Lazy2,
    name: "lazy2",
  },
  {
    to: "/lazy3",
    path: "/lazy3/*",
    Component: Lazy3,
    name: "lazy3",
  },
  {
    to: "/no-lazy",
    path: "/no-lazy/*",
    Component: NoLazy,
    name: "no-lazy",
  },
  {
    to: "/lazy-layout",
    path: "/lazy-layout/*",
    Component: LazyLayout,
    name: "lazy-layout",
  },
];
