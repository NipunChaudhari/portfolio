"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { CommandPalette } from "./CommandPalette";
import { Footer } from "./Footer";

// Owns the one piece of state (command palette open/closed) shared between
// the Navbar's trigger button and the global Cmd+K / Ctrl+K shortcut.
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifierPressed = isMac ? e.metaKey : e.ctrlKey;
      if (modifierPressed && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <LoadingScreen />
      <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      {children}
      <Footer />
    </>
  );
}
