import Image from "next/image";

const OurChoices = () => {
  const choices = [
    {
      name: "Snacks",
      image: "/images/snacks.png",
    },
    {
      name: "Sweets",
      image: "/images/sweets.png",
    },
    {
      name: "Pastries",
      image: "/images/pastries.png",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[color:var(--brown)]"
            style={{ fontFamily: "var(--font-montserrat-alternates)" }}
          >
            Our Choices
          </h2>
          <p
            className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[color:var(--brown-dark)] max-w-2xl mx-auto font-semibold"
            style={{ fontFamily: "var(--font-montserrat-alternates)" }}
          >
            Elevate your cooking like a pro! Impressive dishes for dates,
            holidays, and beyond.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {choices.map((choice) => (
            <div key={choice.name} className="text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={choice.image}
                      alt={choice.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <h3
                className="mt-2 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[color:var(--brown-dark)] -ml-8"
                style={{ fontFamily: "var(--font-montserrat-alternates)" }}
              >
                {choice.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChoices;
