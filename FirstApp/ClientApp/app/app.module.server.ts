import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
import { AccountService } from './components/shared/account.service';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        sharedConfig.imports
    ],
    providers: [
        AccountService
    ]
})
export class AppModule {
}
