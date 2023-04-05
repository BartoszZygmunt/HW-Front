import AsyncSelect from 'react-select/async';

export default function AsyncSelectComponent({ data }) {
  return (
    <AsyncSelect
      loadOptions={data}
      styles={{
        control: () => ({
          width: '194px',
          height: '53px',
          borderRadius: '6px',
          backgroundColor: '#F5F5F5',
          padding: '16px',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        dropdownIndicator: () => ({
          display: 'none',
        }),
        valueContainer: baseStyles => ({
          ...baseStyles,
          padding: '0',
          margin: '0',
          height: '20px',
        }),
        input: baseStyles => ({
          ...baseStyles,
          caretColor: '#BDBDBD',
          padding: '0',
          margin: '0',
          height: '20px',
          fontSize: '14px',
          lineHeight: '1.5',
          letterSpacing: '-2%',
          color: 'rgba(0, 0, 0, 0.5)',
        }),
        placeholder: baseStyles => ({
          ...baseStyles,
          fontSize: '14px',
          lineHeight: '1.5',
          letterSpacing: '-2%',
          color: 'rgba(0, 0, 0, 0.5)',
        }),
        menu: baseStyles => ({
          ...baseStyles,
          width: '194px',
          height: '154px',
          borderRadius: '6px',
          boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
          padding: '8px 4px 8px 18px',
          fontSize: '12px',
          lineHeight: '1.5',
          letterSpacing: '-2%',
          color: 'rgba(0, 0, 0, 0.5)',
        }),
      }}
    />
  );
}
