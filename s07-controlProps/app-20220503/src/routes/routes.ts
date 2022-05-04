import React, { lazy, LazyExoticComponent } from "react";
import ShoppingPages from "../02-component-patterns/pages/ShoppingPages";

type JSXComponent = () => JSX.Element;
type Route = {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
};

// const Lazy1 = lazy(() => import("../pages/LazyPage1"));
const Lazy1 = lazy(
  () => import(/* webpackChunkName: 'LazyPage1'*/ "../01-Lazy/pages/LazyPage1")
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: 'LazyPage1'*/ "../01-Lazy/pages/LazyPage2")
);
const Lazy3 = lazy(() => import("../01-Lazy/pages/LazyPage3"));

const LazyLayout = lazy(() => import("../01-Lazy/layout/LazyLayout"));
export const routes: Route[] = [
  {
    to: "/shopping",
    path: "shopping",
    // Component: LazyPage2,
    Component: ShoppingPages,
    name: "Shopping",
  },

  // {
  //   to: "/lazy1",
  //   path: "lazy1",
  //   // Component: LazyPage1,
  //   Component: Lazy1,
  //   name: "Lazy-1",
  // },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   // Component: LazyPage3,
  //   Component: Lazy3,
  //   name: "Lazy-3",
  // },
  // {
  //   to: "/lazyload",
  //   path: "/lazyload/*",
  //   // Component: LazyPage1,
  //   Component: LazyLayout,
  //   name: "LazyLayout",
  // },
  // {
  //   to: "/noLazy",
  //   path: "noLazy",
  //   Component: NoLazy,
  //   name: "No Lazy",
  // },
];
