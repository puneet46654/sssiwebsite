"use client";
import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'cookie-consent';

const subscribe = () => () => {};

function readConsent() {
    try {
        return localStorage.getItem(CONSENT_KEY);
    } catch {
        return null;
    }
}

export default function CookieBanner() {
    // The server snapshot reports consent as given so the banner never flashes in the prerendered HTML.
    const storedConsent = useSyncExternalStore(subscribe, readConsent, () => 'pending');
    const [dismissed, setDismissed] = useState(false);
    const isVisible = !storedConsent && !dismissed;

    const saveConsent = (value: 'accepted' | 'rejected') => {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch {
            // Storage may be blocked (private mode); still hide the banner for this visit.
        }
        setDismissed(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    role="dialog"
                    aria-live="polite"
                    aria-label="Cookie consent"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212] border-t border-white/10 px-4 py-6 md:px-8 shadow-2xl backdrop-blur-md bg-opacity-95"
                >
                    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                        <p className="text-[#E6E7E8] text-sm md:text-[15px] leading-relaxed max-w-[950px]">
                            We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of all the cookies. However, you may visit “Cookie Settings” to provide controlled consent.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto justify-end">
                            <Link
                                href="/cookiessettings/"
                                className="px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
                            >
                                Cookie Settings
                            </Link>

                            <button
                                type="button"
                                onClick={() => saveConsent('rejected')}
                                className="px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
                            >
                                Reject All
                            </button>

                            <button
                                type="button"
                                onClick={() => saveConsent('accepted')}
                                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#099F9E] to-[#0bc5c4] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(9,159,158,0.4)]"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
