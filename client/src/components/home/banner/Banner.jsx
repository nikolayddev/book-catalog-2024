import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="container mt-5">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-sm-12">
                                <Link to='/catalog'>
                                    <h1 className="banner_taital">
                                        Embark on your <br />
                                        Book Journey Today!
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}