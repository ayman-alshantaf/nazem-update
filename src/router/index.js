import Vue from 'vue'
import VueRouter from 'vue-router'
import loginView from "@/views/loginSignup/loginView";
import signupView from "@/views/loginSignup/signupView";
import dashboardView from "@/views/dashboard/dashboardView";
import followUpStudentsView from "@/views/students/FollowUpStudentsView";
import reviewStudentView from "@/views/students/reviewStudentView";
import weeklyNarrativeView from "@/views/students/weeklyNarrativeView";
import studentVacationsView from "@/views/students/studentVacationsView";
import permissionsView from "@/views/students/permissionsView";
import interviewsView from "@/views/interviews/interviewsView";
import recitationView from "@/views/interviews/recitationView";
import questionInterviewsView from "@/views/interviews/questionInterviewsView";
import admissionRequestsView from "@/views/interviews/admissionRequestsView";
import alarmView from "@/views/records/alarmView";
import warningView from "@/views/records/warningView";
import ourProgramsView from "@/views/ourPrograms/ourProgramsView";
import registrationProgramView from "@/views/ourPrograms/registrationProgramView";
import branchesView from "@/views/branches/branchesView";
import detailsBranchesView from "@/views/branches/detailsBranchesView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboardView
  },

  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupView
  },
  {
    path: '/followStudent',
    name: 'followStudent',
    component: followUpStudentsView
  },
  {
    path: '/review',
    name: 'review',
    component: reviewStudentView
  },
  {
    path: '/weeklyStudents',
    name: 'weeklyStudents',
    component: weeklyNarrativeView
  },
  {
    path: '/studentVacations',
    name: 'studentVacations',
    component: studentVacationsView
  },
  {
    path: '/permissionsView',
    name: 'permissionsView',
    component: permissionsView
  },
  {
    path: '/interviewsView',
    name: 'interviewsView',
    component: interviewsView
  },
  {
    path: '/interview/recitationView/',
    name: 'recitationView',
    component: recitationView
  },
  {
    path: '/questionInterview',
    name: 'questionInterview',
    component: questionInterviewsView
  },
  {
    path: '/admissionRequests',
    name: 'admissionRequests',
    component: admissionRequestsView
  },
  {
    path: '/alarmView',
    name: 'alarm',
    component: alarmView
  },  {
    path: '/warningView',
    name: 'warningView',
    component: warningView
  },
  {
    path: '/ourPrograms',
    name: 'ourPrograms',
    component: ourProgramsView
  },
  {
    path: '/registrationProgram',
    name: 'registrationProgram',
    component: registrationProgramView
  },
  {
    path: '/branches',
    name: 'branches',
    component: branchesView
  },
  {
    path: '/detailsBranches',
    name: 'detailsBranches',
    component: detailsBranchesView
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
