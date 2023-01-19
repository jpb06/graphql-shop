import { registerEnumType } from '@nestjs/graphql';

export enum NumberCondition {
  gte = 'gte',
  lte = 'lte',
}

registerEnumType(NumberCondition, {
  name: 'NumberCondition',
});
