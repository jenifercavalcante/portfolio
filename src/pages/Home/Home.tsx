import Card from "../../components/card/Card";
import WindowPreview from "../../components/windowPreview/WindowPreview";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Card>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 window">
              <WindowPreview />
            </div>

            <div className="col-12 col-md-6 about">
              <span className="subtitle">ABOUT ME</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                maximus risus quis aliquam volutpat. Curabitur vestibulum eros
                ut elit lobortis, eu ultrices urna rutrum. Sed quam leo,
                vulputate vitae tellus eget, mattis lobortis augue. Aliquam
                vulputate neque eget condimentum vestibulum. Suspendisse porta
                massa vitae sem tincidunt, vel auctor arcu ullamcorper.
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
