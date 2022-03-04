import React from "react";
import SecondWidget from "../components/SecondWidget/secondwidget";
import Modal from "../components/modal";

const Page2 = () => {
    return (
        <div>

            <Modal>
                <SecondWidget  data="seun"/>
            </Modal>

        </div>
    );
};

export default Page2;