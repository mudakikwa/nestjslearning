import {Controller,Get} from "@nestjs/common"

@Controller("/app")
export class AppController{
    @Get("/asdf")
    getAppData(){
        return "hello word"
    }

    @Get("/bye")
    getBye(){
        return "bye there"
    }
}