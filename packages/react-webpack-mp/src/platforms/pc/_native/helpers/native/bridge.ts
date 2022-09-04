import { initBridge } from '@/helpers/bridge';

export default process.env.NODE_ENV === 'production' ? initBridge('pc') : initBridge('mock');
