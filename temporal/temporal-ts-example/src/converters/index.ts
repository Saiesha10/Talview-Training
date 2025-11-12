import { CompositePayloadConverter, UndefinedPayloadConverter, JsonPayloadConverter } from '@temporalio/common';
import { DatePayloadConverter } from './customPayloadConverter';

export const payloadConverter = new CompositePayloadConverter(
  new UndefinedPayloadConverter(),
  new DatePayloadConverter(),
  new JsonPayloadConverter()
);


