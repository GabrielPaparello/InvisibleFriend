import Players from "./Players";
const PlayerLogicRender = ({modal, cantidad}) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center top-3/4 ">
        {modal === true &&
          Array.from({ length: cantidad }).map((_, index) => (
            <Players index={index} stilo={'transform'} key={index} />
          ))}
      </div>
    </>
  );
};

export default PlayerLogicRender;