import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loader from './pages/common/Loader';
import AdminDashboard from './pages/admin/AdminDashBoard';
import EventList from './pages/admin/Event/EventList';
import UserManagement from './pages/admin/UserManagement';
import Login from './pages/common/popup/Login';
import AdminLayout from './pages/admin/AdminLayout';
import BirthdayPage from './pages/user/BirthdayPage';
import WeddingPage from './pages/user/WeddingPage';
import EventsPage from './pages/user/EventsPage';
import HouseWarmingPage from './pages/user/HousewarmingPage';
import EngagementPage from './pages/user/EngagementPage';
import BookingForm from './pages/user/BookingForm';
import SignUpForm from './pages/common/Login';
import UserLayout from './pages/user/UserLayout'; 
import NotFound from './pages/common/NotFound';
import CartPage from './pages/user/Cart';
import VenueSelector from './pages/user/VenueSelector';
import LandingPage from './pages/common/LandingPage';

const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            {isAuthenticated && !isAdmin ? (
              <>
              <Route path="/birthday" element={<UserLayout><BirthdayPage /></UserLayout>} />
              <Route path="/wedding" element={<UserLayout><WeddingPage /></UserLayout>} />
              <Route path="/" element={<UserLayout><EventsPage /></UserLayout>} />
              <Route path="/housewarming" element={<UserLayout><HouseWarmingPage /></UserLayout>} />
              <Route path="/engagement" element={<UserLayout><EngagementPage /></UserLayout>} />
              <Route path="/bookingform" element={<UserLayout><BookingForm /></UserLayout>} />
              <Route path="/cart" element={<UserLayout><CartPage /></UserLayout>} />
              <Route path="/venue" element={<UserLayout><VenueSelector /></UserLayout>} />
            </>):
              (<>
                <Route path="/login" element={<SignUpForm />} />
                <Route path="/landingpage" element={<LandingPage />} />
              </>)}
            <Route element={<AdminGuard />}>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/users" element={<UserManagement />} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};



const AdminGuard = ({ children }) => {
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }
  return <AdminLayout>{children}</AdminLayout>;
};

export default App;
