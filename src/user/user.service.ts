import { Injectable } from "../utils/Injectable";

@Injectable()
export class UserService {
  save() {
    console.log("saving user");
  }
}
