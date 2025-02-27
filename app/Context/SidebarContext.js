// context/SidebarContext.js
"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <SidebarContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}