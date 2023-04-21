import { AppShell } from "@/components/AppShell";
import { FC } from "react";

const About: FC = () => {
  return (
    <AppShell>
      <div className="container mx-auto my-10 px-6 py-4">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <img
              className="w-full h-auto object-cover rounded-md"
              src="https://via.placeholder.com/640x480.png?text=Placeholder+Image"
              alt="Placeholder Image"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="text-lg mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              eleifend mauris. Nullam rhoncus bibendum nisi, at consectetur
              dolor posuere id. Nunc sollicitudin massa sit amet semper mollis.
              Duis non magna in dolor vestibulum bibendum at et arcu. Vivamus
              tempor massa eu libero convallis tristique. Aliquam dapibus urna
              id lorem congue convallis.
            </p>
            <p className="text-lg mb-5">
              Pellentesque fermentum nisl sed felis sagittis, vel convallis leo
              volutpat. Sed eleifend turpis ut convallis blandit. Fusce
              ullamcorper leo nulla, id dictum neque congue quis. Suspendisse
              euismod augue eu ex varius aliquam. Fusce suscipit justo nec augue
              dictum hendrerit. Nam elementum enim ipsum, at faucibus mi
              malesuada sit amet...{" "}
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default About;
