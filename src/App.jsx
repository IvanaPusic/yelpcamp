import {} from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  AddNewCampground,
  AddNewComment,
  AppLayout,
  Campgrounds,
  ErrorPage,
  LandingPage,
  SignInPage,
  SignupPage,
  SingleCampground,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingPage />} />
      <Route path='/campgrounds' element={<AppLayout />}>
        <Route index element={<Campgrounds />} />
        <Route path=':id' element={<SingleCampground />} />
        <Route path=':id/comment' element={<AddNewComment />} />
        <Route path='add-new-campground' element={<AddNewCampground />} />
      </Route>
      <Route path='sign-in' element={<SignInPage />} />
      <Route path='sign-up' element={<SignupPage />} />
      <Route path='*' element={<ErrorPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
