import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './style/variables.css';
import Courses from './pages/Courses';
import Goals from './pages/Goals';
import { call, person, settings } from 'ionicons/icons';

// global style
import './style/gloabal.scss'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/courses'>
          <Courses/>
        </Route>
        <Route path='/goals'>
          <Goals/>
        </Route>
      </IonRouterOutlet>
  {/* ---------- */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="account">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="contact">
          <IonIcon icon={call} />
        </IonTabButton>
        <IonTabButton tab="settings">
          <IonIcon icon={settings} />
        </IonTabButton>
      </IonTabBar>
  {/* ---------- */}
    </IonReactRouter>
  </IonApp>
);

export default App;
