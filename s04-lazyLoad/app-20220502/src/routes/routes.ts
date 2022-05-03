import React, { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages/";
import { NoLazy } from "../pages/NoLazy";

type JSXComponent = () => JSX.Element;
type Route = {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
};

// const Lazy1 = lazy(() => import("../pages/LazyPage1"));
const Lazy1 = lazy(
  () => import(/* webpackChunkName: 'LazyPage1'*/ "../pages/LazyPage1")
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: 'LazyPage2'*/ "../pages/LazyPage2")
);
const Lazy3 = lazy(() => import("../pages/LazyPage3"));

const LazyLayout = lazy(() => import("../layout/LazyLayout"));
export const routes: Route[] = [
  // {
  //   to: "/lazy1",
  //   path: "lazy1",
  //   // Component: LazyPage1,
  //   Component: Lazy1,
  //   name: "Lazy-1",
  // },
  // {
  //   to: "/lazy2",
  //   path: "lazy2",
  //   // Component: LazyPage2,
  //   Component: Lazy2,
  //   name: "Lazy-2",
  // },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   // Component: LazyPage3,
  //   Component: Lazy3,
  //   name: "Lazy-3",
  // },
  {
    to: "/lazyload",
    path: "/lazyload/*",
    // Component: LazyPage1,
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/noLazy",
    path: "noLazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
