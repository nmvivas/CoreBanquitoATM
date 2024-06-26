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
import { ServicePassComponent } from './pages/service-pay/service-pass/service-pass.component';
import { ServiceCompanyComponent } from './pages/service-pay/service-company/service-company.component';
import { ServiceChooseComponent } from './pages/service-pay/service-choose/service-choose.component';
import { ServiceTypeAccountComponent } from './pages/service-pay/service-type-account/service-type-account.component';
import { ServiceValueComponent } from './pages/service-pay/service-value/service-value.component';
import { ServiceCheckComponent } from './pages/service-pay/service-check/service-check.component';
import { ServiceClientComponent } from './pages/service-pay/service-client/service-client.component';

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
                path: 'service-pass',
                component: ServicePassComponent
            },
            {
                path: 'service-choose',
                component: ServiceChooseComponent
            },
            {
                path: 'service-company',
                component: ServiceCompanyComponent
            },
            {
                path: 'service-type-account',
                component: ServiceTypeAccountComponent
            },
            {
                path: 'service-value',
                component: ServiceValueComponent
            },
            {
                path: 'service-check',
                component: ServiceCheckComponent
            },
            {
                path: 'service-client',
                component: ServiceClientComponent
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
