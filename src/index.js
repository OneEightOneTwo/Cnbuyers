import dva from 'dva';

// 默认样式
import './index.css';

// antd
import 'antd-mobile/dist/antd-mobile.css';

// swiper
import 'swiper/dist/css/swiper.min.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
