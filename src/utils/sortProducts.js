import { orderBy } from 'natural-orderby';

export const sortedProducts = (products, sortBy, direction) =>
  orderBy(products, [product => product[sortBy]], [direction]);
