import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(data: CreateOrderDto) {
    const os = new this.orderModel(data);
    return await os.save();
  }

  async findAll() {
    return await this.orderModel.find();
  }

  async findOne(id: string) {
    return await this.orderModel.findOne({
      os: id,
    });
  }

  async findBySub(id: string) {
    return await this.orderModel.findOne({
      sub_os: id,
    });
  }

  async findByStatus(status: string) {
    return await this.orderModel.find({
      status: status,
    });
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
