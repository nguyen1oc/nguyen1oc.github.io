import React, { useState } from 'react';
import { MOVIES, MovieItem } from '../data/portfolioData';
import { Film, Star, Quote, Sparkles, X, Clapperboard, Lightbulb, Image as ImageIcon } from 'lucide-react';

export const MovieJournal: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const getImageSource = (movie: MovieItem) => {
    return imageErrors[movie.id] ? movie.fallbackUrl : movie.localPath;
  };

  return (
    <section id="movies" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-100/70 text-purple-700">
            <Film className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-navy-950 tracking-tight flex items-center gap-2">
              <span>Cinema & Thoughts (Góc Điện Ảnh)</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                Reflections
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Những bộ phim định hình tư duy triết học & góc nhìn công nghệ • Bấm để đọc cảm nhận
            </p>
          </div>
        </div>

        <span className="text-[11px] text-slate-400 font-medium self-end sm:self-center">
          Thư mục: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">/public/images/movies/</code>
        </span>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {MOVIES.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className="group p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Poster Thumbnail with local path / fallback */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 mb-3">
                <img
                  src={getImageSource(movie)}
                  alt={movie.title}
                  onError={() => setImageErrors((prev) => ({ ...prev, [movie.id]: true }))}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                  <span>{movie.rating}</span>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="text-sm font-bold text-navy-950 group-hover:text-purple-700 transition-colors">
                {movie.title}
              </h3>
              {movie.vietnameseTitle && movie.vietnameseTitle !== movie.title && (
                <p className="text-[11px] font-medium text-slate-400">
                  {movie.vietnameseTitle} ({movie.releaseYear})
                </p>
              )}
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <Clapperboard className="w-3 h-3 text-slate-400" />
                <span className="truncate">{movie.director}</span>
              </p>
            </div>

            {/* Quick Preview & CTA */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex gap-1">
                {movie.genre.slice(0, 1).map((g, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-medium">
                    {g}
                  </span>
                ))}
              </div>
              <span className="text-purple-600 font-semibold text-[11px] group-hover:underline flex items-center gap-0.5">
                Xem cảm nhận →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Movie Review Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setSelectedMovie(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
            title="Đóng (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-7 max-h-[90vh] overflow-y-auto custom-scrollbar space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                    Đạo diễn: {selectedMovie.director}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedMovie.releaseYear}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy-950">
                  {selectedMovie.title}
                </h3>
                {selectedMovie.vietnameseTitle && (
                  <p className="text-xs font-medium text-slate-500">
                    {selectedMovie.vietnameseTitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-bold text-sm shrink-0">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{selectedMovie.rating} / 10</span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                    Favorite Quote
                  </p>
                  <p className="text-xs sm:text-sm font-medium italic text-slate-200">
                    "{selectedMovie.favoriteQuote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Review */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Góc nhìn & Cảm nhận cá nhân</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedMovie.myReview}
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
                <span>Bài học đúc kết (Key Takeaway)</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-950 leading-relaxed font-medium">
                {selectedMovie.keyTakeaway}
              </p>
            </div>

            {/* Image Path Helper */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
                Đường dẫn poster: <code className="font-mono text-slate-700">{selectedMovie.localPath}</code>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
