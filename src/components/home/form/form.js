import React from 'react'

class Form extends React.Component {
    render(){ 
        return(
            <React.Fragment>
                <div className="seccion-form">
                    <form ref={this.props.form} className="bx-form">
                        <div className="form-group">
                            <input ref={this.props.inputEmail} onBlur={this.props.validarCampos} type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp" placeholder="Email" />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a email.</div>
                        </div>
                        <div className="form-group">
                            <input ref={this.props.inputAsunto} onBlur={this.props.validarCampos} type="text" className="form-control form-control-sm" id="asunto" placeholder="Asunto" />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a asunto.</div>
                        </div>
                        <div className="form-group">
                            <textarea ref={this.props.inputMensaje} onBlur={this.props.validarCampos} type="text" className="form-control form-control-sm" id="mensaje" placeholder="Mensaje"></textarea>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a mensaje.</div>
                        </div>
                        <span ref={this.props.imgCargando} className="imgCargando mb-3">cargando ...</span>
                        <span ref={this.props.imgEnviado} className="imgEnviado mb-3">enviado</span>
                        <div className="d-flex justify-content-between">
                            <button disabled={this.props.desabilitar} type="button" className="btn btn-sm btn-primary" onClick={this.props.enviarFormulario}>enviar</button>
                            <button type="button" className="btn btn-sm btn-secondary" onClick={this.props.limpiarFormulario}>reset</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Form