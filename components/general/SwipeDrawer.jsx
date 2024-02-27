import React, { useState } from "react";
import { Drawer } from "vaul";
import Typography from "@/components/general/Typography";

export default function SwipeDrawer({
  children,
  title = <>SwipeDraw</>,
  footer = null,
}) {
  const partialOpen = 0.15;
  const fullOpen = 1;
  const [snap, setSnap] = useState(null);
  const snapPoints = [partialOpen, fullOpen];

  const handleSnap = () => {
    //Obtiene el snap actual y lo cambia al siguiente
    const nextSnap = snap === partialOpen ? fullOpen : partialOpen;
    setSnap(nextSnap);
  };
  return (
    <div>
      <Drawer.Root
        modal={false}
        scrollLockTimeout="0ms"
        open={true}
        dismissible={false}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col  h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <section onClick={handleSnap}>
              <div className="pt-5 px-6">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                <Typography variant={"subtitle"}>{title}</Typography>
              </div>
            </section>
            <section
              className={`overflow-y-auto px-2 ${footer ? "pb-16" : "pb-6"}`}
            >
              {children}
            </section>
            {footer && (
              <footer className="w-full absolute bottom-0 bg-gray-800 dark:bg-white text-white dark:text-gray-900 py-5 px-6">
                {footer}
              </footer>
            )}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
