import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { gameDto } from './dto/gameDto';
import { gameEditDto } from './dto/gameEditDto';
import { GameEntity } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly gameRepository: Repository<GameEntity>,
  ) {}

  async getAll(): Promise<GameEntity[]> {
    return await this.gameRepository.find();
  }

  async createOne(dto: gameDto) {
    const game = this.gameRepository.create(dto);
    return await this.gameRepository.save(game);
  }

  async editOne(id: number, dto: gameEditDto) {
    const game = await this.gameRepository.findOne({ where: { idGames: id } });
    if (!game) throw new NotFoundException('Juego no existe');

    const editedGame = Object.assign(game, dto);
    return await this.gameRepository.save(editedGame);
  }

  async deleteOne(id) {
    const game = await this.gameRepository.delete(id);

    if (!game.affected) throw new NotFoundException('Juego no existe');

    return { mensaje: 'Borrado' };
  }
}
