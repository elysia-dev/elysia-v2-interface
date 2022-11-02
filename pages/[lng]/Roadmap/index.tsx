import dynamic from 'next/dynamic';

const RoadmapComponent = dynamic(() => import('components/Roadmap'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const Roadmap = () => {
  return <RoadmapComponent />;
};

export default Roadmap;
