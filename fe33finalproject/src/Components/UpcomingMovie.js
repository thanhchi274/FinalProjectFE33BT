import React, { Component } from 'react'
import Slider from "react-slick";
import MovieCarousel from "../Components/movie-carousel";
import { connect } from 'react-redux';
import * as  Action from "../redux/action/index"
class MovieAvailable extends Component {
    componentDidMount(){
        this.props.getListMovie();
    }
    renderHTML =()=>{
       let {listMovie} =this.props; 
         return listMovie.map((movie, index)=>{
             return <MovieCarousel key={index} movie ={movie} />
          })
    }
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 4,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            autoplay:false ,
          };
        return (
            <div className="tab-pane fade container mx-auto" id="nav-sap-chieu" role="tabpanel" aria-labelledby="nav-home-tab">
            <Slider {...settings}>
            {this.renderHTML()}
            </Slider>
            </div>
        )
    }
}

const mapStateToProps =state=>({
    listMovie : state.movieReducer.listMovie
})
const mapDispatchToProps =(dispatch)=>{
return {
    getListMovie:()=>{
        dispatch(Action.actGetListMovieAPI())
    }
}
}
export default connect (mapStateToProps, mapDispatchToProps)(MovieAvailable); 