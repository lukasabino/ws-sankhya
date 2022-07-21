import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://DEV:4VGPAcKTVgfPFoaU@dev.kxsrn.mongodb.net/dev',
    ),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
