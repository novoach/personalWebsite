import type { Metadata } from "next";
import PortalDemo from "./PortalDemo";

export const metadata: Metadata = {
  title: "Reconnaissance Portal Demo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalDemoPage() {
  return <PortalDemo />;
}
