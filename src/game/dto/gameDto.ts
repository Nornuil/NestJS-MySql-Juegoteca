import { IsString, IsInt, IsArray } from 'class-validator';

export class gameDto {
  @IsString()
  nombreJuego: string;

  @IsInt()
  cantidadMinJugadores: number;

  @IsInt()
  cantidadMaxJugadores: number;

  @IsInt()
  tiempoMinJuego: number;

  @IsInt()
  tiempoMaxJuego: number;

  @IsInt()
  edadJugadores: number;

  @IsInt()
  dificultadJuego: Number;

  @IsString()
  linkJuego: string;

  @IsString()
  linkVideo: string;

  @IsArray()
  @IsString({ each: true })
  imagenes: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  linkReglas: string;
}
