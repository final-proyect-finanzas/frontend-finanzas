import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1),
    map(isSignedIn => {
      const isAuthRoute = state.url.includes('sign-in') || state.url.includes('sign-up');
      if (isSignedIn && isAuthRoute) {
        router.navigate(['/home']).then();
        return false;
      } else if (!isSignedIn && !isAuthRoute) {
        router.navigate(['/sign-in']).then();
        return false;
      }
      return true;
    })
  );
};
