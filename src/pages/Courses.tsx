import React from "react";
import Header from "../components/Header";
import {  IonButtons, IonContent, IonPage } from "@ionic/react";
import CoursesList from "../components/CoursesList";
const Courses: React.FC = () => {
    return (
        <>
            <IonPage>
                <Header name='Corsues Page' >
            
                </Header>
                {/* end header */}
                <IonContent fullscreen>

                <div style={{paddingBottom:'58px'}}>
                <CoursesList></CoursesList>
                </div>

                </IonContent>
            </IonPage>
        </>
    )
}
export default Courses;