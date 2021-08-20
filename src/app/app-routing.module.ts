import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'dashart',
    loadChildren: () => import('./dashart/dashart.module').then( m => m.DashartPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tapcrud',
    loadChildren: () => import('./tapcrud/tapcrud.module').then( m => m.TapcrudPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'dashuser',
    loadChildren: () => import('./dashuser/dashuser.module').then( m => m.DashuserPageModule)
    , canActivate: [AuthGuard],
    data:{

      role:'user'
    }
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'viewpost',
    loadChildren: () => import('./viewpost/viewpost.module').then( m => m.ViewpostPageModule)
  },
  {
    path: 'dashadmin',
    loadChildren: () => import('./dashadmin/dashadmin.module').then( m => m.DashadminPageModule)
    , canActivate: [AuthGuard],
    data:{
role:'ADMIN'


    }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
