import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import DefaultButton from "../common/DefaultButton";
import SelectCatalog from "./SelectCatalog";
import { ICatalogOption } from "../types/types";
import { FC } from "react";

interface SearchFormProps {
  catalogSelectOptions: ICatalogOption[];
}

const searchData = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("search form ");
};

const SearchForm: FC<SearchFormProps> = ({ catalogSelectOptions }) => {
  return (
    <SearchWrapper>
      <SelectCatalog catalogSelectOptions={catalogSelectOptions} />
      <input type="text" name="text" placeholder="Искать самокат KUGO" />
      <DefaultButton
        icon={<AiOutlineSearch />}
        aria-label="искать по запросу"
        onClickHandler={searchData}
        title={undefined}
      />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  border: 1.5px solid var(--clr-primary-1);
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;
  margin-left: 25px;
  width: 100%;
  max-width: 600px;
  overflow: visible;
  position: relative;

  input {
    border: none;
    padding: 10px 20px;
    width: 100%;
  }

  button svg {
    width: 16px;
    height: 16px;
  }
`;

export default SearchForm;
