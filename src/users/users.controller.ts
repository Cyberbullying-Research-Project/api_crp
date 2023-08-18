import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/user.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    getAll(){
        return this.usersService.getAll();
    }    
    
    @Get(':id')
    getOne(id: number){        
        return this.usersService.getOne(id);
    }

    @Post()   
    create(@Body() newUser: CreateUserDTO){
        return this.usersService.create(newUser);
    }

    @Put(':id')
    update(id: number, @Body() updateUser: CreateUserDTO){
        return this.usersService.update(id, updateUser);
    }

    @Delete(':id')
    delete(id: number){
        return this.usersService.delete(id);
    }
}


/**
 * import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getById(id);
  }

  @Post()
  createUser(@Body() user: any) {
    return this.usersService.create(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: any) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}

 */