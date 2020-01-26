import React, { Component } from "react";
import { connect } from "react-redux";
import SVGLoading from "../../Components/loading";
import * as Action from "../../redux/action/index";
import Carousel from "./../../Components/carousel";
import HomeTool from "../../Components/home-tool";
import MovieAvailable from "../../Components/MovieAvailable";
import UpComingMovie from "../../Components/UpcomingMovie";
import Footer from "../../Components/footer"
class Home extends Component {
  componentDidMount() {
    this.props.setLoading();
    this.props.getListMovie();
  }
  render() {
    let {loading, listMovie} = this.props;
    if(loading){
      return(
        <div className="loading-spinner">
        <SVGLoading />
      </div>
      )
    }
    return (
      <>
      <div>
        <Carousel />
        <div>
          <nav className="first-navs">
            <div
              className="nav nav-tabs mt-5 d-flex mb-2 pt-2"
              id="nav-tab"
              role="tablist"
            >
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-dang-chieu"
                aria-selected="true"
              >
                Đang Chiếu
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-sap-chieu"
                aria-selected="false"
              >
                Sắp Chiếu
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <>
              <MovieAvailable />
              <UpComingMovie />
            </>
          </div>
        </div>
        <HomeTool listMovie={listMovie} />
      </div>
      <Footer />
      </>
    );
  }
}
const mapStateToProps = state => ({
  listMovie: state.movieReducer.listMovie,
  loading: state.movieReducer.loading
});
const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(Action.actGetListMovieAPI());
    },
    setLoading: () => {
      dispatch(Action.actLoading());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
