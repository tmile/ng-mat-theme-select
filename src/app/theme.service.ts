import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";


@Injectable({ 
    providedIn: 'root' 
})
export class ThemeService {
    private renderer: Renderer2;
    private currentTheme = Theme.Light;

    constructor(private rendererFactory: RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    initialize(){
        const theme = localStorage.getItem('theme-mode');

        if (theme){
            this.currentTheme = theme;
        }
        else {
            localStorage.setItem('theme-mode', this.currentTheme);          
        }

        this.renderer.addClass(document.body, this.currentTheme + '-theme');
    }

    changeTheme(theme: string){
        localStorage.setItem('theme-mode', theme);

        this.renderer.removeClass(document.body, this.currentTheme + '-theme');
        this.renderer.addClass(document.body, theme + '-theme');

        this.currentTheme = theme;
    }

    getCurrentTheme(){
        return this.currentTheme;
    }
}

export class Theme {
    static readonly Light = 'light';
    static readonly Dark = 'dark';
    static readonly Alternate = 'alternate';
}
