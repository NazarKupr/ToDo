import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map'

// components
import { SignInComponent } from './components/sign-in';

// guards
import { RequireUnauthGuard } from './guards';


export const AuthRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: SignInComponent,
    canActivate: [RequireUnauthGuard]
  }
]);
