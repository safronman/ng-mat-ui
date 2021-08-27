import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';

type StyleType = {
    id: number
    title: string
    beatsCount: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    volume = 50;
    currentStyle: StyleType | null = null

    styles: StyleType[] = [
        {id: 46, title: 'Trap/EDM Trap', beatsCount: 27733},
        {id: 42, title: 'Old School', beatsCount: 7202},
        {id: 44, title: 'Pop', beatsCount: 4990},
        {id: 80, title: 'Hip-Hop', beatsCount: 4544},
        {id: 47, title: 'Club', beatsCount: 3024},
        {id: 43, title: 'R&B', beatsCount: 2803},
        {id: 86, title: 'New School', beatsCount: 2757},
        {id: 45, title: 'Underground', beatsCount: 2463},
        {id: 54, title: 'Experimental', beatsCount: 2177},
        {id: 55, title: 'Abstract Hip-Hop', beatsCount: 972},
        {id: 56, title: 'Cinematic', beatsCount: 741},
        {id: 48, title: 'Grime', beatsCount: 730},
        {id: 88, title: 'Rock Beats', beatsCount: 648},
        {id: 57, title: 'Rapcore/HardCore', beatsCount: 525},
        {id: 49, title: 'Crunk', beatsCount: 463}
    ];


    selectStyleHandler(event: MatOptionSelectionChange) {
        if (event.source.selected) {
            this.currentStyle = event.source.value
            console.log(event.source.value)
        }

    }
}
