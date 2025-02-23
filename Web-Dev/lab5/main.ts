import { bootstrapApplication } from '@angular/platform-browser';
import { productsConfig } from './products/products.config';
import { ProductsComponent } from './products/products.component';

bootstrapApplication( ProductsComponent, productsConfig)
  .catch((err) => console.error(err));
