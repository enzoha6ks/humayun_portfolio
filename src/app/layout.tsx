// import type React from "react";
// import type { Metadata } from "next";
// import { Inter, Nunito } from "next/font/google";

// import "./globals.css";
// import Navbar from "@/components/navbar";
// import MouseMoveEffect from "@/components/mouse-move-effect";
// import JumpToTop from "@/components/jump-to-top";
// import Footer from "@/components/footer";
// import { Toaster } from "@/components/ui/sonner";
// import AboutPage from "./about/page";

// const inter = Inter({ subsets: ["latin"] });
// // const nunito = Nunito({ subsets: ["latin"] });q

// export const metadata: Metadata = {
//   title: {
//     default: "Humayun Javaid – Video Editor & Motion Graphics Designer",
//     template: "%s | Humayun Javaid",
//   },
//   description:
//     "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Humayun Javaid specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
//   keywords: [
//     "Humayun Javaid",
//     "Video Editor",
//     "Motion Graphics Designer",
//     "DaVinci Resolve",
//     "Premiere Pro",
//     "After Effects",
//     "Color Grading",
//     "YouTube Video Editing",
//     "Course Video Editing",
//     "Logo Animation",
//     "Visual Storytelling",
//     "Freelance Video Editor",
//     "Pakistan Video Editor",
//     "Cinematic Editing",
//     "Content Creator",
//     "Lower Thirds",
//     "Audio Sync",
//   ],
//   authors: [{ name: "Humayun Javaid", url: "https://www.itsniloy.me" }],
//   creator: "Humayun Javaid",
//   publisher: "Humayun Javaid",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.itsniloy.me",
//     title: "Niloy Bhowmick – Video Editor & Motion Graphics Designer",
//     description:
//       "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
//     siteName: "Niloy Bhowmick Portfolio",
//     images: [
//       {
//         url: "/niloybhowmick.png",
//         width: 1200,
//         height: 630,
//         alt: "Humayun Javaid - Video Editor",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Humayun Javaid – Video Editor & Motion Graphics Designer",
//     description:
//       "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
//     creator: "@Humayun Javaid", // update if you have a real Twitter handle
//     images: ["/niloybhowmick.png"],
//   },
//   verification: {
//     google: "your-google-verification-code",
//   },
//   alternates: {
//     canonical: "https://www.itsniloy.me",
//   },
//   category: "Video Editing",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark scroll-smooth">
//       <head>
//         <link rel="icon" href="/logo1.ico" />
//         <link rel="apple-touch-icon" href="/logo1.ico" />
//         <meta name="theme-color" content="#020817" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Person",
//               name: "Humayun Javaid",
//               url: "https://www.itsniloy.me",
//               image: "/niloybhowmick.png",
//               sameAs: [
//                 "https://www.itsniloy.me",
//                 "https://linkedin.com/in/niloybhowmick", // update if available
//                 "https://youtube.com/@niloybhowmick", // update if available
//                 "https://twitter.com/niloy_bhowmick", // update if available
//               ],
//               jobTitle: "Video Editor & Motion Graphics Designer",
//               knowsAbout: [
//                 "Video Editing",
//                 "Motion Graphics",
//                 "DaVinci Resolve",
//                 "Adobe Premiere Pro",
//                 "Adobe After Effects",
//                 "Color Grading",
//                 "Audio Syncing",
//               ],
//               worksFor: {
//                 "@type": "Organization",
//                 name: "Freelance",
//               },
//               alumniOf: {
//                 "@type": "Organization",
//                 name: "Virtual University of Pakistan",
//               },
//             }),
//           }}
//         />
//       </head>
//       <body
//         className={`${inter.className} min-h-screen text-white`}
//         style={{
//           background: "#020817",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="grid-background-large min-h-screen">
//           <MouseMoveEffect />
//           <Navbar />                
//           <main className="pt-16">{children}</main>          
//           <Footer />
//           <JumpToTop />
//           <Toaster position="top-center" />
//         </div>
//       </body>
//     </html>
//   );
// }



import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Humayun Javaid – Video Editor & Motion Graphics Designer",
    template: "%s | Humayun Javaid",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and cinematic impact. Humayun Javaid specializes in DaVinci Resolve, Premiere Pro, and After Effects, delivering high-quality video edits and motion graphics.",
  keywords: [
    "Humayun Javaid",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Reels Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Humayun Javaid", url: "https://www.itsniloy.me" }],
  creator: "Humayun Javaid",
  publisher: "Humayun Javaid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.itsniloy.me",
    title: "Humayun Javaid – Video Editor & Motion Graphics Designer",
    description:
      "Professional Video Editor & Motion Graphics Designer creating cinematic edits, motion graphics, and engaging visual stories.",
    siteName: "Humayun Javaid Portfolio",
    images: [
      {
        url: "/humayunjavaid.jpg",
        width: 1200,
        height: 630,
        alt: "Humayun Javaid - Video Editor & Motion Graphics Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humayun Javaid – Video Editor & Motion Graphics Designer",
    description:
      "Cinematic video edits, motion graphics, and powerful storytelling.",
    creator: "@humayunjavaid", // use real handle if available
    images: ["/humayunjavaid.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.itsniloy.me",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo1.ico" />
        <link rel="apple-touch-icon" href="/logo1.ico" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Humayun Javaid",
              url: "https://www.itsniloy.me",
              image: "/humayunjavaid.png",
              sameAs: [
                "https://www.itsniloy.me",
                "https://www.linkedin.com/in/humayun-javaid-%F0%9F%8C%9F-video-editor-721a14232/",
                "https://youtube.com/@humayunjavaid",
                "https://instagram.com/humayunjavaid",
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
