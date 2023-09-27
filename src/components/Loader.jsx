import { Html, useProgress } from "@react-three/drei";
import "./Loader.css"


const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="container">
        <div class="square">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="square">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="square">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;