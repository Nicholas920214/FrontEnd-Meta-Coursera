import { useEffect, useState } from "react";

// Using render props to render the mousePosition
// Then use this HOC to pass to PanelLogger and PointLogger
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here? -> render function
  return render({mousePosition});
};

// This component should not receive any props

// render arrow function is in ()
// render = {() => ()} not render = {() => {}}
const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({mousePosition}) => (
            <div className="Row">
                <span>x: {mousePosition.x} </span>
                <span>y: {mousePosition.y}</span>
            </div>
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <MousePosition 
        render={({mousePosition}) => {
            return(
            <p>
                ({mousePosition.x}, {mousePosition.y})
            </p>);
        }}  
    />
  )
};

function Scrollet_render() {
    return(
        <div>
            <header className="Header">Little Lemon Restaurant ?</header>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    );
}

export default Scrollet_render;