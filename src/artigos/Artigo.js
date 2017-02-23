import React, { Component } from 'react';
import $ from 'jquery';

export default class Artigo extends Component{

    constructor(){
        super();
        this.state ={artigo:''};
    }

  componentDidMount(){
    console.log("didMount artigo");
    let idParam = window.location.pathname.slice(8);
    $.ajax({
        url:`http://localhost:8000/artigos/${idParam}`,
        dataType:'json',
        success:function(res){
            this.setState({artigo:res})
        }.bind(this)
    });
  }

    render(){
      return(
            <div>
                {                   
                    <div>
                        <h1>{this.state.artigo.titulo}</h1>
                        <p>{this.state.artigo.texto}</p>
                    </div>
                }
            </div>
        );
    }

}



