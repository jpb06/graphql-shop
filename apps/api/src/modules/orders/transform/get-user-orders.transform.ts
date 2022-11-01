import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetUserOrdersSelectType } from '../closures/get-user-orders.closure';
import { GqlOrder } from '../dtos/gql.order.dto';

const obfuscateCreditCardNumber = (number: string): string => {
  const lastFourNumbers = number.slice(-4);

  return `${'•'.repeat(number.length - 4)}${lastFourNumbers}`;
};

@Injectable()
export class GetUserOrdersTransform
  implements NestInterceptor<Array<GetUserOrdersSelectType>, Array<GqlOrder>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<Array<GetUserOrdersSelectType>>
  ): Observable<Array<GqlOrder>> {
    return next.handle().pipe(
      map((data) =>
        data.map((item) => {
          const {
            CreditCard: { number },
            ...rest
          } = item;

          return {
            ...rest,
            creditCardNumber: obfuscateCreditCardNumber(number),
          };
        })
      )
    );
  }
}
