import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
let mockRouter: any;
class MockRouter {
    //noinspection TypeScriptUnresolvedFunction
    navigate = jasmine.createSpy('navigate');
}
describe('LoginComponent', () => {
    beforeEach(async(() => {
        mockRouter = new MockRouter();
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            providers: [{ provide: Router, useValue: mockRouter }, LoginService],
            imports: [FormsModule]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Login'`, async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Login');
    }));

    it(`should have password '123456'`, async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        const login = {
            value: {
                password: '12345'
            }
        };
        app.login(login);
        expect(app.errorMsg).toEqual('Password is incorrect. Please enter 123456 as password');
    }));
});
