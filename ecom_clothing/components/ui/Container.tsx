import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer";
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`max-w-screen-2xl mx-auto px-6 ${className}`}
    >
      {children}
    </Component>
  );
}
