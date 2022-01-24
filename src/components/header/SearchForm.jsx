import React from 'react'
import styled from 'styled-components'
import { SearchFormData } from '../../consts/catalog'
import { AiOutlineSearch } from 'react-icons/ai'
import DefaultButton from '../command/DefaultButton'

const searchData = evt => {
  evt.preventDefault()
  console.log('search form ')
}

const SearchForm = () => {
  return (
    <SearchWrapper>
      <select name='search-place' id='search-place'>
        {SearchFormData.map((item, index) => {
          const { searchInfo, searchValue } = item
          return (
            <option key={index} value={searchValue}>
              {searchInfo}
            </option>
          )
        })}
      </select>
      <input type='text' name='text' placeholder='Искать самокат KUGO' />
      <DefaultButton
        icon={<AiOutlineSearch />}
        aria-label='search'
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

  input {
    border: none;
    padding: 10px;
  }

  select {
    background-color: var(--clr-primary-4);
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    appearance: none;
    font-size: 14px;
    min-width: 100px;
  }

  option:hover {
    color: var(--clr-primary-1);
  }
`

export default SearchForm
