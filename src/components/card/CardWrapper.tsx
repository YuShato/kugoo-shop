import styled from "styled-components";
import { MAX_PRODUCTS_LENGTH } from "../../consts/consts";
import { filters } from "../../consts/filters";
import mockCards from "../../consts/mockData";
import DefaultTitle from "../common/DefaultTitle";
import ProductFilters from "../products/Filters";
import { ICard } from "../../types/types";
import CardItem from "./CardItem";
import MoreBtn from "../products/MoreBtn";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/action-creator/product";
import Loading from "../loading/Loading";

const showMore = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show more");
};

//

// const getProducts = async () => {
//   let url = "http://localhost:3001/productsList";
//   let response = await fetch(url);

//   let commits = await response.json(); //
//   return commits
// };

const CardWrapper = () => {
  const { isLoading, error, products } = useTypedSelector(
    (store) => store.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container>
        <DefaultTitle title={error}></DefaultTitle>
      </Container>
    );
  }
  return (
    <Container>
      <div className="container">
        <DefaultTitle title="Электросамокаты" />
        <ProductFilters filters={filters} />
      </div>
      <Wrapper>
        {products
          .slice(0, MAX_PRODUCTS_LENGTH)
          .map((card: ICard, index: number) => (
            <CardItem card={card} key={index} />
          ))}
      </Wrapper>
      <div className="container">
        <MoreBtn onClickHandler={showMore} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  min-height: 300px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 28px;
  width: 100%;
  grid-template-columns: repeat(4, minmax(250px, 350px));
  margin: 50px auto;
`;

export default CardWrapper;
