import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import UserList from "./components/UserList";
import { Routes, Route } from "react-router-dom";
import UserDetail from "./components/UserDetail";

const index = () => {
  return (
    <div className="container py-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <div className="h3 fw-bold text-success">App Component</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              amet possimus laborum. Nesciunt architecto, ea molestiae a quia
              voluptas, illo exercitationem facilis adipisci laborum ipsa totam
              error quo distinctio voluptate.
            </p>

            <button className="btn btn-success btn-sm">
              <i>
                <FontAwesomeIcon icon={faBook} />
                Read More
              </i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route index element={index()} />
        <Route path="user/:userId" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
