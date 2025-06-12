import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/50250681747"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M16.72 11.06c-.35-.17-2.06-1.02-2.38-1.14-.32-.12-.55-.17-.77.18-.22.35-.88 1.14-1.08 1.37-.2.23-.4.26-.75.09-.35-.17-1.49-.55-2.83-1.76-.96-.86-1.6-1.92-1.78-2.27-.19-.35-.02-.54.14-.71.15-.15.35-.4.53-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.27-.67-.55-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.44-.31.35-1.19 1.17-1.19 2.86 0 1.68 1.22 3.3 1.39 3.53.17.23 2.4 3.68 5.84 5.14.82.35 1.46.56 1.96.71.82.26 1.57.23 2.16.14.66-.1 2.06-.84 2.35-1.66.29-.82.29-1.53.2-1.66-.08-.13-.31-.2-.66-.35z" />
      </svg>
      <span className="hidden sm:inline text-sm font-medium">Contáctanos</span>
    </a>
  );
}