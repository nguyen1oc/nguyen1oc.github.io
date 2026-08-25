import React, { useRef, useState, useEffect, useCallback } from 'react';
import { PHOTOS, PhotoItem } from '../data/portfolioData';
import { Camera, ChevronLeft, ChevronRight, X, MapPin, Sparkles, Sliders, Info, Eye, Image as ImageIcon } from 'lucide-react';

export const PhotographyGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scrollContainerRef.current.scrollLeft += e.deltaY * 1.5;
        checkScroll();
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const handleNavigatePhoto = useCallback((direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    const currentIndex = PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % PHOTOS.length;
      setSelectedPhoto(PHOTOS[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
      setSelectedPhoto(PHOTOS[prevIndex]);
    }
  }, [selectedPhoto]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') handleNavigatePhoto('next');
      if (e.key === 'ArrowLeft') handleNavigatePhoto('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, handleNavigatePhoto]);

  const getImageSource = (photo: PhotoItem) => {
    return imageErrors[photo.id] ? photo.fallbackUrl : photo.localPath;
  };

  return (
    <section id="photography" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-100/70 text-sky-700">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-navy-950 tracking-tight flex items-center gap-2">
              <span>Street Photography (Nhiếp Ảnh Dọc)</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                3:4 Portrait
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Góc nhìn đường phố & nhịp sống qua khung hình dọc • Lăn chuột để trượt ngang hoặc bấm để xem chi tiết
            </p>
          </div>
        </div>

        {/* Action Controls & Scroll Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
            Thư mục: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">/public/images/photography/</code>
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-lg border text-xs font-semibold transition-all ${
                canScrollLeft
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-300 cursor-not-allowed'
              }`}
              title="Trượt sang trái"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-lg border text-xs font-semibold transition-all ${
                canScrollRight
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-300 cursor-not-allowed'
              }`}
              title="Trượt sang phải"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Filmstrip Gallery */}
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto custom-scrollbar py-2 -mx-1 px-1 snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative flex-shrink-0 w-[240px] sm:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-start border border-slate-200/80"
          >
            {/* Background Image with Fallback */}
            <img
              src={getImageSource(photo)}
              alt={photo.title}
              onError={() => setImageErrors((prev) => ({ ...prev, [photo.id]: true }))}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/40 text-white/90 backdrop-blur-md border border-white/10 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-sky-400" />
                <span className="truncate max-w-[120px]">{photo.location.split(',')[0]}</span>
              </span>
              <span className="p-1 rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Bottom Caption Info */}
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 pointer-events-none">
              <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors drop-shadow-sm">
                {photo.title}
              </h3>
              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                {photo.caption}
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-sky-200/90 font-mono">
                <Sliders className="w-3 h-3 text-sky-400" />
                <span className="truncate">{photo.cameraInfo.split('|')[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal when clicked */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
            title="Đóng (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleNavigatePhoto('prev')}
            className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md hidden sm:flex items-center justify-center"
            title="Ảnh trước (Mũi tên trái)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleNavigatePhoto('next')}
            className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md hidden sm:flex items-center justify-center"
            title="Ảnh tiếp theo (Mũi tên phải)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-200/40">
            {/* Left: Image Canvas */}
            <div className="md:w-1/2 bg-slate-950 flex items-center justify-center overflow-hidden relative min-h-[320px] md:min-h-full">
              <img
                src={getImageSource(selectedPhoto)}
                alt={selectedPhoto.title}
                className="max-h-[60vh] md:max-h-[85vh] w-auto max-w-full object-contain p-2"
              />
            </div>

            {/* Right: Rich Details */}
            <div className="md:w-1/2 p-6 overflow-y-auto custom-scrollbar flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedPhoto.location}
                  </span>
                  <span className="font-mono">{selectedPhoto.year}</span>
                </div>

                <h3 className="text-xl font-extrabold text-navy-950 leading-tight">
                  {selectedPhoto.title}
                </h3>

                {/* Caption */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs md:text-sm text-slate-700 italic leading-relaxed">
                  "{selectedPhoto.caption}"
                </div>

                {/* Story */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Câu chuyện & Cảm hứng</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {selectedPhoto.story}
                  </p>
                </div>

                {/* EXIF / Camera Info */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>Thông số thiết bị (EXIF)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100/80 font-mono text-xs text-slate-700">
                    {selectedPhoto.cameraInfo}
                  </div>
                </div>

                {/* File Path Reference */}
                <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center gap-2 text-[11px] text-blue-800">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Đường dẫn: <code className="font-mono">{selectedPhoto.localPath}</code></span>
                </div>
              </div>

              {/* Mobile arrows */}
              <div className="flex sm:hidden items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleNavigatePhoto('prev')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" /> Ảnh trước
                </button>
                <button
                  onClick={() => handleNavigatePhoto('next')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  Ảnh tiếp <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
