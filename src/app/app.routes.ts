import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'csie',
        loadComponent: () => import('./skeletor/main-csie/main-csie').then(m => m.MainCsie),
        children: [
            {
                path: 'gestion-depenses',
                loadComponent: () => import('./pages/gestion-depenses/gestion-depenses').then(m => m.GestionDepenses),
            },
            {
                path: 'gestion-factures',
                loadComponent: () =>  import('./pages/gestion-factures/gestion-factures').then(m=>m.GestionFactures),
            },
            {
                path: 'ventes',
                loadComponent: () => import('./pages/gestion-ventes/gestion-ventes').then(m => m.GestionVentes),
            },
            {
                path: 'caisse',
                loadComponent: () => import('./pages/gestion-caisse/gestion-caisse').then(m => m.GestionCaisse),
            },
            {
                path: 'designation-produit',
                loadComponent: () => import('./pages/designation-produit/designation-produit').then(m => m.DesignationProduit),
            },
            {
                path: 'service-main-dœuvre',
                loadComponent: () => import('./pages/service-main-oeuvre/service-main-oeuvre').then(m => m.ServiceMainOeuvre),
            },
            {
                path: 'clients',
                loadComponent: () => import('./pages/clients/clients').then(m => m.Clients),
            },
            {
                path: 'detail-client',
                loadComponent: () => import('./pages/detail-client/detail-client').then(m => m.DetailClient),
            },
            {
                path: 'fournisseurs',
                loadComponent: () => import('./pages/fournisseur/fournisseur').then(m => m.Fournisseur),
            }, 
            {
                path: 'profil',
                loadComponent: () => import('./pages/profil/profil').then(m => m.Profil),
            }
        ]
    },
];
