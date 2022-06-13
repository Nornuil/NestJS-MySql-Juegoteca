import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game/entities/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cejudo2868',
      database: 'juegoteca',
      entities: [GameEntity],
      synchronize: true,
    }),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// app.use(myconnection(mysql,{
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'cejudo2868',
//   port: 3306,
//   database: 'bd_proyect'
// }, 'single'));
