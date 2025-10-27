import { LoginComponent } from './pages/login-component/login-component.js';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component.js';
import { DashboardDetailComponent } from './pages/dashboard-component/dashboard-detail-component.js';
import { ProductCardComponent } from './custom/product-card.js';
import { AppRoot } from './app-root.js';
import { AppRouter } from './routing/app-router.js';
import { HeaderComponent } from './custom/header.js';
import { FooterComponent } from './custom/footer.js';

customElements.define('app-root', AppRoot);
customElements.define('app-router', AppRouter);
customElements.define('login-component', LoginComponent);
customElements.define('dashboard-component', DashboardComponent);
customElements.define('dashboard-detail-component', DashboardDetailComponent);
customElements.define('product-card', ProductCardComponent);
customElements.define('bbva-header', HeaderComponent);
customElements.define('bbva-footer', FooterComponent);