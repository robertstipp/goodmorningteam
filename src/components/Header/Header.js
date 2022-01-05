import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>GMT</div>
      </div>
    </>
  );
};

export default Header;
