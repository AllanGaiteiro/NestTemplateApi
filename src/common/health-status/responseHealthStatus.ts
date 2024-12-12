import * as packageJson from '../../../package.json'; // Importa o package.json

export const responseHealthStatus = {
  status: 'API is running',
  version: packageJson.version,
  timestamp: new Date().toISOString(),
};
