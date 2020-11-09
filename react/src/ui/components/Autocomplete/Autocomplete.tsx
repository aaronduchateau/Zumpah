import React, {ChangeEvent, CSSProperties, KeyboardEvent, MouseEvent, useState} from 'react';
import Input, { InputProps } from '../Input/Input';

import Highlighter from './Highlighter/Highlighter';

import classNames from '../../../utils/classNames';

import './Autocomplete.scss';
import { IAutocompleteOption } from '../../../interfaces/autocomplete-option';

interface AutocompleteProps {
  data?: IAutocompleteOption[];
  listColor?: string;
  opened?: () => void;
  closed?: () => void;
  style?: CSSProperties;
  listBgColor?: string;
  listMarkColor?: string;
  listBorderColor?: string;
  optionSelected?: (val: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps & InputProps> = props => {
  const [value, setValue] = useState<string>('');
  const [results, setResults] = useState<IAutocompleteOption[]>([]);
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const [openState, setOpenState] = useState<boolean>(false);

  const selectItem = (item: IAutocompleteOption, index: number) => {
    setValue(item.text);
    setItemIndex(index);
    setOpenState(false);

    if (props.optionSelected) {
      props.optionSelected(item.value);
    }
  };

  const listClasses = classNames({
    'autocomplete-list': true,
    opened: results.length > 0 && openState
  });

  const itemClasses = (index: number) =>
    classNames({
      'list-li': true,
      active: index === itemIndex
    });

  const getResults = (data: IAutocompleteOption[], val: string) => {
    if (!data.length) {
      return [];
    }

    return data.filter(item => item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const results = getResults(props.data, inputValue);

    setValue(inputValue);
    setItemIndex(-1);

    if (results.length) {
      setResults(results);
      setOpenState(true);
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 38) {
      if (itemIndex > -1) {
        setItemIndex(itemIndex - 1);
      }
    }

    if (event.keyCode === 40) {
      if (itemIndex < results.length - 1) {
        setItemIndex(itemIndex + 1);
      }
    }

    if (event.keyCode === 13) {
      props.optionSelected(results[itemIndex].value);

      setOpenState(false);
      setValue(results[itemIndex].text);
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
  };

  const handleInputFocus = () => {
    if (results.length > 0) {
      setOpenState(true);
    }
  };

  const handleInputBlur = () => {
    setOpenState(false);
  };

  const listItems = results.map((item, index) => (
    <li
      className={itemClasses(index)}
      key={item.text + index}
      onClick={() => selectItem(item, index)}>
      <span className='li-text'>
        <Highlighter value={item.text} searchTerm={value} />
      </span>
    </li>
  ));

  return (
    <div className='tc-autocomplete'>
      <Input
        {...props}
        style={props.style}
        value={value}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <div className={listClasses} onMouseDown={handleMouseDown}>
        <ul className='list-ul'>{listItems}</ul>
      </div>
    </div>
  );
};

Autocomplete.defaultProps = {
  data: []
};

// @ts-ignore
export default Autocomplete;
