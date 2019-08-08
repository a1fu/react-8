import React from "react";
import './home.scss'

import Form from './form/form'

class Home extends React.Component {
    constructor(){
        super()
        this.form = React.createRef()
        this.inputEmail = React.createRef()
        this.inputAsunto = React.createRef()
        this.inputMensaje = React.createRef()

        this.imgCargando = React.createRef()
        this.imgEnviado = React.createRef()
        
        this.state = {
            desabilitar: true
        }
    }

    // funciones

    // enviar formulario
    enviarFormulario = () => {
        this.imgCargando.current.style.display = 'block'
        setTimeout(() => {
            this.imgCargando.current.style.display = 'none'
            this.imgEnviado.current.style.display = 'block'

            setTimeout(() => {
                this.imgEnviado.current.style.display = 'none'
                this.form.current.reset()
                this.limpiarValidaciones()
            }, 3000)
        }, 3000)
    }

    // lipiar formulario
    limpiarFormulario = () => {
        this.form.current.reset()
        this.limpiarValidaciones()
    }

    // validar campos de formulario
    validarCampos = (e) => {
        let infoCampo = e.target
        this.validarLongitud(infoCampo)

        if(infoCampo.type === 'email'){
            this.validarEmail(infoCampo)
        }

        if(this.inputEmail.current.value !== '' && this.inputEmail.current.value.indexOf('@') !== -1 && this.inputAsunto.current.value !== '' && this.inputMensaje.current.value !== '' ){
            this.setState({
                desabilitar: false
            })
        }else{
            this.setState({
                desabilitar: true
            })
        }
    }

    // validar longitud de textos
    validarLongitud = (campo) => {
        let valid, invalid
        valid = campo.parentElement.querySelector('.valid-feedback')
        invalid = campo.parentElement.querySelector('.invalid-feedback')
        
        if(campo.value.length > 0){
            valid.style.display = 'block'
            invalid.style.display = 'none'
        }else{
            valid.style.display = 'none'
            invalid.style.display = 'block'
        }
    }

    // validar email
    validarEmail = (infoCampo) => {
        let mensaje = infoCampo.value
        let valid, invalid
        valid = infoCampo.parentElement.querySelector('.valid-feedback')
        invalid = infoCampo.parentElement.querySelector('.invalid-feedback')

        if(mensaje.indexOf('@') !== -1){
            valid.style.display = 'block'
            invalid.style.display = 'none'
        }else{
            valid.style.display = 'none'
            invalid.style.display = 'block'
        }
    }

    // limpiar validaciones
    limpiarValidaciones = () => {
        let valid = this.form.current.querySelectorAll('.valid-feedback')
        let invalid = this.form.current.querySelectorAll('.invalid-feedback')
        valid.forEach( (e) => {
            e.style.display = 'none'
        })
        invalid.forEach( (e) => {
            e.style.display = 'none'
        })
    }

    render(){
        return(
            <React.Fragment>
                <Form 
                    form={this.form}
                    inputEmail={this.inputEmail}
                    inputAsunto={this.inputAsunto}
                    inputMensaje={this.inputMensaje}
                    imgCargando={this.imgCargando}
                    imgEnviado={this.imgEnviado}
                    desabilitar={this.state.desabilitar}

                    validarCampos={this.validarCampos}
                    enviarFormulario={this.enviarFormulario}
                    limpiarFormulario={this.limpiarFormulario}
                />
            </React.Fragment>
        )
    }
}

export default Home