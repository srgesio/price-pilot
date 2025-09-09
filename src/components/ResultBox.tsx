

import React, { forwardRef } from "react";
import { BadgeDollarSign } from "lucide-react";

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
            className={`flex flex-col justify-center items-center p-4 sm:p-6 rounded-xl border-2 shadow-lg transition-all duration-200 border-[#0078d4]/30 bg-white/90 dark:bg-[#10131a]/80 relative result-box
                ${highlight
                    ? 'border-[#0078d4] bg-[#e6f2fb] dark:bg-[#0a223a] text-[#0078d4] font-extrabold scale-105 z-10'
                    : 'border-muted text-foreground'}
                ${strong ? 'font-semibold text-base sm:text-lg' : ''}`}
            style={{ minWidth: 'max-content', maxWidth: '100%' }}
        >
            <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                <BadgeDollarSign className="w-3 h-3 text-[#0078d4] opacity-70" aria-hidden="true" />
                {label}
            </span>
            <span className="text-lg sm:text-2xl tabular-nums font-mono whitespace-nowrap">
                {prefix}{value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
        </div>
    )
);

ResultBox.displayName = "ResultBox";
