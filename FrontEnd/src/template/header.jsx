import React, {Component} from 'react'
import Grid from '../template/grid'

export default class Header extends Component {

render() {
    return (           
<div className="header-topo">
  <div className="container">
    <Grid cols='4'>
        <div className="inputSearch">
            <input id='username' className='' placeholder="Pesquisar no site"></input> 
            <span className="text-center"><img src="/img/icon.png"></img></span>
        </div>

    </Grid>
    <Grid cols='6'>
        <div className="login-logado">
            <img src="/img/icon_login.png"></img>
            <span className="text-center">Olá, Carolina | Sair</span>
            <img src="/img/icon_wishlist.png"></img>
            <span className="text-center">Wishlist</span>
            <span className="text-center">Minha Conta | Meus Pedidos</span>
        </div>
    </Grid>
    <Grid cols='2'>
        <div className="my-bag">
            <img src="/img/icon_MyBag.png"></img>
            <span className="text-right"> Minha sacola (0)</span>
        </div>
    </Grid>
    <Grid cols='12'>
        <div className="title">
            <span className="text-center"> Curti Demais</span>
        </div>
    </Grid>
    </div>
    <Grid cols='12'>
        <div className="menu">
            <span className="shop">SHOP</span>
            <img src="/img/divider.png"></img>
            <span className="options"><span className="opt">Braceletes</span> <span className="opt">Bolsas</span> <span className="opt">Carteiras</span> <span className="opt">Cachecois</span> <span className="opt">Colares</span></span>
            <img src="/img/divider2.png"></img>
        </div>
    </Grid>
</div>

    )
  }
}