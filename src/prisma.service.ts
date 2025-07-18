import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    (this as PrismaClient & { $on(event: 'beforeExit', cb: () => Promise<void>): void }).$on('beforeExit', async () => {
      await app.close();
    });
  }
}