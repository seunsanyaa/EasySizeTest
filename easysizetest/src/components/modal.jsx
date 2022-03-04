import React from "react";

export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div class="modal" id="modal">

                <div>



                <div class="content">{this.props.children}</div>
                <div class="actions">
                    {/*<button class="toggle-button" onClick={this.onClose}>*/}
                    {/*    close*/}
                    {/*</button>*/}
                </div>
                </div>
            </div>
        );
    }
}