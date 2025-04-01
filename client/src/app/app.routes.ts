import { Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { DeltailComponent } from './pages/product/deltail/deltail.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {

                path: "",
                redirectTo: "client",
                pathMatch: "full"

            },
            { path: '', component: HompageComponent },
            { path: 'books/:id', component: DeltailComponent }
            // { path: 'child2', component: Child2Component },
            // { path: '...', component: AnotherComponent },
        ]
    }
];
