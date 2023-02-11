import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={toggle}>Toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
