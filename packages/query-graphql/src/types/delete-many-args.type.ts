import { Filter, Class } from '@nestjs-query/core';
import { Field, ArgsType } from 'type-graphql';

export interface DeleteManyArgsType<T> {
  input: Filter<T>;
}

export function DeleteManyArgsType<T>(FilterType: Class<Filter<T>>): Class<DeleteManyArgsType<T>> {
  @ArgsType()
  class DeleteManyArgs implements DeleteManyArgsType<T> {
    @Field(() => FilterType, { description: 'Filter to find records to delete' })
    input!: Filter<T>;
  }
  return DeleteManyArgs;
}
