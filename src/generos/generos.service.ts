import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.genero.findMany();
  }

  async findOne(id: number) {
    return this.prisma.genero.findUnique({ where: { id } });
  }

  async create(dto: CreateGeneroDto) {
    return this.prisma.genero.create({ data: dto });
  }

  async update(id: number, dto: UpdateGeneroDto) {
    return this.prisma.genero.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.genero.delete({ where: { id } });
  }
}
