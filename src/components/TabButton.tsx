interface TabButonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isSelected: boolean;
}

export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
