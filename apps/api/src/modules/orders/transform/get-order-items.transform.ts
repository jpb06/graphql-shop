import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetByOrderSelectType } from '../../ordered-items/closures/get-by-order.closure';
import { GqlOrderedItem } from '../../ordered-items/dtos/gql.ordered-item.dto';

@Injectable()
export class GetOrderItemsTransform
  implements
    NestInterceptor<Array<GetByOrderSelectType>, Array<GqlOrderedItem>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<Array<GetByOrderSelectType>>
  ): Observable<Array<GqlOrderedItem>> {
    return next.handle().pipe(
      map((data) =>
        data.map((item) => ({
          ...item.Product,
          quantity: item.quantity,
          id: item.id,
          idProduct: item.Product.id,
        }))
      )
    );
  }
}
