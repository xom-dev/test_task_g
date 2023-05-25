import { data } from "../../api/data";
import { UserData } from "./interfaces";

export class User {
  public static async getUsers() {
    const response: UserData = data;
    return response;
  }
}
