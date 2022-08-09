import { initBridge } from '@/helpers/bridge';

// export default initBridge('mock');
// export default initBridge('app');

export default process.env.NODE_ENV === 'production' ? initBridge('app') : initBridge('mock');
