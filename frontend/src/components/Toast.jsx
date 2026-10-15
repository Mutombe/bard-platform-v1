import { createContext, useCallback, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ClockIcon, XIcon } from "@phosphor-icons/react";

/**
 * Lightweight, dependency-free toast system.
 *
 * ToastProvider wraps the app (see main.jsx) and renders a bottom-centre
 * stack through a portal on <body>, above every overlay. useToast() exposes
 * toast(message) / dismiss(id); duplicate messages are de-duped so repeated
 * clicks don't stack. useComingSoon() is the shared handler for links that
 * point at the (not-yet-live) Online Banking portal.
 */

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message, { duration = 3400 } = {}) => {
      const id = ++idRef.current;
      let added = false;
      setToasts((list) => {
        if (list.some((t) => t.message === message)) return list; // de-dupe
        added = true;
        return [...list, { id, message }];
      });
      if (added) setTimeout(() => dismiss(id), duration);
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

function ToastViewport({ toasts, onDismiss }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-x-0 bottom-0 z-[200] flex flex-col items-center gap-2 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            className="pointer-events-auto flex items-center gap-3 rounded-full bg-navy-700 text-white pl-3.5 pr-2 py-2.5 shadow-[0_14px_44px_rgba(12,10,20,0.3)] border border-white/10 max-w-[calc(100vw-2rem)]"
          >
            <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
              <ClockIcon size={16} weight="bold" className="text-white" />
            </span>
            <span className="text-[14.5px] font-medium leading-tight">{t.message}</span>
            <button
              onClick={() => onDismiss(t.id)}
              aria-label="Dismiss"
              className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            >
              <XIcon size={14} weight="bold" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { toast: () => {}, dismiss: () => {} };
  return ctx;
}

// Online Banking portal routes that aren't live yet. Any link that would land
// on one of these should surface the "coming soon" toast instead of navigating.
export function isPortalPath(path = "") {
  return path === "/login" || path === "/app" || path.startsWith("/app/");
}

const COMING_SOON_MESSAGE = "Online Banking — coming soon.";

// Shared click handler for portal links: cancels navigation and shows the toast.
export function useComingSoon() {
  const { toast } = useToast();
  return useCallback(
    (e) => {
      if (e && typeof e.preventDefault === "function") e.preventDefault();
      toast(COMING_SOON_MESSAGE);
    },
    [toast]
  );
}
