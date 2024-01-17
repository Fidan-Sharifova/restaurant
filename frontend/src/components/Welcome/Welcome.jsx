import React from "react";
import "./Welcome.scss";
import { TbBuildingStore } from "react-icons/tb";

const Welcome = () => {
  return (
    <div className="welcomeSection">
      <div className="middleArea">
        <TbBuildingStore className="middleAreaIcon" style={{}} />
        <div className="middleTextArea">
          <div className="hr"></div>
          <h1 className="middleAreaText"> Welcome </h1>
          <div className="hr"></div>
        </div>
      </div>
      <div className="textAreas">
        <div className="textArea">
          <h3>2002</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="textArea">
          <h3>2010</h3>
          <p>
            Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis
            leo volutpat. Maecenas sollicitudin est in libero pretium.
          </p>
        </div>
        <div className="textArea">
          <h3>2018</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
      </div>
      <div className="sign">
        <img
          src="	https://preview.colorlib.com/theme/pulse/img/sign.png"
          style={{ height: "10vh", width: "10%" }}
        />
      </div>
    </div>
  );
};

export default Welcome;
