# MeangFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<!-- ng g m @public/pages/home --routing -->
<!-- ng g m @public/pages/contact --routing -->


<!-- ignorar los test -->
 <!-- ng g c public/pages/contact --skip-tests -->

 <!-- Lazy loading para evitar que el navegador recargue la página -->

Ruta comodín (path: '**)
 ng g c public/pages/home --skip-tests
RouterModule  => Usa routerLink para movernos entre rutas sin href.

creación panel de Admin

ng g m @admin/pages/dashboard --routing

 ng g m @admin/pages/users --routing


ng g c @admin/pages/dashboard --skip-tests
 ng g c @admin/pages/users --skip-tests

 rutas en dos templates 

  ng g m @admin/pages/admin --flat --routing


 ng g c @admin/pages/admin --flat --skip-tests



 Cada vez que el usuario navega a una nueva ruta, el componente correspondiente se inyecta en el <router-outlet>, y su contenido es mostrado en la aplicación.
 <router-outlet></router-outlet>
Añadir las rutas hijas para acceder al contenido en su template

creando   routas template parala carpeta public
ng g m @public/pages/public --flat --routing

 ng g c @public/pages/public --flat --skip-tests

 ***crear repositorio git
 git init
  git remote add origin https://github.com/essenia/frontend-pago-online.git
   git pull origin master
    git merge origin/main
     git merge origin/main
     gi add --all
 git commit -m "configuración de las rutas templates"

 git push origin master
 git checkout -b 01-base-proyecto

 git push origin 01-base-proyecto
  git branch
   gir push origin 01-base-proyecto


    ng g c @admin/core/components/title/ --skip-tests
//añadir el admin.module dentro del componente header
     ng g c @admin/core/components/header/ --skip-tests --module=@admin/pages/admin.module.ts

      ng g c @admin/core/components/sidebar/ --skip-tests --module=@admin/pages/admin.module.ts

    //CommonModule te permite usar directivas estructurales y pipes en componentes que no están dentro del AppModule.
    //CommonModule permite usar *ngIf, *ngFor, *ngSwitch, y pipes como | date en componentes standalone o módulos adicionales.
 crear nueva rama 
    git status
    git add --all