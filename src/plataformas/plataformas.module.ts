import { Module } from '@nestjs/common';
import { PlataformasService } from './plataformas.service';
import { PlataformasController } from './plataformas.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  controllers: [PlataformasController],
  providers: [PlataformasService],
  imports: [PrismaModule],
})
export class PlataformasModule {}
