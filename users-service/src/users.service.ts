import { Injectable } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Injectable()
export class UsersService {
  private readonly USERS = [{
    username: 'john',
    password: '123456',
  }];

  createUser(user) {
    this.USERS.push(user);
    return this.USERS[this.USERS.length - 1];
  }

  getUserByUsername(username) {
    const res = this.USERS.find(user => user.username === username);
    if(!res){
      return {
        status: 404,
        message: 'User not found'
      }
    }
    return res
  }
}
