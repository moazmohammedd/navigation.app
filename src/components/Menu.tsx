import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { settings, home, videocam, list, filter } from 'ionicons/icons'
const Menu: React.FC = () => {
    return (
        <>
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        {/* 
                        <IonButton slot="start">

                        </IonButton> */}
                        <IonTitle>Nav Bar</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>


                    <IonList className="nav-bar">

                        <IonItem button routerLink="/home">
                            <IonIcon slot='start' icon={home}></IonIcon>
                            <IonLabel>
                                Home
                            </IonLabel>
                        </IonItem>
                        <IonItem button routerLink="/courses">
                            <IonIcon slot='start' icon={videocam}></IonIcon>
                            <IonLabel>
                                Courses
                            </IonLabel>
                        </IonItem>
                        <IonItem button disabled routerLink="/goals">
                            <IonIcon slot='start' icon={list}></IonIcon>
                            <IonLabel>
                                Goals
                            </IonLabel>
                        </IonItem>
                        <IonItem button routerLink="/filter">
                            <IonIcon slot='start' icon={filter}></IonIcon>
                            <IonLabel>
                                Filter
                            </IonLabel>
                        </IonItem>
                    </IonList>

                </IonContent>

            </IonMenu>
        </>
    )
}
export default Menu