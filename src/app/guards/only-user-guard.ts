import { CanActivateFn, RedirectCommand } from '@angular/router';
import { Auth, } from '../services/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const onlyUserGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  if (authService.token) return true;

  const loginPath = router.parseUrl('/login');
  return new RedirectCommand(loginPath, {
    skipLocationChange: false,
  });
}
