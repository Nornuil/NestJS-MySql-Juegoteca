import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { gameDto } from './dto/gameDto';
import { gameEditDto } from './dto/gameEditDto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGames() {
    const data = await this.gameService.getAll();
    return { messages: 'Peticion Correcta', data };
  }

  @Post()
  async createGame(@Body() gameDto: gameDto) {
    return await this.gameService.createOne(gameDto);
  }

  @Put(':id')
  async updateGame(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: gameEditDto,
  ) {
    return await this.gameService.editOne(id, dto);
  }

  @Delete(':id')
  async deleteGame(@Param('id', ParseIntPipe) id: number) {
    return await this.gameService.deleteOne(id);
  }
}
