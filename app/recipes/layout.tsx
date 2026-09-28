import { ReactNode } from "react";

export const metadata = {
  title: "Foodflix | Recipes",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}