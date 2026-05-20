"use client";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useLocale, useTranslations } from "@/lib/site-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchHomepageSection } from "@/lib/api/content";
import { urlFor } from "@/lib/sanity-site-data";
import { Link } from "@/navigation";

const fallbackImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];  

const renderHighlight = (value?: string | null) => {
  if (!value) return null;
  const normalizedValue = value
    .replace(/<br\s*><\/br>/g, "<br />")
    .replace(/<br\s*\/?>/g, "<br />");
  const parts = normalizedValue.split(/(<highlight>|<\/highlight>|<br \/>)/g);
  let isHighlight = false;
  const output: React.ReactNode[] = [];

  parts.forEach((part, index) => {
    if (part === "<highlight>") { isHighlight = true; return; }
    if (part === "</highlight>") { isHighlight = false; return; }
    if (part === "<br />") { output.push(<br key={index} />); return; }
    if (!part) return;

    if (isHighlight) {
      output.push(
        <span key={index} className="text-primary drop-shadow-[0_0_20px_rgba(249,75,28,0.3)]">
          {part}
        </span>
      );
      return;
    }
    output.push(<React.Fragment key={index}>{part}</React.Fragment>);
  });
  return output;
};

const Hero = ({ locale }: { locale: string }) => {
  const currentLocale = useLocale();
  const isRtl = currentLocale === "ar";
  const t = useTranslations("Hero");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const { data, isError } = useQuery({
    queryKey: ["heroSection", locale],
    queryFn: () => fetchHomepageSection("heroSection", locale),
    retry: 1,
  });

  const fallbackSlides = useMemo(() => {
    const rawSlides = t.raw("slides") as any[] | undefined;
    if (!rawSlides?.length) {
      return fallbackImages.map((image) => ({
        image,
        subtitle: "GIVING BACK",
        title: null,
        link: "/donate",
        buttonLabel: undefined,
        text: undefined
      }));
    }
    return rawSlides.map((slide, index) => ({
      image: fallbackImages[index % fallbackImages.length],
      subtitle: slide.subtitle ?? "GIVING BACK",
      title: renderHighlight(slide.title),
      text: slide.text || undefined,
      link: "/donate",
      buttonLabel: undefined,
    }));
  }, [t]);

  const slides = useMemo(() => {
    // Debugging: Console check
    console.log("Hero Section Raw Data:", data);

    // Sanity query result handle karna
    const sanityData = Array.isArray(data) ? data[0] : data;
    const sanitySlides = sanityData?.slides;

    // Loading or Error state or No Data -> fallback to translations-based slides
    if (!sanitySlides || sanitySlides.length === 0 || isError) {
      return fallbackSlides;
    }

    return sanitySlides.map((slide: any, index: number) => {
      const fallback = fallbackSlides[index % fallbackSlides.length];
      
      // Image Check: Priority Sanity -> Then Fallback
      let slideImage = fallback.image;
      if (slide.image) {
        try {
          slideImage = urlFor(slide.image).width(2000).quality(80).url();
        } catch (e) {
          console.error("Image URL conversion error:", e);
        }
      }

      return {
        image: slideImage,
        // Priority check for each field: Sanity fields -> Fallback fields
        subtitle: slide.slogan || slide.subtitle || fallback.subtitle,
        title: slide.title ? renderHighlight(slide.title) : fallback.title,
        text: slide.description || slide.text || fallback.text,
        link: slide.buttonLink || slide.link || fallback.link,
        buttonLabel: slide.buttonLabel || fallback.buttonLabel,
      };
    });
  }, [data, isError, fallbackSlides]);

  const paginate = useCallback((newDirection: number) => {
    if (!slides.length) return;
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  }, [slides.length]);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    if (!slides.length) return undefined;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [slides.length, nextSlide]);

  if (!slides || slides.length === 0 || !slides[activeIndex]) return null;

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#092a24]">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? 220 : -220, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (dir: number) => ({ x: dir < 0 ? 220 : -220, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) paginate(1);
            else if (swipe > 10000) paginate(-1);
          }}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url('${slides[activeIndex].image}')`, opacity: 0.4 }}
            />
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-5" style={{ backgroundImage: "url('/hero-bottom-right.webp')" }} />
          </div>

          <div className="relative z-20 container mx-auto px-4 max-w-7xl text-center flex min-h-screen flex-col items-center justify-center py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>
              <div className="flex items-center justify-center gap-5 mb-8">
                <div className="h-[2px] w-14 bg-primary rounded-full"></div>
                <span className="text-primary font-black tracking-[0.3em] text-sm md:text-md uppercase">
                  {slides[activeIndex].subtitle}
                </span>
                <div className="h-[2px] w-14 bg-primary rounded-full"></div>
              </div>

              <h1 className="text-white text-3xl max-w-5xl mx-auto md:text-5xl 2xl:text-[72px] font-[700] font-cairo mb-6 leading-[1.2]">
                {slides[activeIndex].title}
              </h1>

              {slides[activeIndex].text && (
                <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  {slides[activeIndex].text}
                </p>
              )}

              <div className="flex items-center justify-center gap-10">
                <Link
                  href={slides[activeIndex].link}
                  className="flex items-center gap-4 bg-white/5 border border-white/20 hover:border-primary pl-8 pr-3 py-2 rounded-full transition-all group relative overflow-hidden"
                >
                  <span className="font-extrabold text-md text-white relative z-10">
                    {slides[activeIndex].buttonLabel || t("donateNowPlain")}
                  </span>
                  <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    {isRtl ? <ArrowLeft size={22} className="text-white" /> : <ArrowRight size={22} className="text-white" />}
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer">
          <ArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer">
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {slides.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => paginate(index - activeIndex)}
            className={`cursor-pointer transition-all rounded-full ${index === activeIndex ? "w-4 h-4 bg-primary scale-125" : "w-2.5 h-2.5 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
