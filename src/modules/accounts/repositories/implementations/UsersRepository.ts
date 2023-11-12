import { Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import {IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import dataSource from "../../../../database";


class UsersRepository implements IUserRepository{
  private repository: Repository<User>

  constructor(){
    this.repository = dataSource.getRepository(User)
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({id})

    return user
  }
 
  async create({name, password, email, id, avatar}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      avatar
    })
    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({email})
    return user
  }
  
}
export {UsersRepository}