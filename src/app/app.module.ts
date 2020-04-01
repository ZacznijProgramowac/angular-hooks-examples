import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy } from '@angular/core';

import { AppComponent } from './app.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './on-changes/user/user.component';
import { OnInitComponent } from './on-init/on-init.component';
import { AnimalComponent } from './on-init/animal/animal.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { InputsComponent } from './do-check/inputs/inputs.component';
import { AfterContentInitComponent } from './after-content-init/after-content-init.component';
import { ChildContentComponent } from './after-content-init/child-content/child-content.component';
import { AfterViewCheckedComponent } from './after-view-checked/after-view-checked.component';
import { AfterContentCheckedComponent } from './after-content-checked/after-content-checked.component';
import { ContentComponentComponent } from './after-content-checked/content-component/content-component.component';
import { InputExampleComponent } from './after-content-checked/input-example/input-example.component';
import { FormsModule } from '@angular/forms';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { ViewComponent } from './after-view-init/view/view.component';
import { NgDestroyComponent } from './ng-destroy/ng-destroy.component';
import { HooksComponent } from './hooks/hooks.component';
import { AllHooksComponent } from './hooks/all-hooks/all-hooks.component';

const routes: Routes = [
  {
    path: 'hooks',
    component: HooksComponent,
  },
  {
    path: 'on-change',
    component: OnChangesComponent,
  },
  {
    path: 'on-init',
    component: OnInitComponent,
  },
  {
    path: 'do-check',
    component: DoCheckComponent,
  },
  {
    path: 'after-content-init',
    component: AfterContentInitComponent,
  },
  {
    path: 'after-content-checked',
    component: AfterContentCheckedComponent,
  },
  {
    path: 'after-view-init',
    component: AfterViewInitComponent,
  },
  {
    path: 'after-view-checked',
    component: AfterViewCheckedComponent,
  },
  {
    path: 'on-destroy',
    component: NgDestroyComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    UserComponent,
    OnInitComponent,
    AnimalComponent,
    DoCheckComponent,
    InputsComponent,
    AfterContentInitComponent,
    ChildContentComponent,
    AfterViewCheckedComponent,
    AfterContentCheckedComponent,
    ContentComponentComponent,
    InputExampleComponent,
    AfterViewInitComponent,
    ViewComponent,
    NgDestroyComponent,
    HooksComponent,
    AllHooksComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
