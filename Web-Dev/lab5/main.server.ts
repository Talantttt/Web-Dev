import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsComponent } from './products/products.component';
import { config } from './products/products.config.server';

const bootstrap = () => bootstrapApplication(ProductsComponent, config);

export default bootstrap;
