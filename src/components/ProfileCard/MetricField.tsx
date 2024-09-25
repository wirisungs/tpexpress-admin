import React from 'react';

interface MetricFieldProps {
    label: string;
    value: string;
    color: string;
}

const MetricField: React.FC<MetricFieldProps> = ({ label, value, color }) => {
    return (
        <div className="flex flex-col justify-center mt-3 w-full max-w-[342px]">
            <label className="text-zinc-900">{label}</label>
            <div className={`self-stretch px-4 py-4 mt-1.5 w-full ${color} rounded-md border border-solid border-stone-300 min-h-[48px]`}>
                {value}
            </div>
        </div>
    );
};

export default MetricField;