import { gameDto } from './gameDto';
import { PartialType } from '@nestjs/mapped-types';

export class gameEditDto extends PartialType(gameDto) {}
