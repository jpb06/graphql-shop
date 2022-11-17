import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { obfuscateCreditCardNumber } from '../../credit-cards/logic/obfuscate-credit-card-number';
import { GetUserOrdersSelectType } from '../closures/get-user-orders.closure';
import { GqlOrder } from '../dtos/gql.order.dto';

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
