import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const PWAInstallPrompt: React.FC = () => {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  if (!deferredPrompt || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="fixed bottom-6 left-6 z-40 max-w-sm p-4 rounded-2xl bg-[#101722]/95 border border-[#168BFF]/30 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center text-[#00D5FF] shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-[#F5F7FA]">
              {t.pwa.installTitle}
            </h4>
            <p className="text-[11px] text-[#A6B0C0] line-clamp-1">
              {t.pwa.installDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-lg bg-[#168BFF] hover:bg-[#00A8FF] text-white text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PWA</span>
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-md text-[#687386] hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
