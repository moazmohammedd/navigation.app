import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import '../style/navBar.scss'
import { Children } from "react"
interface Props {
    name: string,
    children?: React.ReactNode | any;
}

const Header: React.FC<Props> = ({ name, children }) => {
    return (
        <>
            <IonHeader >
                <IonToolbar color="primary">
                    <IonGrid >

                        {
                            children ?
                                <IonRow>
                                    <IonCol sizeLg="4" sizeMd="4" sizeSm="4">

                                        {children}

                                    </IonCol>
                                    <IonCol sizeLg="4" sizeMd="4" sizeSm="4">
                                        <IonTitle>{name}</IonTitle>
                                    </IonCol>
                                    <IonCol sizeLg="4" sizeMd="4" sizeSm="4">
                                        <IonButtons style={{justifyContent: 'flex-end'}}>
                                            <IonMenuButton>

                                            </IonMenuButton>
                                        </IonButtons>

                                    </IonCol>
                                </IonRow>

                                : <IonRow>
                                    <IonCol sizeLg="6" sizeSm="6">
                                        <IonTitle>{name}</IonTitle>
                                    </IonCol>
                                    <IonCol sizeLg="6" sizeMd="6" sizeSm="6">
                                        <IonButtons >
                                            <IonMenuButton>

                                            </IonMenuButton>
                                        </IonButtons>

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