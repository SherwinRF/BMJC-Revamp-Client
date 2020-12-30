import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./menu-modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./menu-modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("./menu-modules/about-us/about-us.module").then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: "admissions",
    loadChildren: () =>
      import("./menu-modules/admissions/admissions.module").then(
        (m) => m.AdmissionsModule
      ),
  },
  {
    path: "hospital",
    loadChildren: () =>
      import("./menu-modules/hospital/hospital.module").then(
        (m) => m.HospitalModule
      ),
  },
  {
    path: "departments",
    loadChildren: () =>
      import("./menu-modules/departments/departments.module").then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: "resources",
    loadChildren: () =>
      import("./menu-modules/resources/resources.module").then(
        (m) => m.ResourcesModule
      ),
  },
  {
    path: "students-corner",
    loadChildren: () =>
      import("./menu-modules/students-corner/students-corner.module").then(
        (m) => m.StudentsCornerModule
      ),
  },
  {
    path: "academics",
    loadChildren: () =>
      import("./menu-modules/academics/academics.module").then(
        (m) => m.AcademicsModule
      ),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./menu-modules/staff/staff.module").then((m) => m.StaffModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
