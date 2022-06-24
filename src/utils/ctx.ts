import { OrderService } from "../order/order.service";
import { Injectable } from "./Injectable";

@Injectable()
export class Context {
  public id: string;

  constructor(private readonly orderService: OrderService) {
    this.id = `${Math.floor(Math.random() * 100)}`;
  }

  reqInfo() {
    return { at: new Date(), ctxId: this.id };
  }

  run() {
    return this.orderService.createOrder();
  }
}
