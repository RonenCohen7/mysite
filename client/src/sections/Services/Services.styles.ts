export const servicesStyles = {
  staticGrid: "grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8",
  showcase:
    "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16",
  videoSlotLtr: "order-2 lg:order-1",
  videoSlotRtl: "order-2 lg:order-2",
  videoSlot: "flex min-h-[280px] items-center justify-center",
  videoPlaceholder:
    "flex h-full min-h-[280px] w-full max-w-xl flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-200 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 p-8 text-center shadow-inner",
  videoIcon:
    "mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm",
  videoLabel: "text-sm font-semibold uppercase tracking-[0.18em] text-slate-400",
  videoHint: "mt-2 text-base font-medium text-slate-600",
  cardStage: "flex flex-col items-center",
  cardStageLtr: "order-1 lg:order-2 lg:items-end",
  cardStageRtl: "order-1 lg:order-1 lg:items-start",
  cardWrap: "w-full max-w-[460px]",
  dots: "mt-6 flex items-center justify-center gap-2",
  dot: "h-2.5 w-2.5 rounded-full bg-slate-200 transition-all duration-300 hover:bg-teal-300",
  dotActive: "w-8 bg-gradient-to-r from-teal-500 to-orange-500",
  card: "group relative h-full w-full",
  cardInner:
    "relative flex min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-7 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-500 group-hover:border-teal-200 group-hover:shadow-[0_28px_80px_rgba(13,148,136,0.14)]",
  cardGlow:
    "pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-teal-200/50 via-cyan-100/30 to-orange-100/40 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100",
  cardHeader: "relative z-10 mb-6 flex items-start justify-between gap-4",
  category:
    "inline-flex rounded-full border border-teal-200/80 bg-teal-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700",
  iconWrap:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-600",
  title:
    "relative z-10 mb-4 text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-800 md:text-[1.7rem]",
  desc: "relative z-10 mb-6 text-sm leading-7 text-slate-500 md:text-[0.95rem]",
  highlights: "relative z-10 mb-8 flex flex-1 flex-col gap-3",
  highlightItem: "flex items-start gap-3 text-sm leading-6 text-slate-600",
  highlightDot: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-teal-500 to-orange-500",
  tags: "relative z-10 mt-auto flex flex-wrap gap-2",
  tag: "rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-600 transition-colors duration-300 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700",
};
