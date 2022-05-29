import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board-dto';
import { BoardStatus } from './board-status.enum';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = await this.boardRepository.createBoard(createBoardDto);

    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOneOrFail({
      where: { id },
    });

    return board;
  }
}
