import React, {CSSProperties, useEffect, useState} from 'react';
import './Search.scss';
import {history} from '../../../redux/store';

import Autocomplete from '../../../ui/components/Autocomplete/Autocomplete';
import className from '../../../utils/classNames';
import { IAutocompleteOption } from '../../../interfaces/autocomplete-option';
import { IMenuItem, IMenuItemSub } from '../../../interfaces/menu';

interface SearchProps {
  data?: any[];
  dataKey?: string;
  titleKey?: string;
  layout?: string;
  className?: string;
  style?: CSSProperties;
}

const Search: React.FunctionComponent<SearchProps> = props => {
  const [searchData, setSearchData] = useState<IAutocompleteOption[]>([]);

  useEffect(() => {
    const hasSub = (item: IMenuItem) => !!item.sub && item.sub.length;
    const getSub = (item: IMenuItem) => item.sub;

    const hasRouting = (item: IMenuItem) => !!item.routing;
    const getOption = (item: IMenuItem | IMenuItemSub) => ({
      text: item.title,
      value: item.routing
    });

    const itemsSubs = props.data.filter(hasSub).map(getSub).flat();
    const menuItems = props.data.filter(hasRouting);

    const searchData: IAutocompleteOption[] = [...itemsSubs, ...menuItems].map(getOption);
    setSearchData(searchData);
  }, [props.data]);

  const searchClassName = className({
    search: true,
    [props.className]: props.className
  });

  const onOptionSelected = (val: string) => {
    const route = `/${props.layout}/${val}`;
    history.push(route);
  };

  return (
    <div className={searchClassName}>
      <form className='search-wrap'>
        <Autocomplete
          style={props.style}
          placeholder="Type page's title"
          data={searchData}
          prefixIcon='icofont-search'
          optionSelected={val => onOptionSelected(val)}
        />
      </form>
    </div>
  );
};

Search.defaultProps = {
  data: [],
  dataKey: 'routing',
  titleKey: 'title',
  layout: 'vertical'
};

export default Search;
