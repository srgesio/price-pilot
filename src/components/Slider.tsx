

import React from "react";
import { SlidersHorizontal, Plus, Minus } from "lucide-react";

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
    prefix?: string;
    suffix?: string;
}

export const Slider: React.FC<SliderProps> = ({
    label,
    value,
    min,
    max,
    step = 1,
    onChange,
    prefix = '',
    suffix = '',
}) => {
    return (
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground w-full p-3 border border-[#e0e7ef] dark:border-[#222b3a] rounded-xl bg-white/70 dark:bg-[#10131a]/60 shadow-sm">
            <div className="flex items-center justify-between mb-1">
                <span className="flex items-center gap-1">
                    <SlidersHorizontal className="w-4 h-4 text-[#0078d4] opacity-80" aria-hidden="true" />
                    {label}
                </span>
                <span className="ml-2 text-muted-foreground font-mono tabular-nums min-w-[80px] text-right">{prefix}{value}{suffix}</span>
            </div>
            <div className="flex items-center gap-2 w-full">
                <button
                    type="button"
                    aria-label={`Diminuir ${label}`}
                    className="p-1 rounded border bg-background hover:bg-[#e0e7ef] dark:hover:bg-[#1a2233] transition flex-shrink-0"
                    onClick={() => onChange(Math.max(min, value - (step || 1)))}
                    tabIndex={0}
                >
                    <Minus className="w-4 h-4" />
                </button>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    className="flex-1 accent-[#0078d4] h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-[#e0e7ef] to-[#b6d6f6] dark:from-[#1a2233] dark:to-[#0078d4]/40 shadow-inner mx-2"
                    aria-label={label}
                />
                <button
                    type="button"
                    aria-label={`Aumentar ${label}`}
                    className="p-1 rounded border bg-background hover:bg-[#e0e7ef] dark:hover:bg-[#1a2233] transition flex-shrink-0"
                    onClick={() => onChange(Math.min(max, value + (step || 1)))}
                    tabIndex={0}
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </label>
    );
};
