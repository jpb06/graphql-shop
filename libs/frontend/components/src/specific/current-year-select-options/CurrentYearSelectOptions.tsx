import { SelectOptionsProps } from '../month-select-options/MonthSelectOptions';

export const CurrentYearSelectOptions = ({
  defaultValue,
  defaultValueText,
}: SelectOptionsProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <option value={defaultValue}>{defaultValueText}</option>;
      {[...Array(5).keys()].map((n) => {
        const year = currentYear + n;
        return (
          <option key={year} value={year}>
            {year}
          </option>
        );
      })}
    </>
  );
};
