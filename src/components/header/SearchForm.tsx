import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import DefaultButton from '../common/DefaultButton'
import SelectCatalog from './SelectCatalog'

const searchData = evt => {
  evt.preventDefault()
  console.log('search form ')
}

const SearchForm = () => {
  return (
    <SearchWrapper>
      <SelectCatalog />
      <input type='text' name='text' placeholder='Искать самокат KUGO' />
      <DefaultButton
        icon={<AiOutlineSearch />}
        aria-label='искать по запросу'
        onClickHandler={searchData}
      />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.form`
  display: flex;
  border: 1.5px solid var(--clr-primary-1);
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;
  margin-left: 25px;
  width: 100%;
  max-width: 600px;

  input {
    border: none;
    padding: 10px 20px;
    width: 100%;
  }

  select {
    background-color: var(--clr-primary-4);
    border: none;
    border-radius: 5px;
    padding: 10px 14px;
    appearance: none;
    font-size: 14px;
    width:  80px;
  }

  option:hover {
    color: var(--clr-primary-1);
  }

  button svg {
    width: 16px;
    height: 16px;
  }
`

export default SearchForm
