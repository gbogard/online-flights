import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Field,
  Control,
  Input,
  Box,
  Menu,
  MenuList,
  MenuLink,
} from 'bloomer';

const AutocompleteWrapper = styled.div`
  posittion: relative;
  width: 100%;
  height: 1px;
`;

const AutocompleteBox = styled(Box)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const AirportInput = ({
  value,
  onChange,
  onInputChange,
  placeholder,
  isLoading,
  predictions,
}) => {
  const [inputValue, setInputValue] = useState(value ? value.name : '');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = ({ target: { value } }) => {
    setIsOpen(value.length > 2);
    setInputValue(value);
    onInputChange(value);
  };

  const handleAirportChange = (code, name) => () => {
    onChange({ code, name });
    setIsOpen(false);
    setInputValue(name);
  };

  const autoCompleteBox = isOpen && (
    <AutocompleteWrapper>
      <AutocompleteBox>
        {
          isLoading ? 'Loading...' : (
            <Menu>
              <MenuList>
                {
                  predictions.map(({ code, name }) => (
                    <li key={code}>
                      <MenuLink onClick={handleAirportChange(code, name)}>
                        <strong>{code}</strong>{' '}
                        {name}
                      </MenuLink>
                    </li>
                  ))
                }
              </MenuList>
            </Menu>
          )
        }
      </AutocompleteBox>
    </AutocompleteWrapper>
  );
  
  return (
    <Field>
      <Control>
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        {autoCompleteBox}
      </Control>
    </Field>
  );
};

AirportInput.propTypes = {
  value: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
  predictions: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  }))
};

AirportInput.defaultProps = {
  value: null,
  onChange: Function.prototype,
  onInputChange: Function.prototype,
  placeholder: '',
  isLoading: false,
  predictions: [],
};

export default AirportInput;
