import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  // NOTE: 클래스 외부에서 접근은 가능하지만 값을 변경하지 못하게 readOnly 를 사용한다.
  readonly StatusOption = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  // FIXME: why any?
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOption.indexOf(status);

    return index !== -1;
  }
}
