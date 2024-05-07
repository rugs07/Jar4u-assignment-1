import './App.css';
import { Canvas } from "@react-three/fiber";
import { Splat, OrbitControls } from "@react-three/drei";

function App() {
  const url = `https://gaussian-splatting-production.s3.ap-south-1.amazonaws.com/jewel26_lr/jewel26_lr.splat`;
  
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [3, 0.5, 3.5] }}
      >
        <Splat  src={url} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;