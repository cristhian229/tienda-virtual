import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) { }
  async create(createProductDto: CreateProductDto) {
    const newProduct: Product = this.productRepository.create(createProductDto)
    return await this.productRepository.save(newProduct)
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new BadRequestException("product not found")
    } return product;
    
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.findOne(id)
    if (!productToUpdate) {
      throw new NotFoundException("product not found")
    }
    const updatedProduct = Object.assign(productToUpdate, updateProductDto)
    return this.productRepository.save(updatedProduct)
    
  }

  async remove(id: number) {
    const productToDelete = await this.findOne(id)
    if (!productToDelete) {
      throw new NotFoundException("product not found")
    }return this.productRepository.softRemove(productToDelete)
  }



      //otra forma de hacer el update es esta, ambas estan bien, pero la que no esta comentada cumple mas con los principios solid

//   async update(id: number, updateProductDto: UpdateProductDto) {
//   const productToUpdate = await this.findOne(id)
//   if (!productToUpdate) {
//     throw new NotFoundException("product not found")
//   }
//   return this.productRepository.update(id, updateProductDto)
// }
}
