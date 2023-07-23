import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import '../style/navBar.scss'
import { Children } from "react"
interface Props {
    name: string,
    children?: React.ReactNode | any;
}

const Header: React.FC<Props> = ({ name, children }) => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        {
                            children ?
                                <IonRow>
                                    <IonCol sizeLg="2" sizeMd="3" sizeSm="6">

                                        {children}

                                    </IonCol>
                                    <IonCol sizeLg="2" sizeMd="3" sizeSm="6">
                                        <IonTitle>{name}</IonTitle>
                                    </IonCol>
                                    <IonCol sizeLg="8" sizeMd="6" sizeSm="12">
                                        <nav className="nav-bar">
                                            <IonButton fill="clear" color="dark" routerLink="/home">Home</IonButton>
                                            <IonButton fill="clear" color="dark" routerLink="/courses">Coureses</IonButton>
                                            <IonButton fill="clear" color="dark" routerLink="/goals">Goals</IonButton>
                                        </nav>
                                    </IonCol>
                                </IonRow>

                                : <IonRow>
                                    <IonCol sizeLg="2" sizeSm="6">
                                        <IonTitle>{name}</IonTitle>
                                    </IonCol>
                                    <IonCol sizeLg="10" sizeMd="6" sizeSm="12">
                                        <nav className="nav-bar">
                                            <IonButton fill="clear" color="dark" routerLink="/home">Home</IonButton>
                                            <IonButton fill="clear" color="dark" routerLink="/courses">Coureses</IonButton>
                                            <IonButton fill="clear" color="dark" routerLink="/goals">Goals</IonButton>
                                        </nav>
                                    </IonCol>
                                </IonRow>
                        }
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
        </>
    )
}
export default Header;