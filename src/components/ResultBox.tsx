
import React, { forwardRef } from "react";

interface ResultBoxProps {
    label: string;
    value: number;
    prefix?: string;
    highlight?: boolean;
    strong?: boolean;
}

export const ResultBox = forwardRef<HTMLDivElement, ResultBoxProps>(
    ({ label, value, prefix = '', highlight = false, strong = false }, ref) => (
        <div
            ref={ref}
            className={`flex flex-col items-center p-4 sm:p-6 rounded-xl border-2 shadow-lg min-w-[100px] sm:min-w-[140px] transition-all duration-200 border-[#0078d4]/30 bg-white/90 dark:bg-[#10131a]/80 relative result-box
                ${highlight
                    ? 'border-[#0078d4] bg-[#e6f2fb] dark:bg-[#0a223a] text-[#0078d4] font-extrabold scale-105 z-10'
                    : 'border-muted text-foreground'}
                ${strong ? 'font-semibold text-base sm:text-lg' : ''}`}
        >
            <span className="text-[10px] sm:text-xs text-muted-foreground mb-1 uppercase tracking-wide">{label}</span>
            <span className="text-lg sm:text-2xl tabular-nums font-mono">{prefix}{value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
    )
);

ResultBox.displayName = "ResultBox";
