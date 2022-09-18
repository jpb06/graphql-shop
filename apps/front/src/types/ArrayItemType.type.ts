export type ArrayItemType<ArrType> = ArrType extends readonly (infer ItemType)[]
  ? ItemType
  : never;
