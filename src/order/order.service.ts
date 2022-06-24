import { UserService } from "../user/user.service";
import { Context } from "../utils/ctx";
import { InjectContext } from "../utils/ctx.decorator";
import { Injectable } from "../utils/Injectable";

@Injectable()
export class OrderService {
  constructor(
    @InjectContext() private readonly ctx: Context,
    private readonly userService: UserService
  ) {}

  async createOrder() {
    console.log("lazy loaded ctx: ", this.ctx.reqInfo());
    this.userService.save();
    console.log("order created");
  }
}
