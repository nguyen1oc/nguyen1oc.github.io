import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, Layers, Database, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const focuses = [
    {
      icon: <Bot className="w-4 h-4 text-blue-600" />,
      title: "Multi-Agent & Production RAG",
      desc: "Kiến trúc hệ thống điều phối tác tử tự chủ qua LangGraph, Model Context Protocol (FastMCP) và Hybrid RAG (Dense + BM25) trên Qdrant.",
    },
    {
      icon: <Layers className="w-4 h-4 text-slate-700" />,
      title: "Computer Vision & Generative AI",
      desc: "Huấn luyện học đối kháng (Adversarial Training), phục hồi siêu phân giải ảnh khuôn mặt và mô hình sinh ảnh (Pix2Pix cGAN).",
    },
    {
      icon: <Database className="w-4 h-4 text-emerald-600" />,
      title: "Cloud Infrastructure & Data Lakehouse",
      desc: "Tự động hóa hạ tầng đám mây Google Cloud (GCP) với Terraform, lưu trữ Delta Lake và quản trị Vector Stores phục vụ triển khai thực tế.",
    },
  ];

  return (
    <section id="about" className="space-y-6">
      {/* Editorial Introduction */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Về bản thân & Triết lý kỹ thuật</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Chào bạn, mình là Thiên Lộc.
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-normal">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* 3 Core Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        {focuses.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all space-y-2.5 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
