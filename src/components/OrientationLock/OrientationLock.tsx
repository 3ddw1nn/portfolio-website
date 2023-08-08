import { useEffect } from "react";
interface OrientationLockProps {
  children: React.ReactNode;
}
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};
// New component to handle orientation lock
const OrientationLock: React.FC<OrientationLockProps> = ({ children }) => {
  useEffect(() => {
    if (isMobileDevice() && (window.screen as any).orientation && (window.screen as any).orientation.lock) {
      const lockOrientation = async () => {
        try {
          // Lock the screen to portrait-primary orientation
          await (window.screen as any).orientation.lock("portrait-primary");
          console.log("Screen locked to portrait-primary orientation.");
        } catch (error) {
          console.error("Failed to lock the screen orientation:", error);
        }
      };

      lockOrientation(); // Call the function to lock the orientation

      // Clean up the effect to unlock the orientation on component unmount
      return () => {
        if ((window.screen as any).orientation && (window.screen as any).orientation.unlock) {
          (window.screen as any).orientation.unlock();
        }
      };
    }
  }, []);

  return <>{children}</>;
};

export default OrientationLock;
