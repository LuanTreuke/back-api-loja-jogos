import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogosService {
  constructor(private prisma: PrismaService) {}

  async findAll(filter: { plataformaId?: number; generoId?: number }) {
    return this.prisma.jogo.findMany({
      where: {
        plataformaId: filter.plataformaId,
        generoId: filter.generoId,
      },
      include: {
        plataforma: true,
        genero: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.jogo.findUnique({
      where: { id },
      include: { plataforma: true, genero: true },
    });
  }

  async create(dto: CreateJogoDto) {
    return this.prisma.jogo.create({ data: dto });
  }

  async update(id: number, dto: UpdateJogoDto) {
    return this.prisma.jogo.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.jogo.delete({ where: { id } });
  }
}
