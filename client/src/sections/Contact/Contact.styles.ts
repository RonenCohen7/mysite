export const contactStyles = {
  wrapper: "max-w-2xl mx-auto",
  form: "glass-card rounded-2xl p-8 md:p-10 glow-border space-y-6",
  field: "space-y-2",
  label: "text-sm text-white/60 font-medium",
  input:
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all",
  textarea: "min-h-[140px] resize-y",
  honeypot: "absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden",
  actions: "flex justify-end pt-2",
  success: "text-center py-16",
  successIcon: "w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400",
  successTitle: "text-2xl font-semibold text-white mb-2",
  successText: "text-white/50",
  error: "text-red-400 text-sm",
};
