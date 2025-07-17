import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlataformasService } from './plataformas.service';
import { CreatePlataformaDto } from './dto/create-plataforma.dto';
import { UpdatePlataformaDto } from './dto/update-plataforma.dto';

@Controller('plataformas')
export class PlataformasController {
  constructor(private readonly plataformasService: PlataformasService) {}

  @Get()
  async findAll() {
    return this.plataformasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.plataformasService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreatePlataformaDto) {
    return this.plataformasService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePlataformaDto) {
    return this.plataformasService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.plataformasService.remove(Number(id));
  }
}
