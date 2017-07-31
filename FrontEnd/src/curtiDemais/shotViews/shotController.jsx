import axios from 'axios'
import React, {Component} from 'react'
import Grid from '../../template/grid'


const URL = 'http://localhost:3003/api/shots'

export default class ShotController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shot: {},
      images: {},
      user: {},
      likes: 0
    }
    this.refreshShot()
     this.handleLike = this.handleLike.bind(this);
     this.handleVoltar = this.handleVoltar.bind(this);
  }

  refreshShot(){
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]
    axios.get(`${URL}/${shotID}`)
      .then(resp => this.setState({...this.state, shot: resp.data, images: resp.data.images, user: resp.data.user, likes: resp.data.likes_count}))
  }

  handleLike(){
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]
    const likeMaisUm = this.state.likes + 1
    console.log(likeMaisUm)
    axios({method: 'put',url: `${URL}/${shotID}`, data: {likes_count: likeMaisUm}}) 
    this.refreshShot()
    $('#changeCssLiked').removeClass().addClass('LikeTrue');   
    console.log($('#changeCssLiked').removeClass().addClass('LikeTrue'));      
    
  }

  handleVoltar(){
    location.href='/#/curtiDemais'
  }

  render() {

    return (

      <Grid key={this.state.shot.id} cols='12'>
        <div className="alignBody">
        <span className="text-left button-voltar">
          <a className='' onClick={this.handleVoltar}>
            <i className='icon-arrow-left'></i> Voltar</a>
        </span>
        <Grid cols='12 5 5 '>
            <div className="shot-img">
               {this.state.images.hidpi ? <img className="img-responsive" src={this.state.images.hidpi} alt="Sem Imagem"/> : <img className="img-responsive" src={this.state.images.normal} alt="Sem Imagem"/>} 
            </div>
      </Grid>
      <Grid cols='2'>
        <div className="shot-img-border">
          {this.state.images.hidpi ? <img className="img-responsive" src={this.state.images.hidpi} alt="Sem Imagem" /> : <img className="img-responsive" src={this.state.images.normal} alt="Sem Imagem" />}
        </div>
      </Grid>
      <Grid cols='4 4'>
        <div className="row">
          <Grid cols='12'>
            <div className="text-left">
              <h2 className="title-shot">{this.state.shot.title}</h2>
            </div>
          </Grid>
        </div>    
        <div className="row">
          <Grid cols='12'>
                <div className="text-center">
                <div className="text-center">
                    <p className="shot-descricao">square bag with plaque/magnet fastening and gold chain. Leather surface treated with ray-effect resin. Gold-plated brass logo on front.</p>
              </div>
            </div>
        </Grid>
        </div>
      </Grid>
    </div>
      </Grid>
    )
  }
}
