import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

//FIXME: @EntityRepository is deprecated
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
