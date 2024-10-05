import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string

    @IsNumber()
    quantity: number

    @IsNumber()
    price: number

    @IsString()
    @IsOptional()
    description:string
}
