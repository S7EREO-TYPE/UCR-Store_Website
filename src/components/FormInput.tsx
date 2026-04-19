interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export default function FormInput({ 
  label, 
  type = 'text', 
  placeholder = '', 
  required = false,
  onChange 
}: FormInputProps) {
  return (
    <div>
      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
