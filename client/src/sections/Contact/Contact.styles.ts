export const contactStyles = {
  wrapper: "max-w-2xl mx-auto",
  form: "glass-card rounded-2xl p-8 md:p-10 glow-border space-y-6 bg-white",
  field: "space-y-2",
  label: "text-sm text-slate-600 font-medium",
  input:
    "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all",
  textarea: "min-h-[140px] resize-y",
  honeypot: "absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden",
  actions: "flex justify-end pt-2",
  submitBtn:
    "px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold hover:from-teal-700 hover:to-orange-600 transition-all shadow-lg shadow-teal-200/50 disabled:opacity-50",
  success: "text-center py-16",
  successIcon: "w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-6 text-teal-600",
  successTitle: "text-2xl font-semibold text-slate-900 mb-2",
  successText: "text-slate-500",
  error: "text-orange-600 text-sm",
};
