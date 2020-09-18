import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginateDto } from '../dto/paginate.dto';

export const Paginate = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const {query} = ctx.switchToHttp().getRequest();
    const paginate = new PaginateDto();
    paginate.page = query.page ? query.page : 1;
    return paginate;
  },
);