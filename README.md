
---

# Heroes APP

En esta aplicación exploraremos los siguientes temas:

1. **Layouts**
2. **Rutas y Rutas Hijas**
3. **Lazy Load**
4. **Angular Material**

## Layouts

Un layout en Angular se refiere a la estructura general de la interfaz de usuario que se repite en múltiples vistas. Los layouts permiten definir una plantilla común, como un encabezado, un pie de página o una barra lateral, que se mantiene constante mientras el contenido principal cambia.

### Ejemplo

```html
<!-- layout-page.component.html -->
<div class="header">
  <!-- Contenido del encabezado -->
</div>
<div class="sidebar">
  <!-- Contenido de la barra lateral -->
</div>
<div class="content">
  <!-- Aquí se cargará el contenido de las rutas hijas -->
  <router-outlet></router-outlet>
</div>
<div class="footer">
  <!-- Contenido del pie de página -->
</div>
```

## Rutas y Rutas Hijas

Las rutas en Angular permiten la navegación entre diferentes vistas o componentes. Las rutas hijas son rutas anidadas que se cargan dentro de una ruta principal, lo que permite crear estructuras de navegación complejas y modulares.

### Ejemplo

```typescript
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'newHeroe',
        component: NewPageComponent,
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: 'edit/:id',
        component: NewPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: ':id',
        component: HeroPageComponent,
      },
    ],
  },
];
```

## Lazy Load

Lazy Load, o carga diferida, es una técnica que permite cargar módulos de manera asíncrona solo cuando son necesarios. Esto mejora el rendimiento de la aplicación al reducir el tamaño inicial del paquete y acelerar el tiempo de carga.

### Diferencias entre Carga Normal y Lazy Load

- **Carga Normal**: Todos los módulos y sus dependencias se cargan al inicio de la aplicación.
- **Lazy Load**: Los módulos se cargan bajo demanda, es decir, solo cuando se accede a las rutas correspondientes.

### Ejemplo de Lazy Load

```typescript
const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
];
```

En este ejemplo, el módulo `HeroesModule` se cargará solo cuando el usuario navegue a la ruta `heroes`.

## Angular Material

Angular Material es una biblioteca de componentes UI que sigue las directrices de Material Design de Google. Proporciona una colección de componentes preconstruidos y personalizables para crear aplicaciones modernas y atractivas.

### Ejemplo

Para usar Angular Material, primero debemos instalarlo:

```bash
ng add @angular/material
```

Luego, podemos importar y usar componentes de Angular Material en nuestros módulos:

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    // otros módulos
  ],
})
export class AppModule {}
```

### Uso en Plantilla

```html
<mat-toolbar color="primary">
  <span>Heroes APP</span>
</mat-toolbar>
<button mat-raised-button color="accent">New Hero</button>
