import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase{

  constructor(
    @inject("UsersRepository")
    private usersRepository:IUserRepository
  ){}
  async execute({name, email, password}:ICreateUserDTO):Promise<void>{
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new AppError("User already exists!");
      
    }

    const passwordHash = await hash(password,8)
    await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    })
  }
}

export{CreateUserUseCase}