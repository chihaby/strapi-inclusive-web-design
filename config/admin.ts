export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {

  return {
    auth: {
      secret: env('d11441745ae5243562eb27c2ba4426ef74d9a57a206ef7550de189bae961b3c1'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
  };
};
