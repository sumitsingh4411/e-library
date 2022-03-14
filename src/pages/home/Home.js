import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/component/card/Card";
import { semDetails } from "../../shared/utils/constatnt";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="sem-all">
        {semDetails.map((e) => {
          return (
            <Link to={`/details/${e.id}`}>
              <Card key={e.id} sem={e.name} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
