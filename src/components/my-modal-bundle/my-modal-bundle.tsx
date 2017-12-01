import { Component, Prop, Method, Element, State, Listen} from '@stencil/core';

@Component({
    tag: 'my-modal-bundle',
})
export class MyModalBundle {
    @Element() modalEl: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    @State() show = false;
   /// @Event() onOpen: EventEmitter;


    @Method()

    open() {
       // this.onOpen.emit();
        //alert("Thanks for the sandwich")


            console.log('open');


        this.show = true;

    }


    @Listen('onClose')

    closeModalHandler(event) {
        console.log('close',event);
        this.show = false;



    }

    render() {
        let content = null;
        if (this.show) {
            content = [
                <my-backdrop></my-backdrop>,
                <my-modal title={this.title} content={this.content}></my-modal>
            ];
        }
        return content;
    }
}
