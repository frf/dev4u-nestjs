import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginateDto } from '../dto/paginate.dto';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const {user} = ctx.switchToHttp().getRequest();
    console.log(user)
    // const paginate = new PaginateDto();
    // paginate.page = query.page ? query.page : 1;
  },
);