import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../errors/AppError"

interface IRequest {
  email: string
  password: string
}

interface IResponse{
  user:{
    name: string,
    email:string
  }
  token:string
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository : IUserRepository
  ){}

  async execute({email, password}:IRequest):Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new AppError("E-mail or password incorrect");
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new AppError("E-mail or password incorrect");
    }

    const token = sign({}, "a57d92efdadcdf73056137e6f81d6ed6",{
      subject:user.id,
      expiresIn:"1d"
    })

    const tokenReturn: IResponse = {
      token,
      user:{
        name:user.name,
        email: user.email
      }
    }
    return tokenReturn
  }
}
export {AuthenticateUserUseCase}