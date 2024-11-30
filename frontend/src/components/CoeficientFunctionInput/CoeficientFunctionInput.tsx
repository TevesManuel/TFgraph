import * as React from 'react';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

interface CoeficientFunctionInputProps {
    value: number;
    onChange: (newValue: number) => void;
}

const CoeficientFunctionInput: React.FC<CoeficientFunctionInputProps> = ({ value, onChange }) => {
    const handleChange = (
        event: React.FocusEvent<HTMLInputElement, Element> | React.PointerEvent<Element> | React.KeyboardEvent<Element>,
        newValue: number | null
    ) => {
        if (newValue !== null) {
          onChange(newValue);
        }
    };
  
    return (
      <div>
        <NumberInput
          aria-label="Quantity Input"
          value={value}
          onChange={handleChange}
          min={0}
          max={6}
        />
      </div>
    );
};

export default CoeficientFunctionInput;

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
      font-size: 0.75rem; /* Reducir el tamaño de la fuente */
      font-family: inherit;
      font-weight: 400;
      line-height: 1.375;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'};
      border-radius: 6px; /* Reducir el radio de las esquinas */
      margin: 0 4px; /* Reducir el margen entre inputs */
      padding: 6px 8px; /* Reducir el padding dentro del input */
      outline: 0;
      min-width: 0;
      width: 3rem; /* Reducir el ancho del input */
      text-align: center;

      &:hover {
          border-color: ${blue[400]};
      }

      &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
      }

      &:focus-visible {
          outline: 0;
      }
`,
);

const StyledButton = styled('button')(
    ({ theme }) => `
        display: none;
`,
);
