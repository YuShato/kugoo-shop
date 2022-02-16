import styled from "styled-components";
import { filters } from "../../consts/filters";
import DefaultTitle from "../common/DefaultTitle";
import ProductFilters from "../products/Filters";
import { ICard } from "../../types/types";
import CardItem from "./CardItem";
import MoreBtn from "../products/MoreBtn";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import { useActions } from "../../store/hooks/useActions";
import Error from "../error/Error";
import { setProductsLimit } from "../../store/action-creator/product";

const CardWrapper = () => {
  const { isLoading, error, products, productsLimit, maxProductsLength } =
    useTypedSelector((store) => store.product);

  const { fetchProducts } = useActions();

  const showMore = () => {
    setProductsLimit(maxProductsLength);
    fetchProducts(0, maxProductsLength);
  };

  useEffect(() => {
    fetchProducts(0, productsLimit);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container>
      <div className="container">
        <DefaultTitle title="Электросамокаты" />
        <ProductFilters filters={filters} />
      </div>
      <Wrapper>
        {products.map((card: ICard, index: number) => (
          <CardItem card={card} key={index} />
        ))}
      </Wrapper>
      <div className="container">
        <MoreBtn
          className={
            products.length === maxProductsLength ? "hidden" : undefined
          }
          onClickHandler={showMore}
        />
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
