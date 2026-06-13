export const heroStyles = {
  section: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden isolate",
  content: "relative z-10 text-center max-w-5xl mx-auto px-4",
  iconRow: "flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10",
  iconCard:
    "group relative flex flex-col items-center gap-3 p-6 md:p-8 rounded-3xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl",
  iconWrap: "w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border-2 transition-transform duration-500 group-hover:rotate-3",
  iconLabel: "text-xs md:text-sm font-semibold tracking-wide uppercase opacity-80",
  connector: "hidden md:block text-orange-400/60",
  subtitle: "text-lg md:text-xl text-orange-400 font-medium max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]",
  actions: "flex items-center justify-center gap-4",
  scroll: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 text-xs",
};

export const heroIconVariants = {
  turquoise: {
    card: "border-teal-200 hover:border-teal-400 hover:shadow-teal-100/50",
    wrap: "bg-teal-50 border-teal-200 text-teal-600 group-hover:bg-teal-100",
    label: "text-teal-700",
  },
  orange: {
    card: "border-orange-200 hover:border-orange-400 hover:shadow-orange-100/50",
    wrap: "bg-orange-50 border-orange-200 text-orange-600 group-hover:bg-orange-100",
    label: "text-orange-700",
  },
  redOrange: {
    card: "border-orange-300 hover:border-orange-500 hover:shadow-orange-200/50",
    wrap: "bg-orange-50 border-orange-300 text-orange-700 group-hover:bg-orange-100",
    label: "text-orange-800",
  },
};
