import { IonBackButton, IonButtons, IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../components/Header";
const Goals: React.FC = () => {
    return (
        <>
            <IonPage>
                <Header name='Goals Page' >
                <IonButtons>
                    <IonBackButton  defaultHref="/courses">
                    </IonBackButton>
                </IonButtons>
                </Header>
                {/* end header */}
                <IonContent fullscreen>



                </IonContent>
            </IonPage>
        </>
    )
}
export default Goals;