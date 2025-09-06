
import React from "react";

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
}) => (
    <label className="flex flex-col gap-2 text-sm font-medium text-foreground w-full">
        <div className="flex justify-between items-center">
            <span>{label}</span>
            <span className="ml-2 text-muted-foreground font-mono tabular-nums min-w-[80px] text-right">{prefix}{value}{suffix}</span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={e => onChange(Number(e.target.value))}
            className="w-full accent-[#0078d4] h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-[#e0e7ef] to-[#b6d6f6] dark:from-[#1a2233] dark:to-[#0078d4]/40 shadow-inner"
        />
    </label>
);
