"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useOpenPanel } from "@openpanel/nextjs";
import type { DownloadLocation } from "./DownloadButton";
import { DownloadPanel } from "./DownloadPanel";

const OpenDownloadContext = createContext<(location: DownloadLocation) => void>(() => {});

/** Returns the function every Download button calls to open the shared modal. */
export const useOpenDownloadModal = () => useContext(OpenDownloadContext);

// One modal for the whole page. Native <dialog> + showModal() gives us the focus trap,
// Esc to close, an inert page behind and focus returned to the button, with no library.
export function DownloadModalProvider({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  // Bumped on every open: it is the panel's key, so each open starts from a clean form.
  const [session, setSession] = useState(0);
  const { track } = useOpenPanel();

  const open = useCallback((location: DownloadLocation) => {
    track("download_modal_open", { location });
    setSession((n) => n + 1);
  }, [track]);

  // Open after React has rendered the fresh panel, so the old one never flashes.
  useEffect(() => {
    if (session === 0 || dialog.current?.open) return;
    dialog.current?.showModal();
    // showModal() would focus the Close button (first in DOM); the email field is the point.
    dialog.current?.querySelector<HTMLInputElement>("#download-email")?.focus();
  }, [session]);

  const close = useCallback(() => dialog.current?.close(), []);

  return (
    <OpenDownloadContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-labelledby="download-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="download-dialog [color-scheme:dark] m-auto w-[calc(100%-2rem)] max-w-md overflow-visible rounded-3xl border border-line bg-surface p-0 text-foreground shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {session > 0 && <DownloadPanel key={session} onClose={close} />}
      </dialog>
    </OpenDownloadContext.Provider>
  );
}
