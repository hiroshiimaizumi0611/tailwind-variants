import { tv } from "tailwind-variants";

export default function Home() {
  const variants = tv(
    {
      base: "font-semibold py-1 px-3 rounded-full active:opacity-80",
      variants: {
        color: {
          primary: "bg-blue-500 text-white",
          secondary: "bg-gray-500 text-black",
          success: "bg-green-500 text-white",
          danger: "bg-red-500 text-white",
        },
        size: {
          sm: "test-sm px-2 py-1",
          md: "test-lg px-4 py-2",
          lg: "test-xl px-6 py-3",
          xl: "test-2xl px-8 py-4",
          xxl: "test-3xl px-10 py-5",
        },
        disabled: {
          true: "opacity-50 pointer-events-none",
        },
      },
      defaultVariants: {
        color: "primary",
        size: "md",
      },
      compoundVariants: [
        {
          color: "success",
          disabled: true,
          className: "bg-green-100 text-green-700",
        },
      ],
    },
    {
      responsiveVariants: ["sm", "md", "lg"],
    }
  );

  const className = variants({
    color: { initial: "primary", lg: "secondary", md: "success" },
    size: "lg",
    disabled: true,
  });
  return (
    <main>
      <button className={className}>Click Me</button>
    </main>
  );
}
