import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canactivateGuard: CanActivateFn = (route, state) => {
  const expectedRole = route.data['expectedRole'];

  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.hasRole(expectedRole)) {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }

};
