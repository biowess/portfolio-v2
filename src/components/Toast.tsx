import { useState, createContext, useContext, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { spring } from '../lib/motion';

// ─── Toast Types ───
interface ToastData {
  id: number;
  message: string;
  variant: 'success' | 'info';
}

interface ToastContextType {
  showToast: (message: string, variant?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

// ─── Provider ───
let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback((message: string, variant: 'success' | 'info' = 'info') => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, message, variant }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const dismiss = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(4px)' }}
              transition={spring.gentle}
              className="pointer-events-auto surface px-5 py-3.5 flex items-center gap-3 min-w-[260px] max-w-[380px]"
            >
              {toast.variant === 'success' ? (
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
              ) : (
                <Info size={18} className="text-[var(--accent)] shrink-0" />
              )}
              <span className="text-[13px] font-medium text-[var(--text-primary)] flex-grow">
                {toast.message}
              </span>
              <button
                onClick={() => dismiss(toast.id)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-0.5 shrink-0"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
