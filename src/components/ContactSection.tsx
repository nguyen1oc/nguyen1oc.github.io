import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, MessageSquare, Phone, MapPin, Sparkles, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission simulation & trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject || 'Trao đổi cơ hội hợp tác'}`
      )}&body=${encodeURIComponent(
        `Xin chào Lộc,\n\nTên tôi là: ${formData.name}\nEmail: ${formData.email}\n\nNội dung tin nhắn:\n${formData.message}\n\nTrân trọng,`
      )}`;

      window.location.href = mailtoUrl;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-blue-100/70 text-blue-700">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-extrabold text-navy-950 tracking-tight">
            Liên Hệ & Trao Đổi Công Việc
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Sẵn sàng kết nối cho các vị trí AI Engineer, dự án GenAI hoặc hợp tác kỹ thuật
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Quick Contact Info Cards */}
        <div className="space-y-3 lg:col-span-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-950 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Kênh liên lạc nhanh</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Email chính thức</p>
                    <p className="font-semibold text-slate-900 truncate max-w-[140px] sm:max-w-none">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                  title="Sao chép"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Số điện thoại</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                    className="font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Địa điểm làm việc</p>
                  <p className="font-semibold text-slate-900">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4"
          >
            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">
                  Cảm ơn bạn đã gửi tin nhắn!
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Trình soạn email mặc định của bạn đã được kích hoạt. Lộc sẽ phản hồi bạn trong thời gian sớm nhất có thể.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Email phản hồi <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Chủ đề trao đổi
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Trao đổi cơ hội tuyển dụng AI Engineer / Phỏng vấn"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Nội dung tin nhắn <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Nội dung lời nhắn hoặc chi tiết dự án bạn muốn cùng trao đổi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-blue-400" />
                  <span>{isSubmitting ? 'Đang khởi tạo...' : 'Gửi tin nhắn trực tiếp'}</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
