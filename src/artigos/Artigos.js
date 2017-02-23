import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery';



class ArtigosLista extends Component{
    render(){
        return(
            <div>
                {this.props.artigos.map(artigo=>
                    <div key={artigo.id}>
                        <h3>{artigo.titulo}</h3>
                        <p>{artigo.texto}</p>
                        <Link to={`/artigo/${artigo.id}`}>  CONTINUE LENDO</Link>
                    </div>
                )}
            </div>
        );
    }
}



export default class ArtigosBox extends Component{

    constructor(){
        super();
        this.state ={artigos:[]};
    }

  componentDidMount(){
    console.log("didMount");
    $.ajax({
            url:"http://localhost:8000/artigos",
            dataTape:'json',
            success:function(resposta){
                this.setState({artigos:resposta})
            }.bind(this)
        });
  }


    render(){
        return(
            <div>
                <ArtigosLista artigos={this.state.artigos}/>
            </div>
        );
    }

}



