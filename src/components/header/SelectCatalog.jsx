import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { CatalogSelectOptions } from '../../consts/catalog'

const animatedComponents = makeAnimated()

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted #d0d1f5',
    color: state.isSelected ? '#FFF' : 'hsl(243, 19%, 19%)',
    padding: 8,
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    width: 130,
    height: '100%',
    borderRadius: 5,
    cursor: 'pointer',
    backgroundColor: 'hsl(220, 8%, 92%)',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  }
}

const SelectCatalog = () => {
  
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={CatalogSelectOptions[0]}
      options={CatalogSelectOptions}
      styles={customStyles}
      theme={theme => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary25: '#6e3c3cf',
          primary: 'hsl(238, 79%, 68%)'
        }
      })}
    />
  )
}

export default SelectCatalog
