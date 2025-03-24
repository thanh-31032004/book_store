import { Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HompageComponent } from './pages/hompage/hompage.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            { path: '', component: HompageComponent },
            // { path: 'child2', component: Child2Component },
            // { path: '...', component: AnotherComponent },
        ]
    }
];
