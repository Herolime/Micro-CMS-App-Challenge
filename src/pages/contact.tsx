import { AppShell } from "@/components/AppShell";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <AppShell>
      <div className="container mx-auto my-10 px-6 py-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fermentum tortor et est facilisis aliquam. Cras sagittis cursus
          sapien, porta ultricies nisi consectetur in. Morbi tristique massa a
          mi mattis, a porta erat euismod. Vivamus porttitor nibh sed efficitur
          varius. Nam sed ligula tortor. Nam nibh metus, pellentesque a felis
          vel, ultricies vehicula nisi. Donec auctor ullamcorper egestas. Donec
          iaculis id velit non ornare.
        </p>
        <div>
          <p>New York, 94126, United States</p>
          <p>+ 01 234 567 89 </p>
          <p>info@example.com</p>
        </div>
      </div>
    </AppShell>
  );
};

export default Contact;
