type HeaderProps = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <section className="mb-7">
      <h2 className="text-gray-100 font-bold mb-1">{title}</h2>
      <h5 className="text-accent-green-400">{subTitle}</h5>
    </section>
  );
};

export default Header;
