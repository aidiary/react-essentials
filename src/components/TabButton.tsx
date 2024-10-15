import { MouseEventHandler } from "react";

interface TabButonProps {
  children: string;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
}

export default function TabButton({
  children,
  onSelect,
  isSelected,
}: TabButonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
