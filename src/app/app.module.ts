import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ManageCourseComponent } from './course/manage-course/manage-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { ManageBranchComponent } from './branch/manage-branch/manage-branch.component';
import { UpdateBranchComponent } from './branch/update-branch/update-branch.component';
import { AboutComponent } from './about/about.component';
import { UsercourseComponent } from './usercourse/usercourse.component';
import { ErrorComponent } from './error/error.component';
import { ViewCoursesComponent } from './view/view-courses/view-courses.component';
import { ViewBranchComponent } from './view/view-branch/view-branch.component';
import { ViewNotesComponent } from './view/view-notes/view-notes.component';
import { ViewQuestionpapersComponent } from './view/view-questionpapers/view-questionpapers.component';
import { ViewLabfileComponent } from './view/view-labfile/view-labfile.component';
import { PlayQuizComponent } from './quiz/play-quiz/play-quiz.component';
import { AddMaterialComponent } from './material/add-material/add-material.component';
import { ManageMaterialComponent } from './material/manage-material/manage-material.component';
import { UpdateMaterialComponent } from './material/update-material/update-material.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { ManageQuizComponent } from './quiz/manage-quiz/manage-quiz.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { AddQuizQuesComponent } from './quiz/add-quiz-ques/add-quiz-ques.component';
import { ManageQuizQuesComponent } from './quiz/manage-quiz-ques/manage-quiz-ques.component';
import { UpdateQuizQuesComponent } from './quiz/update-quiz-ques/update-quiz-ques.component';
import { ViewQuizQuesComponent } from './quiz/view-quiz-ques/view-quiz-ques.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminloginComponent,
    AddCourseComponent,
    ManageCourseComponent,
    UpdateCourseComponent,
    AddBranchComponent,
    ManageBranchComponent,
    UpdateBranchComponent,
    AboutComponent,
    UsercourseComponent,
    ErrorComponent,
    ViewCoursesComponent,
    ViewBranchComponent,
    ViewNotesComponent,
    ViewQuestionpapersComponent,
    ViewLabfileComponent,
    PlayQuizComponent,
    AddMaterialComponent,
    ManageMaterialComponent,
    UpdateMaterialComponent,
    AddQuizComponent,
    ManageQuizComponent,
    UpdateQuizComponent,
    AddQuizQuesComponent,
    ManageQuizQuesComponent,
    UpdateQuizQuesComponent,
    ViewQuizQuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
