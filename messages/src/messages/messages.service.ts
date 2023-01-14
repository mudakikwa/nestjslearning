import {MessagesRepository} from "./messages.repository"
import {NotFoundException,Injectable} from "@nestjs/common"
@Injectable()
export class MessagesService{
  constructor(public messagesRepo:MessagesRepository){}
  async findOne(id:string){
    const message= await this.messagesRepo.findOne(id)
    if(!message){
        throw new NotFoundException("Message not found")
    }
    return message
  }

  findAll(){
    return this.messagesRepo.findAll()
  }

  create(content:string){
    return this.messagesRepo.create(content)
  }
}
