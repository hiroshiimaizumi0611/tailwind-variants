import { tv } from "tailwind-variants";

const Page = () => {
  const getCardStyles = tv({
    slots: {
      base: "bg-gray-400 text-white p-5",
      heading: "text-2xl",
      subheading: "text-sm",
    },
    variants: {
      color: {
        primary: {
          base: "bg-red-400",
        },
        secondary: {
          base: "bg-blue-400",
        },
      },
      spacing: {
        md: {
          base: "p-8",
        },
        lg: {
          base: "p-12",
        },
      },
    },
    compoundSlots: [{ slots: ["heading", "subheading"], className: "mb-4" }],
    compoundVariants: [
      {
        color: "primary",
        spacing: "md",
        className: {
          subheading: "text-lg",
        },
      },
    ],
  });

  const { base, heading, subheading } = getCardStyles({
    color: "primary",
    spacing: "md",
  });
  return (
    <div>
      <div className={base({ color: "secondary" })}>
        <h1 className={heading()}>Title</h1>
        <p className={subheading()}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugiat
          repellendus iure at labore, nulla corrupti debitis. Voluptatem quas
          aliquam sint, dolorum dolorem, adipisci quis optio, eos dolores enim
          error!
        </p>
      </div>
    </div>
  );
};

export default Page;
