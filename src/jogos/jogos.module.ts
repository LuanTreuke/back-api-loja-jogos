import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  controllers: [JogosController],
  providers: [JogosService],
  imports: [PrismaModule],
})
export class JogosModule {}
