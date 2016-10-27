import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'my-app',
    templateUrl: '../angularjs/app.component.html'
})
export class AppComponent {
    title = 'Buy-Sell Items';

    constructor(private router : Router){}

    setClasses(path : string) {
        let classes =  {
            active: this.router.url === path,
            'nav-item' : true
        };
        return classes;
    }

}
