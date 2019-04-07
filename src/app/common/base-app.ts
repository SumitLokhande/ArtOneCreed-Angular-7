import { ShareService } from '../services/share.service';
import { ToastService } from '../services/toast.service';
import { CacheService } from '../services/cache.service';
import { SessionService } from '../services/session.service';
import { EventService } from '../services/event.service';
import { Injector } from '@angular/core';
import * as APP_CONSTANTS from './constants';

export class BaseApp {
    events: EventService;
    session: SessionService;
    cache: CacheService;
    toastService: ToastService;
    CONSTANTS: any;
    share: ShareService;
    loading = false;

    constructor(injector: Injector) {

        this.CONSTANTS = APP_CONSTANTS;
        this.events = injector.get(EventService);
        this.session = injector.get(SessionService);
        this.cache = injector.get(CacheService);
        this.toastService = injector.get(ToastService);
        this.share = injector.get(ShareService);
    }
    presentLoading() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }

    dismissLoading() {
        this.loading = false;
    }


}
