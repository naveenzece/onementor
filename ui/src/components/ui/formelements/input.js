export default function Input({
  className,
  type,
  id,
  name,
  label,
  placeHolder,
  value,
  onChange,
  isdisabled,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        disabled={isdisabled}
      />
    </div>
  );
}
