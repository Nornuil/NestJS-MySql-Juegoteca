import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Games')
export class GameEntity {
  @PrimaryGeneratedColumn()
  idGames: number;

  @Column({ type: 'varchar', length: 255 })
  nombreJuego: string;

  @Column({ type: 'int' })
  cantidadMinJugadores: number;

  @Column({ type: 'int' })
  cantidadMaxJugadores: number;

  @Column({ type: 'int' })
  tiempoMinJuego: number;

  @Column({ type: 'int' })
  tiempoMaxJuego: number;

  @Column({ type: 'int' })
  edadJugadores: number;

  @Column({ type: 'int' })
  dificultadJuego: Number;

  @Column({ type: 'varchar', length: 255 })
  linkJuego: string;

  @Column({ type: 'varchar', length: 255 })
  linkVideo: string;

  @Column({ type: 'simple-array' })
  imagenes: string[];

  @Column({ type: 'simple-array' })
  tags: string[];

  @Column({ type: 'varchar', length: 255 })
  linkReglas: string;
}
