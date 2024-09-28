import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const localUser = localStorage.getItem('empErpUser');
  if (localUser != null) {
    return true;
  }
  else {
    routerService.navigateByUrl('/login');
    return false;
  }

};
