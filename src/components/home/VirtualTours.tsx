
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Video } from "lucide-react";

const Room = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

const VirtualTours = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Virtual Property Tours"
          subtitle="Experience properties from anywhere"
          center
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Immersive 3D Experience
            </h3>
            <p className="text-gray-300 mb-6">
              Take a virtual walk through our properties from the comfort of your home.
              Experience every detail in stunning 3D visualization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Video className="text-royal-secondary" />
                <span>360° Property Views</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="text-royal-secondary" />
                <span>Interactive Room Navigation</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="text-royal-secondary" />
                <span>Real-time Lighting</span>
              </div>
            </div>
            <Button className="mt-8 bg-royal-secondary hover:bg-royal-secondary/90">
              Start Virtual Tour
            </Button>
          </div>

          <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Room />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;
