import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// ================= GLOBAL HOME & MODULES =================
import HomeLanding from './pages/home/HomeLanding';
import EbookLanding from './pages/ebook/public/EbookLanding';
import LibraryLanding from './pages/library/public/LibraryLanding';
import WikiLanding from './pages/wiki/public/WikiLanding';
import RepoLanding from './pages/repository/public/RepoLanding';
import NetworkLogin from './pages/network/public/NetworkLogin';

// ================= JOURNAL PUBLIC PAGES =================
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

// NEW: Import CurrentIssue and ViewIssueDetail from the root of pages
import CurrentIssue from './pages/CurrentIssue';
import ViewIssueDetail from './pages/ViewIssueDetail';

// ================= JOURNAL INTERNAL ROLES =================
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

// ================= MANAGING EDITOR =================
import MEDashboard from './pages/managing-editor/Dashboard';
import PendingProduction from './pages/managing-editor/PendingProduction';
import ProductionDetail from './pages/managing-editor/ProductionDetail';
import PublishPage from './pages/managing-editor/PublishPage';
import PublishedManuscripts from './pages/managing-editor/Published';
import MEIssues from './pages/managing-editor/Issues';
import MEReports from './pages/managing-editor/Reports';
import MESettings from './pages/managing-editor/Settings';
import ViewPublished from './pages/managing-editor/ViewPublished';
import AddIssue from './pages/managing-editor/AddIssue';
import ViewIssue from './pages/managing-editor/ViewIssue';
import EditIssue from './pages/managing-editor/EditIssue';

// ================= EBOOK PUBLIC PAGES =================
import EbookCatalogue from './pages/ebook/public/Catalogue';
import EbookLogin from './pages/ebook/public/Login';
import EbookRegister from './pages/ebook/public/Register';
import EbookAbout from './pages/ebook/public/About';
import EbookAuthorGuide from './pages/ebook/public/AuthorGuide';
import EbookEditorialTeam from './pages/ebook/public/EditorialTeam';
import EbookContact from './pages/ebook/public/Contact';

// ================= EBOOK AUTHOR PORTAL =================
import EbookAuthorDashboard from './pages/ebook/author/Dashboard';
import EbookAuthorMyBooks from './pages/ebook/author/MyBooks';
import EbookAuthorSubmitBook from './pages/ebook/author/SubmitBook';
import EbookAuthorPendingProof from './pages/ebook/author/PendingProof';
import EbookAuthorPublishingFee from './pages/ebook/author/PublishingFee';
import EbookAuthorRevisions from './pages/ebook/author/Revisions';
import EbookAuthorSettings from './pages/ebook/author/Settings';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          {/* ================= ORA GLOBAL HOME ================= */}
          <Route path="/" element={<HomeLanding />} />

          {/* ================= JOURNAL PUBLIC PAGES ================= */}
          <Route path="/journal" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/author-guide" element={<AuthorGuide />} />
          <Route path="/reviewer-guide" element={<ReviewerGuide />} />
          <Route path="/editorial" element={<EditorialBoard />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Journal & Issue Views */}
          <Route path="/journals" element={<JournalsPage />} />
          <Route path="/issues/current" element={<CurrentIssue />} />
          <Route path="/issues/:id" element={<ViewIssueDetail />} />

          {/* ================= OTHER MODULES ================= */}
          <Route path="/ebook" element={<EbookLanding />} />
          <Route path="/library" element={<LibraryLanding />} />
          <Route path="/wiki" element={<WikiLanding />} />
          <Route path="/repository" element={<RepoLanding />} />
          <Route path="/network" element={<NetworkLogin />} />

          {/* ================= EBOOK PUBLIC PAGES ================= */}
          <Route path="/ebook/catalogue" element={<EbookCatalogue />} />
          <Route path="/ebook/login" element={<EbookLogin />} />
          <Route path="/ebook/register" element={<EbookRegister />} />
          <Route path="/ebook/about" element={<EbookAbout />} />
          <Route path="/ebook/author-guide" element={<EbookAuthorGuide />} />
          <Route path="/ebook/editorial" element={<EbookEditorialTeam />} />
          <Route path="/ebook/contact" element={<EbookContact />} />

          {/* ================= EBOOK AUTHOR PORTAL ================= */}
          <Route path="/ebook/author/dashboard" element={<EbookAuthorDashboard />} />
          <Route path="/ebook/author/my-books" element={<EbookAuthorMyBooks />} />
          <Route path="/ebook/author/submit" element={<EbookAuthorSubmitBook />} />
          <Route path="/ebook/author/pending-proof" element={<EbookAuthorPendingProof />} />
          <Route path="/ebook/author/publishing-fee" element={<EbookAuthorPublishingFee />} />
          <Route path="/ebook/author/revisions" element={<EbookAuthorRevisions />} />
          <Route path="/ebook/author/settings" element={<EbookAuthorSettings />} />

          {/* ================= JOURNAL ADMIN ================= */}
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

          {/* ================= JOURNAL EIC ================= */}
          <Route path="/eic/dashboard" element={<EiCDashboard />} />
          <Route path="/eic/screening" element={<EiCScreening />} />
          <Route path="/eic/screen/:id" element={<ScreenManuscript />} />
          <Route path="/eic/assign-reviewers" element={<AssignReviewers />} />
          <Route path="/eic/assign/:id" element={<AssignReviewerDetail />} />
          <Route path="/eic/final-decisions" element={<FinalDecisions />} />
          <Route path="/eic/decide/:id" element={<DecideManuscript />} />
          <Route path="/eic/reports" element={<EiCReports />} />
          <Route path="/eic/settings" element={<EiCSettings />} />

          {/* ================= JOURNAL REVIEWER ================= */}
          <Route path="/reviewer/dashboard" element={<ReviewerDashboard />} />
          <Route path="/reviewer/assignments" element={<MyAssignments />} />
          <Route path="/reviewer/pending" element={<PendingReview />} />
          <Route path="/reviewer/assignment/:id" element={<AcceptedAssignment />} />
          <Route path="/reviewer/invitation/:id" element={<ViewInvitation />} />
          <Route path="/reviewer/recommendation" element={<RecommendationForm />} />
          <Route path="/reviewer/settings" element={<ReviewerSettings />} />

          {/* ================= MANAGING EDITOR ================= */}
          <Route path="/managing-editor/dashboard" element={<MEDashboard />} />
          <Route path="/managing-editor/pending-production" element={<PendingProduction />} />
          <Route path="/managing-editor/production/:id" element={<ProductionDetail />} />
          <Route path="/managing-editor/publish/:id" element={<PublishPage />} />
          <Route path="/managing-editor/published" element={<PublishedManuscripts />} />
          <Route path="/managing-editor/published/:id" element={<ViewPublished />} />
          <Route path="/managing-editor/issues" element={<MEIssues />} />
          <Route path="/managing-editor/reports" element={<MEReports />} />
          <Route path="/managing-editor/settings" element={<MESettings />} />
          <Route path="/managing-editor/issues/add" element={<AddIssue />} /> 
          <Route path="/managing-editor/issues/view/:id" element={<ViewIssue />} />
          <Route path="/managing-editor/issues/edit/:id" element={<EditIssue />} />

          {/* ================= JOURNAL AUTHOR ================= */}
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