"use client";

import { useEffect } from "react";
import { useNotify } from "@/components/ui/NotificationProvider";

export default function HomeNotification() {
  const notify = useNotify();

  useEffect(() => {
    notify("For IIT-JEE, NEET, MHT-CET, Foundation, CBSE Academics", {
      title: "Admission Open",
    //   image: "/images/admission-banner.jpg",
      duration: 1000000,
    });
  }, [notify]);

  return null;
}