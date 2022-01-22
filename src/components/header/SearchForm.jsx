import React from 'react'
import styled from 'styled-components'
import { SearchFormData } from '../../consts/catalog'
import { AiOutlineSearch } from 'react-icons/ai'

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
          return <option key={index} value={searchValue}>{searchInfo}</option>
        })}
      </select>
      <input type='text' name='text' placeholder='Искать самокат Kugoo' />
      <button type='submit' aria-label='search' onClick={searchData}>
        <AiOutlineSearch />
      </button>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.form`
  display: flex;
`

export default SearchForm
