export const processStyles = {
  timeline: "relative max-w-3xl mx-auto",
  line: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300 via-orange-300 to-teal-300 md:-translate-x-px",
  lineFill: "absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-teal-500 to-orange-500 md:-translate-x-px origin-top",
  item: "relative flex items-start gap-6 mb-12 last:mb-0",
  itemRight: "md:flex-row-reverse md:text-right",
  dot: "absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal-500 -translate-x-1/2 mt-1 z-10 shadow-md shadow-teal-200",
  content: "ml-16 md:ml-0 md:w-[calc(50%-2rem)]",
  contentWithBg:
    "relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/60",
  stepBg: "absolute inset-0 h-full w-full object-cover",
  stepOverlay:
    "absolute inset-0 bg-gradient-to-br from-white/92 via-white/86 to-teal-50/80",
  contentInner: "relative z-10 p-6 md:p-7",
  step: "text-teal-600 text-sm font-mono mb-1",
  title: "text-xl font-semibold text-slate-900 mb-2",
  desc: "text-slate-500 text-sm leading-relaxed",
};
