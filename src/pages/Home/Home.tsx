import Card from "../../components/card/Card";
import WindowPreview from "../../components/windowPreview/WindowPreview";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Card title="Lorem ipsum">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 window">
              <WindowPreview />
            </div>

            <div className="col-12 col-md-6 about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus risus quis aliquam volutpat. Curabitur vestibulum eros ut
              elit lobortis, eu ultrices urna rutrum. Sed quam leo, vulputate
              vitae tellus eget, mattis lobortis augue. Aliquam vulputate neque
              eget condimentum vestibulum. Suspendisse porta massa vitae sem
              tincidunt, vel auctor arcu ullamcorper. Integer ut diam ac nulla
              rutrum interdum nec non erat. Nulla facilisi. Duis porttitor
              ligula et lobortis cursus. Duis fringilla ligula vitae orci
              tristique, egestas lobortis mi congue. Nunc eget pretium arcu.
              Suspendisse commodo elementum feugiat. Morbi fermentum porttitor
              est quis varius. Nunc vitae pharetra massa, a pulvinar quam.
              Pellentesque vitae eros fermentum, eleifend nunc vitae,
              scelerisque risus. Integer hendrerit tincidunt porta. Maecenas
              euismod sapien id lacus tempor, ut commodo dui pharetra. Duis
              nulla risus, dignissim eu eleifend eu, suscipit vel nunc.
              Pellentesque tincidunt lobortis nisl, eget porta ex elementum sed.
              Phasellus facilisis mi nec pellentesque pellentesque. Pellentesque
              dolor erat, cursus vitae justo sed, sollicitudin auctor neque.
              Curabitur eu dolor ullamcorper lectus iaculis fringilla. Maecenas
              eleifend mi et enim consectetur, vulputate pellentesque nisi
              blandit. Aliquam maximus in sem sed vestibulum. Integer eget quam
              in ex tincidunt blandit ut in arcu.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
