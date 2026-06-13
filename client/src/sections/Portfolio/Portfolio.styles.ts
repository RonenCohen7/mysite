export const portfolioStyles = {
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "group overflow-hidden",
  imageWrap: "relative aspect-video overflow-hidden rounded-xl mb-5 bg-gradient-to-br from-teal-50 to-orange-50 border border-slate-100",
  image: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
  placeholder: "w-full h-full flex items-center justify-center text-teal-300",
  title: "text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors",
  desc: "text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3",
  tags: "flex flex-wrap gap-2 mb-4",
  actions: "flex items-center gap-2",
  loading: "text-center py-20 text-slate-400",
};
