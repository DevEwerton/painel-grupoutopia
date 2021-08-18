import React from "react";
import "../components/Screens.css";

const ScreenA = props => 
{
    return (
        <div className="screens">
            <span className="d-block d-lg-none warning">Conteúdo disponível apenas para Desktop</span>
            <div className="d-none d-lg-block">
                <h1 className="title">Título 1</h1>
                <h2 className="subtitle">Subtítulo 1</h2>
                <div className="box">
                    <div className="row no-gutters line">
                        <div className="column">
                            <label htmlFor="field1">
                                Campo 1 (linha)
                                <span className="help">
                                    <i className="far fa-question-circle"></i>
                                    <span className="message">
                                        Alguma mensagem de esclarecimento aqui...
                                    </span>
                                </span>
                            </label>
                            <input id="field1" type="text" className="input" placeholder="preencha com seus dados"/>
                        </div>
                    </div>
                    <div className="row no-gutters line">
                        <div className="col-md-6 column">
                            <label htmlFor="field2">Campo 1 (coluna)</label>
                            <input id="field2" type="text" className="input" placeholder="preencha com seus dados"/>
                        </div>
                        <div className="col-md-6 column">
                            <label htmlFor="field3">Campo 2 (coluna)</label>
                            <input id="field3" type="text" className="input" placeholder="preencha com seus dados"/>
                        </div>
                    </div>
                    <div className="row no-gutters line">
                        <button className="button" onClick={() => alert("coming soon...")}>SALVAR</button>
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block">
                <h2 className="subtitle">Subtítulo 2</h2>
                <div className="box">
                    <div className="row no-gutters lineTableHeader lineTable">
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Informação 1</span>
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Informação 2</span>                          
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Informação 3</span>
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Informação 4</span>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters lineTableContent lineTable">
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Registro</span>
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Registro</span>                                
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <span>Registro</span>                               
                            </div>
                        </div>
                        <div className="col-3 columnTable">
                            <div className="contentTable">
                                <button className="buttonIcon" onClick={() => alert("coming soon...")}>
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                                <button className="buttonIcon" onClick={() => alert("coming soon...")}>
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default ScreenA;