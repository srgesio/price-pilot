"use client"

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import { Slider } from "@/components/Slider";
import { useRef, useEffect } from "react";

const PROJECT_NAME = "PricePilot";
const PROJECT_DESC = "Precificação Inteligente de Serviços";

export default function Home() {
  const [costPerHour, setCostPerHour] = useState(70);
  const [hours, setHours] = useState(40);
  const [extraCosts, setExtraCosts] = useState(200);
  const [marginPercent, setMarginPercent] = useState(20);
  const [strategicValue, setStrategicValue] = useState(400);
  const resultRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    base: useRef<HTMLDivElement | null>(null),
    extra: useRef<HTMLDivElement | null>(null),
    margin: useRef<HTMLDivElement | null>(null),
    strategic: useRef<HTMLDivElement | null>(null),
    final: useRef<HTMLDivElement | null>(null),
  };
  function flash(ref: React.RefObject<HTMLDivElement | null>) {
    if (!ref.current) return;
    ref.current.classList.remove("animate-flash");
    void ref.current.offsetWidth;
    ref.current.classList.add("animate-flash");
  }
  useEffect(() => { flash(resultRefs.base); }, [costPerHour, hours]);
  useEffect(() => { flash(resultRefs.extra); }, [extraCosts]);
  useEffect(() => { flash(resultRefs.margin); }, [marginPercent, costPerHour, hours, extraCosts]);
  useEffect(() => { flash(resultRefs.strategic); }, [strategicValue]);
  useEffect(() => { flash(resultRefs.final); }, [costPerHour, hours, extraCosts, marginPercent, strategicValue]);
  const base = costPerHour * hours;
  const margin = ((base + extraCosts) * marginPercent) / 100;
  const finalPrice = base + extraCosts + margin + strategicValue;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#10131a] dark:to-[#1a2233] text-foreground font-sans p-4">
      <main className="w-full max-w-xl flex flex-col gap-8">
        <header className="mb-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-[#0078d4] drop-shadow-sm">{PROJECT_NAME}</h1>
          <p className="text-base sm:text-lg font-semibold text-foreground/80 mb-1">{PROJECT_DESC}</p>
          <p className="text-muted-foreground text-xs sm:text-sm">Calcule preços de serviços de forma dinâmica, transparente e estratégica.</p>
        </header>

        <section className="flex flex-wrap gap-6 justify-center mb-4">
          <ResultBox ref={resultRefs.base} label="Base (Custo x Horas)" value={base} prefix="R$ " strong />
          <ResultBox ref={resultRefs.extra} label="Custos extras" value={extraCosts} prefix="R$ " strong />
          <ResultBox ref={resultRefs.margin} label={`Margem (${marginPercent}%)`} value={margin} prefix="R$ " strong />
          <ResultBox ref={resultRefs.strategic} label="Valor estratégico" value={strategicValue} prefix="R$ " strong />
          <ResultBox ref={resultRefs.final} label="Preço final" value={finalPrice} prefix="R$ " highlight strong />
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/80 dark:bg-black/30 rounded-xl p-6 shadow-lg">
          <Slider
            label="Custo/hora"
            value={costPerHour}
            min={0}
            max={500}
            step={1}
            onChange={setCostPerHour}
            prefix="R$ "
          />
          <Slider
            label="Horas previstas"
            value={hours}
            min={1}
            max={200}
            step={1}
            onChange={setHours}
          />
          <Slider
            label="Custos extras"
            value={extraCosts}
            min={0}
            max={5000}
            step={10}
            onChange={setExtraCosts}
            prefix="R$ "
          />
          <Slider
            label="Margem (%)"
            value={marginPercent}
            min={0}
            max={100}
            step={1}
            onChange={setMarginPercent}
            suffix="%"
          />
          <Slider
            label="Valor estratégico"
            value={strategicValue}
            min={0}
            max={5000}
            step={50}
            onChange={setStrategicValue}
            prefix="R$ "
          />
        </section>
      </main>
      <footer className="mt-10 text-xs text-muted-foreground text-center opacity-70 flex flex-col items-center gap-1">
        <span>{PROJECT_NAME} • {new Date().getFullYear()}</span>
        <a
          href="https://github.com/srgesio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#0078d4] font-semibold"
        >
          github.com/srgesio
        </a>
      </footer>
    </div>
  );
}
