import { IonBackButton, IonButtons, IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router";
import {dataCourses} from '../components/CoursesList';
interface params {
    id: string
}
const Goals: React.FC = () => {
    const paramId = useParams<params>().id;
    const seletedData = dataCourses.find(i=> i.id === Number(paramId));
    return (
        <>
            <IonPage>
                <Header name={seletedData ? `id: ${seletedData.id}` : 'No Found Courses' } >
                    <IonButtons>
                        <IonBackButton defaultHref="/courses">
                        </IonBackButton>
                    </IonButtons>
                </Header>
                {/* end header */}
                <IonContent fullscreen>

            <h3>{seletedData?.title!}</h3>
        
                </IonContent>
            </IonPage>
        </>
    )
}
export default Goals;