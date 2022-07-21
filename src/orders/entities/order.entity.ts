import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  os: string;

  @Prop()
  sub_os: string;

  @Prop()
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
