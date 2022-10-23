export type SelectOptionsProps = {
  defaultValue: string;
  defaultValueText: string;
};

export const MonthSelectOptions = ({
  defaultValue,
  defaultValueText,
}: SelectOptionsProps) => (
  <>
    <option value={defaultValue}>{defaultValueText}</option>;
    {[...Array(12).keys()].map((n) => (
      <option key={n} value={`0${n + 1}`}>
        {`0${n + 1}`}
      </option>
    ))}
  </>
);
