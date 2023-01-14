import {readFile,writeFile} from "fs/promises"
import {Injectable} from "@nestjs/common"

@Injectable()
export class MessagesRepository{
  async findOne(id:string){
    const contents=await readFile("messages.json","utf8")
    const data=JSON.parse(contents)
    return data[id]
  }

  async findAll(){
    const contents=await readFile("messages.json","utf8")
    const data=JSON.parse(contents)
    return data
  }

  async create(message:string){
    const content=await readFile("messages.json","utf8")
    const data=JSON.parse(content)
    const id=Math.floor(Math.random()*999)
    data[id]={
      content:message,
      id:id
    }
    await writeFile("messages.json",JSON.stringify(data))
    return data[id]
  }
}
