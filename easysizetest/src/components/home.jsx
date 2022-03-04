import Modal from "./modal";
import FirstWidget from "./FirstWidget/firstwidget";
import {useState} from "react";
import Page2 from "../pages/page2";


const Home = () => {
    const [showModal, setShowModal] = useState(false);
    return(

        <div>


        <button className="button"  onClick={() => setShowModal(true)}>Placeholder</button>
            <Modal onClose={() => setShowModal(false)}
                   show={showModal}>
                <FirstWidget image="http://localhost:63342/fe_test_task-master/public/images/red.png"/>
            </Modal>
        </div>
    );

};

export default Home;