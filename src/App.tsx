import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonMenu, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
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
import { trophyOutline, list, settings } from 'ionicons/icons';

// global style
import './style/gloabal.scss'
import Filter from './pages/Filter';
import Menu from './components/Menu';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu></Menu>
      <IonRouterOutlet id='main'>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/courses'>
          <Courses/>
        </Route>
        <Route path='/filter'>
          <Filter/>
        </Route>
        <Route path='/courses/:id'>
          <Goals/>
        </Route>
      </IonRouterOutlet>
  {/* ---------- */}
      <IonTabBar slot="bottom" color='primary'>
        <IonTabButton tab="goals" href='/goals' disabled>
          <IonIcon icon={list} />
        </IonTabButton>
        <IonTabButton tab="courses" href='/courses'>
          <IonIcon icon={trophyOutline} />
        </IonTabButton>
      </IonTabBar>
  {/* ---------- */}
    </IonReactRouter>
  </IonApp>
);

export default App;
