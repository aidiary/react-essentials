import React from "react";

interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer?: React.ElementType;
}

export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
}: TabsProps) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
