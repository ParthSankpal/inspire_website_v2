"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import InspireAcademyImage from "@/public/InspireAcademyImage.png";


type NotificationType = "success" | "error" | "info" | "warning";

export interface Notification {
    id: string;
    message: string;
    title?: string;
    // image?: string;
    type: NotificationType;
    duration?: number;
}

interface NotificationContextType {
    notify: (
        message: string,
        options?: {
            title?: string;
            // image?: string;
            type?: NotificationType;
            duration?: number;
        }
    ) => void;
}

const NotificationContext = createContext<
    NotificationContextType | undefined
>(undefined);

export const useNotify = () => {
    const ctx = useContext(NotificationContext);
    if (!ctx)
        throw new Error("useNotify must be used inside NotificationProvider");
    return ctx.notify;
};

export function NotificationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [notification, setNotification] = useState<Notification | null>(null);

    const notify = useCallback(
        (
            message: string,
            options?: {
                title?: string;
                image?: string;
                type?: NotificationType;
                duration?: number;
            }
        ) => {
            const id = Math.random().toString(36).slice(2);

            const newNotification: Notification = {
                id,
                message,
                title: options?.title,
                // image: options?.image,
                type: options?.type || "info",
                duration: options?.duration ?? 10000, // default 10 seconds
            };

            setNotification(newNotification);

            if (newNotification.duration && newNotification.duration > 0) {
                setTimeout(() => {
                    setNotification(null);
                }, newNotification.duration);
            }
        },
        []
    );

    const close = () => {
        setNotification(null);
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}

            <AnimatePresence>
                {notification && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />

                        {/* Notification Panel */}
                        {/* Notification Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ duration: 0.3 }}
                            className="
    fixed 
    z-50 
    top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2
    bg-white 
    rounded-2xl 
    shadow-2xl 
    w-[90%] md:w-[70%] lg:w-[60%]
    h-[70vh]
    overflow-hidden
    flex flex-col lg:flex-row
  "
                        >
                            {/* Image Section */}
                            <div className="flex-1 flex items-center justify-center p-6">
                                <Image
                                    src={InspireAcademyImage}
                                    alt="Inspire Academy"
                                    className="w-full object-contain"
                                />
                            </div>

                            {/* Divider */}
                            <div className="flex items-center justify-center">
                                {/* Desktop Vertical Divider */}
                                <div className="hidden md:block w-0.5 h-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                                {/* Mobile Horizontal Divider */}
                                <div className="lg:hidden h-0.5 w-1/2 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 text-center flex flex-col justify-center p-6 space-y-4">
                                <div>
                                    <span className="bg-[#ea018c] text-white px-3 py-1 rounded-full font-semibold text-4xl">
                                        2026
                                    </span>
                                </div>

                                {notification.title && (
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl">
                                        {notification.title}
                                    </h2>
                                )}

                                <p className="text-gray-600 text-base leading-relaxed">
                                    {notification.message}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </NotificationContext.Provider>
    );
}