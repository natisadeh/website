import { TestBed, inject } from '@angular/core/testing';
import { ValidateService } from './validate.service';
describe('ValidateService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ValidateService]
        });
    });
    it('should be created', inject([ValidateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=F:/webStormProjects/meanauthapp/angular-src/src/app/services/validate.service.spec.js.map