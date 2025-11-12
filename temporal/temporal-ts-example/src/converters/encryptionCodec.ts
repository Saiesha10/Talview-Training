import {
  Payload,
  PayloadCodec,
  METADATA_ENCODING_KEY,
  EncodingType,
} from '@temporalio/common';
import { webcrypto as crypto } from 'node:crypto';

const ENCODING = 'binary/encrypted';

async function fetchKey(keyId: string): Promise<CryptoKey> {
  const keyBytes = Buffer.from('0123456789abcdef0123456789abcdef');
  return crypto.subtle.importKey(
    'raw',
    keyBytes,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

export class EncryptionCodec implements PayloadCodec {
  private key: CryptoKey;

  private constructor(key: CryptoKey) {
    this.key = key;
  }

  public static async create(): Promise<EncryptionCodec> {
    const key = await fetchKey('default');
    return new EncryptionCodec(key);
  }

  async encode(payloads: Payload[]): Promise<Payload[]> {
    return Promise.all(
      payloads.map(async (p) => {
        const encrypted = await crypto.subtle.encrypt(
          { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) },
          this.key,
          Buffer.from(p.data, 'base64')
        );
        return {
          metadata: {
            [METADATA_ENCODING_KEY]: Buffer.from(ENCODING).toString('base64'),
          },
          data: Buffer.from(encrypted).toString('base64'),
        };
      })
    );
  }

  async decode(payloads: Payload[]): Promise<Payload[]> {
    return Promise.all(
      payloads.map(async (p) => {
        const enc = Buffer.from(p.data, 'base64');
        const iv = enc.slice(0, 12);
        const ciphertext = enc.slice(12);
        const decrypted = await crypto.subtle.decrypt(
          { name: 'AES-GCM', iv },
          this.key,
          ciphertext
        );
        return {
          metadata: p.metadata,
          data: Buffer.from(decrypted).toString('base64'),
        };
      })
    );
  }
}
