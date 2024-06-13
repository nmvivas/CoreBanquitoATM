import { Routes } from '@angular/router';
import { ConsultComponent } from './pages/consult/consult.component';
import { DebitsCheckComponent } from './pages/debits/debits-check/debits-check.component';
import { DebitsOthervalueComponent } from './pages/debits/debits-othervalue/debits-othervalue.component';
import { DebitsPassComponent } from './pages/debits/debits-pass/debits-pass.component';
import { DebitsTypeAccountComponent } from './pages/debits/debits-type-account/debits-type-account.component';
import { DebitsValueComponent } from './pages/debits/debits-value/debits-value.component';
import { DebitsComponent } from './pages/debits/debits.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ServicePayComponent } from './pages/service-pay/service-pay.component';
import { ExitComponent } from './pages/debits/exit/exit.component';
import { TransactionSucessfulComponent } from './pages/debits/transaction-sucessful/transaction-sucessful.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: '',
        component: HeaderComponent,
        children: [
            {
                path: 'debits',
                component: DebitsComponent
            },
            {
                path: 'debits-pass',
                component: DebitsPassComponent
            },
            {
                path: 'debits-value',
                component: DebitsValueComponent
            },
            {
                path: 'debits-othervalue',
                component: DebitsOthervalueComponent
            },
            {
                path: 'debits-type-account',
                component: DebitsTypeAccountComponent
            },
            {
                path: 'debits-check',
                component: DebitsCheckComponent
            },
            {
                path: 'exit',
                component: ExitComponent
            },
            {
                path: 'transaction-sucessful',
                component: TransactionSucessfulComponent
            },
            {
                path: 'service-pay',
                component: ServicePayComponent
            },
            {
                path: 'consult',
                component: ConsultComponent
            },
            {
                path: 'deposits',
                component: DepositsComponent
            },
            
        ]

    },
    


];
