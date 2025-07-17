import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Get()
  async findAll(
    @Query('plataformaId') plataformaId?: string,
    @Query('generoId') generoId?: string
  ) {
    return this.jogosService.findAll({
      plataformaId: plataformaId ? Number(plataformaId) : undefined,
      generoId: generoId ? Number(generoId) : undefined,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.jogosService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateJogoDto) {
    return this.jogosService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateJogoDto) {
    return this.jogosService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.jogosService.remove(Number(id));
  }
}
