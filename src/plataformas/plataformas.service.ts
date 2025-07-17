import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePlataformaDto } from './dto/create-plataforma.dto';
import { UpdatePlataformaDto } from './dto/update-plataforma.dto';

@Injectable()
export class PlataformasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.plataforma.findMany();
  }

  async findOne(id: number) {
    return this.prisma.plataforma.findUnique({ where: { id } });
  }

  async create(dto: CreatePlataformaDto) {
    return this.prisma.plataforma.create({ data: dto });
  }

  async update(id: number, dto: UpdatePlataformaDto) {
    return this.prisma.plataforma.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.plataforma.delete({ where: { id } });
  }
}
