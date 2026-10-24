import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// ================= PUBLIC PAGES =================
import LandingPage from './pages/LandingPage';
import JournalsPage from './pages/JournalsPage';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Issues from './pages/Issues';
import AuthorGuide from './pages/AuthorGuide';
import ReviewerGuide from './pages/ReviewerGuide';
import EditorialBoard from './pages/EditorialBoard';
import ContactUs from './pages/ContactUs';

// ================= ADMIN PAGES =================
import AdminDashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import AddUser from './pages/admin/AddUser';
import ViewUser from './pages/admin/ViewUser';
import Categories from './pages/admin/Categories';
import AddCategory from './pages/admin/AddCategory';
import SubjectAreas from './pages/admin/SubjectAreas';
import AddSubjectArea from './pages/admin/AddSubjectArea';
import Settings from './pages/admin/Settings';
import Reports from './pages/admin/Reports';
import Messages from './pages/admin/Messages';
import MessageDetail from './pages/admin/MessageDetail';



// ================= AUTHOR PAGES =================
import AuthorDashboard from './pages/author/Dashboard';
import MySubmissions from './pages/author/MySubmissions';
import SubmitManuscript from './pages/author/SubmitManuscript';
import PendingProofs from './pages/author/PendingProofs';
import ViewProof from './pages/author/ViewProof';
import PublishingFees from './pages/author/PublishingFees';
import AuthorSettings from './pages/author/Settings';

import EiCDashboard from './pages/eic/Dashboard';
import EiCScreening from './pages/eic/Screening';
import ScreenManuscript from './pages/eic/ScreenManuscript';
import AssignReviewers from './pages/eic/AssignReviewers';
import AssignReviewerDetail from './pages/eic/AssignReviewerDetail';
import FinalDecisions from './pages/eic/FinalDecisions';
import DecideManuscript from './pages/eic/DecideManuscript';
import EiCReports from './pages/eic/Reports';
import EiCSettings from './pages/eic/Settings';

import ReviewerDashboard from './pages/reviewer/Dashboard';
import MyAssignments from './pages/reviewer/MyAssignments';
import PendingReview from './pages/reviewer/PendingReview';
import AcceptedAssignment from './pages/reviewer/AcceptedAssignment';
import ViewInvitation from './pages/reviewer/ViewInvitation';
import RecommendationForm from './pages/reviewer/RecommendationForm';
import ReviewerSettings from './pages/reviewer/Settings';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/journals" element={<JournalsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/author-guide" element={<AuthorGuide />} />
          <Route path="/reviewer-guide" element={<ReviewerGuide />} />
          <Route path="/editorial" element={<EditorialBoard />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* ================= ADMIN ROUTES ================= */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/users/view/:id" element={<ViewUser />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/categories/add" element={<AddCategory />} />
          <Route path="/admin/subjects" element={<SubjectAreas />} />
          <Route path="/admin/subjects/add" element={<AddSubjectArea />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/messages/:id" element={<MessageDetail />} />

          <Route path="/eic/dashboard" element={<EiCDashboard />} />
<Route path="/eic/screening" element={<EiCScreening />} />
<Route path="/eic/screen/:id" element={<ScreenManuscript />} />
<Route path="/eic/assign-reviewers" element={<AssignReviewers />} />
<Route path="/eic/assign/:id" element={<AssignReviewerDetail />} />
<Route path="/eic/final-decisions" element={<FinalDecisions />} />
<Route path="/eic/decide/:id" element={<DecideManuscript />} />
<Route path="/eic/reports" element={<EiCReports />} />
<Route path="/eic/settings" element={<EiCSettings />} />

<Route path="/reviewer/dashboard" element={<ReviewerDashboard />} />
<Route path="/reviewer/assignments" element={<MyAssignments />} />
<Route path="/reviewer/pending" element={<PendingReview />} />
<Route path="/reviewer/assignment/:id" element={<AcceptedAssignment />} />
<Route path="/reviewer/invitation/:id" element={<ViewInvitation />} />
<Route path="/reviewer/recommendation" element={<RecommendationForm />} />
<Route path="/reviewer/settings" element={<ReviewerSettings />} />

          {/* ================= AUTHOR ROUTES ================= */}
          <Route path="/author/dashboard" element={<AuthorDashboard />} />
          <Route path="/author/submissions" element={<MySubmissions />} />
          <Route path="/author/submit" element={<SubmitManuscript />} />
          <Route path="/author/pending-proof" element={<PendingProofs />} />
          <Route path="/author/proof/:id" element={<ViewProof />} />
          <Route path="/author/fees" element={<PublishingFees />} />
          <Route path="/author/settings" element={<AuthorSettings />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;