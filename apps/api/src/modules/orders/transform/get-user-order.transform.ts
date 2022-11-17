import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { obfuscateCreditCardNumber } from '../../credit-cards/logic/obfuscate-credit-card-number';
import { GetUserOrderSelectType } from '../closures/get-user-order.closure';
import { GqlUserOrder } from '../dtos/gql.user-order.dto';

@Injectable()
export class GetUserOrderTransform
  implements NestInterceptor<GetUserOrderSelectType, GqlUserOrder>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<GetUserOrderSelectType>
  ): Observable<GqlUserOrder> {
    return next.handle().pipe(
      map((data) => ({
        createdAt: data.createdAt,
        creditCard: {
          number: obfuscateCreditCardNumber(data.CreditCard.number),
          expires: data.CreditCard.expires,
        },
        items: data.OrderedItem.map((o) => ({
          id: o.Product.id,
          name: o.Product.name,
          price: o.Product.price,
          quantity: o.quantity,
        })),
      }))
    );
  }
}
