import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const UseAuth = () => {
  return applyDecorators(UseGuards(AuthGuard('jwt')));
};
