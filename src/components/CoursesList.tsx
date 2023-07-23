import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import '../style/navBar.scss';
import data_courses from '../data/data.json';
interface Props {

}

interface CourseData {
    id: number,
    title: string
}

export const dataCourses: CourseData[] = data_courses;
const CoursesList: React.FC<Props> = ({ }) => {
    console.log(dataCourses)
    return (
        <>
            <IonGrid>
                <IonRow>
                    {dataCourses.length > 0 ? (
                        dataCourses.map((course) => (
                            <IonCol key={course.id} offsetMd="4" sizeMd="4">
                                <IonCard>
                                    <IonCardContent className="ion-text-center">
                                        <p>id : {course.id} </p>
                                        <h2>{course.title}</h2>
                                        <IonButton routerLink={`/courses/${course.id}`} style={{fontSize:'0.8rem'}} >view Courses Goals</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))
                    ) : (
                        <h2>There's no content here</h2>
                    )}
                </IonRow>
            </IonGrid>
        </>
    )
}
export default CoursesList;