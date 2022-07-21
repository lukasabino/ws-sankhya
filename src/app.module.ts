import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO), OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
