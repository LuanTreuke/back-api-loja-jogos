import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Get()
  async findAll() {
    return this.generosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.generosService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateGeneroDto) {
    return this.generosService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateGeneroDto) {
    return this.generosService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.generosService.remove(Number(id));
  }
}
