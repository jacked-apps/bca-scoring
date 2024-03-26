// Public routes
import { LogInFire } from '../login/LoginFire';
import { VerifyEmail } from '../firebaseAuth/VerifyEmail';

// Private routes
import Home from '../home/Home';
import { Welcome } from '../welcome/Welcome';
import { ProfileForm } from '../screens/ProfileForm';
import SecondPage from '../screens/SecondPage';
import Loading from '../screens/Loading';
import Scoring from '../screens/Scoring';
import Roster from '../screens/Roster';
import TieRoster from '../screens/TieRoster';
import TieScoring from '../screens/TieScoring';
import { Settings } from '../screens/Settings';
import TestScreen from '../screens/TestScreen';
import EndScreen from '../screens/EndScreen';

export const publicRoutes = [
  { name: 'LoginFire', component: LogInFire, options: {} },
  { name: 'VerifyEmail', component: VerifyEmail, options: {} },
];

export const privateRoutes = [
  { name: 'Home', component: Home, options: {} },
  { name: 'ProfileForm', component: ProfileForm, options: {} },
  { name: 'Welcome', component: Welcome, options: {} },
  { name: 'Loading', component: Loading, options: {} },
  { name: 'Roster', component: Roster, options: {} },
  { name: 'Scoring', component: Scoring, options: {} },
  { name: 'Tie Roster', component: TieRoster, options: {} },
  { name: 'Tie Scoring', component: TieScoring, options: {} },
  { name: 'Second Page', component: SecondPage, options: {} },
  { name: 'End Screen', component: EndScreen, options: {} },
  { name: 'Settings', component: Settings, options: {} },
  { name: 'Test', component: TestScreen, options: {} },
];
