import {
  Payload,
  PayloadConverter,
  METADATA_ENCODING_KEY,
  EncodingType,
} from '@temporalio/common';
export class DatePayloadConverter implements PayloadConverter {
  public encodingType = 'json/date-iso' as EncodingType;

  toPayload(value: unknown): Payload | undefined {
    if (!(value instanceof Date)) return undefined;
    const iso = value.toISOString();
    return {
      metadata: {
        [METADATA_ENCODING_KEY]: Buffer.from(this.encodingType).toString('base64'),
      },
      data: Buffer.from(JSON.stringify({ iso })).toString('base64'),
    };
  }

  fromPayload<T>(payload: Payload): T {
    const obj = JSON.parse(Buffer.from(payload.data, 'base64').toString());
    return new Date(obj.iso) as unknown as T;
  }
}
