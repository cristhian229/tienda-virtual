import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsOptional()
    name: string

    @IsNumber()
    @IsOptional()
    quantity: number

    @IsNumber()
    @IsOptional()
    price: number

    @IsString()
    @IsOptional()
    description:string
}
