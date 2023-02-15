import mongoose, { ConnectOptions } from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    logger.info('DB connected');
  } catch (error: any) {
    // logger.error('Could not connect to db due to ', error);
    console.error('Could not connect to db due to ', error);
    process.exit(1);
  }
}

export default connect;
