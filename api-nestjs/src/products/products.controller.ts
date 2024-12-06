import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import products from '../mocks/mock-products.json';

export type Product = {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: {
    name: string;
    description: string;
  };
  fullPriceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
};

export type ProductsResponse = {
  total: number;
  pageSize: number;
  totalPages: number;
  products: [Product];
};

@Controller('api/products')
export class ProductsController {
  @Get()
  listProducts(@Res() res: Response) {
    res.status(HttpStatus.OK).json(products as ProductsResponse);
  }
}
