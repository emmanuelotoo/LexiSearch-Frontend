import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { CaseViewerPage } from '../pages/CaseViewerPage';
import { ChatPage } from '../pages/ChatPage';
import { LibraryPage } from '../pages/LibraryPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { ApiAccessPage } from '../pages/ApiAccessPage';
import { AboutPage } from '../pages/AboutPage';
import { MethodologyPage } from '../pages/MethodologyPage';
import { CareersPage } from '../pages/CareersPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '../pages/TermsOfServicePage';
import { CookiePolicyPage } from '../pages/CookiePolicyPage';
import { SecurityPage } from '../pages/SecurityPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/cases/:caseId" element={<CaseViewerPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Info Pages */}
      <Route path="/api" element={<ApiAccessPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/methodology" element={<MethodologyPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/cookies" element={<CookiePolicyPage />} />
      <Route path="/security" element={<SecurityPage />} />

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
