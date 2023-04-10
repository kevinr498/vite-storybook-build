module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'postgres://postgres:TJTbcKS77CFuteL@database-1.cvhvzvs7gy41.us-east-2.rds.amazonaws.com:5432/postgres'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'cookthat'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'TJTbcKS77CFuteL'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
