import Home from '@mobile/components/home/home';

const AppHome: React.FC = () => (
  <div>
    <Home platform="mobile-native" />

    <p>
      <a href="/app-func.html">跳转到App Func页面</a>
    </p>
  </div>
);

export default AppHome;
