import { BorderLogo, Crystal } from '../Logo/Crystal';

const SpinLogo = () => {
  return (
    <div className="my-5 grid grid-cols-1 grid-rows-1 place-items-center">
      <div className="z-10 absolute">
        <Crystal />
      </div>
      <div className="animate-title_spin">
        <BorderLogo />
      </div>
    </div>
  );
};

export default SpinLogo;
