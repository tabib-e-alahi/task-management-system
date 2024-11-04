import { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import "./WhoUses.css";
const WhoUses = () => {
  const [userCategories, setUserCategories] = useState([
    {
      id: 1,
      name: "Developers",
      icon: "https://img.icons8.com/?size=96&id=UF--CfaVggaW&format=png",
    },
    {
      id: 2,
      name: "Programmers",
      icon: "https://i.ibb.co/x5MPQTc/software-development-3309913.png",
    },
    {
      id: 3,
      name: "Engineers",
      icon: "https://i.ibb.co/QDxdZQH/architect-2407928.png",
    },
    {
      id: 4,
      name: "Engineers",
      icon: "https://i.ibb.co/QDxdZQH/architect-2407928.png",
    },
    {
      id: 5,
      name: "Engineers",
      icon: "https://i.ibb.co/QDxdZQH/architect-2407928.png",
    },
    {
      id: 6,
      name: "Engineers",
      icon: "https://i.ibb.co/QDxdZQH/architect-2407928.png",
    },
    {
      id: 7,
      name: "Engineers",
      icon: "https://i.ibb.co/QDxdZQH/architect-2407928.png",
    },
  ]);

  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffledCategories = [...userCategories].sort(
        () => Math.random() - 0.5
      );
      setUserCategories(shuffledCategories);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [userCategories]);

  const transitions = useTransition(userCategories, {
    key: (category) => category.id,
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
  });

  return (
    <section className="p-4 lg:p-10 text-center mb-8 lg:mb-12">
      <h2 className="text-4xl lg:text-5xl text-center font-bold my-8 lg:my-14">Who Uses Our Website</h2>
      <animated.div className="user-categories grid grid-cols-2 lg:grid-cols-7 gap-10 border rounded-lg bg-violet-600 pt-10 lg:py-16 px-2 lg:px-10" style={props}>
        {transitions((style, category) => (
          <animated.div
            key={category.id}
            className="user-category w-36 h-fit border-2 bg-white even:mt-16   lg:even:mt-40  lg:odd:mt-10 shadow-md  shadow-slate-400 rounded p-4"
            style={style}
          >
            <div className="flex flex-col justify-center items-center ">
            <img className="w-14 h-14 " src={category.icon} alt={category.name} />
            <p className="font-bold text-xl">{category.name}</p>
            </div>
          </animated.div>
        ))}
      </animated.div>
    </section>
  );
};

export default WhoUses;
