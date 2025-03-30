import { z } from 'zod'

const envSchema = z.object({
  AUTH_SECRET: z.string(),
	FIREBASE_TYPE:  z.string(),
	FIREBASE_PROJECT_ID:  z.string(),
	FIREBASE_PRIVATE_KEY_ID: z.string(),
	FIREBASE_PRIVATE_KEY: z.string(),
	FIREBASE_CLIENT_EMAIL: z.string(),
	FIREBASE_CLIENT_ID: z.string(),
	FIREBASE_AUTH_URL: z.string(),
	FIREBASE_TOKEN_URL: z.string(),
	FIREBASE_AUTH_PROVIDER_X509_CERT_URL: z.string(),
	FIREBASE_CLIENT_X509_CERT_URL: z.string(),
	FIREBASE_UNIVERSE_DOMAIN: z.string(),

	FIREBASE_STORAGE_BUCKET: z.string(),

	AUTH_GOOGLE_ID: z.string(),
	AUTH_GOOGLE_SECRET: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
	console.log(_env.error)
  throw new Error(`x invalid environment variables. ${_env.error.format()}`)
}

export const env = _env.data