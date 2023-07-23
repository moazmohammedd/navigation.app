import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Header from '../components/Header';
const Home: React.FC = () => {
  return (
    <IonPage>
    <Header name='Home Page'/>
      {/* end header */}
      <IonContent fullscreen>
      
      <h2>Home Page</h2>

      </IonContent>
    </IonPage>
  );
};

export default Home;
