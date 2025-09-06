import React from "react";

interface InputNumberProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    step?: number;
    prefix?: string;
    suffix?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({
    label,
    value,
    onChange,
    min = 0,
    step = 1,
    prefix = '',
    suffix = '',
}) => {
    return (
        <label className="flex flex-col gap-1 text-sm font-medium text-foreground">
            <span>{label}</span>
            <div className="flex items-center border rounded-md px-2 py-1 bg-background focus-within:ring-2 ring-primary/30">
                {prefix && <span className="mr-1 text-muted-foreground">{prefix}</span>}
                <input
                    type="number"
                    className="bg-transparent outline-none w-24 text-right"
                    value={value}
                    min={min}
                    step={step}
                    onChange={e => onChange(Number(e.target.value))}
                />
                {suffix && <span className="ml-1 text-muted-foreground">{suffix}</span>}
            </div>
        </label>
    );
};
