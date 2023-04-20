import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ManageCourseComponent } from './course/manage-course/manage-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { AboutComponent } from './about/about.component';
import { UsercourseComponent } from './usercourse/usercourse.component';
import { ErrorComponent } from './error/error.component';
import { PlayQuizComponent } from './quiz/play-quiz/play-quiz.component';
import { ViewBranchComponent } from './view/view-branch/view-branch.component';
import { ViewCoursesComponent } from './view/view-courses/view-courses.component';
import { ViewNotesComponent } from './view/view-notes/view-notes.component';
import { ViewLabfileComponent } from './view/view-labfile/view-labfile.component';
import { ViewQuestionpapersComponent } from './view/view-questionpapers/view-questionpapers.component';
import { AddMaterialComponent } from './material/add-material/add-material.component';
import { UpdateMaterialComponent } from './material/update-material/update-material.component';
import { ManageMaterialComponent } from './material/manage-material/manage-material.component';
import { ManageBranchComponent } from './branch/manage-branch/manage-branch.component';
import { UpdateBranchComponent } from './branch/update-branch/update-branch.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { ManageQuizComponent } from './quiz/manage-quiz/manage-quiz.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { AddQuizQuesComponent } from './quiz/add-quiz-ques/add-quiz-ques.component';
import { ManageQuizQuesComponent } from './quiz/manage-quiz-ques/manage-quiz-ques.component';
import { UpdateQuizQuesComponent } from './quiz/update-quiz-ques/update-quiz-ques.component';
import { ViewQuizQuesComponent } from './quiz/view-quiz-ques/view-quiz-ques.component';

const routes: Routes = [
{path:"",redirectTo:"/home",pathMatch:"full"},
  {
    path:"home",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"adminlogin",component:AdminloginComponent
  },
  {
  path:"dashboard",component:DashboardComponent
  },
  {
    path:"user",component:UserComponent
  },
  {
      path:"add-course",component:AddCourseComponent
  },
  {
      path:"manage-course",component:ManageCourseComponent
  },
  {
    path:"update-course",component:UpdateCourseComponent
},
{
  path:"add-branch",component:AddBranchComponent
},
{
  path:"manage-branch",component:ManageBranchComponent
},
{
  path:"update-branch",component:UpdateBranchComponent
},
{
  path:"about",component:AboutComponent
},
{
  path:"Usercourse",component:UsercourseComponent
},
{
  path:"add-material",component:AddMaterialComponent
},
{
  path:"update-material",component:UpdateMaterialComponent
},
{
  path:"manage-material",component:ManageMaterialComponent
},
{
  path:"view-branch",component:ViewBranchComponent
},
{
  path:"view-courses",component:ViewCoursesComponent
},
{
  path:"view-notes",component:ViewNotesComponent
},
{
  path:"view-questionpapers",component:ViewQuestionpapersComponent
},
{
  path:"view-labfile",component:ViewLabfileComponent
},
{
  path:"add-quiz-ques",component:AddQuizQuesComponent
},
{
  path:"manage-quiz-ques",component:ManageQuizQuesComponent
},
{
  path:"update-quiz-ques",component:UpdateQuizQuesComponent
},
{
  path:"view-quiz-ques",component:ViewQuizQuesComponent
},
{
  path:"play-quiz",component:PlayQuizComponent
},
{
  path:"add-quiz",component:AddQuizComponent
},
{
  path:"manage-quiz",component:ManageQuizComponent
},
{
  path:"update-quiz",component:UpdateQuizComponent
},
{
  path:"**",component:ErrorComponent
}





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
